---
layout: post
title: Singleton Design Pattern Nedir? Neden kullanılır?
author: okan
date: 2018-05-10 14:53:22.000000000 +03:00
type: post
published: true
status: publish
categories:
- Java
- Tasarım Desenleri
tags:
- design pattern
- java
- java singleton
- singleton
- singleton example
- singleton örnek
- tasarım deseni
- singleton pattern
- singleton design pattern
- singleton design pattern nedir
description: Bu tasarım deseninin kullanım amacı bazı durumlarda bir sınıftan birden fazla nesne oluşturulmasına gerek yoktur. Singleton design pattern
permalink: "/singleton-design-pattern/"
---
Merhaba arkadaşlar, uzun bir süre yazmaktan ve sizden uzak kaldım, aranıza tekrar döndüğüm için ve uzun bir zaman sonra tekrar yazmaya başladığım için mutluyum açıkcası. Bugün size **Singleton Design Pattern** hakkında biraz bahsetmek istiyorum.

Singleton design pattern **creational design pattern** ailesine ait olan bir tasarım desenidir. Bu tasarım deseninin kullanım amacı bazı durumlarda bir sınıftan birden fazla nesne oluşturulmasına gerek yoktur. Örneğin; uygulama katmanımızın veri tabanına bağlantısını yöneten sınıftan birden fazla nesne oluşturmaya gerek yoktur. Her çağıran için bu sınıftan ayrı ayrı nesne oluşturmak uygulama verimliliğini düşürecektir. İşte singleton deseni bize bu konuda yardımcı oluyor. Bu tasarım deseni ile ilgili sınıftan birden fazla nesne oluşturulmasının önüne geçmiş oluruz.

Bir sınıfı singleton prensibine uyarlamak için yapılandırıcısının erişim belirtecini private yapmamız yeterlidir.

Şimdi gelin bu konuyu daha iyi anlamak adına şu basit kod parçacıklarına bakalım.

```java
public class SingletonObject {

  private static SingletonObject singletonObject = null;

  private SingletonObject() {
    //
  }

  public static SingletonObject getInstance() {
    if (singletonObject == null) {
      singletonObject = new SingletonObject();
    }
    return singletonObject;
  }
}
```

```java
public class MainClass {

  public static void main(String[] args) {

    final SingletonObject instance = SingletonObject.getInstance();

    //SingletonObject instance1 = new SingletonObject(); Hatalı Kullanım
  }
}
```

Bir yazımın daha sonuna gelmiş bulunmaktayız. Lütfen yorumlarınızı esirgemeyin :) Bir sonrakinde görüşmek üzere, hoşçakalın.

