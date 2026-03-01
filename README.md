# TV Kanal Uygulaması

Bu uygulama Türkiye'deki popüler TV kanallarını canlı olarak izlemenizi sağlar.

## Kurulum ve Çalıştırma

### Basit Kurulum (Önerilen)
1. Tüm dosyaları (`index.html`, `script.js`, `style.css`) aynı klasöre koyun
2. `index.html` dosyasına çift tıklayın
3. Tarayıcıda otomatik olarak açılacaktır

### Gereksinimler
- Modern bir web tarayıcısı (Chrome, Firefox, Safari, Edge)
- İnternet bağlantısı (kanal yayınları için)
- Herhangi bir sunucu veya kurulum gerektirmez

### Özellikler
- 28 farklı TV kanalı
- Kategori bazlı filtreleme
- Arama fonksiyonu
- Tam ekran desteği
- Ses kontrolü
- Klavye kısayolları

### Klavye Kısayolları
- **Boşluk**: Oynat/Duraklat
- **F**: Tam ekran
- **M**: Ses aç/kapat
- **↑/↓**: Kanal değiştir

### Desteklenen Kategoriler
- Ulusal kanallar
- Haber kanalları
- Spor kanalları
- Müzik kanalları
- Çocuk kanalları
- Belgesel kanalları
- Dini kanallar
- Demo kanallar

### Not
Bazı kanallar demo/test amaçlıdır ve gerçek yayın olmayabilir. TRT kanalları resmi yayınlardır.

## Sorun Giderme

Eğer kanallar yüklenmiyorsa:
1. İnternet bağlantınızı kontrol edin
2. Demo kanalları deneyin
3. Farklı bir tarayıcı kullanın
4. Tarayıcı önbelleğini temizleyin

## Özellikler

- 📺 **Kanal Listesi**: Sol tarafta tüm kanalların listesi
- 🔍 **Arama Fonksiyonu**: Kanal adı veya kategorisine göre arama
- 🎥 **Video Player**: Sağ tarafta tam özellikli video oynatıcı
- 📱 **Responsive Tasarım**: Mobil ve masaüstü uyumlu
- ⌨️ **Klavye Kısayolları**: Hızlı kontrol için klavye kısayolları
- 🎵 **Ses Kontrolü**: Ses açma/kapama butonu
- 🔲 **Tam Ekran**: Tam ekran izleme seçeneği

## Kullanım

### Temel Kullanım
1. Sol taraftaki kanal listesinden istediğiniz kanalı seçin
2. Sağ tarafta video otomatik olarak başlayacaktır
3. Arama kutusunu kullanarak kanal arayabilirsiniz

### Klavye Kısayolları
- **Boşluk**: Video oynatma/durdurma
- **F**: Tam ekran modu
- **M**: Ses açma/kapama
- **↑/↓**: Kanal değiştirme (yukarı/aşağı)

### Kontrol Butonları
- **Tam Ekran**: Video player'ı tam ekran yapar
- **Ses**: Video sesini açar/kapatır

## Kurulum

1. Dosyaları bilgisayarınıza indirin
2. `index.html` dosyasını web tarayıcınızda açın
3. Uygulama hazır!

## Teknik Detaylar

### Dosya Yapısı
```
TV/
├── index.html      # Ana HTML dosyası
├── style.css       # CSS stilleri
├── script.js       # JavaScript fonksiyonları
└── README.md       # Bu dosya
```

### Kullanılan Teknolojiler
- **HTML5**: Sayfa yapısı
- **CSS3**: Modern tasarım ve animasyonlar
- **JavaScript**: Etkileşim ve video kontrolü
- **Font Awesome**: İkonlar
- **HLS (HTTP Live Streaming)**: Video streaming

### Desteklenen Kanallar
- TRT 1 (Ulusal)
- TRT Haber (Haber)
- TRT Spor (Spor)
- TRT Çocuk (Çocuk)
- TRT Belgesel (Belgesel)
- TRT Müzik (Müzik)
- TRT Avaz (Uluslararası)
- TRT Kurdî (Yerel)

## Notlar

- Uygulama modern web tarayıcılarında çalışır
- Video streaming için internet bağlantısı gereklidir
- Bazı kanallar coğrafi kısıtlamalar nedeniyle erişilemeyebilir
- HLS formatı desteklenen tarayıcılarda çalışır

## Geliştirme

Uygulamayı geliştirmek için:
1. `script.js` dosyasındaki `channels` dizisine yeni kanallar ekleyebilirsiniz
2. CSS dosyasında tasarım değişiklikleri yapabilirsiniz
3. Yeni özellikler ekleyebilirsiniz

## Lisans

Bu proje eğitim amaçlı oluşturulmuştur. 