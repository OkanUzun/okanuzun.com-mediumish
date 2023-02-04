---
layout: post
title: Java Serialization Nedir? Ne İşe Yarar?
author: okan
date: 2019-03-30 14:24:00.000000000 +03:00
type: post
published: true
status: publish
image: assets/images/java-serialization.png
categories:
- Java
tags:
- java
- java serialization
- java serialization api
- java serialization example
- java serialization interface
- java serialization nedir
- java serialization örnek
description: Bir klişe olacak ama Java bilindiği üzerine nesneye yönelik bir dil. İşte tam bu durumda Java Serialization API yardımımıza koşuyor.
permalink: "/java-serialization-nedir/"
---
Merhaba arkadaşlar. Bu yazımda **Java Serialization (Serileştirme)** konusuna değineceğim.

Bir klişe olacak ama Java bilindiği üzerine nesneye yönelik bir dil. Primitive tipler (int, char, boolean ... gibi) hariç neredeyse herşey nesne ve bu nesneleri sürekli ve sürekli kullanırız. Ancak nesneleri bazen JVM dışında kullanmak gerekebiliyor. Fakat dışarıda kullandığımız bir nesnemizi tekrar içeride kullanmak istediğimizde nesne içinde kullanılan değerlerin hangi tipte olduğunu öğrenemiyoruz. Yani herhangi bir sınıftan bir nesne üretip, bunu bir dosyaya yazdırıp onu tekrar dosyadan okuduğumuzda değerlerin tip bilgisini bilememe problemimiz var. İşte tam bu durumda **Java Serialization API** yardımımıza koşuyor.

Bu durumu basit bir örnekle anlatarak durumun daha iyi pekişeceğine inanıyorum.

Araba bilgilerini tutan Car diye bir sınıfımız olsun ve bu bilgileri bir dosyaya kaydedip, tekrar okuma işlemi yapalım.

Serileştirme işlemi için **Serializable** arayüzünü implement etmek gerekiyor.

Araba sınıfımız  
<script src="https://gist.github.com/OkanUzun/aea5cffbf2d374b30ac7860309d4f1ad.js"></script>

Nesnemizi dosyaya yazdırdığımız test sınıfımız  
<script src="https://gist.github.com/OkanUzun/6eafaf21285606e56285dbac337ebed4.js"></script>

Nesnemizi dosyaya yazdığımız zaman dosyamızın çıktısı şu şekilde.

```
¨ÌsrCarÇ«5xÕçLbrandtLjava/lang/String;Lmodelq~xptSeattLeon
```

Şimdi gelin bu nesneyi dosyadan tekrar okuyalım.  
<script src="https://gist.github.com/OkanUzun/2f3dac9a7385fe345b532d6a406ccd54.js"></script>

Çıktımız :

```
Marka : Seat Model : Leon
```

&nbsp;

Görüldüğü gibi dosyaya yazdırdığımız nesneyi tekrar okuyup, başarılı bir şekilde konsolumuza yazdırabildik.

Lütfen yorumlarınızı esirgemeyiniz. Bir dahaki yazımda görüşmek üzere, hoşçakalın.

