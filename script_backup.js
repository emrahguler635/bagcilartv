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
    ]
};

// DOM elementleri
const channelList = document.getElementById('channelList');
const searchInput = document.getElementById('searchInput');
const videoPlayer = document.getElementById('videoPlayer');
const currentChannel = document.getElementById('currentChannel');
const channelDescription = document.getElementById('channelDescription');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const muteBtn = document.getElementById('muteBtn');
const programList = document.getElementById('programList');
const programDate = document.getElementById('programDate');

let currentChannelId = null;
let filteredChannels = [...channels];

// Tarih formatını güncelle
function updateProgramDate() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    programDate.textContent = now.toLocaleDateString('tr-TR', options);
}

// Yayın akışını oluştur
function createProgramGuide(channelId) {
    programList.innerHTML = '';
    
    const programs = programSchedules[channelId];
    if (!programs) {
        programList.innerHTML = '<div style="text-align: center; color: #718096; padding: 20px;">Bu kanal için yayın akışı bulunamadı.</div>';
        return;
    }
    
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes(); // Dakika cinsinden şu anki zaman
    
    programs.forEach(program => {
        const programTime = program.time.split(':');
        const programMinutes = parseInt(programTime[0]) * 60 + parseInt(programTime[1]);
        
        const programItem = document.createElement('div');
        programItem.className = 'program-item';
        
        // Şu anki programı vurgula (30 dakika tolerans ile)
        const isCurrent = Math.abs(currentTime - programMinutes) <= 30;
        if (isCurrent) {
            programItem.classList.add('current');
        }
        
        programItem.innerHTML = `
            <div class="program-time">${program.time}</div>
            <div class="program-title">${program.title}</div>
            <div class="program-description">${program.description}</div>
        `;
        
        programList.appendChild(programItem);
    });
}

// Kanal listesini oluştur
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

// Kanal seç
function selectChannel(channel) {
    // Önceki aktif kanalı temizle
    const activeItems = document.querySelectorAll('.channel-item.active');
    activeItems.forEach(item => item.classList.remove('active'));
    
    // Yeni kanalı aktif yap
    const selectedItem = document.querySelector(`[data-channel-id="${channel.id}"]`);
    if (selectedItem) {
        selectedItem.classList.add('active');
    }
    
    currentChannelId = channel.id;
    const videoWrapper = document.getElementById('videoWrapper');

    // Yayın akışını güncelle
    createProgramGuide(channel.id);

    // Eğer YouTube veya web linki varsa, video oynatıcıyı iframe ile göster
    if (channel.youtubeUrl) {
        videoWrapper.innerHTML = `<iframe id="youtubeIframe" width="100%" height="400" src="https://www.youtube.com/embed/${channel.youtubeUrl.split('v=')[1]}?autoplay=1&mute=1" frameborder="0" allowfullscreen allow="autoplay; encrypted-media"></iframe>`;
        currentChannel.textContent = channel.name;
        channelDescription.innerHTML = `${channel.description}<br><br><a href='${channel.youtubeUrl}' target='_blank' style='display:inline-block;padding:12px 24px;background:#e53e3e;color:#fff;border-radius:8px;text-decoration:none;font-weight:600;margin-top:10px;'>YouTube'da İzle</a>`;
        
        // YouTube için özel kontrol butonları
        updateControlButtons('youtube', channel.youtubeUrl);
        return;
    } else if (channel.webUrl) {
        videoWrapper.innerHTML = `<iframe id="webIframe" width="100%" height="400" src="${channel.webUrl}" frameborder="0" allowfullscreen sandbox="allow-same-origin allow-scripts allow-popups"></iframe>`;
        currentChannel.textContent = channel.name;
        channelDescription.innerHTML = `${channel.description}<br><br><a href='${channel.webUrl}' target='_blank' style='display:inline-block;padding:12px 24px;background:#3182ce;color:#fff;border-radius:8px;text-decoration:none;font-weight:600;margin-top:10px;'>Web'de İzle</a>`;
        
        // Web için özel kontrol butonları
        updateControlButtons('web', channel.webUrl);
        return;
    }

    // Eğer streamUrl yoksa video oynatıcıyı gizle
    if (!channel.streamUrl) {
        videoWrapper.innerHTML = '';
        currentChannel.textContent = channel.name + ' - Yayın Hatası';
        channelDescription.textContent = 'Bu kanal şu anda yayında değil.';
        return;
    }

    // Video player'ı her seçimde yeniden oluştur
    videoWrapper.innerHTML = `<video id="videoPlayer" controls style="width:100%;height:400px;border-radius:10px;background:#000;"></video>`;
    const videoPlayer = document.getElementById('videoPlayer');

    currentChannel.textContent = `${channel.name} - Yükleniyor...`;
    channelDescription.textContent = channel.description;

    if (window.hls) {
        window.hls.destroy();
        window.hls = null;
    }

    // HLS.js veya native desteği kontrolü
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

    // Oynatma ve hata yönetimi
    videoPlayer.addEventListener('canplay', () => {
        currentChannel.textContent = channel.name;
    });
    videoPlayer.addEventListener('error', (e) => {
        currentChannel.textContent = `${channel.name} - Yayın Hatası`;
        channelDescription.textContent = 'Bu kanal şu anda yayında değil veya erişim sağlanamıyor.';
    });
    videoPlayer.addEventListener('stalled', () => {
        currentChannel.textContent = `${channel.name} - Bağlantı Sorunu`;
        channelDescription.textContent = 'Video yükleme durdu. Lütfen internet bağlantınızı kontrol edin.';
    });

    const playPromise = videoPlayer.play();
    if (playPromise !== undefined) {
        playPromise.then(() => {
            currentChannel.textContent = channel.name;
        }).catch(error => {
            currentChannel.textContent = `${channel.name} - Yayın bulunamadı`;
            channelDescription.textContent = 'Bu kanal şu anda yayında değil veya erişim sağlanamıyor.';
            videoPlayer.src = '';
        });
    }
}

