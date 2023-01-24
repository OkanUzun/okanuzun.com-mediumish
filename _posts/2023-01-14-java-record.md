---
layout: post
title: Java record nedir?
author: okan
date: 2023-01-14 18:45:00.000000000 +03:00
type: post
status: publish
image: assets/images/records-java14.png
categories:
- Genel
- Java
tags: [java record, java record keyword, java record nedir, java record kullanımı, java 14 record]

description: Yazının başında da bahsettiğim gibi record keyword'ü Java'nın 14. sürümü birlikte hayatımıza girmiş olan bir yenilik. Bu sürüme kadar bir sınıfımızın immutable olması için çok fazla boilerplate kod yazıyorduk.
permalink: "/java-record-nedir/"
---
Tekrardan selamlar dostlar, yazılarıma kaldığım yerden devam ediyorum :) Bu yazımda sizlere Java 14 sürümü birlikte hayatımıza giren **record** keyword'ünden bahsedeceğim.

Java 14 veya üzeri sürüm kullanan projelerde bulunduysanız record keyword'ünün kullanıldığını görmüş olabilirsiniz. Bunu görmenizle birlikte nedir bu record diye de sorular oluşmaya başlamıştır :)

Şimdi bu record zımbırtısı nedir biraz onu açıklayalım :)

Yazının başında da bahsettiğim gibi record keyword'ü Java'nın 14. sürümü birlikte hayatımıza girmiş olan bir yenilik.

Java'nın 14. sürümünden öncesine kadar bir sınıfımızın immutable olması için çok fazla boilerplate kod yazıyorduk, getter'lar, final'lar, constructor'lar, vs.

Bu durum artık Java 14 ile geride kaldı ve record özelliğini kullanarak sınıflarımızı immutable yapabiliyoruz.

Şimdi bu dediklerimizi basit bir örnek ile canlandıralım.

Location isminde bir sınıfımız olsun ve latitude, longitude diye alanları olsun, ve aynı zamanda bu sınıftan oluşturacağımız nesnelerin immutable olmasını istiyoruz, yani location sınıfımdan bir nesne oluşturduğum zaman bu nesne üzerinde herhangi bir değişiklik yapılmasını istemiyorum.

Şimdi Java 14 öncesi bir sürüm kullandığımızı varsayalım ve bu sınıfımızı oluşturulalım.

```java
public class Location {

    private final Double latitude;
    private final Double longitude;

    public Location(Double latitude, Double longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    @Override
    public int hashCode() {
        return Objects.hash(latitude, longitude);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        } else if (!(obj instanceof Location)) {
            return false;
        } else {
            Location other = (Location) obj;
            return Objects.equals(latitude, other.latitude)
              && Objects.equals(longitude, other.longitude);
        }
    }

    @Override
    public String toString() {
        return "Location [latitude=" + latitude + ", longitude=" + longitude + "]";
    }

    // standard getters
}
```

Yukarıdaki kod bloğunda gördüğünüz gibi sınıfımızı oluşturduk ama çok fazla boilerplate kod oldu değil mi :)

Şimdi bir de bunu Java 14 ve üzeri sürüm kullandığımızı varsayarak gerçekleyelim.

```java
public record Location (Double latitude, Double longitude) {}
```

Gördüğünüz gibi record keyword'ünü kullanarak tek satır kodla bunu sağlamış olduk :)

Umarım sizlere record keyword'ünü ve hangi amaçla kullanıldığını anlatabilmişimdir.

Bir sonraki yazımda görüşmek üzere, sıhhatle kalın :)

