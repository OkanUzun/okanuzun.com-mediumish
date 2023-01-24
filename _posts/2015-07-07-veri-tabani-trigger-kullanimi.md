---
layout: post
title: Trigger Kullanımı
author: okan
date: 2015-07-07 18:44:53.000000000 +03:00
type: post
published: true
status: publish
categories:
- Veri Tabanı &amp; SQL
tags:
- database
- tetikleyici
- trigger
- veri tabanı
permalink: "/veri-tabani-trigger-kullanimi/"
---
Merhaba arkadaşlar :) Bugün çoğu veri tabanı sistemlerinde&nbsp;kullanılan Triggerlar hakkında bilgi vereceğim.

Triggerların Türkçesi tetikleyici demektir. Yani akla ilk olarak bir şey sonucunda etkilenen manası gelmektedir. Aslında tam olarak da Triggerlar bunu sağlar.

Triggerları veri tabanlarımızda&nbsp;kullanmamızın ana sebebi bir yerde bir değişiklik olduğunda buna paralel olarak başka bir yerde de değişikliğin sağlanmasıdır. Mesela bir veri tabanımız var ve içinde iki tane tablo olduğunu varsayalım ve X adlı tablomuzda değişiklik yapmak istiyoruz. Bu ekleme olabilir, silme olabilir ya da güncelleme olabilir. Eğer buna bağlı olarak Y tablomuzda da değişiklik olmasını istiyorsak Triggerları kullanırız. Bu bize dinamik bir değişiklik kazandırır. Yani bir tablonun içeriğini değiştirdikten sonra başka bir tablonun içeriğini değiştirmemize gerek kalmaz bu otomatik olarak gerçekleşir.

Triggerları, programlama dillerindeki şart cümleciklerine de benzetebilirsiniz.Yani şartın sağlanması gerekir şart sağlanıyorsa eğer Trigger çalışır.

Triggerlar Insert, Delete ve Update işlemleri üzerinde çalışırlar.

Veri tabanımızda&nbsp;bir Trigger yaratmak için aşağıdaki yapıyı kullanırız.
```sql
CREATE [OR REPLACE ] TRIGGER trigger_name 
    {BEFORE | AFTER | INSTEAD OF } 
    {INSERT [OR] | UPDATE [OR] | DELETE} 
    [OF col_name] 
    ON table_name 
    [REFERENCING OLD AS o NEW AS n] 
    [FOR EACH ROW] 
    WHEN (Şart)  
    DECLARE
       --Değişken tanımlamaları
    BEGIN 
       --Kod kısmı
    EXCEPTION
       --Olası hata durumları
    END; 
```