// Arama fonksiyonu
function filterChannels(searchTerm) {
    filteredChannels = channels.filter(channel => 
        channel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        channel.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    createChannelList(filteredChannels);
}

// Event listeners
searchInput.addEventListener('input', (e) => {
    filterChannels(e.target.value);
});

// Tam ekran butonu - genel handler
fullscreenBtn.addEventListener('click', () => {
    const videoPlayer = document.getElementById('videoPlayer');
    const youtubeIframe = document.getElementById('youtubeIframe');
    const webIframe = document.getElementById('webIframe');
    
    if (videoPlayer && videoPlayer.src) {
        // Normal video player için
        if (videoPlayer.requestFullscreen) {
            videoPlayer.requestFullscreen();
        } else if (videoPlayer.webkitRequestFullscreen) {
            videoPlayer.webkitRequestFullscreen();
        } else if (videoPlayer.msRequestFullscreen) {
            videoPlayer.msRequestFullscreen();
        }
    } else if (youtubeIframe) {
        // YouTube iframe için
        if (youtubeIframe.requestFullscreen) {
            youtubeIframe.requestFullscreen();
        } else if (youtubeIframe.webkitRequestFullscreen) {
            youtubeIframe.webkitRequestFullscreen();
        } else if (youtubeIframe.msRequestFullscreen) {
            youtubeIframe.msRequestFullscreen();
        }
    } else if (webIframe) {
        // Web iframe için
        if (webIframe.requestFullscreen) {
            webIframe.requestFullscreen();
        } else if (webIframe.webkitRequestFullscreen) {
            webIframe.webkitRequestFullscreen();
        } else if (webIframe.msRequestFullscreen) {
            webIframe.msRequestFullscreen();
        }
    }
});

// Video player event listeners - sadece normal video player için
document.addEventListener('DOMContentLoaded', () => {
    createChannelList();
    updateProgramDate();
    
    // Video player event listener'larını ekle
    const videoPlayer = document.getElementById('videoPlayer');
    if (videoPlayer) {
        videoPlayer.addEventListener('loadstart', () => {
            // Video yüklenmeye başladığında
        });

        videoPlayer.addEventListener('canplay', () => {
            // Video oynatılmaya hazır olduğunda
            const currentChannelData = channels.find(ch => ch.id === currentChannelId);
            if (currentChannelData) {
                currentChannel.textContent = currentChannelData.name;
            }
        });

        videoPlayer.addEventListener('error', (e) => {
            console.log('Video yükleme hatası:', e);
            const currentChannelData = channels.find(ch => ch.id === currentChannelId);
            if (currentChannelData) {
                currentChannel.textContent = `${currentChannelData.name} - Yayın Hatası`;
                channelDescription.textContent = 'Bu kanal şu anda yayında değil. Lütfen Demo kanalları deneyin.';
            }
        });

        videoPlayer.addEventListener('stalled', () => {
            console.log('Video yükleme durdu');
            const currentChannelData = channels.find(ch => ch.id === currentChannelId);
            if (currentChannelData) {
                currentChannel.textContent = `${currentChannelData.name} - Bağlantı Sorunu`;
                channelDescription.textContent = 'Video yükleme durdu. Lütfen internet bağlantınızı kontrol edin.';
            }
        });

        videoPlayer.addEventListener('contextmenu', (e) => {
            e.preventDefault(); // Sağ tık menüsünü engelle
        });
    }
    
    // İlk kanalı otomatik seç (isteğe bağlı)
    // selectChannel(channels[0]);
});

// Klavye kısayolları
document.addEventListener('keydown', (e) => {
    const videoPlayer = document.getElementById('videoPlayer');
    const youtubeIframe = document.getElementById('youtubeIframe');
    const webIframe = document.getElementById('webIframe');
    
    switch(e.key) {
        case ' ':
            e.preventDefault();
            if (videoPlayer && videoPlayer.src) {
                if (videoPlayer.paused) {
                    videoPlayer.play();
                } else {
                    videoPlayer.pause();
                }
            }
            break;
        case 'f':
        case 'F':
            e.preventDefault();
            if (videoPlayer && videoPlayer.src) {
                if (videoPlayer.requestFullscreen) {
                    videoPlayer.requestFullscreen();
                }
            } else if (youtubeIframe) {
                if (youtubeIframe.requestFullscreen) {
                    youtubeIframe.requestFullscreen();
                }
            } else if (webIframe) {
                if (webIframe.requestFullscreen) {
                    webIframe.requestFullscreen();
                }
            }
            break;
        case 'm':
        case 'M':
            e.preventDefault();
            if (videoPlayer && videoPlayer.src) {
                videoPlayer.muted = !videoPlayer.muted;
                muteBtn.innerHTML = videoPlayer.muted ? 
                    '<i class="fas fa-volume-mute"></i> Ses' : 
                    '<i class="fas fa-volume-up"></i> Ses';
            } else if (youtubeIframe) {
                // YouTube için ses kontrolü
                const currentUrl = youtubeIframe.src;
                const isMuted = currentUrl.includes('mute=1');
                const newUrl = isMuted ? currentUrl.replace('mute=1', 'mute=0') : currentUrl.replace('mute=0', 'mute=1');
                youtubeIframe.src = newUrl;
                
                muteBtn.innerHTML = isMuted ? 
                    '<i class="fas fa-volume-up"></i> Ses (YouTube)' : 
                    '<i class="fas fa-volume-mute"></i> Ses (YouTube)';
            }
            break;
    }
});

// Kanal değiştirme için ok tuşları
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
        const currentIndex = filteredChannels.findIndex(ch => ch.id === currentChannelId);
        let newIndex;
        
        if (e.key === 'ArrowUp') {
            newIndex = currentIndex > 0 ? currentIndex - 1 : filteredChannels.length - 1;
        } else {
            newIndex = currentIndex < filteredChannels.length - 1 ? currentIndex + 1 : 0;
        }
        
        if (filteredChannels[newIndex]) {
            selectChannel(filteredChannels[newIndex]);
        }
    }
});

