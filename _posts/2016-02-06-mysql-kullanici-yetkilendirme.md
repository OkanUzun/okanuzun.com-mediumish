---
layout: post
title: MySQL - Kullanıcı Yetkilendirme
author: okan
date: 2016-02-06 19:13:05.000000000 +02:00
type: post
published: true
status: publish
categories:
- Veri Tabanı &amp; SQL
tags:
- authorization
- create user
- grant
- mysql
- revoke
- sql
- yetkilendirme
permalink: "/mysql-kullanici-yetkilendirme/"
---
Merhaba arkadaşlar. Bu yazımda veri tabanı sistemlerinde kullanılan kullanıcı yetkilendirme özelliğinden bahsedeceğim.

Bildiğiniz üzere her veri tabanı&nbsp;sisteminde bir ya da birden fazla kullanıcı bulunmaktadır ve her veri tabanı kullanıcısının belli yetkileri vardır. Mesela sistem admini veri tabanıyla ilgili tüm yetkilere sahipken başka bir veri tabanı kullanıcısı sadece ona verilmiş yetkileri kullanabilir.  
Bu yetkiler temelde ikiye ayrılır.

Birincisi tablo şeması üzerinde sahip olunan yetkilerdir. Bu yetkilere örnek verecek olursak; tabloya yeni bir alan ekleme olabilir, alanın veri tipini değiştirmek olabilir, tablo eklemek veya silmek olabilir. Kısacası bu yetkiler sadece tablonun şeması üzerinde kullanılabilecek yetkilerdir.  
İkincisi ise tablo verisi üzerinde sahip olunan yetkilerdir. Bu yetkilerin ne olduğundan bahsedecek olursak; tabloya yeni kayıt ekleme (insert), tablodaki kayıtları çekme(select), tablodaki kayıtları güncelleme(update) ve tablodaki kayıtları silme(delete) işlemlerinin hepsi bu yetkiler sayesinde yapılır.

Peki herhangi bir veri tabanı kullanıcısına nasıl yetki verilir, bundan bahsedelim.  
İlk önce bir kullanıcı yaratalım.  
MySQL'de kullanıcı yaratmak için **CREATE USER** komutunu kullanırız.
```sql
CREATE USER 'username'@'localhost' IDENTIFIED BY 'password'
```
Kullanıcımızı yarattıktan sonra sıra geldi yetki vermeye..  
MySQL'de herhangi bir kullanıcıya yetki vermek için **GRANT** komutunu kullanırız.
```sql
GRANT privileges ON object TO user;
```
privileges : kullanıcıya verilmek istenen ayrıcalıklardır.  
object : veri tabanının ismi veya herhangi bir veri tabanındaki tablonun ismidir.  
user : yetkilerin verileceği kullanıcıdır.

Birkaç örnek yaparsak;  
```sql
GRANT ALL ON magaza TO 'hakan'@'localhost'; 
``` 
Bu sorgunun görevi; magaza veri tabanındaki tüm yetkileri hakan adlı kullanıcıya vermektedir. Tüm yetkileri verdiğimiz için kısaca ALL komutunu kullanabiliriz.
```sql
GRANT SELECT, INSERT, ALTER ON okul TO 'zeynep'@'localhost'; 
```   
Bu sorgunun görevi ise; okul veri tabanındaki SELECT, INSERT ve ALTER yetkilerini zeynep adlı kullanıcıya vermektir.

Peki bir kullanıcının yetkilerini nasıl geri alırız bunu açıklayalım.  
MySQL'de yetki geri alma işlemi **REVOKE** komutuyla yapılmaktadır.
```sql
REVOKE privileges ON object FROM user; 
```  
Örnek olarak birkaç sorgu yazarsak;
```sql
REVOKE DELETE, UPDATE ON magaza FROM 'hakan'@'localhost'; 
```    
Bu sorgunun görevi; hakan adlı kullanıcıdan mağaza veri tabanı üzerindeki kayıt silme ve kayıt güncelleme yetkilerini geri almaktır.
```sql
REVOKE SELECT ON okul FROM '\*'@'localhost'; 
```  
Bu sorgunun görevi ise; tüm kullanıcıların okul veri tabanı üzerindeki kayıt görüntüleme yetkisini geri almaktır. '\*' işareti tüm kullanıcıları belirtmek için kullanılmıştır.

Tabi yetkilendirme işlemleri sadece bunlarla sınırlı değildir. Yetkilendirme işlemleri fonksiyonlar, prosedürler veya triggerlar üzerinde de yapılabilir.

