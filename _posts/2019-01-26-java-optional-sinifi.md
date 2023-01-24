---
layout: post
title: Java 8 - Optional Sınıfı
author: okan
date: 2019-01-26 20:21:23.000000000 +03:00
type: post
published: true
status: publish
categories:
- Java
tags:
- java 8 optional
- java optional
- java optional kullanımı
- java optional nedir
- java optional sınıfı
- optional sınıfı
permalink: "/java-optional-sinifi/"
---
Merhaba arkadaşlar. Bu yazımda Java 8 ile birlikte hayatımıza giren en önemli özelliklerden biri olan **Optional** sınıfını anlatmak istiyorum.

Bu sınıf; null referanslar yerine isteğe bağlı değerleri göstermek için iyi bir çözüm sunmaktadır.

Optional sınıfı&nbsp; **java.util** paketine aittir.

```java
import java.util.Optional;
```

Şimdi basitçe bir optional nesnesi nasıl oluşturulur ona bakalım.

```java
Optional empty = Optional.empty();
```

Yukarıda gördüğünüz üzere basitçe Optional sınıfının **empty()** metodunu kullanarak boş bir Optional nesnesi oluşturmuş olduk.

Bir Optional nesnesi üzerinde herhangi bir değer olup, olmadığını nasıl kontrol ediyoruz ona bakalım.

```java
empty.isPresent()
```

Yukarıdaki blokta olduğu gibi isPresent() metodunu kullanarak herhangi bir Optional nesnesi üzerinde bir değer olup, olmadığını kontrol edebiliriz. Sonuç olarak üzerinde henüz herhangi bir değer olmadığı için bize false dönecektir.

Ayrıca Optional tipinde olmayan bir nesneyi Optional tipine çevirebilmemiz mümkün.

```java
String name = "The Coders"; 
Optional<String> var = Optional.of(name);
```

Fakat bazı durumlarda null olan nesnelere de bu işlemi uygulayabilmemiz gerekiyor. Bunun için **Optional.ofNullable()** metodunu kullanabiliriz. Aksi halde **NullPointerException** hatasıyla karşılaşabiliriz.

```java
String name = null; 
Optional<String> var = Optional.ofNullable(name);
```

Optional sınıfının en önemli özelliklerinden biri de **ifPresent** metodudur. Bu metod; Optional nesnesinin üzerinde herhangi bir değer tutulduğu zaman istenilen işlemlerin yapılmasına olanak sağlar.

```java
String name = "The Coders"; 
Optional<String> var = Optional.ofNullable(name); 
var.ifPresent(v -> System.out::println);
```

Bazen Optional nesnesi üzerinde herhangi bir değerin tutulup, tutulmadığının kontrolü yapılırken tutulmadığı durumdaki senaryoları tasarlayabilmemiz gerekiyor. Bunun için Optional sınıfının bize sunduğu çözümlere bakalım. Bunlar; **orElse()**, **orElseGet()**, **orElseThrow()**

**orElse() kullanımı**

Eğer Optional nesnesi üzerinde herhangi bir değer tanımlı değilse bu durumda istediğimiz değeri dönebiliriz.

```java
String name = null; 
Optional\<String\> optionalName = Optional.ofNullable(name); 
String result = optionalName.orElse("The Coders");
```

**orElseGet()** kullanımı

orElseGet(); orElse() metoduna benzerdir. Eğer Optional nesnesi üzerinde herhangi bir değer tanımlı değilse bu durumda istediğimiz değeri orElse() deki gibi direk dönmek yerine functional interface kullanabiliriz.

```java
String name = null; 
Optional<String> optionalName = Optional.ofNullable(name); 
String result = optionalName.orElseGet(() -> "The Coders");
```

**orElseThrow()** kullanımı

Eğer Optional nesnesi üzerinde herhangi bir değer tanımlı değilse bu durumda hata fırlatabiliriz.

```java
String name = null; 
Optional<String> optionalName = Optional.ofNullable(name); 
String result = optionalName.orElseThrow(IllegalArgumentException::new);
```

Optional nesnesi içindeki değeri almak için kullanılan diğer bir yöntem ise **get()** metodudur.

```java
Optional<String> optionalName = Optional.ofNullable("The Coders"); 
String name = optionalName.get();
```

Fakat bu yöntemin bir dezavantajı vardır. Eğer Optional nesnesi üzerinde herhangi bir değer yoksa ve direkt olarak get() metodunu kullanırsak **NoSuchElementException()** hatasını alırız.

Lütfen yorumlarınızı esirgemeyiniz. Bir dahaki yazımda görüşmek üzere, hoşçakalın.

