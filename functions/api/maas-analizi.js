const MAAS_ANAHTARI = "Aylık [NET] geliriniz nedir? (Brüt maaş alıyorsanız, yıllık net gelirinizi 12'ye bölüp aylık kazancınızı seçebilirsiniz. Bir önceki adımda seçtiğiniz para birimine göre seçim yapmalısınız.)";

// Formda gösterilmesini istemediğimiz JSON anahtarlarını buraya ekliyoruz
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
        // İstemediğimiz alanları atlıyoruz
        if (HARIC_TUTULACAKLAR.includes(key)) return;

        if (!secenekler[key]) secenekler[key] = new Set();
        if (item[key]) secenekler[key].add(String(item[key]).trim());
      });
    });

    const sonuc = {};
    for (const key in secenekler) {
      // Türkçe dil desteği ve sayısal mantığa (numeric: true) göre doğru sıralama yapıyoruz
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

    let ortalamaMaas = 0;
    if (benzerProfiller.length > 0) {
      const toplamMaas = benzerProfiller.reduce((acc, curr) => {
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
        return acc + (isNaN(hesaplananMaas) ? 0 : hesaplananMaas);
      }, 0);

      ortalamaMaas = Math.round(toplamMaas / benzerProfiller.length);
    }

    return new Response(JSON.stringify({
                                         eslesenKisiSayisi: benzerProfiller.length,
                                         sektorOrtalamasi: ortalamaMaas
                                       }), { headers: { "Content-Type": "application/json" }, status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({ hata: error.message }), { status: 500 });
  }
}