// Responsive tasarım için ek kontroller
window.addEventListener('resize', () => {
    // Ekran boyutu değiştiğinde gerekli ayarlamalar
});

// Hata yakalama
window.addEventListener('error', (e) => {
    console.log('Genel hata:', e);
});

// Video player için ek özellikler
videoPlayer.addEventListener('contextmenu', (e) => {
    e.preventDefault(); // Sağ tık menüsünü engelle
});

// YouTube için özel kontrol butonları
function updateControlButtons(type, url) {
    if (type === 'youtube') {
        // YouTube için ses butonunu güncelle
        muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i> Ses (YouTube)';
        muteBtn.onclick = () => {
            const youtubeIframe = document.getElementById('youtubeIframe');
            if (youtubeIframe) {
                const currentUrl = youtubeIframe.src;
                const isMuted = currentUrl.includes('mute=1');
                const newUrl = isMuted ? currentUrl.replace('mute=1', 'mute=0') : currentUrl.replace('mute=0', 'mute=1');
                youtubeIframe.src = newUrl;
                
                muteBtn.innerHTML = isMuted ? 
                    '<i class="fas fa-volume-up"></i> Ses (YouTube)' : 
                    '<i class="fas fa-volume-mute"></i> Ses (YouTube)';
            }
        };
    } else if (type === 'web') {
        // Web için butonları güncelle
        muteBtn.innerHTML = '<i class="fas fa-volume-up"></i> Ses (Web)';
        muteBtn.onclick = () => {
            alert('Web kanalları için ses kontrolü web sitesi üzerinden yapılmalıdır.');
        };
    } else {
        // Normal video player için
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
    }
} 