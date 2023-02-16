---
layout: post
title: Java - Throw ve Throws Kavramları
author: okan
date: 2016-06-13 15:03:59.000000000 +03:00
type: post
published: true
status: publish
image: assets/images/throw-and-throws.jpeg
categories:
- Java
tags:
- java
- throw
- throw ifadesi
- throws
- throws ifadesi
- try-catch
permalink: "/java-throw-ve-throws-kavrami/"
---
Merhaba arkadaşlar. Bu yazımda Java'da kullanılan **throw** ve **throws** kavramlarını ele alacağım.

### **Throw Kavramı**

Yazdığımız Java programında açıkca **throw&nbsp;** ifadesini kullanarak bir istisna fırlatmak mümkündür. throw ifadesinin genel formu aşağıdaki gibidir.

**throw** FırlatılabilirNesne;

Burada FirlatilabilirNesne, **Throwable** veya onun herhangi bir alt sınıfı tipinde bir nesne olmak zorundadır. Throwable olmayan String, Object, Int, Char.. gibi tipler istisna olarak kullanılamaz. **Throwable** bir nesne elde etmenin iki yolu vardır. Birinci yolu **catch** cümleciği içinde parametre olarak kullanılabilir ya da **new** operatörü ile yeni bir nesne oluşturabilirsiniz.

Programın işleyişi **throw** ifadesinden hemen sonra durur ve sonra hiçbir ifade çalıştırılamaz. Kapsayan en yakın **try** bloğunda&nbsp;istisna tipiyle eşleşen bir **catch** cümleciği aranır. Bulunmaz ise sıradaki kapsayan **try** bloğu denetlenir. Denetleme **try** bloklarının sonuna kadar devam eder. Eğer istisna tipiyle eşleşen bir **catch** bulunamazsa program durur.

Şimdi bir istisna oluşturan ve bunu fırlatan basit bir örneği inceleyelim.

![Ekran Alıntısı]({{ site.baseurl }}/assets/images/Ekran-Alıntısı-3.png)

Bu program aynı hatayı yakalamak için iki şansa sahiptir. Birincisi **main()** metodunun içinde çağırılan **olustur\_firlat** metodunun **try** bloğunda hata oluşturulur ve **catch** bloğunda yakalanır. İkincisi **main()** metodunun içindeki **catch** bloğudur. Örnek kodumuzda kullanılan&nbsp; **new** kelimesini hata nesnesi oluşturmak için kullanırız.

### **Throws Kavramı**

Eğer bir metot yakalayamadığı bir istisnaya neden olursa, metodu çağıranların kendilerini istisnaya karşı koruyabilmeleri için çağıran metodun bu davranışı belirtmesi gerekir. Bunu metodun bildirimine bir **throws** ifadesi ekleyerek yapabilirsiniz. **throws** ifadesi bir metodun fırlatabileceği istisna tiplerini belirtir. Eğer belirtilmez ise derleme zamanı hatası alınır.

throws ifadesinin genel formu aşağıdaki gibidir.

tip metot\_adi (parametreler) **throws** istisna\_listesi {

//metot gövdesi

}

Burada **istisna\_listesi** metodun fırlatabileceği istisna tiplerinin virgülle ayrılmış halidir.

Aşağıdaki örnek kodumuza bakalım.

![Ekran Alıntısı]({{ site.baseurl }}/assets/images/Ekran-Alıntısı-4.png)

Kodda gördüğünüz **IllegalAccessException** ifadesi metodumuzun fırlatabileceği hatanın tipidir. Bunu yazmazsak derleme hatası alırız. **throwOne()** metodunun içinde yeni bir hata nesnesi yaratılıp, fırlatılmıştır. Fırlatılan bu hata **main()** metodumuzun **catch** bloğunda yakalanmaktadır. Bu şekilde hata potansiyeline sahip metotlarımızın hata bildirimini yaparak bu metotları çağıran programların herhangi bir çalışma hatasıyla karşılaşmadan işleyişine devam etmesini sağlayabiliriz.

Bir daha ki yazımda görüşmek üzere..

&nbsp;

