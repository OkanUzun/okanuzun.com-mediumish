---
layout: post
title: PL/SQL Nedir.. Neden Kullanılır..
author: okan
date: 2015-07-04 18:30:02.000000000 +03:00
type: post
published: true
status: publish
categories:
- Veri Tabanı &amp; SQL
tags:
- oracle
- pl
- pl/sql
- sql
- sql developer
- veri tabanı
permalink: "/plsql-nedir-neden-kullanilir/"
---
Merhaba arkadaşlar.. Bugün size üzerinde çalıştığım PL/SQL teknolojisini anlatmaya çalışacağım.  
Belki çoğunuz bu teknoloji hakkında yeterli bilgiye sahip değildir hatta ismini duymamış olanlar bile vardır. Daha çok bu teknolojinin nedir neden kullanılır ve nerelerde rol oynar bunun üzerinde duracağım.

**1-PL/SQL Nedir, Neden Kullanılır?**  
PL/SQL yapısal dillerin SQL'e eklenmesi sonucu oluşan Oracle'a has bir dildir. PL/SQL kullanarak her türlü SQL cümleciği yazabilirsiniz. Dinamik SQL ifadeleri oluşturup, çalıştırabilirsiniz.En önemliği özelliği de PL/SQL uygulamaları&nbsp;veri tabanı kısmında çalışırlar. Böylece sorguların istemciden sunucuya ya da tekrar sunucudan istemciye gitmesine gerek yoktur. Yani ağ trafiği de azalmış olur.

**2-PL/SQL Yapısal Özellikler**  
PL/SQL, SQL cümlelerine blok yapılarının, şart cümlelerinin, döngülerin vs. diğer özelliklerin eklenmesiyle oluşmuş bir dildir. En temel yapı birimi bloktur. Bir veya birden fazla bloktan oluşabilirler. Akış kontrolü sayesinde yapısal dillere ait olan şart cümleleri ve döngüler PL/SQL bloklarında kullanılabilir. Böylece yazılan programlar çok etkin ve hızlı hale gelmektedir. Eğer bu özellik olmasaydı SQL cümlelerini ayrı ayrı yazmak ve çalıştırmak gerekecekti.Bu da performansı azaltan etkenlerden bir tanesidir.

**3-Blok Yapısı**  
Birbirleriyle ilişkili ifadelerin mantıksal bölümlere ayrılması demektir. Değişken tanımlamaları ve hata&nbsp;kontrolleri de her blok içerisinde yapılabilir. PL/SQL blok yapısı üç bölümden oluşur.Bunlar;

- Bildirim Deyimleri
- Program Komutları (Zorunlu!)
- Aykırı Durumlar (Exception ifadeleri)

Bu üç bölümden sadece ikincisi zorunludur. Klasik bir PL/SQL blok yapısı şu şekildedir.  

    [ Declare
    --bildirim deyimleri(tanımlamalar)
    BEGIN
    --program komutları
    [EXCEPTION
    --aykırı durumlar
    END;

Şimdi de bu ifadede geçen komutları kısaca tanıyalım.

- DECLARE&nbsp;: Blok içerisinde kullanılan değişkenlerin tanımlandığı bölümdür.
- BEGIN&nbsp;: Bloğun başlangıcını belirten referans isimdir
- EXCEPTION :&nbsp;Aykırı durumların başlangıcını belirten rezerve isimdir. Hata durumlarında neler yapılacağını kontrol eder.
- END&nbsp;: Bloğun sonunu belirten referans isimdir.

**Not:** Exception kısmı nesneye yönelik programlama dillerindeki try/catch'e çok benzer. Bir hata olduğunda ne yapacağını belirtir.

Örnek bir blok yapısı yapalım.  

```sql
DECLARE
       personel_no NUMBER (3) := 400;
       personel_adi VARCHAR2 (20);
BEGIN
       SELECT first_name INTO personel_adi FROM hr.employees WHERE employee_id = personel_no;
EXCEPTION
WHEN OTHERS THEN DBMS_OUTPUT.put_line ('Böyle bir personelimiz bulunmamaktadir');
END;
```
