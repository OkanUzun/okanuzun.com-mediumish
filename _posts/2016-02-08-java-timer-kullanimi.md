---
layout: post
title: Java - Timer Kullanımı
author: okan
date: 2016-02-08 16:49:38.000000000 +02:00
type: post
published: true
status: publish
categories:
- Java
tags:
- java
- java timer
- timer
- timer kullanımı
permalink: "/java-timer-kullanimi/"
---
Merhaba arkadaşlar. Bu yazımda Java'nın **Timer** sınıfı üzerinde duracağım. İlk önce Timer sınıfının ne için kullanıldığını anlatalım.

Timer sınıfı; bir kod bloğunun ne zaman veya ne sıklıkta çalışacağını belirlemek için kullanılır. Timer sınıfını kullanabilmek için aşağıdaki paketi import etmemiz gerekir.

**java.util.Timer**

Timer sınıfından bir nesneyi aşağıdaki yapılandırıcılar ile yaratabiliriz.

**Timer()**  
Timer nesnesi yaratır.

**Timer(String name)**  
Timer nesnesini bizim belirleyeceğimiz özel bir adıyla yaratır.

Timer sınıfından yaratılmış bir nesne aşağıdaki metodlar ile kullanılabilir.

**void cancel()**  
Timer'ı sona erdirir.

**int purge()**  
Sona erdirilen tüm görevleri ilgili timer nesnesinin görev kuyruğundan kaldırır.

**void schedule(TimerTask task, Date time)**  
Belirtilen görevin hangi zamanda çalışacağını belirler.

**void schedule(TimerTask task, Date firstTime, long period)**  
Belirtilen görevi hangi zamanda başlatacağını ve ne sıklıkla çalışacağını belirler.

**void schedule(TimerTask task, long delay)**  
Belirtilen görevi ne kadarlık bir gecikmeyle başlayacağını zamanlar.

**void schedule(TimerTask task, long delay, long period)**  
Belirtilen görevi ne kadarlık bir gecikmeyle başlayacağını ve ne sıklıkla çalışacağını belirler.

**void scheduleAtFixedRate(TimerTask task, Date firstTime, long period)**  
Belirtilen görevi hangi zamanda başlatacağını ve hangi sabit oranlı periyodlar ile çalışacağını belirler.

**void scheduleAtFixedRate(TimerTask task, long delay, long period)**  
Belirtilen görevi ne kadarlık bir gecikme ile başlayacağını ve hangi sabit oranlı periyodlar ile çalışacağını zamanlar.

Örnek olarak 5 den geriye sayan bir program yapalım. 0 olduğunda da tekrar başa dönsün.
```java
import java.util.Timer;
import java.util.TimerTask;
    
public class Example {
    public static void main(String[] args) {
        Timer timer = new Timer();
        TimerTask task = new TimerTask() {
            int seconds = 5;
    
            @Override
            public void run() {
                System.out.println("Kalan Zaman:" + seconds--);
                if (seconds < 0) {
                    seconds = 5;
                }
            }
        };
        timer.schedule(task, 0, 1000); 
    }
}
```
Programın çıktısı aşağıdaki gibidir.

![timer]({{ site.baseurl }}/assets/images/timer.png)

