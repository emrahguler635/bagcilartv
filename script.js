// TV Kanalları verisi
const channels = [
    {
        id: 1,
        name: "TRT 1",
        category: "Ulusal",
        streamUrl: "https://tv-trt1.medya.trt.com.tr/master.m3u8",
        logo: "logos/trt1.png",
        description: "Türkiye'nin ilk ulusal televizyon kanalı"
    },
    {
        id: 2,
        name: "TRT Haber",
        category: "Haber",
        streamUrl: "https://tv-trthaber.medya.trt.com.tr/master.m3u8",
        logo: "logos/trthaber.png",
        description: "7/24 haber kanalı"
    },
    {
        id: 3,
        name: "TRT Spor",
        category: "Spor",
        streamUrl: "https://tv-trtspor1.medya.trt.com.tr/master.m3u8",
        logo: "logos/trtspor.png",
        description: "Spor haberleri ve canlı maç yayınları"
    },
    {
        id: 4,
        name: "TRT Çocuk",
        category: "Çocuk",
        streamUrl: "https://tv-trtcocuk.medya.trt.com.tr/master.m3u8",
        logo: "logos/trtcocuk.png",
        description: "Çocuklar için eğitici ve eğlenceli içerik"
    },
    {
        id: 5,
        name: "TRT Belgesel",
        category: "Belgesel",
        streamUrl: "https://tv-trtbelgesel.medya.trt.com.tr/master.m3u8",
        logo: "logos/trtbelgesel.png",
        description: "Belgesel ve kültür programları"
    },
    {
        id: 6,
        name: "TRT Müzik",
        category: "Müzik",
        streamUrl: "https://tv-trtmuzik.medya.trt.com.tr/master.m3u8",
        logo: "logos/trtmuzik.png",
        description: "Türk müziği ve kültür programları"
    },
    {
        id: 7,
        name: "TRT Avaz",
        category: "Uluslararası",
        streamUrl: "https://tv-trtavaz.medya.trt.com.tr/master.m3u8",
        logo: "logos/trtavas.png",
        description: "Uluslararası Türkçe yayın kanalı"
    },
    {
        id: 8,
        name: "TRT Kurdî",
        category: "Yerel",
        streamUrl: "https://tv-trtkurdi.medya.trt.com.tr/master.m3u8",
        logo: "logos/trtkurdi.png",
        description: "Kürtçe yayın yapan kanal"
    },
    {
        id: 9,
        name: "TRT World",
        category: "Uluslararası",
        streamUrl: "https://tv-trtworld.medya.trt.com.tr/master.m3u8",
        logo: "logos/trtworld.png",
        description: "İngilizce uluslararası haber kanalı"
    },
    {
        id: 10,
        name: "TRT Arabi",
        category: "Uluslararası",
        streamUrl: "https://tv-trtarabi.medya.trt.com.tr/master.m3u8",
        logo: "logos/trtarabi.png",
        description: "Arapça uluslararası haber kanalı"
    },
    {
        id: 11,
        name: "TRT Türk",
        category: "Uluslararası",
        streamUrl: "https://tv-trtturk.medya.trt.com.tr/master.m3u8",
        logo: "logos/trtturk.png",
        description: "Türkçe uluslararası haber kanalı"
    },
    {
        id: 12,
        name: "TRT 2",
        category: "Kültür",
        streamUrl: "https://tv-trt2.medya.trt.com.tr/master.m3u8",
        logo: "logos/trt2.png",
        description: "Kültür-sanat ve belgesel kanalı"
    },
    {
        id: 13,
        name: "TRT 3",
        category: "Spor",
        streamUrl: "https://tv-trt3.medya.trt.com.tr/master.m3u8",
        logo: "logos/trt3.png",
        description: "Spor ve gençlik kanalı"
    },
    {
        id: 14,
        name: "TRT 4K",
        category: "Ulusal",
        streamUrl: "https://tv-trt4k.medya.trt.com.tr/master.m3u8",
        logo: "logos/trt4k.png",
        description: "4K Ultra HD yayın kanalı"
    },
    {
        id: 15,
        name: "ATV",
        category: "Ulusal",
        streamUrl: "",
        webUrl: "https://www.atv.com.tr/canli-yayin",
        logo: "logos/atv.png",
        description: "ATV - Ulusal yayın kanalı"
    },
    {
        id: 16,
        name: "Kanal D",
        category: "Ulusal",
        streamUrl: "",
        webUrl: "https://www.kanald.com.tr/canli-yayin",
        logo: "logos/kanald.png",
        description: "Kanal D - Ulusal yayın kanalı"
    },
    {
        id: 17,
        name: "Star TV",
        category: "Ulusal",
        streamUrl: "https://dogus-live.daioncdn.net/startv/startv.m3u8",
        logo: "logos/startv.png",
        description: "Star TV - Ulusal yayın kanalı"
    },
    {
        id: 18,
        name: "Show TV",
        category: "Ulusal",
        streamUrl: "",
        webUrl: "https://www.showtv.com.tr/canli-yayin",
        logo: "logos/showtv.png",
        description: "Show TV - Ulusal yayın kanalı"
    },
    {
        id: 19,
        name: "FOX TV",
        category: "Ulusal",
        streamUrl: "",
        webUrl: "https://www.nowtv.com.tr/canli-yayin",
        logo: "logos/foxtv.png",
        description: "FOX TV - Ulusal yayın kanalı"
    },
    {
        id: 20,
        name: "TV8",
        category: "Ulusal",
        streamUrl: "",
        webUrl: "https://www.tv8.com.tr/canli-yayin",
        logo: "logos/tv8.png",
        description: "TV8 - Ulusal yayın kanalı"
    },
    {
        id: 21,
        name: "Kanal 7",
        category: "Ulusal",
        streamUrl: "",
        webUrl: "https://www.kanal7.com/canli-izle",
        logo: "logos/kanal7.png",
        description: "Kanal 7 - Ulusal yayın kanalı"
    },
    {
        id: 22,
        name: "CNN Türk",
        category: "Haber",
        streamUrl: "",
        webUrl: "https://www.cnnturk.com/canli-yayin",
        logo: "logos/cnnturk.png",
        description: "CNN Türk - Haber kanalı"
    },
    {
        id: 23,
        name: "NTV",
        category: "Haber",
        streamUrl: "https://dogus-live.daioncdn.net/ntv/ntv.m3u8",
        logo: "logos/ntv.png",
        description: "NTV - Haber kanalı"
    },
    {
        id: 24,
        name: "Habertürk",
        category: "Haber",
        streamUrl: "",
        webUrl: "https://www.haberturk.com/canliyayin",
        logo: "logos/haberturk.png",
        description: "Habertürk - Haber kanalı"
    },
    {
        id: 25,
        name: "A Haber",
        category: "Haber",
        streamUrl: "",
        youtubeUrl: "https://www.youtube.com/watch?v=nmY9i63t6qo",
        logo: "logos/ahaber.png",
        description: "A Haber - Haber kanalı"
    },
    {
        id: 26,
        name: "Kral TV",
        category: "Müzik",
        streamUrl: "",
        youtubeUrl: "https://www.youtube.com/watch?v=A49bKX8gb-8",
        logo: "logos/kraltv.png",
        description: "Kral TV - Müzik kanalı"
    },
    {
        id: 27,
        name: "PowerTürk TV",
        category: "Müzik",
        streamUrl: "",
        webUrl: "https://www.powerapp.com.tr/tvs/power-tvs/powerturktv/",
        logo: "logos/powerturk.png",
        description: "PowerTürk TV - Türkçe müzik kanalı"
    },
    {
        id: 28,
        name: "Mekke TV",
        category: "Dini",
        streamUrl: "",
        youtubeUrl: "https://www.youtube.com/watch?v=2Gub8-cSH9c",
        logo: "logos/mekke.png",
        description: "Mekke TV - Kabe'den canlı yayın. YouTube üzerinden izleyebilirsiniz."
    },
    {
        id: 29,
        name: "Medine TV",
        category: "Dini",
        streamUrl: "",
        youtubeUrl: "https://www.youtube.com/watch?v=-jWCvRuC254",
        logo: "logos/medine.png",
        description: "Medine TV - Mescid-i Nebevi'den canlı yayın. YouTube üzerinden izleyebilirsiniz."
    },
    {
        id: 30,
        name: "Sözcü TV",
        category: "Haber",
        streamUrl: "",
        youtubeUrl: "https://www.youtube.com/watch?v=ztmY_cCtUl0",
        logo: "logos/sozcutv.png",
        description: "Sözcü TV - Bağımsız haber kanalı"
    },
    {
        id: 31,
        name: "Halk TV",
        category: "Haber",
        streamUrl: "",
        youtubeUrl: "https://www.youtube.com/watch?v=ZSWPj9szKb8",
        logo: "logos/halktv.png",
        description: "Halk TV - Bağımsız haber kanalı"
    },
    {
        id: 32,
        name: "TELE1",
        category: "Haber",
        streamUrl: "",
        youtubeUrl: "https://www.youtube.com/watch?v=fNqmmqNNGp8",
        logo: "logos/tele1.png",
        description: "TELE1 - Bağımsız haber kanalı"
    },
    {
        id: 33,
        name: "Ulusal Kanal",
        category: "Haber",
        streamUrl: "",
        youtubeUrl: "https://www.youtube.com/watch?v=dK96AZbCns0",
        logo: "logos/ulusal.png",
        description: "Ulusal Kanal - Bağımsız haber kanalı"
    },
    {
        id: 34,
        name: "KRT TV",
        category: "Haber",
        streamUrl: "",
        youtubeUrl: "https://www.youtube.com/watch?v=v5srSbD2WBk",
        logo: "logos/krttv.png",
        description: "KRT TV - Kürtçe haber kanalı"
    },
    // Yeni Eklenen Haber Kanalları
    {
        id: 35,
        name: "Bloomberg HT",
        category: "Haber",
        streamUrl: "",
        webUrl: "https://www.bloomberght.com/canli-yayin",
        logo: "logos/bloomberg.png",
        description: "Bloomberg HT - Ekonomi ve finans haberleri"
    },
    {
        id: 36,
        name: "24 TV",
        category: "Haber",
        streamUrl: "",
        youtubeUrl: "https://www.youtube.com/watch?v=nmY9i63t6qo",
        logo: "logos/24tv.png",
        description: "24 TV - 7/24 haber kanalı"
    },
    {
        id: 37,
        name: "Haber Global",
        category: "Haber",
        streamUrl: "",
        webUrl: "https://www.haberglobal.com.tr/canli-yayin",
        logo: "logos/haberglobal.png",
        description: "Haber Global - Bağımsız haber kanalı"
    },
    // Yeni Eklenen Spor Kanalları
    {
        id: 38,
        name: "beIN Sports 1",
        category: "Spor",
        streamUrl: "",
        webUrl: "https://www.beinsports.com/tr/canli-yayin",
        logo: "logos/beinsports1.png",
        description: "beIN Sports 1 - Spor yayınları"
    },
    {
        id: 39,
        name: "beIN Sports 2",
        category: "Spor",
        streamUrl: "",
        webUrl: "https://www.beinsports.com/tr/canli-yayin-2",
        logo: "logos/beinsports2.png",
        description: "beIN Sports 2 - Spor yayınları"
    },
    {
        id: 40,
        name: "S Sport",
        category: "Spor",
        streamUrl: "",
        webUrl: "https://www.ssport.com.tr/canli-yayin",
        logo: "logos/ssport.png",
        description: "S Sport - Spor yayınları"
    },
    // Yeni Eklenen Müzik Kanalları
    {
        id: 41,
        name: "Number One TV",
        category: "Müzik",
        streamUrl: "",
        youtubeUrl: "https://www.youtube.com/watch?v=A49bKX8gb-8",
        logo: "logos/numberone.png",
        description: "Number One TV - Pop müzik kanalı"
    },
    {
        id: 42,
        name: "Dream TV",
        category: "Müzik",
        streamUrl: "",
        youtubeUrl: "https://www.youtube.com/watch?v=nmY9i63t6qo",
        logo: "logos/dreamtv.png",
        description: "Dream TV - Müzik ve eğlence kanalı"
    },
    {
        id: 43,
        name: "Slow TV",
        category: "Müzik",
        streamUrl: "",
        youtubeUrl: "https://www.youtube.com/watch?v=2Gub8-cSH9c",
        logo: "logos/slowtv.png",
        description: "Slow TV - Yavaş müzik ve rahatlatıcı içerik"
    },
    // Yeni Eklenen Dini Kanallar
    {
        id: 44,
        name: "Diyanet TV",
        category: "Dini",
        streamUrl: "",
        webUrl: "https://www.diyanet.tv/canli-yayin",
        logo: "logos/diyanet.png",
        description: "Diyanet TV - Dini içerikler ve hutbeler"
    },
    // Yeni Eklenen Ulusal Kanallar
    {
        id: 45,
        name: "Kanal 1",
        category: "Ulusal",
        streamUrl: "",
        webUrl: "https://www.kanal1.com.tr/canli-yayin",
        logo: "logos/kanal1.png",
        description: "Kanal 1 - Ulusal yayın kanalı"
    },
    {
        id: 46,
        name: "Flash TV",
        category: "Ulusal",
        streamUrl: "",
        webUrl: "https://www.flashtv.com.tr/canli-yayin",
        logo: "logos/flashtv.png",
        description: "Flash TV - Ulusal yayın kanalı"
    },
    {
        id: 47,
        name: "Beyaz TV",
        category: "Ulusal",
        streamUrl: "",
        webUrl: "https://www.beyaztv.com.tr/canli-yayin",
        logo: "logos/beyaztv.png",
        description: "Beyaz TV - Ulusal yayın kanalı"
    },
    // Yeni Eklenen Çocuk Kanalları
    {
        id: 48,
        name: "Cartoon Network",
        category: "Çocuk",
        streamUrl: "",
        webUrl: "https://www.cartoonnetwork.com.tr/canli-yayin",
        logo: "logos/cartoonnetwork.png",
        description: "Cartoon Network - Çizgi film kanalı"
    },
    {
        id: 49,
        name: "Disney Channel",
        category: "Çocuk",
        streamUrl: "",
        webUrl: "https://www.disneychannel.com.tr/canli-yayin",
        logo: "logos/disney.png",
        description: "Disney Channel - Çocuk eğlence kanalı"
    },
    // Ek Haber Kanalları
    {
        id: 50,
        name: "TRT Haber",
        category: "Haber",
        streamUrl: "https://tv-trthaber.medya.trt.com.tr/master.m3u8",
        logo: "logos/trthaber.png",
        description: "TRT Haber - Resmi haber kanalı"
    },
    {
        id: 51,
        name: "HaberTürk",
        category: "Haber",
        streamUrl: "",
        webUrl: "https://www.haberturk.com/canliyayin",
        logo: "logos/haberturk.png",
        description: "HaberTürk - Bağımsız haber kanalı"
    },
    // Ek Spor Kanalları
    {
        id: 52,
        name: "TRT Spor",
        category: "Spor",
        streamUrl: "https://tv-trtspor1.medya.trt.com.tr/master.m3u8",
        logo: "logos/trtspor.png",
        description: "TRT Spor - Resmi spor kanalı"
    },
    // Ek Müzik Kanalları
    {
        id: 53,
        name: "TRT Müzik",
        category: "Müzik",
        streamUrl: "https://tv-trtmuzik.medya.trt.com.tr/master.m3u8",
        logo: "logos/trtmuzik.png",
        description: "TRT Müzik - Türk müziği kanalı"
    },
    // Ek Ulusal Kanallar
    {
        id: 54,
        name: "TRT 1",
        category: "Ulusal",
        streamUrl: "https://tv-trt1.medya.trt.com.tr/master.m3u8",
        logo: "logos/trt1.png",
        description: "TRT 1 - Ana ulusal kanal"
    },
    {
        id: 55,
        name: "TRT 2",
        category: "Kültür",
        streamUrl: "https://tv-trt2.medya.trt.com.tr/master.m3u8",
        logo: "logos/trt2.png",
        description: "TRT 2 - Kültür-sanat kanalı"
    },
    {
        id: 56,
        name: "TRT 3",
        category: "Spor",
        streamUrl: "https://tv-trt3.medya.trt.com.tr/master.m3u8",
        logo: "logos/trt3.png",
        description: "TRT 3 - Spor ve gençlik kanalı"
    },
    {
        id: 57,
        name: "TRT 4K",
        category: "Ulusal",
        streamUrl: "https://tv-trt4k.medya.trt.com.tr/master.m3u8",
        logo: "logos/trt4k.png",
        description: "TRT 4K - Ultra HD yayın kanalı"
    },
    // Uluslararası Kanallar
    {
        id: 58,
        name: "TRT World",
        category: "Uluslararası",
        streamUrl: "https://tv-trtworld.medya.trt.com.tr/master.m3u8",
        logo: "logos/trtworld.png",
        description: "TRT World - İngilizce haber kanalı"
    },
    {
        id: 59,
        name: "TRT Arabi",
        category: "Uluslararası",
        streamUrl: "https://tv-trtarabi.medya.trt.com.tr/master.m3u8",
        logo: "logos/trtarabi.png",
        description: "TRT Arabi - Arapça haber kanalı"
    },
    {
        id: 60,
        name: "TRT Türk",
        category: "Uluslararası",
        streamUrl: "https://tv-trtturk.medya.trt.com.tr/master.m3u8",
        logo: "logos/trtturk.png",
        description: "TRT Türk - Uluslararası Türkçe kanal"
    },
    {
        id: 61,
        name: "TRT Avaz",
        category: "Uluslararası",
        streamUrl: "https://tv-trtavaz.medya.trt.com.tr/master.m3u8",
        logo: "logos/trtavas.png",
        description: "TRT Avaz - Uluslararası Türkçe kanal"
    },
    {
        id: 62,
        name: "TRT Kurdî",
        category: "Yerel",
        streamUrl: "https://tv-trtkurdi.medya.trt.com.tr/master.m3u8",
        logo: "logos/trtkurdi.png",
        description: "TRT Kurdî - Kürtçe yayın kanalı"
    },
    // Özel Kategoriler
    {
        id: 63,
        name: "TRT Çocuk",
        category: "Çocuk",
        streamUrl: "https://tv-trtcocuk.medya.trt.com.tr/master.m3u8",
        logo: "logos/trtcocuk.png",
        description: "TRT Çocuk - Çocuk kanalı"
    },
    {
        id: 64,
        name: "TRT Belgesel",
        category: "Belgesel",
        streamUrl: "https://tv-trtbelgesel.medya.trt.com.tr/master.m3u8",
        logo: "logos/trtbelgesel.png",
        description: "TRT Belgesel - Belgesel kanalı"
    }
];

