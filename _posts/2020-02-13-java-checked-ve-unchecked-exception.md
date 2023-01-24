---
layout: post
title: Java - Checked ve Unchecked Exception
author: okan
date: 2020-02-13 21:41:44.000000000 +03:00
type: post
featured: true
published: true
status: publish
image: assets/images/java-exception-hierarchy.png
categories:
- Java
tags:
- checked exception
- java
- java checked exception
- java checked exception nedir
- java exception
- java unchecked exception
- java unchecked exception nedir
- unchecked exception
description: İsminden de anlaşılacağı gibi derleyici tarafından kontrol edilemeyen exceptionlardır. Unchecked Exceptionlar RuntimeException‘ın alt sınıflarıdır.
permalink: "/java-checked-ve-unchecked-exception/"
---
Merhaba arkadaşlar. Yazılarımıza kaldığımız yerden devam ediyoruz :). Bu yazımda da Java'daki **Checked Exception** ve **Unchecked Exception** kavramlarından bahsedeceğim.

Konuya girmeden önce Java'daki exception hiyeraşisini bir hatırlayalım.

![]({{ site.baseurl }}/assets/images/java-exception-hierarchy.png)

Hiyeraşiye şöyle bir göz attıktan sonra artık konumuza geçebiliriz.

### Unchecked Exception

İsminden de anlaşılacağı gibi derleyici tarafından kontrol edilemeyen exceptionlardır. Derleyici tarafından kontrol edilemedikleri için kodumuz başarıyla derlenmiş olsa bile çalışma zamanında bu hatalarla karşılaşabiliriz.

Unchecked Exceptionlar **RuntimeException**'ın alt sınıflarıdır. Bunlardan en yaygınları **ArithmeticException** , **NullPointerException** , **ClassCastException**... gibi exceptionlardır.

Aşağıdaki kod bloğuna bakalım;

```java
public static void main(final String[] args) { 
   try { 
       FileReader file = new FileReader("example.txt"); 
       file = null; file.read(); 
   } catch (final IOException e) { 
       e.printStackTrace(); 
   } 
}
```

Yukarıda görüldüğü üzere file nesnemiz null ve program akışı file.read()&nbsp; komutuna geleceği zaman **NullPointerException** fırlatacağını rahatlıkla söyleyebiliriz. Fakat NullPointerException bir Unchecked Exception olduğundan dolayı bizim bu durumu belirtmemize gerek yok ve derleyici kodumuzu başarıyla derlememize izin verir dolayısıyla biz bu hata ile ancak çalışma zamanında karşılaşırız.

### Checked Exception

İsminden de anlaşılacağı üzere derleyici tarafından kontrol edilen exceptionlardır. Derleyici tarafından kontrol edildikleri için biz bu exceptionları kodumuzda belirtmek zorundayız. Aksi halde derleme işlemini başarıyla tamamlamak mümkün değildir.

Checked Exceptionlar **Exception** sınıfının alt sınıflarıdır ( **RuntimeException** hariç). En yaygınları **ClassNotFoundException, IOException, SQLException**... gibi exceptionlardır.

Şimdi aşağıdaki kod bloklarına göz atalım;

```java
public static void main(final String[] args) { 
    final FileReader file = new FileReader("example.txt"); 
}
```

Yukarıdaki gibi yazdığımız zaman derleyici tarafından hata alırız ve kodumuz başarıyla derlenmez çünkü belirtmemiz gereken ilgili Checked Exception'ını belirtmedik.

```java
public static void main(final String[] args) { 
    try { 
        final FileReader file = new FileReader("example.txt"); 
    } catch (final FileNotFoundException e) { 
        e.printStackTrace(); 
    } 
}
```

Yukarıdaki gibi yazdığımız zaman kodumuz artık başarıyla derlenecektir çünkü bir Checked Exception olan **FileNotFoundException**'ını kodumuzda belirtmiş olduk.

&nbsp;

Unchecked Exception ve Checked Exceptionlarıyla ilgili anlatacaklarım bu kadar umarım kafanızda herhangi bir soru işareti kalmamıştır. Lütfen yorumlarınızı esirgemeyiniz, bir dahaki yazımda görüşmek üzere :)

&nbsp;

&nbsp;

&nbsp;

