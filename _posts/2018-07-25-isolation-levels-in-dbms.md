---
layout: post
title: Isolation Level nedir
author: okan
date: 2018-07-25 16:08:55.000000000 +03:00
type: post
published: true
status: publish
image: assets/images/isolation-levels.jpeg
categories:
- Veri Tabanı &amp; SQL
tags:
- database
- dirty read
- isolation
- isolation level
- isolation level nedir
- izolasyon seviyesi
- read committed
- serializable
permalink: "/isolation-levels-in-dbms/"
---
Merhaba arkadaşlar. Bu yazıda size kısaca çoğu kişinin merak ettiği veri tabanı sistemlerinde kullanılan izolasyon seviyelerinden bahsedeceğim.

Bildiğiniz üzere bir veri tabanında tutarlığı korumak için dört farklı özellik bulunmaktadır. Bunlar; **atomicity, consistency, isolation ve durability (**Kısaca **ACID** diye söylenebilir**)**. Biz burada isolation (izolasyon) kısmıyla ilgileneceğiz. İzolasyon bir işlem bütünlüğünün diğer kullanıcı ve sistemlere nasıl göründüğünü ifade eder. İzolasyon seviyesi veri tabanındaki bir işlemin başka işlemlerden nasıl izole edilmesi gerektiğini tanımlar. Kullanılacak olan izolasyon seviyesi aşağıdaki olaylar düşünülerek ve kullanılacak sistemin ihtiyaçlarına göre belirlenebilir.

**Dirty Read** : Adından da anlaşılacağı gibi kirli bir okumadır. Bir işlemin henüz işlenmemiş bir veriyi okuduğu durumdur. Örnek olarak elimizde T1 ve T2 diye iki işlemimiz olsun. T1 herhangi bir satırı güncelliyor fakat değişikliği onaylamadan işini bırakıyor. Bu arada T2 bu güncellenmiş veriyi okuyabiliyor. Eğer T1 bu işlemi geri alırsa T2 var olmamış veriyi okumaya devam edecektir.

**Non-Repeatable Read** : Yine elimizde T1 ve T2 diye iki işlemimiz olduğunu varsayalım. Örneğin T1 in bir veriyi okuduğunu varsayalım. Eş zamanlı olarak T2 de bu veriyi güncellemiş olsun. Şimdi T1 aynı verileri tekrar alırsa farklı bir değer okumuş olur.

Şimdi izolasyon seviyelerinden bahsedelim. Bilindiği üzere temelde **dört** adet izolasyon seviyesi bulunmaktadır.

**Read Uncommitted** : Read Uncommitted en düşük izolasyon seviyesidir. Adından da anlaşılacağı gibi bu seviyede bir işlem başka bir işlemin henüz onaylamadığı değişiklikleri okuyabilir. Bu sayede yukarıda bahsettiğimiz **Dirty Read** olayına izin verilmiş olur.

**Read Committed :&nbsp;** Bu izolasyon seviyesi okunan herhangi bir verinin okunduğunda verinin önceden işlendiğini garanti eder. Böylece **Dirty Read** e izin vermez.

**Repeatable Read&nbsp;** : En kısıtlayıcı izolasyon seviyesidir. Bu seviyede herhangi bir işlem referans aldığı tüm satırlarda okuma kilitlerini tutar. Diğer işlemler bu satırları okuyamayacağından, güncelleyemediğinden veya silemediğinden, böylece Non-Repeatable Read ı önlemiş olur.

**Serializable** :&nbsp;Bu en yüksek izolasyon seviyesidir. Seri hale getirilebilir bir yürütmenin serileştirilmesi garanti edilir.

&nbsp;

Bu izolasyonların seviyeleri için şu en iyisidir veya şu en kötüsüdür diye bir yorumda bulunamayız. Hangisinin bizim için iyi veya kötü olduğu var olan uygulamamızın ihtiyaçlarına göre değişebilir.

Lütfen yorumlarınızı esirgemeyin. Bir dahaki yazıda görüşmek üzere, hoşçakalın :)