// Yayın Akışı Verileri (Demo veriler)
const programSchedules = {
    1: [ // TRT 1
        { time: "06:00", title: "TRT 1 Günaydın", description: "Sabah haberleri ve günlük program" },
        { time: "08:00", title: "Çocuk Kuşağı", description: "Çocuklar için eğitici programlar" },
        { time: "10:00", title: "Gün Ortası Haberleri", description: "Günün önemli gelişmeleri" },
        { time: "12:00", title: "Öğle Haberleri", description: "Detaylı haber bülteni" },
        { time: "14:00", title: "Türk Dizisi", description: "Popüler Türk dizisi" },
        { time: "16:00", title: "Çocuk Kuşağı", description: "Çocuklar için eğlenceli programlar" },
        { time: "18:00", title: "Akşam Haberleri", description: "Günün sonu haberleri" },
        { time: "20:00", title: "Ana Haber Bülteni", description: "Günün en önemli haberleri" },
        { time: "22:00", title: "Gece Haberleri", description: "Gece haber bülteni" },
        { time: "23:00", title: "Gece Kuşağı", description: "Gece programları" }
    ],
    2: [ // TRT Haber
        { time: "00:00", title: "Haber Bülteni", description: "Güncel haberler" },
        { time: "02:00", title: "Ekonomi Haberleri", description: "Ekonomi ve finans haberleri" },
        { time: "04:00", title: "Dünya Haberleri", description: "Uluslararası gelişmeler" },
        { time: "06:00", title: "Sabah Haberleri", description: "Günün ilk haberleri" },
        { time: "08:00", title: "Ekonomi Raporu", description: "Detaylı ekonomi analizi" },
        { time: "10:00", title: "Gün Ortası", description: "Öğle haberleri" },
        { time: "12:00", title: "Haber Merkezi", description: "Canlı haber yayını" },
        { time: "14:00", title: "Ekonomi Bülteni", description: "Ekonomi haberleri" },
        { time: "16:00", title: "Dünya Raporu", description: "Uluslararası haberler" },
        { time: "18:00", title: "Akşam Haberleri", description: "Günün özeti" },
        { time: "20:00", title: "Ana Haber", description: "Günün en önemli haberleri" },
        { time: "22:00", title: "Gece Haberleri", description: "Gece bülteni" }
    ],
    3: [ // TRT Spor
        { time: "06:00", title: "Spor Haberleri", description: "Günün spor haberleri" },
        { time: "08:00", title: "Spor Merkezi", description: "Spor programı" },
        { time: "10:00", title: "Futbol Analiz", description: "Futbol değerlendirmeleri" },
        { time: "12:00", title: "Spor Bülteni", description: "Öğle spor haberleri" },
        { time: "14:00", title: "Canlı Maç", description: "Süper Lig maçı" },
        { time: "16:00", title: "Maç Sonrası", description: "Maç değerlendirmesi" },
        { time: "18:00", title: "Spor Haberleri", description: "Akşam spor bülteni" },
        { time: "20:00", title: "Spor Merkezi", description: "Akşam spor programı" },
        { time: "22:00", title: "Gece Spor", description: "Gece spor haberleri" }
    ],
    4: [ // TRT Çocuk
        { time: "06:00", title: "Sabah Çizgi Film", description: "Çocuk çizgi filmleri" },
        { time: "08:00", title: "Eğitici Program", description: "Eğitici içerikler" },
        { time: "10:00", title: "Çizgi Film Kuşağı", description: "Popüler çizgi filmler" },
        { time: "12:00", title: "Öğle Çizgi Film", description: "Öğle çizgi film kuşağı" },
        { time: "14:00", title: "Eğitici İçerik", description: "Eğitici programlar" },
        { time: "16:00", title: "Akşam Çizgi Film", description: "Akşam çizgi film kuşağı" },
        { time: "18:00", title: "Çocuk Programı", description: "Çocuk programları" },
        { time: "20:00", title: "Gece Çizgi Film", description: "Gece çizgi film kuşağı" }
    ],
    5: [ // TRT Belgesel
        { time: "06:00", title: "Doğa Belgeseli", description: "Doğa ve vahşi yaşam" },
        { time: "08:00", title: "Tarih Belgeseli", description: "Tarihi belgeseller" },
        { time: "10:00", title: "Bilim Belgeseli", description: "Bilimsel belgeseller" },
        { time: "12:00", title: "Kültür Belgeseli", description: "Kültür ve sanat" },
        { time: "14:00", title: "Coğrafya Belgeseli", description: "Coğrafi belgeseller" },
        { time: "16:00", title: "Teknoloji Belgeseli", description: "Teknoloji belgeselleri" },
        { time: "18:00", title: "Tarih Belgeseli", description: "Tarihi içerikler" },
        { time: "20:00", title: "Doğa Belgeseli", description: "Akşam doğa belgeseli" },
        { time: "22:00", title: "Bilim Belgeseli", description: "Gece bilim belgeseli" }
    ],
    6: [ // TRT Müzik
        { time: "06:00", title: "Sabah Müziği", description: "Sabah müzik kuşağı" },
        { time: "08:00", title: "Türk Halk Müziği", description: "Halk müziği programı" },
        { time: "10:00", title: "Klasik Müzik", description: "Klasik müzik kuşağı" },
        { time: "12:00", title: "Öğle Müziği", description: "Öğle müzik programı" },
        { time: "14:00", title: "Türk Sanat Müziği", description: "Sanat müziği programı" },
        { time: "16:00", title: "Pop Müzik", description: "Pop müzik kuşağı" },
        { time: "18:00", title: "Akşam Müziği", description: "Akşam müzik programı" },
        { time: "20:00", title: "Müzik Gecesi", description: "Gece müzik kuşağı" },
        { time: "22:00", title: "Gece Müziği", description: "Gece müzik programı" }
    ],
    15: [ // ATV
        { time: "06:00", title: "ATV Günaydın", description: "Sabah programı" },
        { time: "08:00", title: "Gün Ortası", description: "Günlük program" },
        { time: "12:00", title: "Öğle Haberleri", description: "Haber bülteni" },
        { time: "14:00", title: "Dizi Kuşağı", description: "Popüler diziler" },
        { time: "18:00", title: "Akşam Haberleri", description: "Akşam bülteni" },
        { time: "20:00", title: "Ana Haber", description: "Ana haber bülteni" },
        { time: "22:00", title: "Gece Kuşağı", description: "Gece programları" }
    ],
    16: [ // Kanal D
        { time: "06:00", title: "Kanal D Günaydın", description: "Sabah programı" },
        { time: "08:00", title: "Gün Ortası", description: "Günlük program" },
        { time: "12:00", title: "Öğle Haberleri", description: "Haber bülteni" },
        { time: "14:00", title: "Dizi Kuşağı", description: "Popüler diziler" },
        { time: "18:00", title: "Akşam Haberleri", description: "Akşam bülteni" },
        { time: "20:00", title: "Ana Haber", description: "Ana haber bülteni" },
        { time: "22:00", title: "Gece Kuşağı", description: "Gece programları" }
    ],
    17: [ // Star TV
        { time: "06:00", title: "Star Günaydın", description: "Sabah programı" },
        { time: "08:00", title: "Gün Ortası", description: "Günlük program" },
        { time: "12:00", title: "Öğle Haberleri", description: "Haber bülteni" },
        { time: "14:00", title: "Dizi Kuşağı", description: "Popüler diziler" },
        { time: "18:00", title: "Akşam Haberleri", description: "Akşam bülteni" },
        { time: "20:00", title: "Ana Haber", description: "Ana haber bülteni" },
        { time: "22:00", title: "Gece Kuşağı", description: "Gece programları" }
    ],
    18: [ // Show TV
        { time: "06:00", title: "Show Günaydın", description: "Sabah programı" },
        { time: "08:00", title: "Gün Ortası", description: "Günlük program" },
        { time: "12:00", title: "Öğle Haberleri", description: "Haber bülteni" },
        { time: "14:00", title: "Dizi Kuşağı", description: "Popüler diziler" },
        { time: "18:00", title: "Akşam Haberleri", description: "Akşam bülteni" },
        { time: "20:00", title: "Ana Haber", description: "Ana haber bülteni" },
        { time: "22:00", title: "Gece Kuşağı", description: "Gece programları" }
    ],
    19: [ // FOX TV
        { time: "06:00", title: "FOX Günaydın", description: "Sabah programı" },
        { time: "08:00", title: "Gün Ortası", description: "Günlük program" },
        { time: "12:00", title: "Öğle Haberleri", description: "Haber bülteni" },
        { time: "14:00", title: "Dizi Kuşağı", description: "Popüler diziler" },
        { time: "18:00", title: "Akşam Haberleri", description: "Akşam bülteni" },
        { time: "20:00", title: "Ana Haber", description: "Ana haber bülteni" },
        { time: "22:00", title: "Gece Kuşağı", description: "Gece programları" }
    ],
    20: [ // TV8
        { time: "06:00", title: "TV8 Günaydın", description: "Sabah programı" },
        { time: "08:00", title: "Gün Ortası", description: "Günlük program" },
        { time: "12:00", title: "Öğle Haberleri", description: "Haber bülteni" },
        { time: "14:00", title: "Dizi Kuşağı", description: "Popüler diziler" },
        { time: "18:00", title: "Akşam Haberleri", description: "Akşam bülteni" },
        { time: "20:00", title: "Ana Haber", description: "Ana haber bülteni" },
        { time: "22:00", title: "Gece Kuşağı", description: "Gece programları" }
    ],
    21: [ // Kanal 7
        { time: "06:00", title: "Kanal 7 Günaydın", description: "Sabah programı" },
        { time: "08:00", title: "Gün Ortası", description: "Günlük program" },
        { time: "12:00", title: "Öğle Haberleri", description: "Haber bülteni" },
        { time: "14:00", title: "Dizi Kuşağı", description: "Popüler diziler" },
        { time: "18:00", title: "Akşam Haberleri", description: "Akşam bülteni" },
        { time: "20:00", title: "Ana Haber", description: "Ana haber bülteni" },
        { time: "22:00", title: "Gece Kuşağı", description: "Gece programları" }
    ],
    22: [ // CNN Türk
        { time: "06:00", title: "CNN Türk Sabah", description: "Sabah haberleri" },
        { time: "08:00", title: "Ekonomi Raporu", description: "Ekonomi haberleri" },
        { time: "10:00", title: "Gün Ortası", description: "Öğle haberleri" },
        { time: "12:00", title: "CNN Türk Haber", description: "Haber bülteni" },
        { time: "14:00", title: "Dünya Haberleri", description: "Uluslararası haberler" },
        { time: "16:00", title: "Ekonomi Bülteni", description: "Ekonomi analizi" },
        { time: "18:00", title: "Akşam Haberleri", description: "Akşam bülteni" },
        { time: "20:00", title: "Ana Haber", description: "Ana haber bülteni" },
        { time: "22:00", title: "Gece Haberleri", description: "Gece bülteni" }
    ],
    23: [ // NTV
        { time: "06:00", title: "NTV Sabah", description: "Sabah haberleri" },
        { time: "08:00", title: "Ekonomi Raporu", description: "Ekonomi haberleri" },
        { time: "10:00", title: "Gün Ortası", description: "Öğle haberleri" },
        { time: "12:00", title: "NTV Haber", description: "Haber bülteni" },
        { time: "14:00", title: "Dünya Haberleri", description: "Uluslararası haberler" },
        { time: "16:00", title: "Ekonomi Bülteni", description: "Ekonomi analizi" },
        { time: "18:00", title: "Akşam Haberleri", description: "Akşam bülteni" },
        { time: "20:00", title: "Ana Haber", description: "Ana haber bülteni" },
        { time: "22:00", title: "Gece Haberleri", description: "Gece bülteni" }
    ],
    24: [ // Habertürk
        { time: "06:00", title: "Habertürk Sabah", description: "Sabah haberleri" },
        { time: "08:00", title: "Ekonomi Raporu", description: "Ekonomi haberleri" },
        { time: "10:00", title: "Gün Ortası", description: "Öğle haberleri" },
        { time: "12:00", title: "Habertürk Haber", description: "Haber bülteni" },
        { time: "14:00", title: "Dünya Haberleri", description: "Uluslararası haberler" },
        { time: "16:00", title: "Ekonomi Bülteni", description: "Ekonomi analizi" },
        { time: "18:00", title: "Akşam Haberleri", description: "Akşam bülteni" },
        { time: "20:00", title: "Ana Haber", description: "Ana haber bülteni" },
        { time: "22:00", title: "Gece Haberleri", description: "Gece bülteni" }
    ],
    25: [ // A Haber
        { time: "06:00", title: "A Haber Sabah", description: "Sabah haberleri" },
        { time: "08:00", title: "Ekonomi Raporu", description: "Ekonomi haberleri" },
        { time: "10:00", title: "Gün Ortası", description: "Öğle haberleri" },
        { time: "12:00", title: "A Haber Bülteni", description: "Haber bülteni" },
        { time: "14:00", title: "Dünya Haberleri", description: "Uluslararası haberler" },
        { time: "16:00", title: "Ekonomi Bülteni", description: "Ekonomi analizi" },
        { time: "18:00", title: "Akşam Haberleri", description: "Akşam bülteni" },
        { time: "20:00", title: "Ana Haber", description: "Ana haber bülteni" },
        { time: "22:00", title: "Gece Haberleri", description: "Gece bülteni" }
    ],
    26: [ // Kral TV
        { time: "06:00", title: "Sabah Müziği", description: "Sabah müzik kuşağı" },
        { time: "08:00", title: "Pop Müzik", description: "Pop müzik programı" },
        { time: "10:00", title: "Rock Müzik", description: "Rock müzik kuşağı" },
        { time: "12:00", title: "Öğle Müziği", description: "Öğle müzik programı" },
        { time: "14:00", title: "Türkçe Pop", description: "Türkçe pop müzik" },
        { time: "16:00", title: "Klasik Müzik", description: "Klasik müzik kuşağı" },
        { time: "18:00", title: "Akşam Müziği", description: "Akşam müzik programı" },
        { time: "20:00", title: "Müzik Gecesi", description: "Gece müzik kuşağı" },
        { time: "22:00", title: "Gece Müziği", description: "Gece müzik programı" }
    ],
    27: [ // PowerTürk TV
        { time: "06:00", title: "Sabah Müziği", description: "Sabah müzik kuşağı" },
        { time: "08:00", title: "Türkçe Pop", description: "Türkçe pop müzik" },
        { time: "10:00", title: "Rock Müzik", description: "Rock müzik kuşağı" },
        { time: "12:00", title: "Öğle Müziği", description: "Öğle müzik programı" },
        { time: "14:00", title: "Pop Müzik", description: "Pop müzik programı" },
        { time: "16:00", title: "Klasik Müzik", description: "Klasik müzik kuşağı" },
        { time: "18:00", title: "Akşam Müziği", description: "Akşam müzik programı" },
        { time: "20:00", title: "Müzik Gecesi", description: "Gece müzik kuşağı" },
        { time: "22:00", title: "Gece Müziği", description: "Gece müzik programı" }
    ],
    // Yeni Eklenen Kanallar için Program Verileri
    35: [ // Bloomberg HT
        { time: "06:00", title: "Bloomberg Sabah", description: "Sabah ekonomi haberleri" },
        { time: "08:00", title: "Piyasa Analizi", description: "Borsa ve finans analizi" },
        { time: "10:00", title: "Ekonomi Raporu", description: "Günlük ekonomi haberleri" },
        { time: "12:00", title: "Öğle Bülteni", description: "Öğle ekonomi bülteni" },
        { time: "14:00", title: "Piyasa Güncellemesi", description: "Borsa güncellemeleri" },
        { time: "16:00", title: "Finans Analizi", description: "Finansal analiz programı" },
        { time: "18:00", title: "Akşam Ekonomi", description: "Akşam ekonomi haberleri" },
        { time: "20:00", title: "Ana Ekonomi", description: "Ana ekonomi bülteni" },
        { time: "22:00", title: "Gece Ekonomi", description: "Gece ekonomi haberleri" }
    ],
    36: [ // 24 TV
        { time: "06:00", title: "24 TV Sabah", description: "Sabah haberleri" },
        { time: "08:00", title: "Gün Ortası", description: "Günlük haberler" },
        { time: "10:00", title: "Haber Merkezi", description: "Canlı haber yayını" },
        { time: "12:00", title: "Öğle Haberleri", description: "Öğle haber bülteni" },
        { time: "14:00", title: "Dünya Haberleri", description: "Uluslararası haberler" },
        { time: "16:00", title: "Ekonomi Bülteni", description: "Ekonomi haberleri" },
        { time: "18:00", title: "Akşam Haberleri", description: "Akşam haber bülteni" },
        { time: "20:00", title: "Ana Haber", description: "Ana haber bülteni" },
        { time: "22:00", title: "Gece Haberleri", description: "Gece haber bülteni" }
    ],
    37: [ // Haber Global
        { time: "06:00", title: "Haber Global Sabah", description: "Sabah haberleri" },
        { time: "08:00", title: "Gün Ortası", description: "Günlük haberler" },
        { time: "10:00", title: "Haber Merkezi", description: "Canlı haber yayını" },
        { time: "12:00", title: "Öğle Haberleri", description: "Öğle haber bülteni" },
        { time: "14:00", title: "Dünya Haberleri", description: "Uluslararası haberler" },
        { time: "16:00", title: "Ekonomi Bülteni", description: "Ekonomi haberleri" },
        { time: "18:00", title: "Akşam Haberleri", description: "Akşam haber bülteni" },
        { time: "20:00", title: "Ana Haber", description: "Ana haber bülteni" },
        { time: "22:00", title: "Gece Haberleri", description: "Gece haber bülteni" }
    ],
    38: [ // beIN Sports 1
        { time: "06:00", title: "Spor Haberleri", description: "Günün spor haberleri" },
        { time: "08:00", title: "Spor Merkezi", description: "Spor programı" },
        { time: "10:00", title: "Futbol Analiz", description: "Futbol değerlendirmeleri" },
        { time: "12:00", title: "Spor Bülteni", description: "Öğle spor haberleri" },
        { time: "14:00", title: "Canlı Maç", description: "Süper Lig maçı" },
        { time: "16:00", title: "Maç Sonrası", description: "Maç değerlendirmesi" },
        { time: "18:00", title: "Spor Haberleri", description: "Akşam spor bülteni" },
        { time: "20:00", title: "Spor Merkezi", description: "Akşam spor programı" },
        { time: "22:00", title: "Gece Spor", description: "Gece spor haberleri" }
    ],
    39: [ // beIN Sports 2
        { time: "06:00", title: "Spor Haberleri", description: "Günün spor haberleri" },
        { time: "08:00", title: "Spor Merkezi", description: "Spor programı" },
        { time: "10:00", title: "Futbol Analiz", description: "Futbol değerlendirmeleri" },
        { time: "12:00", title: "Spor Bülteni", description: "Öğle spor haberleri" },
        { time: "14:00", title: "Canlı Maç", description: "Süper Lig maçı" },
        { time: "16:00", title: "Maç Sonrası", description: "Maç değerlendirmesi" },
        { time: "18:00", title: "Spor Haberleri", description: "Akşam spor bülteni" },
        { time: "20:00", title: "Spor Merkezi", description: "Akşam spor programı" },
        { time: "22:00", title: "Gece Spor", description: "Gece spor haberleri" }
    ],
    40: [ // S Sport
        { time: "06:00", title: "S Sport Sabah", description: "Sabah spor haberleri" },
        { time: "08:00", title: "Spor Merkezi", description: "Spor programı" },
        { time: "10:00", title: "Futbol Analiz", description: "Futbol değerlendirmeleri" },
        { time: "12:00", title: "Spor Bülteni", description: "Öğle spor haberleri" },
        { time: "14:00", title: "Canlı Maç", description: "Süper Lig maçı" },
        { time: "16:00", title: "Maç Sonrası", description: "Maç değerlendirmesi" },
        { time: "18:00", title: "Spor Haberleri", description: "Akşam spor bülteni" },
        { time: "20:00", title: "Spor Merkezi", description: "Akşam spor programı" },
        { time: "22:00", title: "Gece Spor", description: "Gece spor haberleri" }
    ],
    41: [ // Number One TV
        { time: "06:00", title: "Sabah Müziği", description: "Sabah müzik kuşağı" },
        { time: "08:00", title: "Pop Müzik", description: "Pop müzik programı" },
        { time: "10:00", title: "Rock Müzik", description: "Rock müzik kuşağı" },
        { time: "12:00", title: "Öğle Müziği", description: "Öğle müzik programı" },
        { time: "14:00", title: "Türkçe Pop", description: "Türkçe pop müzik" },
        { time: "16:00", title: "Klasik Müzik", description: "Klasik müzik kuşağı" },
        { time: "18:00", title: "Akşam Müziği", description: "Akşam müzik programı" },
        { time: "20:00", title: "Müzik Gecesi", description: "Gece müzik kuşağı" },
        { time: "22:00", title: "Gece Müziği", description: "Gece müzik programı" }
    ],
    42: [ // Dream TV
        { time: "06:00", title: "Sabah Müziği", description: "Sabah müzik kuşağı" },
        { time: "08:00", title: "Pop Müzik", description: "Pop müzik programı" },
        { time: "10:00", title: "Rock Müzik", description: "Rock müzik kuşağı" },
        { time: "12:00", title: "Öğle Müziği", description: "Öğle müzik programı" },
        { time: "14:00", title: "Türkçe Pop", description: "Türkçe pop müzik" },
        { time: "16:00", title: "Klasik Müzik", description: "Klasik müzik kuşağı" },
        { time: "18:00", title: "Akşam Müziği", description: "Akşam müzik programı" },
        { time: "20:00", title: "Müzik Gecesi", description: "Gece müzik kuşağı" },
        { time: "22:00", title: "Gece Müziği", description: "Gece müzik programı" }
    ],
    43: [ // Slow TV
        { time: "06:00", title: "Sabah Müziği", description: "Sabah müzik kuşağı" },
        { time: "08:00", title: "Yavaş Müzik", description: "Rahatlatıcı müzik" },
        { time: "10:00", title: "Ambient Müzik", description: "Ambient müzik kuşağı" },
        { time: "12:00", title: "Öğle Müziği", description: "Öğle müzik programı" },
        { time: "14:00", title: "Klasik Müzik", description: "Klasik müzik" },
        { time: "16:00", title: "Jazz Müzik", description: "Jazz müzik kuşağı" },
        { time: "18:00", title: "Akşam Müziği", description: "Akşam müzik programı" },
        { time: "20:00", title: "Müzik Gecesi", description: "Gece müzik kuşağı" },
        { time: "22:00", title: "Gece Müziği", description: "Gece müzik programı" }
    ],
    44: [ // Diyanet TV
        { time: "06:00", title: "Sabah Hutbesi", description: "Sabah hutbesi" },
        { time: "08:00", title: "Kuran Okuma", description: "Kuran-ı Kerim okuma" },
        { time: "10:00", title: "Dini Sohbet", description: "Dini sohbet programı" },
        { time: "12:00", title: "Öğle Hutbesi", description: "Öğle hutbesi" },
        { time: "14:00", title: "Hadis Dersi", description: "Hadis dersi" },
        { time: "16:00", title: "Tefsir Dersi", description: "Tefsir dersi" },
        { time: "18:00", title: "Akşam Hutbesi", description: "Akşam hutbesi" },
        { time: "20:00", title: "Dini Program", description: "Dini program" },
        { time: "22:00", title: "Gece Hutbesi", description: "Gece hutbesi" }
    ],
    45: [ // Kanal 1
        { time: "06:00", title: "Kanal 1 Sabah", description: "Sabah programı" },
        { time: "08:00", title: "Gün Ortası", description: "Günlük program" },
        { time: "10:00", title: "Haber Merkezi", description: "Canlı haber yayını" },
        { time: "12:00", title: "Öğle Haberleri", description: "Öğle haber bülteni" },
        { time: "14:00", title: "Dizi Kuşağı", description: "Popüler diziler" },
        { time: "16:00", title: "Çocuk Kuşağı", description: "Çocuk programları" },
        { time: "18:00", title: "Akşam Haberleri", description: "Akşam haber bülteni" },
        { time: "20:00", title: "Ana Haber", description: "Ana haber bülteni" },
        { time: "22:00", title: "Gece Kuşağı", description: "Gece programları" }
    ],
    46: [ // Flash TV
        { time: "06:00", title: "Flash Sabah", description: "Sabah programı" },
        { time: "08:00", title: "Gün Ortası", description: "Günlük program" },
        { time: "10:00", title: "Haber Merkezi", description: "Canlı haber yayını" },
        { time: "12:00", title: "Öğle Haberleri", description: "Öğle haber bülteni" },
        { time: "14:00", title: "Dizi Kuşağı", description: "Popüler diziler" },
        { time: "16:00", title: "Çocuk Kuşağı", description: "Çocuk programları" },
        { time: "18:00", title: "Akşam Haberleri", description: "Akşam haber bülteni" },
        { time: "20:00", title: "Ana Haber", description: "Ana haber bülteni" },
        { time: "22:00", title: "Gece Kuşağı", description: "Gece programları" }
    ],
    47: [ // Beyaz TV
        { time: "06:00", title: "Beyaz Sabah", description: "Sabah programı" },
        { time: "08:00", title: "Gün Ortası", description: "Günlük program" },
        { time: "10:00", title: "Haber Merkezi", description: "Canlı haber yayını" },
        { time: "12:00", title: "Öğle Haberleri", description: "Öğle haber bülteni" },
        { time: "14:00", title: "Dizi Kuşağı", description: "Popüler diziler" },
        { time: "16:00", title: "Çocuk Kuşağı", description: "Çocuk programları" },
        { time: "18:00", title: "Akşam Haberleri", description: "Akşam haber bülteni" },
        { time: "20:00", title: "Ana Haber", description: "Ana haber bülteni" },
        { time: "22:00", title: "Gece Kuşağı", description: "Gece programları" }
    ],
    48: [ // Cartoon Network
        { time: "06:00", title: "Sabah Çizgi Film", description: "Sabah çizgi filmleri" },
        { time: "08:00", title: "Çocuk Kuşağı", description: "Çocuk programları" },
        { time: "10:00", title: "Çizgi Film Kuşağı", description: "Popüler çizgi filmler" },
        { time: "12:00", title: "Öğle Çizgi Film", description: "Öğle çizgi film kuşağı" },
        { time: "14:00", title: "Eğitici İçerik", description: "Eğitici programlar" },
        { time: "16:00", title: "Akşam Çizgi Film", description: "Akşam çizgi film kuşağı" },
        { time: "18:00", title: "Çocuk Programı", description: "Çocuk programları" },
        { time: "20:00", title: "Gece Çizgi Film", description: "Gece çizgi film kuşağı" },
        { time: "22:00", title: "Gece Programı", description: "Gece programları" }
    ],
    49: [ // Disney Channel
        { time: "06:00", title: "Disney Sabah", description: "Sabah çizgi filmleri" },
        { time: "08:00", title: "Çocuk Kuşağı", description: "Çocuk programları" },
        { time: "10:00", title: "Disney Kuşağı", description: "Disney çizgi filmleri" },
        { time: "12:00", title: "Öğle Çizgi Film", description: "Öğle çizgi film kuşağı" },
        { time: "14:00", title: "Eğitici İçerik", description: "Eğitici programlar" },
        { time: "16:00", title: "Akşam Çizgi Film", description: "Akşam çizgi film kuşağı" },
        { time: "18:00", title: "Çocuk Programı", description: "Çocuk programları" },
        { time: "20:00", title: "Gece Çizgi Film", description: "Gece çizgi film kuşağı" },
        { time: "22:00", title: "Gece Programı", description: "Gece programları" }
    ],
    // Eksik Olan Kanallar için Program Verileri
    28: [ // Mekke TV
        { time: "06:00", title: "Sabah Namazı", description: "Kabe'den sabah namazı" },
        { time: "08:00", title: "Kuran Okuma", description: "Kuran-ı Kerim okuma" },
        { time: "10:00", title: "Dini Sohbet", description: "Dini sohbet programı" },
        { time: "12:00", title: "Öğle Namazı", description: "Kabe'den öğle namazı" },
        { time: "14:00", title: "Hadis Dersi", description: "Hadis dersi" },
        { time: "16:00", title: "Tefsir Dersi", description: "Tefsir dersi" },
        { time: "18:00", title: "Akşam Namazı", description: "Kabe'den akşam namazı" },
        { time: "20:00", title: "Dini Program", description: "Dini program" },
        { time: "22:00", title: "Gece Namazı", description: "Kabe'den gece namazı" }
    ],
    29: [ // Medine TV
        { time: "06:00", title: "Sabah Namazı", description: "Mescid-i Nebevi'den sabah namazı" },
        { time: "08:00", title: "Kuran Okuma", description: "Kuran-ı Kerim okuma" },
        { time: "10:00", title: "Dini Sohbet", description: "Dini sohbet programı" },
        { time: "12:00", title: "Öğle Namazı", description: "Mescid-i Nebevi'den öğle namazı" },
        { time: "14:00", title: "Hadis Dersi", description: "Hadis dersi" },
        { time: "16:00", title: "Tefsir Dersi", description: "Tefsir dersi" },
        { time: "18:00", title: "Akşam Namazı", description: "Mescid-i Nebevi'den akşam namazı" },
        { time: "20:00", title: "Dini Program", description: "Dini program" },
        { time: "22:00", title: "Gece Namazı", description: "Mescid-i Nebevi'den gece namazı" }
    ],
    30: [ // Sözcü TV
        { time: "06:00", title: "Sözcü Sabah", description: "Sabah haberleri" },
        { time: "08:00", title: "Gün Ortası", description: "Günlük haberler" },
        { time: "10:00", title: "Haber Merkezi", description: "Canlı haber yayını" },
        { time: "12:00", title: "Öğle Haberleri", description: "Öğle haber bülteni" },
        { time: "14:00", title: "Dünya Haberleri", description: "Uluslararası haberler" },
        { time: "16:00", title: "Ekonomi Bülteni", description: "Ekonomi haberleri" },
        { time: "18:00", title: "Akşam Haberleri", description: "Akşam haber bülteni" },
        { time: "20:00", title: "Ana Haber", description: "Ana haber bülteni" },
        { time: "22:00", title: "Gece Haberleri", description: "Gece haber bülteni" }
    ],
    31: [ // Halk TV
        { time: "06:00", title: "Halk Sabah", description: "Sabah haberleri" },
        { time: "08:00", title: "Gün Ortası", description: "Günlük haberler" },
        { time: "10:00", title: "Haber Merkezi", description: "Canlı haber yayını" },
        { time: "12:00", title: "Öğle Haberleri", description: "Öğle haber bülteni" },
        { time: "14:00", title: "Dünya Haberleri", description: "Uluslararası haberler" },
        { time: "16:00", title: "Ekonomi Bülteni", description: "Ekonomi haberleri" },
        { time: "18:00", title: "Akşam Haberleri", description: "Akşam haber bülteni" },
        { time: "20:00", title: "Ana Haber", description: "Ana haber bülteni" },
        { time: "22:00", title: "Gece Haberleri", description: "Gece haber bülteni" }
    ],
    32: [ // TELE1
        { time: "06:00", title: "TELE1 Sabah", description: "Sabah haberleri" },
        { time: "08:00", title: "Gün Ortası", description: "Günlük haberler" },
        { time: "10:00", title: "Haber Merkezi", description: "Canlı haber yayını" },
        { time: "12:00", title: "Öğle Haberleri", description: "Öğle haber bülteni" },
        { time: "14:00", title: "Dünya Haberleri", description: "Uluslararası haberler" },
        { time: "16:00", title: "Ekonomi Bülteni", description: "Ekonomi haberleri" },
        { time: "18:00", title: "Akşam Haberleri", description: "Akşam haber bülteni" },
        { time: "20:00", title: "Ana Haber", description: "Ana haber bülteni" },
        { time: "22:00", title: "Gece Haberleri", description: "Gece haber bülteni" }
    ],
    33: [ // Ulusal Kanal
        { time: "06:00", title: "Ulusal Sabah", description: "Sabah haberleri" },
        { time: "08:00", title: "Gün Ortası", description: "Günlük haberler" },
        { time: "10:00", title: "Haber Merkezi", description: "Canlı haber yayını" },
        { time: "12:00", title: "Öğle Haberleri", description: "Öğle haber bülteni" },
        { time: "14:00", title: "Dünya Haberleri", description: "Uluslararası haberler" },
        { time: "16:00", title: "Ekonomi Bülteni", description: "Ekonomi haberleri" },
        { time: "18:00", title: "Akşam Haberleri", description: "Akşam haber bülteni" },
        { time: "20:00", title: "Ana Haber", description: "Ana haber bülteni" },
        { time: "22:00", title: "Gece Haberleri", description: "Gece haber bülteni" }
    ],
    34: [ // KRT TV
        { time: "06:00", title: "KRT Sabah", description: "Sabah haberleri" },
        { time: "08:00", title: "Gün Ortası", description: "Günlük haberler" },
        { time: "10:00", title: "Haber Merkezi", description: "Canlı haber yayını" },
        { time: "12:00", title: "Öğle Haberleri", description: "Öğle haber bülteni" },
        { time: "14:00", title: "Dünya Haberleri", description: "Uluslararası haberler" },
        { time: "16:00", title: "Ekonomi Bülteni", description: "Ekonomi haberleri" },
        { time: "18:00", title: "Akşam Haberleri", description: "Akşam haber bülteni" },
        { time: "20:00", title: "Ana Haber", description: "Ana haber bülteni" },
        { time: "22:00", title: "Gece Haberleri", description: "Gece haber bülteni" }
    ],
    // Duplicate kanallar için program verileri
    50: [ // TRT Haber (Duplicate)
        { time: "00:00", title: "Haber Bülteni", description: "Güncel haberler" },
        { time: "02:00", title: "Ekonomi Haberleri", description: "Ekonomi ve finans haberleri" },
        { time: "04:00", title: "Dünya Haberleri", description: "Uluslararası gelişmeler" },
        { time: "06:00", title: "Sabah Haberleri", description: "Günün ilk haberleri" },
        { time: "08:00", title: "Ekonomi Raporu", description: "Detaylı ekonomi analizi" },
        { time: "10:00", title: "Gün Ortası", description: "Öğle haberleri" },
        { time: "12:00", title: "Haber Merkezi", description: "Canlı haber yayını" },
        { time: "14:00", title: "Ekonomi Bülteni", description: "Ekonomi haberleri" },
        { time: "16:00", title: "Dünya Raporu", description: "Uluslararası haberler" },
        { time: "18:00", title: "Akşam Haberleri", description: "Günün özeti" },
        { time: "20:00", title: "Ana Haber", description: "Günün en önemli haberleri" },
        { time: "22:00", title: "Gece Haberleri", description: "Gece bülteni" }
    ],
    51: [ // HaberTürk (Duplicate)
        { time: "06:00", title: "Habertürk Sabah", description: "Sabah haberleri" },
        { time: "08:00", title: "Ekonomi Raporu", description: "Ekonomi haberleri" },
        { time: "10:00", title: "Gün Ortası", description: "Öğle haberleri" },
        { time: "12:00", title: "Habertürk Haber", description: "Haber bülteni" },
        { time: "14:00", title: "Dünya Haberleri", description: "Uluslararası haberler" },
        { time: "16:00", title: "Ekonomi Bülteni", description: "Ekonomi analizi" },
        { time: "18:00", title: "Akşam Haberleri", description: "Akşam bülteni" },
        { time: "20:00", title: "Ana Haber", description: "Ana haber bülteni" },
        { time: "22:00", title: "Gece Haberleri", description: "Gece bülteni" }
    ],
    52: [ // TRT Spor (Duplicate)
        { time: "06:00", title: "Spor Haberleri", description: "Günün spor haberleri" },
        { time: "08:00", title: "Spor Merkezi", description: "Spor programı" },
        { time: "10:00", title: "Futbol Analiz", description: "Futbol değerlendirmeleri" },
        { time: "12:00", title: "Spor Bülteni", description: "Öğle spor haberleri" },
        { time: "14:00", title: "Canlı Maç", description: "Süper Lig maçı" },
        { time: "16:00", title: "Maç Sonrası", description: "Maç değerlendirmesi" },
        { time: "18:00", title: "Spor Haberleri", description: "Akşam spor bülteni" },
        { time: "20:00", title: "Spor Merkezi", description: "Akşam spor programı" },
        { time: "22:00", title: "Gece Spor", description: "Gece spor haberleri" }
    ],
    53: [ // TRT Müzik (Duplicate)
        { time: "06:00", title: "Sabah Müziği", description: "Sabah müzik kuşağı" },
        { time: "08:00", title: "Türk Halk Müziği", description: "Halk müziği programı" },
        { time: "10:00", title: "Klasik Müzik", description: "Klasik müzik kuşağı" },
        { time: "12:00", title: "Öğle Müziği", description: "Öğle müzik programı" },
        { time: "14:00", title: "Türk Sanat Müziği", description: "Sanat müziği programı" },
        { time: "16:00", title: "Pop Müzik", description: "Pop müzik kuşağı" },
        { time: "18:00", title: "Akşam Müziği", description: "Akşam müzik programı" },
        { time: "20:00", title: "Müzik Gecesi", description: "Gece müzik kuşağı" },
        { time: "22:00", title: "Gece Müziği", description: "Gece müzik programı" }
    ],
    54: [ // TRT 1 (Duplicate)
        { time: "06:00", title: "TRT 1 Günaydın", description: "Sabah haberleri ve günlük program" },
        { time: "08:00", title: "Çocuk Kuşağı", description: "Çocuklar için eğitici programlar" },
        { time: "10:00", title: "Gün Ortası Haberleri", description: "Günün önemli gelişmeleri" },
        { time: "12:00", title: "Öğle Haberleri", description: "Detaylı haber bülteni" },
        { time: "14:00", title: "Türk Dizisi", description: "Popüler Türk dizisi" },
        { time: "16:00", title: "Çocuk Kuşağı", description: "Çocuklar için eğlenceli programlar" },
        { time: "18:00", title: "Akşam Haberleri", description: "Günün sonu haberleri" },
        { time: "20:00", title: "Ana Haber Bülteni", description: "Günün en önemli haberleri" },
        { time: "22:00", title: "Gece Haberleri", description: "Gece haber bülteni" },
        { time: "23:00", title: "Gece Kuşağı", description: "Gece programları" }
    ],
    55: [ // TRT 2 (Duplicate)
        { time: "06:00", title: "Kültür Sabah", description: "Sabah kültür programı" },
        { time: "08:00", title: "Sanat Programı", description: "Sanat ve kültür" },
        { time: "10:00", title: "Belgesel Kuşağı", description: "Belgesel programları" },
        { time: "12:00", title: "Kültür Haberleri", description: "Kültür haberleri" },
        { time: "14:00", title: "Tarih Programı", description: "Tarihi içerikler" },
        { time: "16:00", title: "Sanat Belgeseli", description: "Sanat belgeselleri" },
        { time: "18:00", title: "Kültür Akşam", description: "Akşam kültür programı" },
        { time: "20:00", title: "Ana Kültür", description: "Ana kültür programı" },
        { time: "22:00", title: "Gece Kültür", description: "Gece kültür programı" }
    ],
    56: [ // TRT 3 (Duplicate)
        { time: "06:00", title: "Spor Haberleri", description: "Günün spor haberleri" },
        { time: "08:00", title: "Spor Merkezi", description: "Spor programı" },
        { time: "10:00", title: "Futbol Analiz", description: "Futbol değerlendirmeleri" },
        { time: "12:00", title: "Spor Bülteni", description: "Öğle spor haberleri" },
        { time: "14:00", title: "Canlı Maç", description: "Süper Lig maçı" },
        { time: "16:00", title: "Maç Sonrası", description: "Maç değerlendirmesi" },
        { time: "18:00", title: "Spor Haberleri", description: "Akşam spor bülteni" },
        { time: "20:00", title: "Spor Merkezi", description: "Akşam spor programı" },
        { time: "22:00", title: "Gece Spor", description: "Gece spor haberleri" }
    ],
    57: [ // TRT 4K (Duplicate)
        { time: "06:00", title: "TRT 4K Günaydın", description: "Sabah haberleri ve günlük program" },
        { time: "08:00", title: "Çocuk Kuşağı", description: "Çocuklar için eğitici programlar" },
        { time: "10:00", title: "Gün Ortası Haberleri", description: "Günün önemli gelişmeleri" },
        { time: "12:00", title: "Öğle Haberleri", description: "Detaylı haber bülteni" },
        { time: "14:00", title: "Türk Dizisi", description: "Popüler Türk dizisi" },
        { time: "16:00", title: "Çocuk Kuşağı", description: "Çocuklar için eğlenceli programlar" },
        { time: "18:00", title: "Akşam Haberleri", description: "Günün sonu haberleri" },
        { time: "20:00", title: "Ana Haber Bülteni", description: "Günün en önemli haberleri" },
        { time: "22:00", title: "Gece Haberleri", description: "Gece haber bülteni" },
        { time: "23:00", title: "Gece Kuşağı", description: "Gece programları" }
    ],
    58: [ // TRT World (Duplicate)
        { time: "06:00", title: "TRT World Morning", description: "Morning news" },
        { time: "08:00", title: "Economy Report", description: "Economic analysis" },
        { time: "10:00", title: "Midday News", description: "Midday news" },
        { time: "12:00", title: "TRT World News", description: "News bulletin" },
        { time: "14:00", title: "World News", description: "International news" },
        { time: "16:00", title: "Economy Bulletin", description: "Economic analysis" },
        { time: "18:00", title: "Evening News", description: "Evening bulletin" },
        { time: "20:00", title: "Main News", description: "Main news bulletin" },
        { time: "22:00", title: "Night News", description: "Night bulletin" }
    ],
    59: [ // TRT Arabi (Duplicate)
        { time: "06:00", title: "TRT Arabi Sabah", description: "أخبار الصباح" },
        { time: "08:00", title: "تقرير الاقتصاد", description: "تحليل اقتصادي" },
        { time: "10:00", title: "منتصف النهار", description: "أخبار منتصف النهار" },
        { time: "12:00", title: "أخبار TRT Arabi", description: "نشرة أخبار" },
        { time: "14:00", title: "أخبار العالم", description: "أخبار دولية" },
        { time: "16:00", title: "نشرة الاقتصاد", description: "تحليل اقتصادي" },
        { time: "18:00", title: "أخبار المساء", description: "نشرة مسائية" },
        { time: "20:00", title: "الأخبار الرئيسية", description: "النشرة الرئيسية" },
        { time: "22:00", title: "أخبار الليل", description: "نشرة ليلية" }
    ],
    60: [ // TRT Türk (Duplicate)
        { time: "06:00", title: "TRT Türk Sabah", description: "Sabah haberleri" },
        { time: "08:00", title: "Ekonomi Raporu", description: "Ekonomi haberleri" },
        { time: "10:00", title: "Gün Ortası", description: "Öğle haberleri" },
        { time: "12:00", title: "TRT Türk Haber", description: "Haber bülteni" },
        { time: "14:00", title: "Dünya Haberleri", description: "Uluslararası haberler" },
        { time: "16:00", title: "Ekonomi Bülteni", description: "Ekonomi analizi" },
        { time: "18:00", title: "Akşam Haberleri", description: "Akşam bülteni" },
        { time: "20:00", title: "Ana Haber", description: "Ana haber bülteni" },
        { time: "22:00", title: "Gece Haberleri", description: "Gece bülteni" }
    ],
    61: [ // TRT Avaz (Duplicate)
        { time: "06:00", title: "TRT Avaz Sabah", description: "Sabah haberleri" },
        { time: "08:00", title: "Ekonomi Raporu", description: "Ekonomi haberleri" },
        { time: "10:00", title: "Gün Ortası", description: "Öğle haberleri" },
        { time: "12:00", title: "TRT Avaz Haber", description: "Haber bülteni" },
        { time: "14:00", title: "Dünya Haberleri", description: "Uluslararası haberler" },
        { time: "16:00", title: "Ekonomi Bülteni", description: "Ekonomi analizi" },
        { time: "18:00", title: "Akşam Haberleri", description: "Akşam bülteni" },
        { time: "20:00", title: "Ana Haber", description: "Ana haber bülteni" },
        { time: "22:00", title: "Gece Haberleri", description: "Gece bülteni" }
    ],
    62: [ // TRT Kurdî (Duplicate)
        { time: "06:00", title: "TRT Kurdî Sabah", description: "Nûçeyên sibê" },
        { time: "08:00", title: "Rapora Aborî", description: "Nûçeyên aborî" },
        { time: "10:00", title: "Nîvro", description: "Nûçeyên nîvro" },
        { time: "12:00", title: "Nûçeyên TRT Kurdî", description: "Bulletina nûçeyan" },
        { time: "14:00", title: "Nûçeyên Cîhanê", description: "Nûçeyên navneteweyî" },
        { time: "16:00", title: "Bulletina Aborî", description: "Analîza aborî" },
        { time: "18:00", title: "Nûçeyên Êvarê", description: "Bulletina êvarê" },
        { time: "20:00", title: "Nûçeyên Sereke", description: "Bulletina sereke" },
        { time: "22:00", title: "Nûçeyên Şevê", description: "Bulletina şevê" }
    ],
    63: [ // TRT Çocuk (Duplicate)
        { time: "06:00", title: "Sabah Çizgi Film", description: "Çocuk çizgi filmleri" },
        { time: "08:00", title: "Eğitici Program", description: "Eğitici içerikler" },
        { time: "10:00", title: "Çizgi Film Kuşağı", description: "Popüler çizgi filmler" },
        { time: "12:00", title: "Öğle Çizgi Film", description: "Öğle çizgi film kuşağı" },
        { time: "14:00", title: "Eğitici İçerik", description: "Eğitici programlar" },
        { time: "16:00", title: "Akşam Çizgi Film", description: "Akşam çizgi film kuşağı" },
        { time: "18:00", title: "Çocuk Programı", description: "Çocuk programları" },
        { time: "20:00", title: "Gece Çizgi Film", description: "Gece çizgi film kuşağı" },
        { time: "22:00", title: "Gece Programı", description: "Gece programları" }
    ],
    64: [ // TRT Belgesel (Duplicate)
        { time: "06:00", title: "Doğa Belgeseli", description: "Doğa ve vahşi yaşam" },
        { time: "08:00", title: "Tarih Belgeseli", description: "Tarihi belgeseller" },
        { time: "10:00", title: "Bilim Belgeseli", description: "Bilimsel belgeseller" },
        { time: "12:00", title: "Kültür Belgeseli", description: "Kültür ve sanat" },
        { time: "14:00", title: "Coğrafya Belgeseli", description: "Coğrafi belgeseller" },
        { time: "16:00", title: "Teknoloji Belgeseli", description: "Teknoloji belgeselleri" },
        { time: "18:00", title: "Tarih Belgeseli", description: "Tarihi içerikler" },
        { time: "20:00", title: "Doğa Belgeseli", description: "Akşam doğa belgeseli" },
        { time: "22:00", title: "Bilim Belgeseli", description: "Gece bilim belgeseli" }
    ]
};

