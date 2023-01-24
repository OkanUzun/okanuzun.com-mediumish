---
layout: post
title: Hibernate ve Spring Data JPA arasındaki farklar
author: okan
date: 2019-09-12 16:42:57.000000000 +03:00
type: post
published: true
status: publish
image: assets/images/ORM.png
categories:
- Java
- Spring
- Veri Tabanı &amp; SQL
tags:
- hibernate
- hibernate jpa
- java persistence api
- jpa
- orm
- spring data
- spring data jpa
description: Hibernate, Java ortamları için bir ORM (Object Relational Mapping) çözümüdür. Spring Data sanıldığı aksine Hibernate gibi bir JPA uygulaması değildir.
permalink: "/hibernate-ve-spring-data-jpa-arasindaki-farklar/"
---
Merhaba arkadaşlar, bu yazımda Hibernate ve Spring Data JPA arasındaki temel farklılıklara değineceğim.

Konuya geçmeden önce&nbsp; Hibernate, JPA ve Spring Data JPA kavramlarından bahsetmenin faydalı olacağını düşünüyorum.

## JPA (Java Persistence API) nedir?

Java Persistence API herhangi bir java nesnesinin veri tabanındaki ilişkisel bir tabloya eklenebilmesini, o tablodan okunabilmesi gibi çeşitli özellikler sağlar.

## Hibernate nedir?

Hibernate, Java ortamları için bir ORM (Object Relational Mapping) çözümüdür. ORM; model sınıflarımızın ilişkisel veri tabanındaki tablolarımızla eşleşebilmesini sağlayan bir programlama tekniğidir. Bir nevi uygulama ile ilişkisel bir veri tabanı arasında bir köprü olarak düşünülebilir. Hibernate, Java tabanlı bir ORM teknolojisidir.

![Object Relational Mapping]({{ site.baseurl }}/assets/images/ORM.png)

Buraya kadar yazılanlardan yola çıkarak JPA (Java Persistence Api) 'ın bir standart, Hibernate'in ise bir JPA uygulaması olduğunu aklımızdan çıkarmayalım.

## Spring Data JPA nedir?

Spring Data; Spring kütüphanesinin bir parçasıdır.

Spring Data sanıldığı aksine Hibernate gibi bir JPA uygulaması değildir. Sadece JPA uygulamamızın en üst katmanına ekstra soyut bir katman ekleyen bir kütüphanedir.

Spring Data JPA **GenericDao** özel uygulamalarına bir çözüm sunar. Metot adı kuralları aracılığıyla sizin adınıza JPA sorguları oluşturabilir.

&nbsp;

Buraya kadar olan kısmı toparlamak gerekirse Hibernate ile Spring Data JPA arasındaki temel farklılıklar şunlardır;

Hibernate bir JPA uygulaması iken Spring Data JPA bir veri erişimi soyutlamasıdır.

Spring Data ile Hibernate, Eclipse Link gibi herhangi bir JPA uygulamasını beraber kullanabilirsiniz. Dolayısıyla Hibernate ile Spring Data JPA bir rakip değillerdir ve aynı kapsamda değerlendirilemezler aksine birbirlerini tamamlayıcı özellikler taşırlar.

Lütfen yorumlarınızı esirgemeyiniz, bir dahaki yazımda görüşmek üzere, hoşçakalın :)

&nbsp;

&nbsp;

