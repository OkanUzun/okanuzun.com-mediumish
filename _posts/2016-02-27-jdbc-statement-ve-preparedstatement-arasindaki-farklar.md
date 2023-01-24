---
layout: post
title: JDBC - Statement ve PreparedStatement arasındaki farklar
author: okan
date: 2016-02-27 22:25:13.000000000 +02:00
type: post
published: true
status: publish
categories:
- Java
- Veri Tabanı &amp; SQL
tags:
- jdbc
- preparedstatement
- statement
permalink: "/jdbc-statement-ve-preparedstatement-arasindaki-farklar/"
---
Merhaba arkadaşlar. Bu yazımda önceden benim de çok merak ettiğim bir konu olan Statement ve PreparedStatement arasındaki farkları ve birbirlerine göre avantajlarını, dezavantajlarını anlatacağım.

Statement ve PreparedStatement ifadelerini mutlaka bir yerlerde kullanmışızdır. Özellikle herhangi bir SQL sorgusu çalıştırmak istediğimizde bu ikisinden herhangi birini kullanırız. Görünüşte hiçbir farkı olmayabilir ama arka tarafta işler farklı işliyor :)

Peki hangisini ne zaman hangi durumlarda kullanmak daha faydalıdır buna bakacağız.

Yazdığımız herhangi bir SQL sorgusunu Statement durumunda çalıştırdığımızı varsayalım. Bu sorgu her çalıştırıldığında veri tabanının belleğinde bu sorgunun bir örneği saklanır. Bu sorgunun binlerce kere çalıştırıldığını düşünürsek bu durum zararlı olabilir. Veri tabanı performansı düşebilir veya bağlantı kopmaları yaşanabilir. Bu durumda PreparedStatement kullanmak faydalı olabilir. Herhangi bir SQL sorgusunu PreparedStatement durumunda çalıştırdığımızı düşünelim. Böylece veri tabanında bu sorgusunun sadece bir kere örneği saklanır ve bin kere de çalıştırsak bu sorgunun veri tabanının belleğinde sadece bir örneği tutulur. Böylece&nbsp;PreparedStatement daha performanslı olabilir.

Tabi PreparedStatement her zaman kullanılacak diye bir şart yok. Örneğin bir uygulamamız olduğunu düşünelim ve sürekli farklı sorguların gönderildiğini düşünelim. Bu durumda Statement kullanmak daha mantıklı olabilir ama sürekli aynı sorgular üzerinde çalışıyorsak tabi ki PreparedStatement kullanmak daha akıllıca olacaktır.

Umarım sizi bu konu hakkında biraz olsun fikir sahibi yapabilmişimdir. Bir daha ki yazımda görüşmek üzere..

