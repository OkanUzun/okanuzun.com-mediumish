---
layout: post
title: Java This Anahtar Kelimesi
author: okan
date: 2016-06-03 23:37:56.000000000 +03:00
type: post
published: true
status: publish
categories:
- Java
tags:
- java this
- java this anahtar kelimesi
- java this ifadesi
- java this keyword
- java this kullanımı
permalink: "/java-this-anahtar-kelimesi/"
---
Merhaba arkadaşlar. Bu yazımda nesneye yönelik programlama dillerinde özellikle Java'da sıkça kullandığımız **this** ifadesinden bahsedeceğim.

Basitçe söylemek gerekirse this ifadesi o anda hangi nesne üzerinde işlemler yapılıyorsa o nesnenin ifadesini döndürür.

This ifadesinin bir kaç kullanımından bahsedelim.

Bu ifade genellikle değişken ismi çakışmalarını önlemek için kullanılabilir. Bu durum aslında this ifadesinin en çok kullanıldığı durumlardan birisidir. Çakışma olayını biraz açarsak; bir yapıcı metoda(constructor) gönderdiğimiz parametrelerin&nbsp;ismi sınıf değişkenleriyle aynı ise this kullanarak bu karışıklılığı önleyebiliriz.

Aşağıdaki örneğe bakalım.

![Ekran Alıntısı]({{ site.baseurl }}/assets/images/this-ekran-alintisi.png) ![Ekran Alıntısı1]({{ site.baseurl }}/assets/images/this-ekran-alintisi1.png)

Yukarıdaki örnek kodda gördüğünüz üzere, ana sınıfımızda Ayşe Yılmaz diye bir öğrenci nesnesi oluşturduk ve bu nesneyi oluşturduğumuz ilk anda Ogrenci sınıfının yapıcı metodu çalışacaktır. Yapıcı metot isim ve soyisim adında&nbsp;iki parametre kullanmaktadır. Bir de yapıcı metodumuz dışındaki isim ve soyisim değişkenlerini görmektesiniz. Yapıcı metodun kullandığı parametrelerle bu değişkenlerin isminin aynı olduğuna aldanmayın aslında farklıdır. Yapıcı metottaki parametreler aslında bir iletim görevi görür bu parametreler ana sınıfımızdan gelen Ayşe ve Yılmaz kelimelerini yapıcı metoda iletmektedir. Ogrenci sınıfı değişkenleri olan isim ve soyisim ise bu parametrelerle gönderilen verileri tutmakla görevlidir. İşte tam burada this ifadesini kullanarak bu çakışmayı&nbsp;giderebiliriz. **this.isim** sınıf değişkeni olan isim değişkenini işaret ederken isim ifadesi&nbsp;yapıcı metoda gönderilen parametreyi temsil etmektedir.

this anahtar kelimesini kullanarak aynı sınıf içindeki diğer yapıcı metodları da çağırabilmemiz mümkün.

Aşağıdaki örneğe bakalım.

![Ekran Alıntısı3]({{ site.baseurl }}/assets/images/this-ekran-alintisi3.png) ![Ekran Alıntısı5]({{ site.baseurl }}/assets/images/this-ekran-alintisi4.png)

Yukarıdaki örnek kodlarda gördüğünüz üzere bu seferde Mustafa Işık diye bir öğrenci nesnesi yarattık. Nesneyi yarattığımız anda ilk olarak iki parametre alan yapıcı metodumuz çalışacaktır. Bu yapıcı metodun içinden de this (isim, soyisim, 181) ifadesi ile diğer yapıcı metodumuz çalışacaktır. Böylece öğrencimizin isim ve soy ismine ek olarak numarasını da yapılandırabiliriz. Kısacası this ifadesinin bu kullanımı bir yapıcı metodun içinden başka bir yapıcı metoda göndermede bulunmaktır.

this anahtar kelimesinin diğer bir kullanımı da tek başına nesnelerin referansını temsil edebilmesidir.

Aşağıdaki örneğe bakalım

![Ekran Alıntısı]({{ site.baseurl }}/assets/images/this-ekran-alintisi5.png) ![Ekran Alıntısı1]({{ site.baseurl }}/assets/images/this-ekran-alintisi6.png)

Yukarıda örnek kodlarda gördüğünüz üzere iki tane öğrenci nesnesi ve ogr\_liste adında öğrencilerin tutulacağı bir ArrayList oluşturulmuştur. Ogrenci sınıfımızda da bu nesnelerimizi listemize eklemeye yarayan ekle metodu bulunmaktadır. Bu metodumuza gönderdiğimiz parametre öğrencilerin tutulduğu listedir ve metodun gövdesinde bulunan this ifadesi de metodun hangi öğrenci nesnesi üzerinden çağrıldığını belirtir. Yani ana sınıfımızda o1.ekle() ifadesi ile Mustafa Işık'ı temsil eden öğrenci nesnesi ekle metodu ile öğrenci listesine eklenir. Ekle metodunun içindeki this ifadesi aslında bu nesneyi temsil etmektedir.

Şunu da hatırlatmakta fayda var this ifadelerini statik metotlarımız içinde kullanamayız çünkü statik metotlar sınıf metotlarıdır. Bu metotlar nesnelerle ilgilenmez.

Bir sonraki yazımda görüşmek dileğiyle. İyi çalışmalar..

&nbsp;

&nbsp;

&nbsp;

