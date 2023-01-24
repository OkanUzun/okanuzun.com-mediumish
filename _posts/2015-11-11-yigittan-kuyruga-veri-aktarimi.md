---
layout: post
title: Yığıttan Kuyruğa Veri Aktarımı
author: okan
date: 2015-11-11 20:02:49.000000000 +02:00
type: post
published: true
status: publish
categories:
- C
- Veri Yapıları
tags:
- kuyruk
- queue
- stack
- stack to queue
- veri aktarımı
- yığın
- yığıt
- yığıttan kuyruğa
permalink: "/yigittan-kuyruga-veri-aktarimi/"
---
Merhaba arkadaşlar. Bu yazımda size veri yapılarının iki önemli yapısı olan yığıt ve kuyruk yapısı arasında veri aktarımının nasıl yapılacağını anlatacağım.

Hatırlatmakda fayda var. Yığıt yapısı sondan erişimlidir. Elemanlar yığıt yapısında sondan eklenir ve sondan çıkarılır. Kuyruk yapısında ise FIFO (First In First Out) mantığı uygulanmaktadır. Yani yığıttan farklı olarak ilk giren her zaman ilk çıkar. Kuyruğa eleman ekleme arkadan, eleman çıkarma ise önden yapılır. Aslında kuyruk yapısını bilet almak isteyen yolcuların oluşturduğu kuyruk olarak da düşünebilirsiniz.

Yığıttan kuyruğa veri aktarımı mantığın dışına çıkmadan şu şekilde anlatılabilir.

İlk önce kuyruğa ekleyeceğimiz yığıt elemanlarını sondan başlayarak teker teker çıkarmalıyız.  
Her çıkardığımız eleman için kuyruğa ekleme fonksiyonunu çağırırız. Tabi kuyruğa ekleme fonksiyonumuz da verileri hep kuyruğun arkasından ekleyerek çalışır.  
Bu şekilde verileri aktarabiliriz.

Kodunu paylaşacak olursak

<script src="https://gist.github.com/OkanUzun/6a217db382cce723998411496eaa11b9.js"></script>

**Not** : .c uzantısı ile derlerken hata alırsanız .cpp uzantısını deneyin.