// DOM elementleri
const channelList = document.getElementById('channelList');
const searchInput = document.getElementById('searchInput');
const currentChannel = document.getElementById('currentChannel');
const channelDescription = document.getElementById('channelDescription');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const muteBtn = document.getElementById('muteBtn');
const programList = document.getElementById('programList');
const programDate = document.getElementById('programDate');
let currentChannelId = null;
let filteredChannels = [...channels];

function updateProgramDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    programDate.textContent = now.toLocaleDateString('tr-TR', options);
}

function createProgramGuide(channelId) {
    programList.innerHTML = '';
    const programs = programSchedules[channelId];
    if (!programs) {
        programList.innerHTML = '<div style="text-align: center; color: #718096; padding: 20px;">Bu kanal için yayın akışı bulunamadı.</div>';
        return;
    }
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    programs.forEach(program => {
        const programTime = program.time.split(':');
        const programMinutes = parseInt(programTime[0]) * 60 + parseInt(programTime[1]);
        const programItem = document.createElement('div');
        programItem.className = 'program-item';
        const isCurrent = Math.abs(currentTime - programMinutes) <= 30;
        if (isCurrent) programItem.classList.add('current');
        programItem.innerHTML = `
            <div class="program-time">${program.time}</div>
            <div class="program-title">${program.title}</div>
            <div class="program-description">${program.description}</div>
        `;
        programList.appendChild(programItem);
    });
}

