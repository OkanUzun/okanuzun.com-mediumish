---
layout: post
title: Spring @Transactional Anotasyonu
author: okan
date: 2022-03-26 17:15:00.000000000 +03:00
type: post
status: publish
image: assets/images/transaction.jpeg
categories:
- Genel
- Java
- Spring
tags:
- spring transactional anotasyonu
- transactional anotasyonu
- transactional
- transaction
- java transaction
- java transactional
- spring transaction
- spring transactional
description: Çoğu zaman uygulamalarımızın arkasında bir veri tabanı yatar ve uygulamamız veri tabanı üzerinde okuma, yazma gibi belirli işlemleri gerçekleştirir. Transaction ifadesini aslında bu işlemlere benzetebiliriz, kısaca bir veya birden fazla sorgunun aynı süreçte işlem görmesidir.
permalink: "/spring-transactional-anotasyonu/"
---
Tekrardan merhaba güzel insanlar, kaldığımız yerden devam ediyoruz :) Bu yazımda sizleri fazla detaya boğmadan Spring kütüphanesinin önemli bir özelliği olan **Transactional** anotasyonundan bahsetmek istiyorum.

Spring kütüphanesini kullanan projelere denk geldiyseniz muhakkak **@Transactional** diye bir anotasyonun kullanıldığını görmüşsünüzdür.

İyi güzel de nedir bu @Transactional anotasyonu neden kullanırız biraz bundan bahsedelim.

![transaction]({{ site.baseurl }}/assets/images/transaction.jpeg)

Aslında @Transactional anotasyonuna giriş yapmadan önce yazılım dünyasının önemli jargonlarından biri olan **Transaction** ifadesinin ne anlama geldiğinden biraz bahsetmek gerekir diye düşünüyorum.

Çoğu zaman uygulamalarımızın arkasında bir veri tabanı yatar ve uygulamamız veri tabanı üzerinde okuma, yazma gibi belirli işlemleri gerçekleştirir.

Transaction ifadesini aslında bu işlemlere benzetebiliriz, kısaca bir veya birden fazla sorgunun aynı süreçte işlem görmesidir.

Peki her zaman böyle midir? Her zaman olmasa da çoğunlukla evet, özellikle kurumsal ve birden fazla kullanıcıya hitap eden uygulamalarımız için böyle olmasını isteriz.

Şimdi tekrardan @Transactional anotasyonuna geçebiliriz :)

Spring'in önemli bir özelliği olan bu anotasyonu yukarıda Transaction olarak ele aldığımız okuma, yazma gibi işlemlerin daha sağlıklı yönetilebilmeleri adına kullanırız.

Peki bu mekanizma tam olarak ne işe yarıyor? İyi anlaşılması adına şu şekilde örnekleyebiliriz.

A diye bir metodumuz olsun, ve içinde sırasıyla X objesi için insert, Y objesi için update ve Z objesi için de delete işlemlerimiz olsun.

```java
@Transactional
public void A() {
  //
  repository.insert(X);
  //
  repository.update(Y);
  //
  repository.delete(Z); 
  //
}
```

X objemiz için insert ve Y objemiz için update işlemlerimizin başarıyla gerçekleştiğini varsayalım, fakat sonrasında bir şeyler ters gitti ve metodumuz sona ermeden bir exception fırladı, peki şimdi ne olacak?

İşte tam bu arada Spring'in Transactional mekanizması devreye giriyor ve hata alınan kısma kadarki insert ve update işlemlerini geri alıyor. Böylece belirli veri tabanı işlemlerinden sonra hata alsak bile bu işlemleri veri tabanına yansıtmayıp, yaşanabilecek herhangi bir veri tutarsızlığının önüne geçmiş oluyoruz.

Tam aksine hata almayıp, metodun işini başarıyla bitirmesi durumunda Transactional mekanizması tüm işlemleri veri tabanına commit eder.

Transactional mekanızması default olarak herhangi bir **RuntimeException** fırladığı zaman rollback işlemini uygulayacak şekilde tasarlanmıştır, tabii ki bu davranışı değiştirmek mümkün. Mesela sadece şu exception/lar için rollback işlemini gerçekleştir tarzı bir şey diyebilmemiz gayet mümkün ve basit.

Umarım siz değerli okuyucularıma @Transactional anotasyonunun ne işe yaradığını bir nebze olsun anlatabilmişimdir :)

Bir sonraki yazımda görüşmek üzere, hoşça ve sağlıcakla kalın :)

