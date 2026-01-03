// TV Kanalları verisi
const channels = [
    {
        id: 1,
        name: "TRT 1",
        category: "Ulusal",
        streamUrl: "https://tv-trt1.medya.trt.com.tr/master.m3u8",
        webUrl: "https://www.trtizle.com/canli-yayin/trt-1",
        logo: "logos/trt1.png",
        description: "Türkiye'nin ilk ulusal televizyon kanalı"
    },
    {
        id: 2,
        name: "TRT Haber",
        category: "Haber",
        streamUrl: "https://tv-trthaber.medya.trt.com.tr/master.m3u8",
        webUrl: "https://www.trtizle.com/canli-yayin/trt-haber",
        logo: "logos/trthaber.png",
        description: "7/24 haber kanalı"
    },
    {
        id: 3,
        name: "TRT Spor",
        category: "Spor",
        streamUrl: "https://tv-trtspor1.medya.trt.com.tr/master.m3u8",
        webUrl: "https://www.trtizle.com/canli-yayin/trt-spor",
        logo: "logos/trtspor.png",
        description: "Spor haberleri ve canlı maç yayınları"
    },
    {
        id: 4,
        name: "TRT Çocuk",
        category: "Çocuk",
        streamUrl: "https://tv-trtcocuk.medya.trt.com.tr/master.m3u8",
        webUrl: "https://www.trtizle.com/canli-yayin/trt-cocuk",
        logo: "logos/trtcocuk.png",
        description: "Çocuklar için eğitici ve eğlenceli içerik"
    },
    {
        id: 5,
        name: "TRT Belgesel",
        category: "Belgesel",
        streamUrl: "https://tv-trtbelgesel.medya.trt.com.tr/master.m3u8",
        webUrl: "https://www.trtizle.com/canli-yayin/trt-belgesel",
        logo: "logos/trtbelgesel.png",
        description: "Belgesel ve kültür programları"
    },
    {
        id: 6,
        name: "TRT Müzik",
        category: "Müzik",
        streamUrl: "https://tv-trtmuzik.medya.trt.com.tr/master.m3u8",
        webUrl: "https://www.trtizle.com/canli-yayin/trt-muzik",
        logo: "logos/trtmuzik.png",
        description: "Türk müziği ve kültür programları"
    },
    {
        id: 7,
        name: "TRT Avaz",
        category: "Uluslararası",
        streamUrl: "https://tv-trtavaz.medya.trt.com.tr/master.m3u8",
        webUrl: "https://www.trtizle.com/canli-yayin/trt-avaz",
        logo: "logos/trtavas.png",
        description: "Uluslararası Türkçe yayın kanalı"
    },
    {
        id: 8,
        name: "TRT Kurdî",
        category: "Yerel",
        streamUrl: "https://tv-trtkurdi.medya.trt.com.tr/master.m3u8",
        webUrl: "https://www.trtizle.com/canli-yayin/trt-kurdi",
        logo: "logos/trtkurdi.png",
        description: "Kürtçe yayın yapan kanal"
    },
    {
        id: 9,
        name: "TRT World",
        category: "Uluslararası",
        streamUrl: "https://tv-trtworld.medya.trt.com.tr/master.m3u8",
        webUrl: "https://www.trtizle.com/canli-yayin/trt-world",
        logo: "logos/trtworld.png",
        description: "İngilizce uluslararası haber kanalı"
    },
    {
        id: 10,
        name: "TRT Arabi",
        category: "Uluslararası",
        streamUrl: "https://tv-trtarabi.medya.trt.com.tr/master.m3u8",
        webUrl: "https://www.trtizle.com/canli-yayin/trt-arabi",
        logo: "logos/trtarabi.png",
        description: "Arapça uluslararası haber kanalı"
    },
    {
        id: 11,
        name: "TRT Türk",
        category: "Uluslararası",
        streamUrl: "https://tv-trtturk.medya.trt.com.tr/master.m3u8",
        webUrl: "https://www.trtizle.com/canli-yayin/trt-turk",
        logo: "logos/trtturk.png",
        description: "Türkçe uluslararası haber kanalı"
    },
    {
        id: 12,
        name: "TRT 2",
        category: "Kültür",
        streamUrl: "https://tv-trt2.medya.trt.com.tr/master.m3u8",
        webUrl: "https://www.trtizle.com/canli-yayin/trt-2",
        logo: "logos/trt2.png",
        description: "Kültür-sanat ve belgesel kanalı"
    },
    {
        id: 13,
        name: "TRT 3",
        category: "Spor",
        streamUrl: "https://tv-trt3.medya.trt.com.tr/master.m3u8",
        webUrl: "https://www.trtizle.com/canli-yayin/trt-3",
        logo: "logos/trt3.png",
        description: "Spor ve gençlik kanalı"
    },
    {
        id: 14,
        name: "TRT 4K",
        category: "Ulusal",
        streamUrl: "https://tv-trt4k.medya.trt.com.tr/master.m3u8",
        webUrl: "https://www.trtizle.com/canli-yayin/trt-4k",
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
        streamUrl: "",
        webUrl: "https://www.star.com.tr/canli-yayin",
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
        streamUrl: "",
        webUrl: "https://www.ntv.com.tr/canli-yayin/ntv",
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
        webUrl: "https://www.ahaber.com.tr/canli-yayin",
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
        youtubeUrl: "https://www.youtube.com/watch?v=7-Qf3g-0xEI",
        logo: "logos/mekke.png",
        description: "Mekke TV - Kabe'den canlı yayın. YouTube üzerinden izleyebilirsiniz."
    },
    {
        id: 29,
        name: "Medine TV",
        category: "Dini",
        streamUrl: "",
        youtubeUrl: "https://www.youtube.com/watch?v=F-QZqbWGuKs",
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
        webUrl: "https://halktv.com.tr/canli-yayin",
        logo: "logos/halktv.png",
        description: "Halk TV - Bağımsız haber kanalı"
    },
    {
        id: 32,
        name: "TELE1",
        category: "Haber",
        streamUrl: "",
        webUrl: "https://www.tele1.com.tr/canli-yayin",
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
        webUrl: "https://www.krttv.com.tr/canli-yayin",
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
        webUrl: "https://www.yirmidort.tv/canli-yayin",
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
        webUrl: "https://www.dreamtv.com.tr/canli-yayin",
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
    {
        id: 45,
        name: "Kanal 1",
        category: "Ulusal",
        streamUrl: "",
        webUrl: "https://www.kanal1.com.tr/",
        logo: "logos/kanal1.png",
        description: "Kanal 1 - Ulusal yayın kanalı (Canlı yayın şu anda mevcut değil)"
    },
    // Yeni Eklenen Ulusal Kanallar
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
        youtubeUrl: "https://www.youtube.com/watch?v=5Whk9MVTpI4",
        logo: "logos/cartoonnetwork.png",
        description: "Cartoon Network - Çizgi film kanalı"
    },
    {
        id: 49,
        name: "Disney Channel",
        category: "Çocuk",
        streamUrl: "",
        youtubeUrl: "https://www.youtube.com/watch?v=5Whk9MVTpI4",
        logo: "logos/disney.png",
        description: "Disney Channel - Çocuk eğlence kanalı"
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
    7: [ // TRT Avaz
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
    8: [ // TRT Kurdî
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
    9: [ // TRT World
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
    10: [ // TRT Arabi
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
    11: [ // TRT Türk
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
    12: [ // TRT 2
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
    13: [ // TRT 3
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
    14: [ // TRT 4K
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
    ]
};

// RSS Feed URL'leri - Güncel ve çalışan feed'ler
const AA_RSS_URL = 'https://www.aa.com.tr/tr/rss/default?cat=gundem';
const CNN_RSS_URL = 'https://www.cnnturk.com/feed/rss/all/news';

// Alternatif RSS Feed URL'leri (fallback)
const AA_RSS_URL_ALT = 'https://www.aa.com.tr/tr/rss/default?cat=ekonomi';
const CNN_RSS_URL_ALT = 'https://www.cnnturk.com/feed/rss/turkiye/news';

// Ek alternatif RSS feed'ler
const NTV_RSS_URL = 'https://www.ntv.com.tr/son-dakika.rss';
const HABERTURK_RSS_URL = 'https://www.haberturk.com/rss/kategori/gundem.xml';

// Fallback haberler (internet bağlantısı yoksa) - Daha detaylı ve açıklayıcı
const fallbackNews = [
    "İstanbul'da metro hatları genişletiliyor: 3 yeni istasyon hizmete açıldı",
    "Türkiye'nin ilk yerli elektrikli otomobil fabrikası kuruldu", 
    "Eğitimde dijital dönüşüm: 1 milyon öğrenciye tablet dağıtıldı",
    "Sağlık Bakanlığı: Yeni kanser tedavi merkezi açıldı",
    "Çevre ve Şehircilik Bakanlığı: Plastik poşet kullanımı %80 azaldı",
    "Galatasaray yeni transferini açıkladı: 15 milyon euro'luk anlaşma",
    "İstanbul Film Festivali başladı: 50 ülkeden filmler yarışıyor",
    "Tarımda teknoloji devrimi: Drone ile gübreleme sistemi",
    "Antalya turizmde rekor: 1 milyon turist ağırlandı",
    "Türkiye'nin uzay programı: İlk yerli uydu fırlatıldı",
    "İstanbul Boğazı'nda yeni köprü projesi onaylandı",
    "Teknoloji sektöründe istihdam artışı: 10 bin yeni iş imkanı",
    "Kültür ve Turizm Bakanlığı: Müzeler ücretsiz oldu",
    "Spor Toto Süper Lig'de şampiyonluk yarışı kızıştı",
    "Türkiye'nin ilk hibrit enerji santrali devreye alındı"
];

// Haber verilerini saklamak için global değişken
let currentNewsData = [
    "Atama kararları Resmi Gazete'de - Bazı kurum ile kuruluşlara ilişkin atama kararları, Resmi Gazete'nin bugünkü sayısında yayımlandı.",
    "Aydın'da sağanak nedeniyle trafikte aksama yaşandı - Aydın'da sağanağın etkisiyle Aydın-Denizli kara yoluna kadar gelen çamur nedeniyle trafikte aksama yaşandı.",
    "Kahramanmaraş'ta 4 büyüklüğünde deprem - Kahramanmaraş'ın Türkoğlu ilçesinde, saat 22.08'de 4 büyüklüğünde deprem meydana geldi.",
    "Gazze Mahkemesinde İsrail'in Gazze'de işlediği soykırımın ve ihlallerin tanıkları dinlendi - Gazze Mahkemesinin İstanbul'da düzenlenen nihai oturumu kapsamında, İsrail'in Gazze'de işlediği soykırıma, ağır insan hakları ve uluslararası hukuk ihlallerine ilişkin tanık ifadeleri dinlendi.",
    "İletişim Başkanı Duran'dan Cumhurbaşkanı Erdoğan'ın Körfez turuna ilişkin açıklama - İletişim Başkanı Duran, 'Bu ziyaretler, Sayın Cumhurbaşkanımızın vizyoner liderliğinde Türkiye'nin dostluk köprülerini güçlendiren, barış ve işbirliği eksenli dış politikasının bir kez daha somut bir yansıması olmuştur.' açıklamasında bulundu.",
    "Cumhurbaşkanı Erdoğan yurda döndü - Cumhurbaşkanı Recep Tayyip Erdoğan, Kuveyt, Katar ve Umman'ı kapsayan Körfez turundaki resmi temaslarını tamamlamasının ardından Türkiye'ye döndü.",
    "İstanbul'da beklenen gök gürültülü sağanak için sarı kodlu uyarı yapıldı - İstanbul Valiliği, Meteoroloji Genel Müdürlüğü verilerine göre bugün kent genelinde beklenen gök gürültülü sağanak için sarı kodlu meteorolojik uyarı yapıldığını bildirdi.",
    "HSK üyeliği için adaylar belli oldu - TBMM Anayasa ve Adalet komisyonları üyelerinden kurulu Karma Komisyon, Genel Kurulca Hakimler ve Savcılar Kuruluna seçilecek 1 üyenin üç katı adayı belirledi.",
    "Antalya'da sağanak hayatı olumsuz etkiledi - Antalya'nın Aksu ve Serik ilçelerinde sağanak sonrası yollar göle döndü, bazı araçlar yolda mahsur kaldı, seralarda maddi hasar oluştu.",
    "İstanbul'da trafik yoğunluğu yüzde 87'ye çıktı - Trafik yoğunluğu, Avrupa Yakası'nda yüzde 89'a, Anadolu Yakası'nda ise yüzde 85'e kadar yükseldi.",
    "İçişleri Bakanlığından 8 il için sarı kodlu sağanak uyarısı - İçişleri Bakanlığı, Manisa, Aydın, Edirne, Kırklareli, Tekirdağ, Balıkesir, İzmir ve Çanakkale için sarı kodlu sağanak uyarısı verildiğini duyurdu.",
    "Bakan Kurum: Yarın, Sayın Cumhurbaşkanımız yeni 500 bin sosyal konut projemizi milletimizle paylaşacaklar - Çevre, Şehircilik ve İklim Değişikliği Bakanı Murat Kurum, 'Yarın, Sayın Cumhurbaşkanımız yeni 500 bin sosyal konut projemizi milletimizle paylaşacaklar.' dedi.",
    "Cumhurbaşkanlığı Hukuk Politikaları Kurulu Başkanvekili Uçum, basın mensuplarıyla bir araya geldi - Cumhurbaşkanlığı Hukuk Politikaları Kurulu Başkanvekili Uçum, Türkiye Basın Federasyonu'nda, 'Anadolu Sohbetleri' kapsamında, Türkiye Basın Federasyonu Genel Başkanı Burhan ve basın mensuplarıyla bir araya geldi, gündeme ilişkin soruları yanıtladı.",
    "Gökçeada'da kuvvetli sağanak nedeniyle denizin rengi değişti - Çanakkale'nin Gökçeada ilçesinde gece yarısı başlayan kuvvetli sağanak nedeniyle oluşan yağmur suları ve çamur, denizin rengini değiştirdi.",
    "Can Holding'e yönelik operasyonda hakimliğinin tutuklama kararına ilişkin yazısına ulaşıldı - Can Holding'e yönelik soruşturmada İstanbul merkezli 4 ilde düzenlenen ikinci dalga operasyonda tutuklanan şüphelilere ilişkin sulh ceza hakimliğinin karar yazısında, suçlamalara ilişkin tespit ve değerlendirmelere yer verildi.",
    "Türkiye ve Yunanistan arasındaki Güven Artırıcı Önlemler Toplantısı'nın yeni turu İzmir'de yapıldı - Milli Savunma Bakanlığı (MSB), Türkiye ve Yunanistan arasındaki Güven Artırıcı Önlemler Toplantısı'nın yeni turunun İzmir'de yapıldığını, toplantının olumlu bir havada gerçekleştiğini bildirdi.",
    "Karadeniz'de balık stoklarının araştırılmasına yönelik çalışmalar devam ediyor - Su Ürünleri Merkez Araştırma Enstitüsü (SUMAE) ekipleri, Karadeniz'deki balık stoklarının araştırılmasına yönelik çalışmalarını Hopa ile İğneada arasındaki kıyı bölümünde bu yıl da sürdürecek.",
    "TUSAŞ şehitleri birinci yıl dönümünde anılıyor - Türk Havacılık ve Uzay Sanayii (TUSAŞ) Kahramankazan tesislerine yönelik terör saldırısı şehitleri, birinci yıl dönümünde anılıyor.",
    "Muğla'da 484 otel ve tesis denetlendi, eksiklikleri bulunan 5'i kapatıldı - Muğla'da güvenli ve sürdürülebilir turizm için yapılan çalışmalar kapsamında eylülde 484 otel ve tesisin denetimi yapıldı, bunlardan 5'i eksiklikleri tamamlanıncaya kadar kapatıldı.",
    "İzmir'in Foça ilçesinde sağanak hayatı olumsuz etkiledi - İzmir'in Foça ilçesinde etkili olan sağanak nedeniyle dere taştı, bazı ev ve iş yerlerini su bastı. Aracıyla sele kapılan 1 kişiyi arama çalışmaları ise sürüyor."
];

// DOM elementleri - DOM yüklendikten sonra tanımlanacak
let searchInput, channelList, currentChannel, channelDescription, fullscreenBtn, muteBtn, programList, programDate, newsScroll;
let currentChannelId = null;
let filteredChannels = [...channels];

function updateProgramDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    programDate.textContent = now.toLocaleDateString('tr-TR', options);
}

// RSS feed'ini çek ve parse et
async function fetchNewsFromAA() {
    try {
        console.log('RSS feed çekiliyor...');
        const allNews = [];
        
        // Çoklu kaynak - paralel olarak tüm kaynaklardan haber çek (daha fazla kaynak)
        const promises = [
            fetchNewsFromSingleSource(AA_RSS_URL, 'AA'),
            fetchNewsFromSingleSource(CNN_RSS_URL, 'CNN'),
            fetchNewsFromSingleSource(NTV_RSS_URL, 'NTV'),
            fetchNewsFromSingleSource(HABERTURK_RSS_URL, 'Habertürk')
        ];
        
        const results = await Promise.allSettled(promises);
        
        // Başarısız olanlar için alternatif URL'leri dene
        const altPromises = [];
        results.forEach((result, index) => {
            if (result.status === 'fulfilled' && result.value && result.value.length > 0) {
                allNews.push(...result.value);
                console.log(`${index === 0 ? 'AA' : 'CNN Türk'} haberleri yüklendi:`, result.value.length, 'haber');
            } else {
                // Alternatif URL'i dene
                console.log(`${index === 0 ? 'AA' : 'CNN Türk'} birincil RSS başarısız, alternatif deneniyor...`);
                altPromises.push(
                    fetchNewsFromSingleSource(index === 0 ? AA_RSS_URL_ALT : CNN_RSS_URL_ALT, index === 0 ? 'AA (Alt)' : 'CNN (Alt)')
                );
            }
        });
        
        // Alternatif URL'lerden haberleri bekle
        if (altPromises.length > 0) {
            const altResults = await Promise.allSettled(altPromises);
            altResults.forEach((result, index) => {
                if (result.status === 'fulfilled' && result.value && result.value.length > 0) {
                    allNews.push(...result.value);
                    console.log('Alternatif haberler yüklendi:', result.value.length, 'haber');
                }
            });
        }
        
        // Duplicate haberleri kaldır ve karıştır
        if (allNews.length > 0) {
            // Aynı başlıklı haberleri kaldır
            const seen = new Set();
            const uniqueNews = allNews.filter(news => {
                if (!news || news.trim().length === 0) return false;
                const key = news.substring(0, 50).toLowerCase();
                if (seen.has(key)) return false;
                seen.add(key);
        return true;
            });
            
            if (uniqueNews.length > 0) {
                currentNewsData = uniqueNews.sort(() => Math.random() - 0.5);
                console.log('Toplam güncel haber sayısı:', currentNewsData.length);
                return true;
            }
        }
        
    } catch (error) {
        console.error('Haber yükleme hatası:', error);
    }
    
    // Kaynaklar başarısız olursa fallback haberleri kullan
    console.log('RSS feed\'lerden haber alınamadı, fallback haberler kullanılacak...');
    return false;
}

// RSS içeriğini parse etme fonksiyonu
function parseRSSContent(xmlContent) {
    try {
        // XML'i parse et
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlContent, 'text/xml');
        
        // RSS item'larını al
        const items = xmlDoc.querySelectorAll('item');
        console.log('Bulunan item sayısı:', items.length);
        const newsItems = [];
        
        items.forEach((item, index) => {
            if (index < 30) { // İlk 30 haberi al (daha fazla güncel haber için)
                const title = item.querySelector('title')?.textContent || '';
                const description = item.querySelector('description')?.textContent || '';
                
                console.log(`Haber ${index + 1}:`, title);
                
                if (title) {
                    // HTML tag'lerini temizle
                    let cleanTitle = title.replace(/<[^>]*>/g, '').trim();
                    let cleanDescription = description.replace(/<[^>]*>/g, '').trim();
                    
                    // Gereksiz kelimeleri temizle
                    cleanTitle = cleanTitle.replace(/^(AA|Anadolu Ajansı|AA\/|AA -)/i, '').trim();
                    cleanTitle = cleanTitle.replace(/^(Haber|News|Gündem)/i, '').trim();
                    
                    // Çok kısa haberleri atla
                    if (cleanTitle.length < 20) return;
                    
                    // Başlık ve açıklamayı birleştir
                    let finalNews = cleanTitle;
                    if (cleanDescription && cleanDescription.length > 20) {
                        finalNews = cleanTitle + ' - ' + cleanDescription;
                    }
                    
                    newsItems.push(finalNews);
                    console.log('Eklenen haber:', finalNews.substring(0, 100) + '...');
                }
            }
        });
        
        if (newsItems.length > 0) {
            currentNewsData = newsItems;
            console.log('AA haberleri başarıyla yüklendi:', newsItems.length, 'haber');
            return true;
        } else {
            console.log('Hiç haber bulunamadı!');
            return false;
        }
    } catch (error) {
        console.error('RSS parse hatası:', error);
        return false;
    }
}

function createNewsTicker() {
    if (!newsScroll) {
        console.error('newsScroll element not found!');
        return;
    }
    
    // Eğer haber yoksa fallback kullan
    if (!currentNewsData || currentNewsData.length === 0) {
        console.log('Haber verisi yok, fallback kullanılıyor...');
        currentNewsData = [...fallbackNews];
    }
    
    console.log('createNewsTicker called, currentNewsData length:', currentNewsData.length);
    
    // Eğer hala haber yoksa, fallback haberleri kullan
    if (!currentNewsData || currentNewsData.length === 0) {
        console.error('Hiç haber verisi yok, fallback kullanılıyor!');
        currentNewsData = [...fallbackNews];
    }
    
    // Haberleri karıştır
    const shuffledNews = [...currentNewsData].sort(() => Math.random() - 0.5);
    console.log('shuffledNews length:', shuffledNews.length);
    
    // Her haberi tek tek göster - aralarında büyük boşluklar
    let htmlContent = '';
    if (shuffledNews.length > 0) {
    shuffledNews.forEach((news, index) => {
            if (news && news.trim().length > 0) {
        htmlContent += `<span class="news-item">${news}</span>`;
        // Her haber arasında büyük boşluk ekle (ekran genişliği kadar)
        if (index < shuffledNews.length - 1) {
            htmlContent += `<span class="news-spacer"></span>`;
                }
        }
    });
    } else {
        // Eğer hala haber yoksa, en azından bir mesaj göster
        htmlContent = `<span class="news-item">Haberler yükleniyor, lütfen bekleyin...</span>`;
    }
    
    console.log('HTML content length:', htmlContent.length);
    
    // HTML'i ekle
    newsScroll.innerHTML = htmlContent;
    
    // Animasyonu zorla başlat
    setTimeout(() => {
        const tickerContent = document.querySelector('.news-ticker-content');
        if (tickerContent) {
            tickerContent.style.animation = 'none';
            tickerContent.offsetHeight; // Reflow trigger
            tickerContent.style.animation = 'scroll-news-single 450s linear infinite';
            console.log('Animation restarted');
        }
    }, 100);
    
    console.log('News ticker created with', shuffledNews.length, 'news items (single scroll mode)');
}

async function updateNewsTicker() {
    // Önce fallback haberleri göster (anında görünürlük için)
    console.log('Son dakika haberleri başlatılıyor...');
    if (!currentNewsData || currentNewsData.length === 0) {
        console.log('Fallback haberler yükleniyor...');
        currentNewsData = [...fallbackNews];
    }
    createNewsTicker();
    
    // Arka planda güncel haberleri çek
    console.log('Güncel haberler yükleniyor...');
    try {
        const success = await fetchNewsFromAA();
        if (success && currentNewsData && currentNewsData.length > 0) {
            console.log('Güncel haberler yüklendi, ticker güncelleniyor...');
            createNewsTicker();
        } else {
            console.log('Güncel haberler yüklenemedi, fallback haberler gösteriliyor...');
            // Fallback haberler zaten gösteriliyor
        }
    } catch (error) {
        console.error('Haber yükleme hatası:', error);
        // Fallback haberler zaten gösteriliyor
    }
    
    // Her 3 dakikada bir haberleri güncelle (daha sık güncelleme için güncel haberler)
    setInterval(async () => {
        console.log('Haberler güncelleniyor...');
        try {
        await fetchNewsFromAA();
            if (!currentNewsData || currentNewsData.length === 0) {
                console.log('Güncelleme başarısız, mevcut haberler korunuyor...');
                return;
            }
        createNewsTicker();
        } catch (error) {
            console.error('Haber güncelleme hatası:', error);
        }
    }, 180000); // 3 dakika = 180000 ms
}

// Çoklu kaynak haber çekme fonksiyonu
async function fetchNewsFromMultipleSources() {
    const allNews = [];
    
    try {
        // Anadolu Ajansı haberlerini çek
        const aaNews = await fetchNewsFromSingleSource(AA_RSS_URL, 'AA');
        if (aaNews.length > 0) {
            allNews.push(...aaNews);
        }
        
        // CNN Türk haberlerini çek
        const cnnNews = await fetchNewsFromSingleSource(CNN_RSS_URL, 'CNN');
        if (cnnNews.length > 0) {
            allNews.push(...cnnNews);
        }
        
        if (allNews.length > 0) {
            currentNewsData = allNews;
            console.log('Tüm haberler başarıyla yüklendi:', allNews.length, 'haber');
            return true;
        }
    } catch (error) {
        console.error('Haberler yüklenirken hata:', error);
    }
    
    // Hata durumunda fallback haberleri kullan
    currentNewsData = [...fallbackNews];
    return false;
}

// Tek kaynaktan haber çekme fonksiyonu
async function fetchNewsFromSingleSource(url, source) {
    try {
        // Farklı proxy servisleri deneme listesi
        const proxies = [
            `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
            `https://corsproxy.io/?${encodeURIComponent(url)}`,
            `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`
        ];
        
        let lastError = null;
        for (let i = 0; i < proxies.length; i++) {
            try {
                const proxyUrl = proxies[i];
                console.log(`${source} RSS feed çekiliyor (proxy ${i + 1}/${proxies.length}):`, url);
                // Timeout için AbortController kullan
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 saniye timeout
                
                const response = await fetch(proxyUrl, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json, text/xml, application/xml, */*',
                    },
                    signal: controller.signal
                });
                
                clearTimeout(timeoutId);
                
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                
                let data;
                let xmlContent = '';
                
                // Response format kontrolü - JSON veya XML olabilir
                try {
                    const contentType = response.headers.get('content-type') || '';
                    if (contentType.includes('application/json')) {
                        data = await response.json();
                        // Proxy response format kontrolü
                        if (data.contents) {
                            xmlContent = data.contents;
                        } else if (data.content) {
                            xmlContent = data.content;
                        } else if (typeof data === 'string') {
                            xmlContent = data;
                        } else {
                            throw new Error('Beklenmeyen JSON formatı');
                        }
                    } else if (contentType.includes('text/xml') || contentType.includes('application/xml')) {
                        // Direkt XML response
                        xmlContent = await response.text();
                    } else {
                        // Content-type yoksa, önce text olarak dene
                        const textResponse = await response.text();
                        try {
                            // JSON olabilir mi kontrol et
                            data = JSON.parse(textResponse);
                            if (data.contents) {
                                xmlContent = data.contents;
                            } else if (data.content) {
                                xmlContent = data.content;
                            } else {
                                xmlContent = textResponse; // Direkt XML olabilir
                            }
                        } catch (e) {
                            // JSON değilse direkt XML olarak kullan
                            xmlContent = textResponse;
                        }
                    }
                } catch (parseError) {
                    console.error(`${source} response parse hatası:`, parseError);
                    throw new Error('Response parse edilemedi');
                }
                
                if (!xmlContent || xmlContent.trim().length === 0) {
                    throw new Error('Boş XML içeriği');
                }
                
                // XML içeriğini parse et
            const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(xmlContent, 'text/xml');
                
                // Parse hatası kontrolü
                const parserError = xmlDoc.querySelector('parsererror');
                if (parserError) {
                    throw new Error('XML parse hatası');
                }
                
            const items = xmlDoc.querySelectorAll('item');
                if (items.length === 0) {
                    throw new Error('RSS feed\'de item bulunamadı');
                }
                
            const newsItems = [];
                
                // Son 48 saat içindeki haberleri filtrele (daha geniş zaman aralığı)
                const now = new Date();
                const twoDaysAgo = new Date(now.getTime() - 48 * 60 * 60 * 1000);
            
            items.forEach((item, index) => {
                    if (index < 30) { // Her kaynaktan 30 haber al
                    const title = item.querySelector('title')?.textContent || '';
                        const pubDate = item.querySelector('pubDate')?.textContent || '';
                        
                        // Tarih kontrolü - son 48 saat içindeki haberleri al
                        if (pubDate) {
                            try {
                                const newsDate = new Date(pubDate);
                                if (newsDate < twoDaysAgo) {
                                    return; // Çok eski haber, atla
                                }
                            } catch (e) {
                                // Tarih parse edilemezse devam et (haberleri göster)
                            }
                        }
                        
                        if (title && title.trim().length > 0) {
                        const description = item.querySelector('description')?.textContent || '';
                        
                        let cleanTitle = title.replace(/<[^>]*>/g, '').trim();
                        let cleanDescription = description.replace(/<[^>]*>/g, '').trim();
                        
                        // Kaynak etiketlerini temizle
                            cleanTitle = cleanTitle.replace(/^(AA|Anadolu Ajansı|AA\/|AA -|CNN|CNN Türk|CNN\/|CNN -|NTV|Habertürk)/i, '').trim();
                            cleanTitle = cleanTitle.replace(/^(Haber|News|Gündem|Son Dakika)/i, '').trim();
                        
                            // Çok kısa veya çok uzun haberleri filtrele
                            if (cleanTitle.length < 15 || cleanTitle.length > 200) return;
                        
                            // Başlık ve açıklamayı birleştir (daha kısa açıklamalar için)
                        let finalNews = cleanTitle;
                            if (cleanDescription && cleanDescription.length > 15 && cleanDescription.length < 150) {
                                finalNews = cleanTitle + ' - ' + cleanDescription.substring(0, 100);
                        }
                        
                        newsItems.push(finalNews);
                    }
                }
            });
            
                if (newsItems.length > 0) {
                    console.log(`${source} başarıyla yüklendi: ${newsItems.length} haber (proxy ${i + 1})`);
            return newsItems;
                } else {
                    throw new Error('Hiç haber bulunamadı');
                }
            } catch (proxyError) {
                const errorMsg = proxyError.name === 'AbortError' ? 'Timeout (8s)' : (proxyError.message || 'Bilinmeyen hata');
                console.log(`${source} proxy ${i + 1} başarısız:`, errorMsg);
                lastError = proxyError;
                // Bir sonraki proxy'yi dene
                if (i < proxies.length - 1) {
                    continue;
                }
            }
        }
        
        // Tüm proxy'ler başarısız oldu
        if (lastError) {
            console.error(`${source} tüm proxy'ler başarısız, haberler alınamadı`);
        }
        return [];
    } catch (error) {
        console.error(`${source} haberleri yüklenirken genel hata:`, error.message || error);
        return [];
    }
}

function createProgramGuide(channelId) {
    console.log('createProgramGuide called with channelId:', channelId);
    console.log('programList element:', programList);
    
    if (!programList) {
        console.error('programList element not found!');
        return;
    }
    
    // Önce temizle
    programList.innerHTML = '';
    
    // Program verilerini al
    const programs = programSchedules[channelId];
    console.log('Programs found for channel', channelId, ':', programs);
    console.log('Available programSchedules keys:', Object.keys(programSchedules));
    
    if (!programs || programs.length === 0) {
        console.error('No programs found for channel:', channelId);
        programList.innerHTML = `
            <div style="text-align: center; color: #718096; padding: 40px 20px;">
                <i class="fas fa-exclamation-triangle" style="font-size: 48px; margin-bottom: 20px; opacity: 0.5;"></i>
                <h4 style="margin-bottom: 10px; color: #4a5568;">Yayın Akışı Bulunamadı</h4>
                <p>Bu kanal için program rehberi<br>şu anda mevcut değil.</p>
            </div>
        `;
        return;
    }
    
    // Mevcut zamanı hesapla
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    console.log('Current time:', currentTime);
    
    // Program öğelerini oluştur
    let htmlContent = '';
    programs.forEach((program, index) => {
        const programTime = program.time.split(':');
        const programMinutes = parseInt(programTime[0]) * 60 + parseInt(programTime[1]);
        const isCurrent = Math.abs(currentTime - programMinutes) <= 30;
        
        htmlContent += `
            <div class="program-item ${isCurrent ? 'current' : ''}">
                <div class="program-time">${program.time}</div>
                <div class="program-title">${program.title}</div>
                <div class="program-description">${program.description}</div>
            </div>
        `;
        console.log('Added program:', program.title, 'at', program.time, 'isCurrent:', isCurrent);
    });
    
    // HTML'i ekle
    programList.innerHTML = htmlContent;
    console.log('Program guide created with', programs.length, 'programs');
    console.log('programList children count:', programList.children.length);
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
        channelItem.addEventListener('click', () => {
            // Tüm kanallar için selectChannel çağır (iframe içinde gösterilecek)
            selectChannel(channel);
        });
        channelList.appendChild(channelItem);
    });
}

function selectChannel(channel) {
    console.log('selectChannel called with:', channel);
    
    // İzleme sayfasına geç
    showWatchPage();
    
    document.querySelectorAll('.channel-item.active').forEach(item => item.classList.remove('active'));
    const selectedItem = document.querySelector(`[data-channel-id="${channel.id}"]`);
    if (selectedItem) selectedItem.classList.add('active');
    currentChannelId = channel.id;
    const videoWrapper = document.getElementById('videoWrapper');
    console.log('Creating program guide for channel ID:', channel.id);
    createProgramGuide(channel.id);
    let externalBtnHtml = '';
    
    // YouTube URL varsa iframe içinde göster
    if (channel.youtubeUrl) {
        let videoId = channel.youtubeUrl.split('v=')[1];
        if (videoId) {
            // URL parametrelerini temizle (örn: &t=...)
            videoId = videoId.split('&')[0];
            videoId = videoId.split('#')[0];
            
            // YouTube embed URL oluştur - autoplay (muted başlangıç, kullanıcı unmute edebilir)
            const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=${window.location.origin}`;
            videoWrapper.innerHTML = `<iframe id="youtubeIframe" width="100%" height="400" src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border-radius:10px;"></iframe>\n<div id='externalWatchBtn'></div>`;
            
            // YouTube iframe yüklendiğinde otomatik oynatma kontrolü
            const youtubeIframe = document.getElementById('youtubeIframe');
            if (youtubeIframe) {
                youtubeIframe.addEventListener('load', () => {
                    console.log('YouTube iframe loaded, autoplay should work (muted for autoplay policy)');
                });
            }
        externalBtnHtml = `<a href='${channel.youtubeUrl}' target='_blank' style='display:inline-block;padding:12px 24px;background:#e53e3e;color:#fff;border-radius:8px;text-decoration:none;font-weight:600;margin:16px 0 0 0;'>YouTube'da İzle</a>`;
        currentChannel.textContent = channel.name;
        channelDescription.innerHTML = channel.description;
        document.getElementById('externalWatchBtn').innerHTML = externalBtnHtml;
        updateControlButtons('youtube', channel.youtubeUrl);
        return;
        }
    }
    
    // Stream URL varsa önce onu dene
    if (channel.streamUrl) {
        videoWrapper.innerHTML = `
            <div style="position: relative; width: 100%; height: 400px; background: #000; border-radius: 10px; display: flex; align-items: center; justify-content: center;">
                <div style="text-align: center; color: white;">
                    <i class="fas fa-spinner fa-spin" style="font-size: 48px; margin-bottom: 15px; color: #667eea;"></i>
                    <div style="font-size: 16px; font-weight: 600;">Yükleniyor...</div>
                    <div style="font-size: 12px; margin-top: 5px; opacity: 0.7;">Lütfen bekleyin</div>
                </div>
                <video id="videoPlayer" controls autoplay playsinline preload="auto" style="width:100%;height:100%;border-radius:10px;background:#000;display:none;"></video>
            </div>
            <div id='externalWatchBtn'></div>
        `;
        currentChannel.textContent = `${channel.name} - Yükleniyor...`;
        channelDescription.textContent = channel.description;
        document.getElementById('externalWatchBtn').innerHTML = channel.webUrl ? `<a href='${channel.webUrl}' target='_blank' style='display:inline-block;padding:12px 24px;background:#e53e3e;color:#fff;border-radius:8px;text-decoration:none;font-weight:600;margin:16px 0 0 0;'>Alternatif: Web Sitesinde Aç</a>` : '';
        const videoPlayer = document.getElementById('videoPlayer');
        if (window.hls) { window.hls.destroy(); window.hls = null; }
        
        // Autoplay özelliklerini ayarla
        videoPlayer.autoplay = true;
        videoPlayer.muted = false; // Sesli başlat
        videoPlayer.playsInline = true;
        videoPlayer.preload = 'auto';
        
        if (videoPlayer.canPlayType('application/vnd.apple.mpegurl')) {
            videoPlayer.src = channel.streamUrl;
        } else if (window.Hls && Hls.isSupported()) {
            // HLS.js için optimize edilmiş ayarlar
            window.hls = new Hls({
                enableWorker: true,
                lowLatencyMode: false,
                backBufferLength: 90,
                maxBufferLength: 30,
                maxMaxBufferLength: 60,
                maxBufferSize: 60 * 1000 * 1000,
                maxBufferHole: 0.5,
                highBufferWatchdogPeriod: 2,
                nudgeOffset: 0.1,
                nudgeMaxRetry: 3,
                maxFragLoadingTimeOut: 10000,
                fragLoadingTimeOut: 8000,
                manifestLoadingTimeOut: 8000,
                levelLoadingTimeOut: 8000,
                fragLoadingMaxRetry: 4,
                levelLoadingMaxRetry: 4,
                startFragPrefetch: true,
                testBandwidth: true,
                progressive: false,
                debug: false,
                capLevelToPlayerSize: false
            });
            
            // HLS event listeners - daha hızlı yükleme için
            window.hls.on(Hls.Events.MANIFEST_PARSED, () => {
                console.log('HLS manifest parsed, starting playback');
                // Otomatik oynatmayı dene
                videoPlayer.autoplay = true;
                videoPlayer.muted = false;
                const playPromise = videoPlayer.play();
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        currentChannel.textContent = channel.name;
                        console.log('Video autoplay started successfully');
                    }).catch(err => {
                        console.error('Autoplay prevented, trying muted:', err);
                        // Autoplay engellenirse muted ile dene
                        videoPlayer.muted = true;
                        videoPlayer.play().then(() => {
                            currentChannel.textContent = channel.name;
                            console.log('Video started with muted autoplay');
                        }).catch(err2 => {
                            console.error('Muted autoplay also failed:', err2);
                            fallbackToWeb();
                        });
                    });
                }
            });
            
            window.hls.on(Hls.Events.ERROR, (event, data) => {
                console.error('HLS error:', data);
                if (data.fatal) {
                    switch(data.type) {
                        case Hls.ErrorTypes.NETWORK_ERROR:
                            console.log('Network error, trying to recover...');
                            window.hls.startLoad();
                            break;
                        case Hls.ErrorTypes.MEDIA_ERROR:
                            console.log('Media error, trying to recover...');
                            window.hls.recoverMediaError();
                            break;
                        default:
                            console.log('Fatal error, cannot recover');
                            fallbackToWeb();
                            break;
                    }
                }
            });
            
            window.hls.loadSource(channel.streamUrl);
            window.hls.attachMedia(videoPlayer);
        } else {
            // HLS desteklenmiyorsa web URL'e geç
            if (channel.webUrl) {
        videoWrapper.innerHTML = `
            <iframe id="webIframe" width="100%" height="400" src="${channel.webUrl}" frameborder="0" allowfullscreen allow="autoplay; encrypted-media; fullscreen" style="border-radius:10px;background:#000;"></iframe>
            <div id='externalWatchBtn'></div>
        `;
        currentChannel.textContent = channel.name;
        channelDescription.innerHTML = channel.description;
        document.getElementById('externalWatchBtn').innerHTML = `<a href='${channel.webUrl}' target='_blank' style='display:inline-block;padding:12px 24px;background:#e53e3e;color:#fff;border-radius:8px;text-decoration:none;font-weight:600;margin:16px 0 0 0;'>Web Sitesinde Aç</a>`;
        updateControlButtons('web', channel.webUrl);
        return;
    }
            videoPlayer.src = '';
            currentChannel.textContent = `${channel.name} - Yayın Hatası`;
            channelDescription.textContent = 'Tarayıcınız bu yayını desteklemiyor. Lütfen farklı bir tarayıcı veya cihaz deneyin.';
            return;
        }
        
        // Stream URL hatası durumunda web URL'e geç
        const fallbackToWeb = () => {
            // HLS cleanup
            if (window.hls) {
                window.hls.destroy();
                window.hls = null;
            }
            if (channel.webUrl) {
                console.log('Stream URL failed, falling back to web URL');
                videoWrapper.innerHTML = `
                    <iframe id="webIframe" width="100%" height="400" src="${channel.webUrl}" frameborder="0" allowfullscreen allow="autoplay; encrypted-media; fullscreen" style="border-radius:10px;background:#000;"></iframe>
                    <div id='externalWatchBtn'></div>
                `;
                currentChannel.textContent = channel.name;
                channelDescription.innerHTML = channel.description;
                document.getElementById('externalWatchBtn').innerHTML = `<a href='${channel.webUrl}' target='_blank' style='display:inline-block;padding:12px 24px;background:#e53e3e;color:#fff;border-radius:8px;text-decoration:none;font-weight:600;margin:16px 0 0 0;'>Web Sitesinde Aç</a>`;
                updateControlButtons('web', channel.webUrl);
                
                // Fallback web iframe için de autoplay kontrolü
                const fallbackWebIframe = document.getElementById('webIframe');
                if (fallbackWebIframe) {
                    fallbackWebIframe.addEventListener('load', () => {
                        console.log('Fallback web iframe loaded');
                    });
                }
            }
        };
        
        // Loading timeout - 6 saniye içinde yüklenmezse web URL'e geç (daha hızlı)
        const loadingTimeout = setTimeout(() => {
            if (videoPlayer && (videoPlayer.readyState < 3 || videoPlayer.networkState === 2)) {
                console.log('Loading timeout (6s), trying web URL fallback');
                fallbackToWeb();
            }
        }, 6000);
        
        // Video yüklendiğinde loading indicator'ı kaldır
        const hideLoading = () => {
            const loadingDiv = videoWrapper.querySelector('div[style*="position: relative"]');
            if (loadingDiv && videoPlayer) {
                loadingDiv.style.display = 'none';
                videoPlayer.style.display = 'block';
            }
        };
        
        videoPlayer.addEventListener('canplay', () => {
            clearTimeout(loadingTimeout);
            hideLoading();
            currentChannel.textContent = channel.name;
            
            // Otomatik oynatmayı başlat
            if (videoPlayer.paused) {
                const playPromise = videoPlayer.play();
                if (playPromise !== undefined) {
                    playPromise.catch(err => {
                        console.log('canplay autoplay prevented:', err);
                        // Muted ile tekrar dene
                        videoPlayer.muted = true;
                        videoPlayer.play().catch(err2 => {
                            console.log('Muted autoplay also prevented:', err2);
                        });
                    });
                }
            }
        });
        
        videoPlayer.addEventListener('playing', () => {
            if (loadingTimeout) clearTimeout(loadingTimeout);
            hideLoading();
            currentChannel.textContent = channel.name;
        });
        
        videoPlayer.addEventListener('error', () => {
            if (loadingTimeout) clearTimeout(loadingTimeout);
            console.log('Video player error, trying web URL fallback');
            fallbackToWeb();
        });
        
        videoPlayer.addEventListener('stalled', () => {
            console.log('Video player stalled');
            setTimeout(() => {
                if (videoPlayer && videoPlayer.readyState < 3) {
                    console.log('Still stalled after 5s, trying web URL fallback');
                    fallbackToWeb();
                }
            }, 5000); // 5 saniye bekledikten sonra
        });
        
        videoPlayer.addEventListener('waiting', () => {
            console.log('Video player waiting for data');
        });
        
        videoPlayer.addEventListener('contextmenu', e => e.preventDefault());
        
        // Preload ve autoplay ayarları
        videoPlayer.preload = 'auto';
        videoPlayer.playsInline = true;
        videoPlayer.autoplay = true;
        
        // Native HLS için otomatik oynatma
        if (!window.hls) {
            // canplay event'inde otomatik oynatılacak, burada sadece ayarları yap
            videoPlayer.addEventListener('loadeddata', () => {
                const playPromise = videoPlayer.play();
                if (playPromise !== undefined) {
                    playPromise.then(() => {
                        clearTimeout(loadingTimeout);
                        currentChannel.textContent = channel.name;
                        console.log('Native HLS autoplay started');
                    }).catch(err => {
                        console.log('Native HLS autoplay prevented, trying muted:', err);
                        videoPlayer.muted = true;
                        videoPlayer.play().then(() => {
                            clearTimeout(loadingTimeout);
                            currentChannel.textContent = channel.name;
                            console.log('Native HLS started with muted autoplay');
                        }).catch(err2 => {
                            console.log('Native HLS muted autoplay also failed:', err2);
                            clearTimeout(loadingTimeout);
                            fallbackToWeb();
                        });
                    });
                }
            });
        }
        updateControlButtons('video');
        return;
    }
    
    // Sadece Web URL varsa iframe içinde göster
    if (channel.webUrl) {
        // A Haber gibi iframe engeli olan siteler için özel kontrol
        const iframeBlockedSites = ['ahaber.com.tr'];
        const isBlocked = iframeBlockedSites.some(domain => channel.webUrl.includes(domain));
        
        if (isBlocked) {
            // Iframe engeli olan siteler için direkt yeni sekmede aç
            window.open(channel.webUrl, '_blank');
            videoWrapper.innerHTML = `
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 400px; background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1)); border-radius: 10px; padding: 40px;">
                    <i class="fas fa-external-link-alt" style="font-size: 64px; color: #667eea; margin-bottom: 20px;"></i>
                    <h3 style="color: #2d3748; margin-bottom: 15px; font-size: 24px;">Yeni Sekmede Açılıyor...</h3>
                    <p style="color: #718096; margin-bottom: 25px; text-align: center; max-width: 400px;">
                        ${channel.name} kanalı yeni bir sekmede açılıyor. Eğer otomatik olarak açılmadıysa, aşağıdaki butona tıklayın.
                    </p>
                    <a href="${channel.webUrl}" target="_blank" style="display: inline-block; padding: 15px 30px; background: linear-gradient(135deg, #667eea, #764ba2); color: white; border-radius: 12px; text-decoration: none; font-weight: 600; font-size: 16px; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3); transition: transform 0.3s ease;">
                        <i class="fas fa-external-link-alt"></i> Web Sitesinde Aç
                    </a>
                </div>
            `;
            currentChannel.textContent = channel.name;
            channelDescription.innerHTML = channel.description;
            updateControlButtons('web', channel.webUrl);
            return;
        }
        
        videoWrapper.innerHTML = `
            <iframe id="webIframe" width="100%" height="400" src="${channel.webUrl}" frameborder="0" allowfullscreen allow="autoplay; encrypted-media; fullscreen" style="border-radius:10px;background:#000;"></iframe>
            <div id='externalWatchBtn'></div>
        `;
        currentChannel.textContent = channel.name;
        channelDescription.innerHTML = channel.description;
        document.getElementById('externalWatchBtn').innerHTML = `<a href='${channel.webUrl}' target='_blank' style='display:inline-block;padding:12px 24px;background:#e53e3e;color:#fff;border-radius:8px;text-decoration:none;font-weight:600;margin:16px 0 0 0;'>Web Sitesinde Aç</a>`;
        updateControlButtons('web', channel.webUrl);
        
        // Web iframe için hata kontrolü
        const webIframe = document.getElementById('webIframe');
        if (webIframe) {
            webIframe.addEventListener('load', () => {
                console.log('Web iframe loaded');
            });
            webIframe.addEventListener('error', () => {
                console.log('Web iframe error, opening in new tab');
                window.open(channel.webUrl, '_blank');
            });
        }
        return;
    }
    
    // Hiçbir kaynak yoksa
        videoWrapper.innerHTML = '';
        currentChannel.textContent = channel.name + ' - Yayın Hatası';
        channelDescription.textContent = 'Bu kanal şu anda yayında değil.';
        return;
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

// Arama fonksiyonunu DOM yüklendikten sonra bağla
if (searchInput) {
    searchInput.addEventListener('input', e => filterChannels(e.target.value));
}

// Tam ekran butonunu bağla
if (fullscreenBtn) {
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
}

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
        muteBtn.innerHTML = '<i class="fas fa-volume-up"></i> Ses';
        muteBtn.onclick = () => { 
            alert('Bu kanal web sitesi üzerinden yayın yapmaktadır. Ses kontrolü için web sitesini ziyaret edin.'); 
        };
        fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i> Tam Ekran';
        fullscreenBtn.onclick = () => {
            const webIframe = document.getElementById('webIframe');
            if (webIframe && webIframe.requestFullscreen) {
                webIframe.requestFullscreen();
            }
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
            } else if (webIframe) {
                alert('Bu kanal web sitesi üzerinden yayın yapmaktadır. Ses kontrolü için web sitesini ziyaret edin.');
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
// Ana sayfa grid görünümü oluştur
function createChannelsGrid(channelsToShow = channels) {
    const channelsGrid = document.getElementById('channelsGrid');
    if (!channelsGrid) return;
    
    channelsGrid.innerHTML = '';
    
    channelsToShow.forEach(channel => {
        const channelCard = document.createElement('div');
        channelCard.className = 'channel-card';
        channelCard.innerHTML = `
            <img src="${channel.logo}" alt="${channel.name}" class="channel-card-logo" onerror="this.onerror=null;this.src='https://via.placeholder.com/100x100/667eea/ffffff?text=${channel.name.charAt(0)}'">
            <div class="channel-card-name">${channel.name}</div>
            <div class="channel-card-category">${channel.category}</div>
        `;
        channelCard.addEventListener('click', () => {
            // İzleme sayfasına geç ve kanalı seç (iframe içinde gösterilecek)
            showWatchPage();
            selectChannel(channel);
        });
        channelsGrid.appendChild(channelCard);
    });
}

// Kategori filtreleme
function filterByCategory(category) {
    if (category === 'all') {
        createChannelsGrid(channels);
    } else {
        const filtered = channels.filter(ch => ch.category === category);
        createChannelsGrid(filtered);
    }
}

// Ana sayfayı göster
function showHomePage() {
    const homePage = document.getElementById('homePage');
    const watchPage = document.getElementById('watchPage');
    if (homePage && watchPage) {
        homePage.style.display = 'block';
        watchPage.style.display = 'none';
    }
}

// İzleme sayfasını göster
function showWatchPage() {
    const homePage = document.getElementById('homePage');
    const watchPage = document.getElementById('watchPage');
    if (homePage && watchPage) {
        homePage.style.display = 'none';
        watchPage.style.display = 'flex';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, programSchedules keys:', Object.keys(programSchedules));
    
    // DOM elementlerini tanımla
    searchInput = document.getElementById('searchInput');
    channelList = document.getElementById('channelList');
    currentChannel = document.getElementById('currentChannel');
    channelDescription = document.getElementById('channelDescription');
    fullscreenBtn = document.getElementById('fullscreenBtn');
    muteBtn = document.getElementById('muteBtn');
    programList = document.getElementById('programList');
    programDate = document.getElementById('programDate');
    newsScroll = document.getElementById('newsScroll');
    
    console.log('DOM elements found:', {
        searchInput: !!searchInput,
        channelList: !!channelList,
        currentChannel: !!currentChannel,
        channelDescription: !!channelDescription,
        fullscreenBtn: !!fullscreenBtn,
        muteBtn: !!muteBtn,
        programList: !!programList,
        programDate: !!programDate,
        newsScroll: !!newsScroll
    });
    
    // Logo kontrolü
    const logo = document.querySelector('.app-logo');
    if (logo) {
        console.log('Logo element found:', logo);
        console.log('Logo src:', logo.src);
        logo.addEventListener('load', () => console.log('Logo loaded successfully'));
        logo.addEventListener('error', () => console.log('Logo failed to load, using fallback'));
    }
    
    // Ana sayfa grid görünümünü oluştur
    const channelsGrid = document.getElementById('channelsGrid');
    if (channelsGrid) {
        setTimeout(() => {
            createChannelsGrid();
            console.log('Channels grid created with', channels.length, 'channels');
        }, 500);
    }
    
    // Kategori tab'larına event listener ekle
    const categoryTabs = document.querySelectorAll('.category-tab');
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Aktif tab'ı güncelle
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Kategoriye göre filtrele
            const category = tab.dataset.category;
            filterByCategory(category);
        });
    });
    
    // Geri butonuna event listener ekle
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            showHomePage();
        });
    }
    
    // Yükleme animasyonu göster
    if (channelList) {
        channelList.innerHTML = '<div style="text-align: center; padding: 20px; color: #718096;"><i class="fas fa-spinner fa-spin" style="font-size: 24px; margin-bottom: 10px;"></i><br>Kanallar yükleniyor...</div>';
        
        // Kısa bir gecikme ile kanal listesini oluştur
        setTimeout(() => {
            createChannelList();
            console.log('Channel list created with', channels.length, 'channels');
        }, 500);
    } else {
        console.error('channelList element not found!');
    }
    
    // Program tarihini güncelle
    if (programDate) {
        updateProgramDate();
    }
    
    // Haber bandını başlat
    if (newsScroll) {
        console.log('newsScroll element found, starting news ticker...');
        // Güncel haberlerle başlat
        updateNewsTicker();
        console.log('News ticker initialized');
    } else {
        console.error('newsScroll element not found!');
    }
    
    // Yayın akışı bölümünü başlat
    if (programList) {
        programList.innerHTML = `
            <div style="text-align: center; color: #718096; padding: 40px 20px;">
                <i class="fas fa-tv" style="font-size: 48px; margin-bottom: 20px; opacity: 0.5;"></i>
                <h4 style="margin-bottom: 10px; color: #4a5568;">Yayın Akışı</h4>
                <p>Sol taraftan bir kanal seçin<br>ve o kanalın program rehberini görün</p>
            </div>
        `;
        
    }
    
    // Arama fonksiyonunu bağla
    if (searchInput) {
        searchInput.addEventListener('input', e => filterChannels(e.target.value));
    }
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
    // selectChannel(channels[0]); // İsterseniz ilk kanalı otomatik seçebilirsiniz
});
window.addEventListener('resize', () => {});
window.addEventListener('error', e => { console.log('Genel hata:', e); }); 