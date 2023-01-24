---
layout: post
title: Spring ve Spring Boot arasındaki farklar
author: okan
date: 2019-09-13 13:08:05.000000000 +03:00
type: post
published: true
status: publish
categories:
- Genel
- Spring
tags:
- java ee
- spring
- spring boot
- spring boot nedir
- spring nedir
description: Geçtiğimiz birkaç yılda eklenen özellikler nedeniyle Spring kütüphanesi giderek daha karmaşık bir hal almaya başladı. Spring Boot
permalink: "/spring-ve-spring-boot-arasindaki-farklar/"
---
Merhaba arkadaşlar, yazılarımıza kaldığımız yerden devam ediyoruz :). Bu yazımda Spring ile Spring Boot arasındaki temel farklılıklara değineceğim.

Geçtiğimiz birkaç yılda eklenen özellikler nedeniyle Spring kütüphanesi giderek daha karmaşık bir hal almaya başladı. Sıfırdan yeni bir Spring projesine başlamak için bir sürü prosedürden geçilmesi gibi durumlar olabiliyor. Sıfırdan başlamayı önlemek ve zamandan tasarruf etmek için Spring Boot diye bir teknoloji dünyamıza girdi. Spring Boot yine Spring kütüphanesini kullanan bir teknolojidir.

## Spring Kütüphanesi

Spring; bir web uygulaması geliştirmek için en yaygın olarak kullanılan Java EE (Java Enterprise Edition) kütüphanelerinden biridir. Java platformu için ayrıntılı bir programlama ve yapılandırma modeli sunar. Java EE kapsamında uygulama geliştirmeyi basitleştirmeyi amaçlar ve biz geliştiricilerin daha üretken olmasına yardımcı olur.

Diğer kütüphanelerin aksine Spring uygulamanın birkaç alanına odaklanır ve kapsamda birçok özellik sunar.

Bilindiği üzere Spring kütüphanesinin en önemli özelliği **Dependency Injection** dır.&nbsp; Dependency Injection hakkındaki yazım için [tıklayınız](https://okanuzun.com/dependency-injection-nedir/).

## Spring Boot

Spring kütüphanesi bize esneklik uygulamaya odaklanırken, Spring Boot kod uzunluğunu kısaltmayı ve bir web uygulaması geliştirmenin en kolay yolunu bize sunmayı amaçlamaktadır. Spring Boot, uygulama geliştirme için gerekli olan süreyi bir hayli kısaltır. Neredeyse hiçbir konfigürasyon yapmadan tek başına bir uygulama oluşturulmasına yardımcı olur.

Oto konfigürasyon Spring Boot için özel bir özelliktir.

## Spring kütüphanesinin yararları

- Spring kütüphanesi bir web uygulamasının tüm katmanlarına uygulanabilir.
- Gevşek bağlılık (Loose Coupling) ve kolay test edilebilirlik sağlar.
- XML ve&nbsp; Annotation konfigürasyonlarını destekler.
- Singleton ve Factory sınıflarının ortadan kaldırılması için gerekli yeteneğe sahiptir.
- Bildirimsel (Declarative) programlamayı destekler.

## Spring Boot'un yararları

- Bağımsız (stand-alone) uygulamalar oluşturur.
- Gömülü olarak Tomcat, Jetty veya Undertow birlikte gelir.
- XML konfigürasyonuna ihtiyaç duymaz.
- LOC (Lines of Code) 'u azaltmayı hedefler.
- Başlatması kolaydır.
- Özelleştirme ve yönetim basittir.

Bu nedenle Spring Boot bir kütüphane olmayıp, Spring tabanlı hazır bir proje başlatıcıdır. Otomatik yapılandırma gibi özelliklerle sizi uzun kod yazmaktan kurtarır ve gereksiz yapılandırmalardan kurtulmanızı sağlar.

Lütfen yorumlarınızı esirgemeyiniz. Bir dahaki yazımda görüşmek üzere, hoşçakalın :)

