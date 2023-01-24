---
layout: post
title: Java - Static Anahtar Kelimesi
author: okan
date: 2016-02-12 15:37:22.000000000 +02:00
type: post
published: true
status: publish
categories:
- Java
tags:
- java
- java static blok
- java static değişken
- java static keyword
- java static metod
permalink: "/java-static-anahtar-kelimesi/"
---
Java programlama dilindeki en önemli anahtar kelimelerinden biri de static kelimesidir. Hatta bir çok kez karşılaşmışızdır bu kelimeyle ama tam olarak anlayamamışızdır. Bu yazımda elimden geldiğince static kelimesinin Java'da ne işe yaradığını anlatacağım ve kullanımı hakkında örnekler yapacağım.

**Sınıf ve Nesne Değişkenleri**

Bir sınıf oluşturduğumuzda genellikle ilk önce değişkenlerimizi tanımlarız. Bu tanımladığımız değişkenler aslında o sınıftan oluşturduğumuz her nesne için ayrı ayrı oluşturulurlar. Mesela araba adında bir sınıfımızın olduğunu düşünelim ve bu sınıfa ait plaka, model yılı ve marka adında değişkenlerimiz olsun. Bu değişkenler araba nesnelerine özgüdür. Yani, üç tane arabamız olduğunu düşünürsek bellekte her arabamız için ayrı ayrı plaka, model yılı ve marka bilgileri tutulmaktadır. Bu yüzden bu değişkenlere nesne değişkeni de diyebiliriz. Bazen bunu aşmak isteriz ve aynı sınıfa ait nesnelerden bağımsız değişkenlerde yaratmak isteriz. Bu yaratacağımız değişkenlere de sınıf değişkeni denir. İşte static kavramı burda devreye giriyor.

Static anahtar kelimesini kullanarak tanımladığımız değişkenler sınıf değişkeni olarak adlandırılır. Mesela yukarıda anlattığım örneğe bağlı olarak araba sayısı diye bir değişken yaratabiliriz. Bu değişken bize o sınıftan kaç tane araba yaratıldığı bilgisini versin. Böyle olması için bu değişkenimizi static olarak tanımlamalıyız. Sınıf(static) değişkenleri o sınıftan oluşan herhangi bir nesneye özgü değil, sınıfa özgü değişkenlerdir ve sınıfa ait bilgileri taşırlar. İstediğimiz kadar nesne tanımlayalım farketmez sınıf değişkenleri bellekte bir kere yer kaplarlar. Nesne değişkenleri ise oluşturulan nesne kadar bellekte yer kaplarlar.

Static değişken kavramını anlatan örnek olarak küçük bir program yazalım.

![static_araba]({{ site.baseurl }}/assets/images/static_araba.png)

Yukarıdaki kodda araba sınıfımızdan oluşturacağımız nesnelere ait değişkenler tanımladık. Bir tanede araba\_sayisi adında nesnelerden bağımsız sınıf değişkeni tanımladık. Bu değişkenimizin değeri Araba sınıfından her nesne yarattığımızda artacak.

Şimdi bir de main sınıfımıza bakalım.

![main_static]({{ site.baseurl }}/assets/images/main_static.png)

Çalıştırdığımızda aşağıdaki çıktıyı alırız.

![cikti]({{ site.baseurl }}/assets/images/cikti.png)

Gördüğünüz üzere başlangıçtaki araba sayımız sıfırdır çünkü hiç araba yaratmadık. İki araba nesnesi yaratıldığında da iki sonucunu ekranda görmüş olduk. Static değişkenleri çıktıdan da anlayacağınız gibi hem sınıf adı ile hem de nesne referansları ile çağırabilirsiniz. Hepsinde de aynı çıktıyı alırsınız. Ben sınıf adı ile çağırmanızı tavsiye ederim kodun anlaşılabilirliği açısından.

**Static Metodlar**

Tabi ki static kelimesinin kullanımı sadece değişkenlerle sınırlı değildir. Metodlarla da kullanılabilir. Şimdi bu metodlara bakalım.

Normalde bir sınıftaki bir metodu çağırmak istiyorsak o sınıfın nesnesi üzerinden çağırırız. Nesnelerden bağımsız değişkenler yaratabildiğimiz gibi bağımsız metodlar da yaratabiliriz. Bunun için static anahtar kelimesini kullanırız. Bu metodları çağırabilmek için nesne oluşturmamız gerekmez ve direk sınıf üzerinden çağırabiliriz.

Şimdi önceki örneğe bağlı olarak şu koda bakalım.

![metod_araba]({{ site.baseurl }}/assets/images/metod_araba.png)

Gördüğünüz gibi araba\_sayisi değişkeni private static olarak tanımlanmıştır ve araba sayısı sonucunu döndüren static bir metod tanımlanmıştır. Bu sefer araba sayisi değişkenine static metodumuz üzerinden erişeceğiz.

Şimdi aşağıdaki koda bakalım.

![main_metod]({{ site.baseurl }}/assets/images/main_metod.png)

Kodun çıktısı :

![cikti_metod]({{ site.baseurl }}/assets/images/cikti_metod.png)

Araba sınıfımız içindeki metod static metod olduğu için bu sınıfın herhangi bir nesnesini oluşturmadan direk çağırmamız mümkündür. Tabi ki static değişkenlerde de olduğu gibi bu metodları nesneler üzerinden de çağırabiliriz ancak bu kodun anlaşılabilirliği açısından tavsiye edilmez.

Şunu da hatırlatmakta fayda var; static metodlar içinden static olmayan bir öğeye erişemeyiz. Bu aslında static metodların en önemli kuralıdır.

**Static Bloklar**

Static bloklar; static değişkenlere ilk değer atamasını yapmak için kullanılan kod bloklarıdır. Bunlara "static initializer" denmektedir. Bu bloklar static değişkenler belleğe yüklendikten hemen sonra çalıştırılırlar. JVM(Java Virtual Machine), o sınıfa ait bir nesne oluşturmadan önce static blokların çalışmasını garanti eder.

Şimdi şu koda bakalım.

![blok]({{ site.baseurl }}/assets/images/blok.png)

Yukarıdaki koda baktığımızda static blok içerisinde 10 adet sayıdan oluşan bir dizi oluşturulduğunu ve bu dizinin her bir elemanına 0 ile 99 arasında random değerler atandığını görüyoruz. Bu blok sayesinde dizi değişkeni yaratıldığı anda 10 adet rastgele sayı ile doldurulmaktadır. Static bloklar içerisinde static metodlarda olduğu gibi static olmayan öğelere erişmem mümkün değildir.

Başka bir yazıda görüşmek üzere..

