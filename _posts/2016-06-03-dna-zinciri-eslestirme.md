---
layout: post
title: DNA Zinciri Eşleştirme
author: okan
date: 2016-06-03 21:36:47.000000000 +03:00
type: post
published: true
status: publish
categories:
- Algoritmalar
- C
- Genel
tags:
- dna eşleştirme
- dna zinciri eşleştirme
- zincir eşleştirme
permalink: "/dna-zinciri-eslestirme/"
---
Merhaba arkadaşlar.&nbsp;Bugün Üniversitelerimizin spesifik olarak verdiği bir ödev konusuna değineceğim.

Konumuzun adı DNA zinciri eşleştirme. Çoğunuz özellikle sayısal bir geçmişi herkes zaten bunun ne anlama geldiğini biliyorsunuzdur. Bu yüzden fazla detaya girmeyeceğim.

Peki ödev bizden ne yapmamızı istiyor. Bunu açıklayalım.

Bu ödev; kullanıcının girdiği farklı DNA zincirlerinin eşleşip, eşleşmediğini kontrol edecek.&nbsp;Bu kontrolü bizim yazdığımız bir program sağlayacak.

Bildiğiniz üzere kısaca DNA zincirlerinin üzerinde nükleotitler bulunur. **Bu nükleotitler; A (Adenin), T(Timin), G (Guanin), S(Sitozin) ve U(Urasil) dir.** Biz urasille ilgilenmeyeceğiz ve toplamda dört tane nükleotidimizin olduğunu varsayacağız.

Bu nükleotitler arasında şöyle bir eşleşme kuralı vardır.

**A = T ve G = S**

Yani bir zincirde bulunan Adenin'in karşısına başka bir zincirde bulunan Timin geliyorsa bu eşleşme uyumludur Aksi takdirde eşleşme olmaz. Programımızı da bunları dikkate alarak yazmamız gerekiyor.

Programımıza input olarak DNA zincirlerini nükleotitleriyle beraber gireceğiz ve çıktı olarak hangi zincirlerin eşleştiği sonucunu alacağız.

Ben bu programı C dili ile tasarladım tabi ki başka diller ile de tasarlanabilir.

**Program kodu**

<script src="https://gist.github.com/OkanUzun/7099e9011df55be4fb2951f8d20ed995.js"></script>