function createChannelList(channelsToShow = channels) {
    channelList.innerHTML = '';
    channelsToShow.forEach(channel => {
        const channelItem = document.createElement('div');
        channelItem.className = 'channel-item';
        channelItem.dataset.channelId = channel.id;
        channelItem.innerHTML = `
            <img src="${channel.logo}" alt="${channel.name}" onerror="this.onerror=null;this.src='https://via.placeholder.com/56x56/667eea/ffffff?text=${channel.name.charAt(0)}'">
            <div class="channel-info">
                <div class="channel-name">${channel.name}</div>
                <div class="channel-category">${channel.category}</div>
            </div>
        `;
        channelItem.addEventListener('click', () => selectChannel(channel));
        channelList.appendChild(channelItem);
    });
}

function selectChannel(channel) {
    document.querySelectorAll('.channel-item.active').forEach(item => item.classList.remove('active'));
    const selectedItem = document.querySelector(`[data-channel-id="${channel.id}"]`);
    if (selectedItem) selectedItem.classList.add('active');
    currentChannelId = channel.id;
    const videoWrapper = document.getElementById('videoWrapper');
    createProgramGuide(channel.id);
    let externalBtnHtml = '';
    if (channel.youtubeUrl) {
        const videoId = channel.youtubeUrl.split('v=')[1];
        videoWrapper.innerHTML = `<iframe id="youtubeIframe" width="100%" height="400" src="https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1&playsinline=1" frameborder="0" allowfullscreen allow="autoplay; encrypted-media; fullscreen"></iframe>\n<div id='externalWatchBtn'></div>`;
        externalBtnHtml = `<a href='${channel.youtubeUrl}' target='_blank' style='display:inline-block;padding:12px 24px;background:#e53e3e;color:#fff;border-radius:8px;text-decoration:none;font-weight:600;margin:16px 0 0 0;'>YouTube'da İzle</a>`;
        currentChannel.textContent = channel.name;
        channelDescription.innerHTML = channel.description;
        document.getElementById('externalWatchBtn').innerHTML = externalBtnHtml;
        updateControlButtons('youtube', channel.youtubeUrl);
        return;
    } else if (channel.webUrl) {
        videoWrapper.innerHTML = `
            <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:400px;background:#f7fafc;border-radius:10px;border:2px dashed #cbd5e0;">
                <i class="fas fa-external-link-alt" style="font-size:48px;color:#667eea;margin-bottom:20px;"></i>
                <h3 style="color:#4a5568;margin-bottom:10px;">Web Sitesinde İzleyin</h3>
                <p style="color:#718096;text-align:center;margin-bottom:20px;">Bu kanal web sitesi üzerinden yayın yapmaktadır.<br>İzlemek için aşağıdaki butona tıklayın.</p>
                <a href='${channel.webUrl}' target='_blank' style='display:inline-block;padding:12px 24px;background:#3182ce;color:#fff;border-radius:8px;text-decoration:none;font-weight:600;'>Web'de İzle</a>
            </div>
        `;
        currentChannel.textContent = channel.name;
        channelDescription.innerHTML = channel.description;
        updateControlButtons('web', channel.webUrl);
        return;
    }
    if (!channel.streamUrl) {
        videoWrapper.innerHTML = '';
        currentChannel.textContent = channel.name + ' - Yayın Hatası';
        channelDescription.textContent = 'Bu kanal şu anda yayında değil.';
        return;
    }
    videoWrapper.innerHTML = `<video id="videoPlayer" controls style="width:100%;height:400px;border-radius:10px;background:#000;"></video>\n<div id='externalWatchBtn'></div>`;
    currentChannel.textContent = `${channel.name} - Yükleniyor...`;
    channelDescription.textContent = channel.description;
    document.getElementById('externalWatchBtn').innerHTML = '';
    const videoPlayer = document.getElementById('videoPlayer');
    if (window.hls) { window.hls.destroy(); window.hls = null; }
    if (videoPlayer.canPlayType('application/vnd.apple.mpegurl')) {
        videoPlayer.src = channel.streamUrl;
    } else if (window.Hls && Hls.isSupported()) {
        window.hls = new Hls();
        window.hls.loadSource(channel.streamUrl);
        window.hls.attachMedia(videoPlayer);
    } else {
        videoPlayer.src = '';
        currentChannel.textContent = `${channel.name} - Yayın Hatası`;
        channelDescription.textContent = 'Tarayıcınız bu yayını desteklemiyor. Lütfen farklı bir tarayıcı veya cihaz deneyin.';
        return;
    }
    videoPlayer.addEventListener('canplay', () => { currentChannel.textContent = channel.name; });
    videoPlayer.addEventListener('error', () => { currentChannel.textContent = `${channel.name} - Yayın Hatası`; channelDescription.textContent = 'Bu kanal şu anda yayında değil veya erişim sağlanamıyor.'; });
    videoPlayer.addEventListener('stalled', () => { currentChannel.textContent = `${channel.name} - Bağlantı Sorunu`; channelDescription.textContent = 'Video yükleme durdu. Lütfen internet bağlantınızı kontrol edin.'; });
    videoPlayer.addEventListener('contextmenu', e => e.preventDefault());
    const playPromise = videoPlayer.play();
    if (playPromise !== undefined) {
        playPromise.then(() => { currentChannel.textContent = channel.name; }).catch(() => {
            currentChannel.textContent = `${channel.name} - Yayın bulunamadı`;
            channelDescription.textContent = 'Bu kanal şu anda yayında değil veya erişim sağlanamıyor.';
            videoPlayer.src = '';
        });
    }
    updateControlButtons('video');
}

