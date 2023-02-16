---
layout: post
title: Java instanceof kullanımı
author: okan
date: 2018-08-11 12:25:45.000000000 +03:00
type: post
published: true
status: publish
image: assets/images/java-instanceof.jpeg
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

```java
import java.io.Serializable;

public class Car implements Serializable {

  private String brand;

  private String model;

  Car(final String brand, final String model) {
    this.brand = brand;
    this.model = model;
  }

  public String getBrand() {
    return brand;
  }

  public void setBrand(final String brand) {
    this.brand = brand;
  }

  public String getModel() {
    return model;
  }

  public void setModel(final String model) {
    this.model = model;
  }
}

public class MainClass {

  public static void main(String[] args) {
    Car car = new Car();
    System.out.println(car instanceof Car);
  }
}
```
```
Output : true
```

Yukarıda kod bloğunda gördüğünüz üzere Car sınıfından bir nesne yarattık ve bu nesnenin Car sınıfına ait olup, olmadığını ekrana yazdırdık ve sonuç olarak bize true değerini döndürdü.

Alt sınıf nesnesinin türü de aynı zamanda bağlı olduğu üst sınıfının türüyle aynıdır. Yani Car sınıfımızın bir alt sınıfı olarak Opel sınıfı olsun. Opel sınıfından bir nesne yaratıp, bu nesnenin Car sınıfına ait olup olmadığını sorgularsak sonuç olarak bize true dönecektir.

Şimdi bunla ilgili bir örnek yapalım.

```java
public class Opel extends Car {

}

public class MainClass {

  public static void main(String[] args) {
    final Opel opel = new Opel();
    System.out.println(opel instanceof Car);
  }
}
```
```
Output : true
```

Yazının başında da bahsettiğim gibi instanceof operatörünü null bir değişkene uygularsak sonuç olarak bize false döner.

```java
public class MainClass {

  public static void main(String[] args) {
    final Opel opel = null;
    System.out.println(opel instanceof Opel);
  }
}
```
```
Output : false
```

Lütfen yorumlarınızı esirgemeyin. Bir dahaki yazımda görüşmek üzere, hoşçakalın :)

