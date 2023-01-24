---
layout: post
title: Java instanceof kullanımı
author: okan
date: 2018-08-11 12:25:45.000000000 +03:00
type: post
published: true
status: publish
categories:
- Java
tags:
- instanceof
- instanceof kullanımı
- instanceof nedir
- java instanceof
- java instanceof kullanımı
- java instanceof nedir
permalink: "/java-instanceof-kullanimi/"
---
Merhaba arkadaşlar. Bu yazımda Java projelerimizde sık bir şekilde kullandığımız **instanceof** operatöründen bahsedeceğim.

Java instanceof operatörü herhangi bir nesnenin belirtilen türe ait olup, olmadığını öğrenmek için kullanılır. Bu operatör aynı zamanda tip karşılaştırmak için de kullanılır ve **Boolean** tipinde **true** yada **false** &nbsp;değerini döner. Bu operatör **null** bir değişkene uygulandığında false değerini dönmekle yükümlüdür.

Şimdi basit bir örnek yapalım.

<script src="https://gist.github.com/OkanUzun/aea5cffbf2d374b30ac7860309d4f1ad.js"></script>

```
Output : true
```

Yukarıda kod bloğunda gördüğünüz üzere Car sınıfından bir nesne yarattık ve bu nesnenin Car sınıfına ait olup, olmadığını ekrana yazdırdık ve sonuç olarak bize true değerini döndürdü.

Alt sınıf nesnesinin türü de aynı zamanda bağlı olduğu üst sınıfının türüyle aynıdır. Yani Car sınıfımızın bir alt sınıfı olarak Opel sınıfı olsun. Opel sınıfından bir nesne yaratıp, bu nesnenin Car sınıfına ait olup olmadığını sorgularsak sonuç olarak bize true dönecektir.

Şimdi bunla ilgili bir örnek yapalım.

<script src="https://gist.github.com/OkanUzun/513a4071cd9753ed8159d37b36e957ef.js"></script>

```
Output : true
```

Yazının başında da bahsettiğim gibi instanceof operatörünü null bir değişkene uygularsak sonuç olarak bize false döner.

<script src="https://gist.github.com/OkanUzun/cf4c998f0158565c88ca64daab4e70e2.js"></script>

```
Output : false
```

Lütfen yorumlarınızı esirgemeyin. Bir dahaki yazımda görüşmek üzere, hoşçakalın :)

