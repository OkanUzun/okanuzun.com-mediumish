---
layout: post
title: Yığıt Yapısı
author: okan
date: 2015-10-05 14:32:05.000000000 +03:00
type: post
published: true
status: publish
categories:
- C
- Veri Yapıları
tags:
- data structures
- push to stack
- stack
- veri yapıları
- yığın
- yığına eleman ekleme
- yığıt
permalink: "/yigit-yapisi/"
---
Merhaba arkadaşlar.. Bugün size önemli veri yapılarından biri olan yığıt yapısı hakkında bilgi vereceğim.Bazı kaynaklarda yığın diye geçebilir.

Bilgisayar alanında en kullanışlı yapılardan biri yığıt veri yapısıdır. Yığıt veri yapısı programlamada çok önemli bir yere sahiptir.

Yığın yapısı temel olarak sondan erişimlidir. Yığın yapısına veriler her zaman sondan eklenir ve sondan çıkarılır. Yığın yapısında LIFO(Last In First Out) mantığı işlemektedir. Yani son giren eleman her zaman ilk çıkar.

Üniversitede veri yapıları dersi aldıysanız mutlaka bu konuya aşinasınızdır. Yığın yapısının nerelerde bahsetmek istiyorum. Yazılım uygulamalarında Undo(Geri Al) işlemleri yığıt veri yapısı sayesinde kolayca gerçeklenebilir. En son yaptığımız işlemi geri almamız tam olarak yığıt kullanımını anlatmaktadır. Tarayıcılarda Back butonu ile önceki sayfaya dönme işlemi yığıt veri yapısı ile yapılmaktadır. Yüksek seviyeli bir dilde yazılmış matematiksel ifadelerin makine kodunda işlenmesinde yığıt veri yapısı kullanılmaktadır.

Son olarak bir yığıt yapısına eleman eklemenin C/C++ kodunu paylaşacağım.
```c++
#include <stdio.h>
#include <stdlib.h>
    
#define size 10
    
struct stack{
    int top=-1;
    int items[size];
};
    
void push(struct stack *,int);
void display(struct stack *);

int main(){
    struct stack s;
    struct stack *ps;
    ps = &s;
    int element;
    while(1){
        printf(" Enter element : ");
        scanf("%d",&element);
        if (element!=0)
            push(ps,element);
        else{
            display(ps);
            break;
        }
            
    }
    
    getchar();
    return 0;
}

void push(struct stack *ps,int x){
    if (ps->top == size-1){
        printf(" Stack Overflow!\n\n");
        display(ps);
        exit(1);
    }
    else
        ps->items[++(ps->top)]=x;
    
}

void display(struct stack *ps){
    printf("\nElements of Stack\n");
    for (int i=ps->top;i>=0;i--){
        printf("%d ",ps->items[i]);
    }
}
```

**Not** : .c uzantısı ile derlerken hata alırsanız .cpp uzantısını deneyin.

