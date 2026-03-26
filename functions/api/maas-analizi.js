const MAAS_ANAHTARI = "Aylık [NET] geliriniz nedir? (Brüt maaş alıyorsanız, yıllık net gelirinizi 12'ye bölüp aylık kazancınızı seçebilirsiniz. Bir önceki adımda seçtiğiniz para birimine göre seçim yapmalısınız.)";

const HARIC_TUTULACAKLAR = [
  MAAS_ANAHTARI,
  "Timestamp",
  "Hangi teknolojileri/araçları kullanıyorsunuz?"
];

async function fetchDataset(context) {
  const datasetUrl = "https://raw.githubusercontent.com/oncekiyazilimci/2026-yazilim-sektoru-maaslari/refs/heads/main/2026-yazilim-sektoru-maaslari-onceki-yazilimci.json";
  const cache = caches.default;
  const cacheKey = new Request(datasetUrl);
  let datasetResponse = await cache.match(cacheKey);

  if (!datasetResponse) {
    datasetResponse = await fetch(datasetUrl);
    if (!datasetResponse.ok) throw new Error("Veri seti çekilemedi.");

    const responseToCache = new Response(datasetResponse.clone().body, datasetResponse);
    responseToCache.headers.set("Cache-Control", "s-maxage=43200");
    context.waitUntil(cache.put(cacheKey, responseToCache));
  }
  return await datasetResponse.json();
}

export async function onRequestGet(context) {
  try {
    const maasVerileri = await fetchDataset(context);
    const secenekler = {};

    maasVerileri.forEach(item => {
      Object.keys(item).forEach(key => {
        if (HARIC_TUTULACAKLAR.includes(key)) return;
        if (!secenekler[key]) secenekler[key] = new Set();
        if (item[key]) secenekler[key].add(String(item[key]).trim());
      });
    });

    const sonuc = {};
    for (const key in secenekler) {
      sonuc[key] = Array.from(secenekler[key]).sort((a, b) =>
                                                      a.localeCompare(b, 'tr', { numeric: true })
      );
    }

    return new Response(JSON.stringify(sonuc), {
      headers: { "Content-Type": "application/json" },
      status: 200
    });
  } catch (error) {
    return new Response(JSON.stringify({ hata: error.message }), { status: 500 });
  }
}

export async function onRequestPost(context) {
  try {
    const filtreler = await context.request.json();
    const maasVerileri = await fetchDataset(context);

    const benzerProfiller = maasVerileri.filter(item => {
      let eslesiyor = true;
      for (const key in filtreler) {
        if (filtreler[key] && filtreler[key] !== "") {
          const itemDegeri = item[key] ? String(item[key]).trim().toLowerCase() : "";
          const filtreDegeri = String(filtreler[key]).trim().toLowerCase();

          if (itemDegeri !== filtreDegeri) {
            eslesiyor = false;
            break;
          }
        }
      }
      return eslesiyor;
    });

    let medyanMaas = 0;
    if (benzerProfiller.length > 0) {
      // 1. Tüm maaşları temizleyip bir diziye (array) topluyoruz
      const maasListesi = benzerProfiller.map(curr => {
        const hamMaas = curr[MAAS_ANAHTARI] || "";
        let hesaplananMaas = 0;

        if (hamMaas) {
          if (hamMaas.includes("-")) {
            const parcalar = hamMaas.split("-");
            const altSinir = Number(parcalar[0].replace(/[^0-9]/g, ''));
            const ustSinir = Number(parcalar[1].replace(/[^0-9]/g, ''));
            hesaplananMaas = (altSinir + ustSinir) / 2;
          } else {
            hesaplananMaas = Number(hamMaas.replace(/[^0-9]/g, ''));
          }
        }
        return isNaN(hesaplananMaas) ? 0 : hesaplananMaas;
      }).filter(maas => maas > 0); // Sadece 0'dan büyük geçerli maaşları al

      // 2. Maaşları küçükten büyüğe sıralıyoruz
      maasListesi.sort((a, b) => a - b);

      // 3. Medyan değerini buluyoruz
      if (maasListesi.length > 0) {
        const ortaIndex = Math.floor(maasListesi.length / 2);

        if (maasListesi.length % 2 === 0) {
          // Çift sayıdaysa tam ortadaki iki değerin ortalaması
          medyanMaas = Math.round((maasListesi[ortaIndex - 1] + maasListesi[ortaIndex]) / 2);
        } else {
          // Tek sayıdaysa tam ortadaki değer
          medyanMaas = Math.round(maasListesi[ortaIndex]);
        }
      }
    }

    // JSON anahtarını da "sektorMedyani" olarak güncelledik
    return new Response(JSON.stringify({
                                         eslesenKisiSayisi: benzerProfiller.length,
                                         sektorMedyani: medyanMaas
                                       }), { headers: { "Content-Type": "application/json" }, status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({ hata: error.message }), { status: 500 });
  }
}