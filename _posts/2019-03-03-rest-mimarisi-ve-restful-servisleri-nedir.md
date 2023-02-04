---
layout: post
title: REST mimarisi ve RESTful servisleri nedir
author: okan
date: 2019-03-03 13:53:22.000000000 +03:00
type: post
published: true
status: publish
image: assets/images/rest-api.png
categories:
- Genel
tags:
- HTTP metotları
- REST api nedir
- REST HTTP metotları nedir
- REST ile SOAP farkları
- REST nedir
- RESTful api nedir
- RESTful nedir
- RESTful web servis nedir
permalink: "/rest-mimarisi-ve-restful-servisleri-nedir/"
---
Merhaba arkadaşlar, bu yazımda özellikle web uygulamalarımızda oldukça sık kullandığımız **REST (Representational State Transfer)** mimarisinden bahsetmek istiyorum.

REST mimamisi **HTTP** üzerinde çalışan bir yapıya sahiptir. Diğer mimarilere göre daha basit ve hızlı olduğunu söyleyebiliriz. Sunucu ve istemci arasında verileri JSON yada XML formatında taşıyarak uygulamaların birbirleriyle haberleşebilmelerini sağlar. REST mimarisi ile uyumlu olan servislere **RESTful** servisler denmektedir.

REST mimarisi **stateless&nbsp;** olup, herhangi bir durum bilgisi saklamaz. Dolayısıyla istemci-sunucu arasında taşınan verilerde istemciye ait herhangi bir veri bulunmaz.

REST mimarisini diğer bir popüler olan **SOAP** mimarisiyle karşılaştırırsak şunları rahatlıkla söyleyebiliriz.

- SOAP servisleri **RPC (Remote Process Call)** yöntemini kullanır. Güvenlik protokollerini içinde barındırır, state bilgisini request ve response larda tutar. Fakat bu durum REST mimarisinde daha farklıdır. RESTful servislere direkt bir URL üzerinden erişilir. Arada herhangi bir güvenlik protokolü, bileşen vs... yoktur.
- SOAP olan bir servisi kullanabilmeniz için servisin WSDL bilgisine ihtiyaç duyarsınız. Proxy sınıfları ve bileşenler gerekmektedir. Kısaca bir istemci SOAP ile ilgili neredeyse tüm detayları bilmek zorundadır. Aksi halde bu servisi istemcinin kullanması mümkün değildir. REST mimarisinde ise herhangi bir servisi çağırmak için sadece URL bilgisini bilmeniz yeterlidir. Kısaca bir istemcinin REST mimarisine ait bir servisin yapısını ve detaylarını bilmesine gerek yoktur. Son derece esnek bir yapıya sahiptir.

RESTful servisleri üzerinden **CRUD** (Create, Read, Update, Delete) işlemlerinin gerçekleştirilebilmesi için **HTTP** metotları kullanılır. Popüler olan HTTP metotları şunlardır;

- **GET (okuma işlemleri için)**
- **POST (kayıt ekleme işlemleri için)**
- **PUT (güncelleme işlemleri için)**
- **DELETE (silme işlemleri için)**

REST mimarisinin basit yapısı, kolay uygulanabilmesi, hızlı çalışması gibi olumlu özellikleri olsa da önemli bir dezavantajı vardır. Bunlardan biri güvenlikle ilgilidir. SOAP REST mimarisine göre güvenlik konusunda kendi standartları gereği daha avantajlıdır. Fakat REST mimarisinde güvenlik konusu işin geri kalan kısmıdır.

Lütfen yorumlarınızı esirgemeyiniz. Bir dahaki yazımda görüşmek üzere, sevgiyle kalın..

&nbsp;

&nbsp;