function filterChannels(searchTerm) {
    filteredChannels = channels.filter(channel => channel.name.toLowerCase().includes(searchTerm.toLowerCase()) || channel.category.toLowerCase().includes(searchTerm.toLowerCase()));
    createChannelList(filteredChannels);
}

searchInput.addEventListener('input', e => filterChannels(e.target.value));
fullscreenBtn.addEventListener('click', () => {
    const videoPlayer = document.getElementById('videoPlayer');
    const youtubeIframe = document.getElementById('youtubeIframe');
    const webIframe = document.getElementById('webIframe');
    if (videoPlayer && videoPlayer.src) {
        if (videoPlayer.requestFullscreen) videoPlayer.requestFullscreen();
    } else if (youtubeIframe) {
        if (youtubeIframe.requestFullscreen) youtubeIframe.requestFullscreen();
    } else if (webIframe) {
        if (webIframe.requestFullscreen) webIframe.requestFullscreen();
    }
});

function updateControlButtons(type, url) {
    if (type === 'youtube') {
        muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i> Ses (YouTube)';
        muteBtn.onclick = () => {
            const youtubeIframe = document.getElementById('youtubeIframe');
            if (youtubeIframe) {
                const currentUrl = youtubeIframe.src;
                const isMuted = currentUrl.includes('mute=1');
                const newUrl = isMuted ? currentUrl.replace('mute=1', 'mute=0') : currentUrl.replace('mute=0', 'mute=1');
                youtubeIframe.src = newUrl;
                muteBtn.innerHTML = isMuted ? '<i class="fas fa-volume-up"></i> Ses (YouTube)' : '<i class="fas fa-volume-mute"></i> Ses (YouTube)';
            }
        };
        fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i> Tam Ekran (YouTube)';
    } else if (type === 'web') {
        muteBtn.innerHTML = '<i class="fas fa-info-circle"></i> Bilgi';
        muteBtn.onclick = () => { 
            alert('Bu kanal web sitesi üzerinden yayın yapmaktadır. Ses kontrolü için web sitesini ziyaret edin.'); 
        };
        fullscreenBtn.innerHTML = '<i class="fas fa-external-link-alt"></i> Web\'de Aç';
        fullscreenBtn.onclick = () => {
            if (url) window.open(url, '_blank');
        };
    } else {
        muteBtn.innerHTML = '<i class="fas fa-volume-up"></i> Ses';
        muteBtn.onclick = () => {
            const videoPlayer = document.getElementById('videoPlayer');
            if (videoPlayer && videoPlayer.src) {
                if (videoPlayer.muted) {
                    videoPlayer.muted = false;
                    muteBtn.innerHTML = '<i class="fas fa-volume-up"></i> Ses';
                } else {
                    videoPlayer.muted = true;
                    muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i> Ses';
                }
            }
        };
        fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i> Tam Ekran';
    }
}

