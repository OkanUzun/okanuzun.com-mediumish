---
layout: post
title: Builder Design Pattern Nedir? Neden Kullanılır?
author: okan
date: 2018-12-02 11:58:49.000000000 +03:00
type: post
published: true
status: publish
image: assets/images/builder-design-pattern.png
categories:
- Java
- Tasarım Desenleri
tags:
- builder design pattern
- builder design pattern java
- builder design pattern nedir
- builder java örnek
- builder nedir
- builder örnek
- design pattern
- java design pattern
description: Bazen projelerimizde nesnelerimize ait birçok özellik olabilir ve bu nesnelerimizi farklı farklı özellikler ile oluşturmak isteriz. Builder design pattern
permalink: "/builder-design-pattern/"
---
Merhaba arkadaşlar. Bu yazımda oldukça popüler ve işlevi büyük olan **Builder** tasarım deseninden bahsetmek istiyorum.

Yapı olarak farklı olsa da **Abstract Factory** desenine benzerlikleri vardır.

Bazen projelerimizde nesnelerimize ait birçok özellik olabilir ve bu nesnelerimizi farklı farklı özellikler ile oluşturmak isteriz. Dolayısıyla bazen çalıştığımız sınıflar içerisinde çok fazla parametre alan metodlar ve yapılandırıcılar kullanabiliyoruz. Bu kullanılabilirliği ve okunabilirliği oldukça zorlaştıran bir durum. Bazen aynı methodu çok fazla kez overload edip, kendimize iş yükü doğurabiliyoruz. İşte bu kısımda yardımımıza **Builder Design Pattern** yetişiyor.

Şimdi bu konuyu daha iyi anlamak adına basit kod parçacıklarını paylaşalım.

**Nesne sınıfımız**  
```java
public class Computer {

  private String brand;

  private String price;

  private String cpu;

  private String ram;

  public Computer(final String brand, final String price, final String cpu, final String ram) {
    this.brand = brand;
    this.price = price;
    this.cpu = cpu;
    this.ram = ram;
  }

  public String getBrand() {
    return brand;
  }

  public void setBrand(final String brand) {
    this.brand = brand;
  }

  public String getPrice() {
    return price;
  }

  public void setPrice(final String price) {
    this.price = price;
  }

  public String getCpu() {
    return cpu;
  }

  public void setCpu(final String cpu) {
    this.cpu = cpu;
  }

  public String getRam() {
    return ram;
  }

  public void setRam(final String ram) {
    this.ram = ram;
  }

  @Override
  public String toString() {
    return "Computer{" +
           "brand=" + brand +
           ", cpu=" + cpu +
           ", ram=" + ram +
           ", price=" + price +
           '}';
  }
}
```

**Builder sınıfımız**  
```java
public class ComputerBuilder {

  private String brand;

  private String price;

  private String cpu;

  private String ram;

  public ComputerBuilder setBrand(final String brand) {
    this.brand = brand;
    return this;
  }

  public ComputerBuilder setPrice(final String price) {
    this.price = price;
    return this;
  }

  public ComputerBuilder setCpu(final String cpu) {
    this.cpu = cpu;
    return this;
  }

  public ComputerBuilder setRam(final String ram) {
    this.ram = ram;
    return this;
  }

  public Computer buildComputer() {
    return new Computer(brand, price, cpu, ram);
  }
}
```

**Test sınıfımız**  
```java
public class MainClass {

  public static void main(String[] args) {
    final ComputerBuilder computerBuilder = new ComputerBuilder();
    final Computer computer1 = computerBuilder
        .setBrand("ASUS")
        .setCpu("2,40 GHZ")
        .setPrice("1500 $")
        .setRam("8 GB")
        .buildComputer();
    System.out.println(computer1);
    final Computer computer2 = computerBuilder
        .setBrand("APPLE")
        .setCpu("2,60 GHZ")
        .setPrice("3500 $")
        .setRam("16 GB")
        .buildComputer();
    System.out.println(computer2);
  }
}
```

İşte bir yazının daha sonuna geldik, lütfen yorumunuzu esirgemeyin :) Bir sonraki yazımda görüşmek üzere, hoşçakalın..

