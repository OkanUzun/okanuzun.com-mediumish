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
```

Nesnemizi dosyaya yazdırdığımız test sınıfımız  
```java
import java.io.FileOutputStream;
import java.io.ObjectOutputStream;

public class Main {

  public static void main(String[] args) {
    write();
  }

  private static void write() {
    try {
      Car car = new Car("Seat", "Leon");
      FileOutputStream file = new FileOutputStream("/Users/okan/Documents/car.txt");
      ObjectOutputStream write = new ObjectOutputStream(file);
      write.writeObject(car);
      write.close();
    } catch (Exception e) {
      System.out.println(e.getMessage());
    }
  }
}
```
Nesnemizi dosyaya yazdığımız zaman dosyamızın çıktısı şu şekilde.
```
¨ÌsrCarÇ«5xÕçLbrandtLjava/lang/String;Lmodelq~xptSeattLeon
```

Şimdi gelin bu nesneyi dosyadan tekrar okuyalım.  
```java
import java.io.FileInputStream;
import java.io.ObjectInputStream;

public class Main {

  public static void main(String[] args) {
    read();
  }

  private static void read() {
    try {
      FileInputStream file = new FileInputStream("/Users/okan/Documents/car.txt");
      ObjectInputStream read = new ObjectInputStream(file);
      Car car = (Car) read.readObject();
      System.out.println(car.toString());
      read.close();
    } catch (Exception e) {
      System.out.println(e.getMessage());
    }
  }
}
```
Çıktımız:
```
Marka : Seat Model : Leon
```

&nbsp;

Görüldüğü gibi dosyaya yazdırdığımız nesneyi tekrar okuyup, başarılı bir şekilde konsolumuza yazdırabildik.

Lütfen yorumlarınızı esirgemeyiniz. Bir dahaki yazımda görüşmek üzere, hoşçakalın.