document.addEventListener('keydown', e => {
    const videoPlayer = document.getElementById('videoPlayer');
    const youtubeIframe = document.getElementById('youtubeIframe');
    const webIframe = document.getElementById('webIframe');
    switch(e.key) {
        case ' ':
            e.preventDefault();
            if (videoPlayer && videoPlayer.src) {
                if (videoPlayer.paused) videoPlayer.play(); else videoPlayer.pause();
            }
            break;
        case 'f': case 'F':
            e.preventDefault();
            if (videoPlayer && videoPlayer.src && videoPlayer.requestFullscreen) videoPlayer.requestFullscreen();
            else if (youtubeIframe && youtubeIframe.requestFullscreen) youtubeIframe.requestFullscreen();
            else if (webIframe && webIframe.requestFullscreen) webIframe.requestFullscreen();
            break;
        case 'm': case 'M':
            e.preventDefault();
            if (videoPlayer && videoPlayer.src) {
                videoPlayer.muted = !videoPlayer.muted;
                muteBtn.innerHTML = videoPlayer.muted ? '<i class="fas fa-volume-mute"></i> Ses' : '<i class="fas fa-volume-up"></i> Ses';
            } else if (youtubeIframe) {
                const currentUrl = youtubeIframe.src;
                const isMuted = currentUrl.includes('mute=1');
                const newUrl = isMuted ? currentUrl.replace('mute=1', 'mute=0') : currentUrl.replace('mute=0', 'mute=1');
                youtubeIframe.src = newUrl;
                muteBtn.innerHTML = isMuted ? '<i class="fas fa-volume-up"></i> Ses (YouTube)' : '<i class="fas fa-volume-mute"></i> Ses (YouTube)';
            }
            break;
    }
});
document.addEventListener('keydown', e => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
        const currentIndex = filteredChannels.findIndex(ch => ch.id === currentChannelId);
        let newIndex;
        if (e.key === 'ArrowUp') newIndex = currentIndex > 0 ? currentIndex - 1 : filteredChannels.length - 1;
        else newIndex = currentIndex < filteredChannels.length - 1 ? currentIndex + 1 : 0;
        if (filteredChannels[newIndex]) selectChannel(filteredChannels[newIndex]);
    }
});
async function fetchKapalicarsi() {
    try {
        const res = await fetch('https://corsproxy.io/?https://canlidoviz.com/altin-fiyatlari/kapali-carsi');
        const html = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        function getValue(label) {
            const td = Array.from(doc.querySelectorAll('td')).find(td => td.textContent.trim().toLowerCase().includes(label));
            return td ? td.nextElementSibling?.textContent.trim() : null;
        }
        const dolar = getValue('dolar');
        const euro = getValue('euro');
        const gram = getValue('gram altın');
        const ceyrek = getValue('çeyrek altın');
        document.getElementById('kapalicarsiInfo').textContent =
            `Dolar: ${dolar || '-'} ₺ | Euro: ${euro || '-'} ₺ | Gram Altın: ${gram || '-'} ₺ | Çeyrek Altın: ${ceyrek || '-'} ₺`;
    } catch (e) {
        document.getElementById('kapalicarsiInfo').textContent = 'Kapalıçarşı verisi alınamadı';
    }
}
document.addEventListener('DOMContentLoaded', () => {
    createChannelList();
    updateProgramDate();
    fetchKapalicarsi();
    // Hava durumu
    fetch('https://api.open-meteo.com/v1/forecast?latitude=41.01&longitude=28.97&current_weather=true&hourly=temperature_2m,weathercode&timezone=auto')
        .then(r => r.json())
        .then(data => {
            const w = data.current_weather;
            const temp = Math.round(w.temperature);
            const code = w.weathercode;
            let desc = '';
            switch(code) {
                case 0: desc = 'Açık'; break;
                case 1: case 2: case 3: desc = 'Parçalı Bulutlu'; break;
                case 45: case 48: desc = 'Sisli'; break;
                case 51: case 53: case 55: desc = 'Çiseli'; break;
                case 61: case 63: case 65: desc = 'Yağmurlu'; break;
                case 71: case 73: case 75: desc = 'Karlı'; break;
                case 80: case 81: case 82: desc = 'Sağanak'; break;
                case 95: desc = 'Fırtına'; break;
                default: desc = 'Bilinmiyor';
            }
            document.getElementById('weatherInfo').textContent = `İstanbul: ${temp}°C, ${desc}`;
        })
        .catch(() => { document.getElementById('weatherInfo').textContent = 'Hava durumu alınamadı'; });
    // Kur bilgisi
    fetch('https://api.exchangerate.host/latest?base=TRY&symbols=USD,EUR')
        .then(r => r.json())
        .then(data => {
            const usd = (1 / data.rates.USD).toFixed(2);
            const eur = (1 / data.rates.EUR).toFixed(2);
            document.getElementById('currencyInfo').textContent = `1 USD = ${usd} ₺ | 1 EUR = ${eur} ₺`;
        })
        .catch(() => { document.getElementById('currencyInfo').textContent = 'Kur alınamadı'; });
    // selectChannel(channels[0]); // İsterseniz ilk kanalı otomatik seçebilirsiniz
});
window.addEventListener('resize', () => {});
window.addEventListener('error', e => { console.log('Genel hata:', e); }); 