---
layout: post
title: Type-safety nedir? Artıları ve eksileriyle..
author: okan
date: 2021-10-29 16:00:00.000000000 +03:00
type: post
featured: true
status: publish
image: assets/images/think-safety-first.png
categories:
- Genel 
- Java
tags:
- type safe
- type safety
- type safe nedir
- type safety nedir
- java type safe nedir
- java type safety nedir
permalink: "/type-safety-artilari-ve-eksileriyle/"
---
Merhaba arkadaşlar, bu yazımda yazılım dünyasında oldukça sık duyduğumuz type-safety kavramından bahsedeceğim. Artıları ve eksileriyle birlikte değerlendirmeye çalışacağım.

### Type-safety nedir

Type-safety kısaca; derleyicimizin derleme zamanında belirttiğimiz değişken tiplerini kontrol etmesi ve bir değişkene yanlış tipte bir atama yapıldığında hata vermesi anlamına gelir.

Type-safety özelliğinin mevcudiyeti dilden dile değişebilen bir durumdur. Java, C# gibi çoğu object-oriented dilde mevcut iken, Javascript, PHP gibi dillerde mevcut değildir.

Şimdi Java dili üzerinden type-safety kavramını basit örneklerle açıklayalım.

```java
Employee employee = new Employer();
```
Yukarıda kod bloğunda gördüğümüz üzere **Employee** tipinde olan değişkene **Employer** tipinde değişken atadık. Yanlış tip ataması yaptığımız için kodumuzu derlemeye çalıştığımız zaman hata alacağız.

Not: Employee ve Employer sınıflarını birbirleriyle ilişkisi olmayan bağımsız sınıflarmış gibi düşünelim.

Yine başka bir örnek ile devam edelim;
```java
String var1 = "string";
var1 = 5;
```
Burada da String tipinde olan var1 değişkenine sayısal bir değer atamaya çalıştık ve yine derleme zamanında hata alacağız.

### Artıları ve eksileriyle **type-safety**
* Type-safety dillerde yanlış tip atamalarından kaynaklı hatalar derleme zamanında yakalanırlarken type-safety olmayan dillerde çalışma zamanında yakalanırlar. 
* Type-safety olmayan diller derleme zamanında tip kontrolü yapmadıkları için daha esnek bir programlama sağlarlar.
* Type-safety dillerde yanlış tip atamalarından kaynaklı hatalar derleme zamanında yakalandıkları için ilgili hatalar daha önce farkedilmiş olur.

Sonuç olarak; type-safety özelliği iyidir veya kötüdür diyemeyiz. Artılarını ve eksilerini birlikte değerlendirip, projemizin ihtiyaçlarını da göz önünde bulundurak bir sonuca varabiliriz.

Umarım type-safety kavramını siz değerli okurlarıma basit ve anlaşılır bir şekilde anlatabilmişimdir. Bir sonraki yazımda görüşmek üzere, hoşça kalın :simple_smile:

    