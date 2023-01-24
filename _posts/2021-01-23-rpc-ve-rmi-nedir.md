---
layout: post
title: RPC ve RMI nedir?
author: okan
date: 2021-01-23 14:43:00.000000000 +03:00
type: post
published: true
status: publish
image: assets/images/rpc-vs-rmi.jpeg
categories:
- Genel
- Java 
tags:
- rpc
- rmi
- rpc nedir
- rmi nedir
- java rmi nedir
permalink: "/rpc-ve-rmi-nedir/"
description: RPC yani Remote Procedure Call Uzaktan Yordam Çağrısı anlamına gelmektedir. RMI, Java yordamlarının lokalde veya uzaktaki başka bir Java ortamında çağırılmasına olanak tanır.    
---
Merhaba arkadaşlar, bu yazımda RPC ve RMI kavramlarından ve sürekli bu kavramların karıştırılması adına birbirleri arasındaki farklardan bahsedeceğim.

**RPC**

RPC yani Remote Procedure Call Uzaktan Yordam Çağrısı anlamına gelmektedir. İsminden de tahmin edilebileceği gibi uzaktaki bir sunucuda bir yordamın çağırılması demektir. 

**RMI**

RMI yani Remote Method Invocation bir yukarıda bahsettiğimiz RPC mekanızmasının Java ekosistemi için uyarlanmış bir implementasyonudur. RMI, Java yordamlarının lokalde veya uzaktaki başka bir Java ortamında çağırılmasına olanak tanır.

**RPC ve RMI arasındaki farklar**

- RMI RPC mekanızmasının bir Java implementasyonudur.
- RMI Java Sanal Makinesi üzerinde çalıştığından dolayı daha yavaştır.
- RPC yordamsaldır, RMI nesneye yöneliktir.
- RPC'yi programlamak daha zordur.

RPC ve RMI kavramlarından siz okurlarımı çok detaya boğmadan kısaca bahsetmeye çalıştım. Bir dahaki yazımda görüşmek üzere, hoşçakalın :)