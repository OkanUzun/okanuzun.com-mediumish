---
layout: post
title: Linux Çekirdeği Kernel'in Güncellenmesi
author: okan
date: 2015-10-12 19:10:45.000000000 +03:00
type: post
published: true
status: publish
categories:
- Linux
tags:
- kernel
- kernel güncellemesi
- kernel update
- linux
- linux kernel
permalink: "/linux-cekirdegi-kernelin-guncellenmesi/"
---
Merhaba arkadaşlar..

Bugün size aynı zamanda Sistem Programlama ödevim olan Linux Çekirdeği Kernel'i nasıl güncelleyeceğimizi anlatacağım.

İlk olarak hiçbir şey yapmadan önce Kernel'in versiyonunu öğreniyoruz. Kernel'in versiyonunu öğrenmek için Linux komut satırı Terminal'e **uname –r** komutunu yazıyoruz.

Bakalım..

![1-guncellemeden once versiyon]({{ site.baseurl }}/assets/images/1-guncellemeden-once-versiyon.png)

Yukarıdaki ekran çıktısında görüldüğü üzere Kernel versiyonunun **3.13.0-37-generic** olduğunu görüyoruz. Tabi bu sizde farklı olabilir.

Kernel versiyonumu öğrendikten sonra [https://www.kernel.org/](https://www.kernel.org/) adresine gidip Kernel'in en son stabil versiyonunu indiriyoruz. Ben 4.2.3 olanı indirdim. Dosyamız tar.xz olarak indirildi. Bunu arşivden çıkartmamız gerekiyor. Sabit diskimde Linux'e ayrılan yeteri kadar yer olmadığı için işlemlerimi harici diskim üzerinden yapacağım.

Harici disk üzerinden yaptığım için daha önceki denemelerimde bazı hatalarla karşılaşmıştım. Dosya izinlerinde sorunlar çıkabiliyor ve komutlar gerçekleştirilemiyordu. Daha sonra hatanın, harici diskimin nfts dosya sistemine sahip olduğundan kaynaklandığını farkettim. Çözüm olarak harici diskimde 20 GB'lik bir ex4 sürücüsü oluşturdum. Tabi geri kalanı ntfs. Bizim ntfs&nbsp;ile bir işimiz yok.

Sıra geldi arşivdeki dosyaları çıkartmaya..

Dosyaları çıkartmadan önce yapacağımız işlemlerde bir sorun çıkmaması için sistemden root yetkilerini alıyoruz. Root yetkilerini almak için **sudo –s** komutunu terminale girmemiz gerekiyor.

![2-root yetkisi alma]({{ site.baseurl }}/assets/images/2-root-yetkisi-alma.png)

Artık sistem yetkilerini almış bulunmaktayız.

İlk önce indirilen dosyayı harici diskimde oluşturduğum sürücüye kopyalıyorum.

![3-arsivi hariciye kopyalama]({{ site.baseurl }}/assets/images/3-arsivi-hariciye-kopyalama.png)

Arşivin bulunduğu dizine giriyoruz.

![4-arsivin bulundugu dizine girme]({{ site.baseurl }}/assets/images/4-arsivin-bulundugu-dizine-girme.png)

Şimdi dosyaları çıkarıyoruz. Ben harici diskimde oluşturduğum ex4 bölümüne çıkarıyorum. Siz farklı bir yere çıkartabilirsiniz. Önemli olan çıkarttığınız yerin dosya sistemi ex4 olmasıdır.

Dosyaları çıkarmak için tar **–xJvf** komutunu kullanıyoruz. -xJvf den sonra dosya adını yazıyoruz.

![5-dosyalari arsivden cikartma]({{ site.baseurl }}/assets/images/5-dosyalari-arsivden-cikartma.png)

![6-dosyalar arsivden cikartildi]({{ site.baseurl }}/assets/images/6-dosyalar-arsivden-cikartildi.png)

Yukarıdaki resimlerden görüldüğü üzere dosyalarımızı arşivden çıkarttık.  
Şimdi sıra geldi ana işlemlere başlamaya..  
Çıkarttığımız dosyanın içine giriyoruz.

![7-cikartilan dosyanin icine girme]({{ site.baseurl }}/assets/images/7-cikartilan-dosyanin-icine-girme.png)

İlk olarak **make mrproper** komutu ile eski ayarları temizliyoruz.

![8-make mrproper]({{ site.baseurl }}/assets/images/8-make-mrproper.png)

Daha sonra **make menuconfig** ile yüklenecek olan Kernel'in konfigürasyon ara yüzüne giriyoruz. İsterseniz bu adımı geçebilirsiniz. Görmeniz açısından anlatıyorum. Bu arayüzden kurulmasını istemediğiniz sürücüleri kaldırabilirsiniz.

![9-make menuconfig]({{ site.baseurl }}/assets/images/9-make-menuconfig.png)

![10-menu config]({{ site.baseurl }}/assets/images/10-menu-config.png)

Exit diyoruz.

![11-menuconfig den cikma]({{ site.baseurl }}/assets/images/11-menuconfig-den-cikma.png)

Evet&nbsp;dedikten sonra çıkıyoruz.

Daha sonra **make clean** komutu ile fazlalıkları temizliyoruz.

![12-make clean]({{ site.baseurl }}/assets/images/12-make-clean.png)

Şimdiki adımda **make bzImage** komutunu yazıp, çekirdeğimizi derlemeye başlıyoruz. Bende yaklaşık 20 dakika sürdü. Bilgisayarınızın performansına göre değişebilir.

![13-make bzImage]({{ site.baseurl }}/assets/images/13-make-bzImage.png)

Çekirdeğimiz derlenirken..

![14-çekirdek derlenirken(bzImage)]({{ site.baseurl }}/assets/images/14-çekirdek-derlenirkenbzImage.png)

Ve çekirdek derlememiz bitti.

![15-çekirdek derlemesi bitti]({{ site.baseurl }}/assets/images/15-çekirdek-derlemesi-bitti.png)

Çekirdeğimizi derledikten sonra işin en uzun kısmı olan modül derlemesine geçiyoruz. Bende yaklaşık 2.5 saat sürdü (tüm sürücülerle beraber).

Modül derlemesini başlatmak için terminale **make modules** komutunu yazıyoruz.

![16-make modules]({{ site.baseurl }}/assets/images/16-make-modules.png)

Modüller derlenirken..

![17-modul derlenirken]({{ site.baseurl }}/assets/images/17-modul-derlenirken.png)

Uzun bir süre ardından modül derlememiz bitmiş oldu.

![18-modül derlemesi bitti]({{ site.baseurl }}/assets/images/18-modül-derlemesi-bitti.png)

Modül derlenmesi bittikten sonra çekirdek modüllerimizi modül kütüphanesine taşıyoruz. Bu işlemi **make modules\_install** komutu ile yapıyoruz.

![19-make modules_install]({{ site.baseurl }}/assets/images/19-make-modules_install.png)

Taşıma işlemi gerçekleşirken..

![20-make modules_install gerceklesirken]({{ site.baseurl }}/assets/images/20-make-modules_install-gerceklesirken.png)

Taşıma işlemimiz sona erdi.

![21-make modules_install bitti]({{ site.baseurl }}/assets/images/21-make-modules_install-bitti.png)

Şimdi modüllerin ve sistemimizin düzgün çalışmasını sağlayacağız. Bunun için terminale **mkinitramfs 4.2.3 -o/boot/initrd.img-4.2.3-generic** komutunu giriyoruz. Komutun içindeki numaralı kısımlar ilk başta indirdiğimiz Kernel'in versiyonudur. Siz de indirdiğiniz versiyona göre komutu düzenleyebilirsiniz.

![22-mkinitramfs]({{ site.baseurl }}/assets/images/22-mkinitramfs.png)

Daha sonra derlediğimiz çekirdeği boot dizinine kopyalıyoruz. Terminale **cp /usr/src/linux-4.2.3/arch/x86\_64/boot/bzImage /boot/vmlinuz-4.2.3-generic** komutunu giriyoruz.

![23-boot dizinine kopyalama]({{ site.baseurl }}/assets/images/23-boot-dizinine-kopyalama.png)

Kopyalama işlemimiz tamamlandı. Şimdi System.map dosyasını boot dizinine kopyalıyoruz.

![24-system_map kopyalama]({{ site.baseurl }}/assets/images/24-system_map-kopyalama.png)

Sembolik bir bağ oluşturmamız gerekiyor bunun için terminale **ln**  **-s**  **/boot/System****. ****map-KERNEL\_VERSION**** /boot/System ****.**** map** komutunu giriyoruz.

![25-sembolik bag]({{ site.baseurl }}/assets/images/25-sembolik-bag.png)

Neredeyse tüm işlemlerimizi tamamladık. Artık grub ayarlarını yapacağız. Güncellenen Kernel'in grub ekranında çıkmasını sağlamalıyız.

Grub dosyasını açmamız gerekiyor bunun için terminale **sudo gedit /boot/grub/grub.cfg** komutunu giriyoruz.

![26-grub cfg acma]({{ site.baseurl }}/assets/images/26-grub-cfg-acma.png)

Açılan grub dosyasını düzenlemeden önce yeni bir terminal açıyoruz ve **sudo blkid** komutunu yazıyoruz.

![27-sudo blkid]({{ site.baseurl }}/assets/images/27-sudo-blkid.png)

Karşımıza aşağıdaki resimdeki gibi bir çıktı gelmektedir.

![28-UUID degeri]({{ site.baseurl }}/assets/images/28-UUID-degeri.png)

Buradan **UUID** değerimizi alacağız, peki hangisini ? Bu sorunun yanıtı; güncellenen Kernel'i hangi disk bölümünde çalıştıracağınızdır. Ben Linux Mint'in bulunduğu yerde çalıştıracağım. Bunun için şekilde seçili olan değeri bir yere kopyalıyorum. Bu değeri grub dosyamızda kullanacağız.

Grub dosyamıza dönüyoruz tekrar **### BEGIN /etc/grub.d/10\_linux ###** satırının altına aşağıdaki metni ekliyoruz.

    menuentry 'Pardus, Linux 4.2.3-generic' --class ubuntu --class gnu-linux --class gnu --class os {
        recordfail
        insmod ext2
        set root='(hd0,6)'
        search --no-floppy --fs-uuid --set 57a40b28-08a8-4fe5-ba57-7fb4fc063d83
        linux    /boot/vmlinuz-4.2.3-generic root=UUID=111a05da-58b6-454a-8e29-23b7e215f382 ro   quiet splash
        initrd    /boot/initrd.img-4.2.3-generic
    }
    menuentry 'Pardus, Linux 4.2.3-generic (recovery mode)' --class ubuntu --class gnu-linux --class gnu --class os {
        recordfail
        insmod ext2
        set root='(hd0,6)'
        search --no-floppy --fs-uuid --set 111a05da-58b6-454a-8e29-23b7e215f382
        echo    'Loading Linux 3.16.5-generic ...'
        linux    /boot/vmlinuz-4.2.3-generic root=UUID=111a05da-58b6-454a-8e29-23b7e215f382 ro single
        echo    'Loading initial ramdisk ...'
        initrd    /boot/initrd.img-4.2.3-generic
    }

Önceden aldığımız UUID değerini bu metinde root=UUID= kısımlarına kopyalıyoruz ve dosyayı kaydedip, kapatıyoruz.

Güncellenen Kernel'i gruba ekledik. Artık başlangıçta grubda gözükmesi için grub güncellemesi yapmamız gerekiyor. Bunun için terminale **sudo update-grub2** komutunu yazıyoruz.

![30-grub güncelleme]({{ site.baseurl }}/assets/images/30-grub-guncelleme.png)

![31-grub güncellendi]({{ site.baseurl }}/assets/images/31-grub-guncellendi.png)

Artık grubu güncellemiş olduk. Sistemimizi yeniden başlatıyoruz ve grub ekranından yeni Kernel'imizi seçiyoruz.

Sistem açıldıktan sonra en başta yaptığımız gibi uname –r komutunu terminale giriyoruz ve yeni Kernel versiyonumuzu öğreniyoruz.

![32-linux guncellendi]({{ site.baseurl }}/assets/images/32-linux-guncellendi.png)

&nbsp;

Yararlanılan kaynaklar

[https://forum.ubuntu-tr.net/index.php?topic=18598.0](https://forum.ubuntu-tr.net/index.php?topic=18598.0)  
[http://kod5.org/linux-cekirdegi-kerneli-nasil-derlenir/](http://kod5.org/linux-cekirdegi-kerneli-nasil-derlenir/)

