---
layout: post
title: Dependency Injection (DI) Nedir?
author: okan
date: 2019-01-24 22:29:21.000000000 +03:00
type: post
published: true
status: publish
categories:
- Genel
tags:
- dependency injection
- dependency injection nedir
- inversion of control
- inversion of control nedir
description: DI (Dependency Injection), IoC (Inversion of Control)'un en önemli implementasyonlarından biridir. SOLID prensiplerindeki son harfi temsil etmektedir.
permalink: "/dependency-injection-nedir/"
---
Merhaba arkadaşlar. Bu yazımda size DI (Dependency Injection) kavramından kısaca en basit haliyle bahsetmek istiyorum.

DI (Dependency Injection), IoC (Inversion of Control)'un en önemli implementasyonlarından biridir. Peki IoC (Inversion of Control) neydi, bunu bir hatırlayalım. IoC (Inversion of Control); uygulamamızda nesne oluşturma işinin geliştiriciden alınarak ilgili çatının sorumluluğuna devredilmesidir.

**SOLID** prensiplerindeki son harfi temsil etmektedir.

Uygulama katmanımızda bir A sınıfı olsun ve bu A sınıfımızın bir üyesi başka bir sınıf olan B sınıfına ait olsun. Bu ilişkiyi A sınıfımızın içinde new operatörü ile yaptığımızı düşünelim. Böylece A sınıfımız, B sınıfımızın özelliklerine ve davranışlarına daha ortada hiçbirşey yokken bağlı hale getirmiş olduk. Peki bu istenilen bir durum mu, tabiki hayır. İşte DI (Dependency Injection) kavramı burada devreye giriyor. Bu prensip sayesinde nesne atamalarını çatımızın sorumluluğuna bırakıyoruz ve bunu bizim yerimize sadece gerektiği durumlarda atamaları gerçekleştirerek dinamik hale getiriyor. Bunu başka bir cümleyle açıklamak gerekirse; uygulamamızın çalışırken o an kullanması gereken nesneler çatı tarafından enjekte edilecektir. Böylece sonraki süreçlerde herhangi bir düzenleme yada değişiklik olması durumunda sadece belirli kısımların değiştirilmesi yeterli olacaktır.

Şimdi bu prensibi artılarıyla ve eksileriyle beraber değenlendirelim.

**Artıları**

- Uygulamamızı oluşturan yapılan birbirleri ile bağımlılıkları azaldığı için uygulamamızda değişiklik yapmak daha kolay hale gelmesi. (Bunu&nbsp; **loosely coupled&nbsp;** olarak da tanımlıyabiliriz.)
- &nbsp;Çok rahat bir şekilde Unit testler yazmamızı sağlayabilmesi. İstediğimiz sınıfı rahatlıkla mock edip, kolayca test edebilmemiz.

**Eksileri**

- Oluşturduğumuz sınıf sayısının fazla olması
- Gereksiz interface lerin fazlalığı

Lütfen yorumlarınızı esirgemeyiniz :) Bir sonraki yazımda görüşmek üzere, hoşçakalın.

