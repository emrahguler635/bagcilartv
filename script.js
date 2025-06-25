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
        logo: "https://via.placeholder.com/56x56/667eea/ffffff?text=TRT",
        description: "İngilizce uluslararası haber kanalı"
    },
    {
        id: 10,
        name: "TRT Arabi",
        category: "Uluslararası",
        streamUrl: "https://tv-trtarabi.medya.trt.com.tr/master.m3u8",
        logo: "https://via.placeholder.com/56x56/667eea/ffffff?text=TRT",
        description: "Arapça uluslararası haber kanalı"
    },
    {
        id: 11,
        name: "TRT Türk",
        category: "Uluslararası",
        streamUrl: "https://tv-trtturk.medya.trt.com.tr/master.m3u8",
        logo: "https://via.placeholder.com/56x56/667eea/ffffff?text=TRT",
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
        logo: "https://via.placeholder.com/56x56/667eea/ffffff?text=TRT",
        description: "4K Ultra HD yayın kanalı"
    },
    {
        id: 15,
        name: "EuroNews Türkçe",
        category: "Haber",
        streamUrl: "https://rakuten-euronews-1-tr.samsung.wurl.tv/playlist.m3u8",
        logo: "https://via.placeholder.com/56x56/3182ce/ffffff?text=EN",
        description: "EuroNews Türkçe - Açık yayın. Uluslararası haber kanalı."
    },
    {
        id: 16,
        name: "Bloomberg HT",
        category: "Ekonomi",
        streamUrl: "https://live.blutv.com/blutv_bloomberght/live.m3u8",
        logo: "https://via.placeholder.com/56x56/000000/ffffff?text=BH",
        description: "Bloomberg HT - Ekonomi ve finans kanalı."
    },
    {
        id: 17,
        name: "A Haber",
        category: "Haber",
        streamUrl: "https://tv.ahaber.com.tr/live/ahaber/playlist.m3u8",
        logo: "https://via.placeholder.com/56x56/e53e3e/ffffff?text=AH",
        description: "A Haber - Haber kanalı."
    },
    {
        id: 18,
        name: "Kral TV",
        category: "Müzik",
        streamUrl: "https://edge1.socialsmart.tv/kral/playlist.m3u8",
        logo: "https://via.placeholder.com/56x56/ff6b35/ffffff?text=KR",
        description: "Kral TV - Müzik kanalı."
    },
    {
        id: 19,
        name: "PowerTürk TV",
        category: "Müzik",
        streamUrl: "https://edge1.socialsmart.tv/powerturktv/playlist.m3u8",
        logo: "https://via.placeholder.com/56x56/ff6b35/ffffff?text=PT",
        description: "PowerTürk TV - Türkçe müzik kanalı."
    },
    {
        id: 20,
        name: "Mekke TV",
        category: "Dini",
        streamUrl: "",
        youtubeUrl: "https://www.youtube.com/watch?v=2Gub8-cSH9c",
        logo: "https://via.placeholder.com/56x56/38a169/ffffff?text=MK",
        description: "Mekke TV - Kabe'den canlı yayın. YouTube üzerinden izleyebilirsiniz."
    },
    {
        id: 21,
        name: "Medine TV",
        category: "Dini",
        streamUrl: "",
        youtubeUrl: "https://www.youtube.com/watch?v=-jWCvRuC254",
        logo: "https://via.placeholder.com/56x56/38a169/ffffff?text=MD",
        description: "Medine TV - Mescid-i Nebevi'den canlı yayın. YouTube üzerinden izleyebilirsiniz."
    },
    {
        id: 22,
        name: "France 24",
        category: "Haber",
        streamUrl: "https://static-cdn1.ustream.tv/ustreamVideo/6540154/streams/live/playlist.m3u8",
        logo: "https://via.placeholder.com/56x56/0052a4/ffffff?text=F24",
        description: "France 24 - Fransız uluslararası haber kanalı"
    },
    {
        id: 23,
        name: "DW News",
        category: "Haber",
        streamUrl: "https://dwstream3-lh.akamaihd.net/i/dwstream3_live@124409/master.m3u8",
        logo: "https://via.placeholder.com/56x56/000000/ffffff?text=DW",
        description: "DW News - Alman uluslararası haber kanalı"
    },
    {
        id: 24,
        name: "Al Jazeera English",
        category: "Haber",
        streamUrl: "https://live-hls-web-aje.getaj.net/AJE/index.m3u8",
        logo: "https://via.placeholder.com/56x56/000000/ffffff?text=AJ",
        description: "Al Jazeera English - Katar uluslararası haber kanalı"
    },
    {
        id: 25,
        name: "CGTN",
        category: "Haber",
        streamUrl: "https://live.cgtn.com/1000/prog_index.m3u8",
        logo: "https://via.placeholder.com/56x56/cc0000/ffffff?text=CG",
        description: "CGTN - Çin uluslararası haber kanalı"
    },
    {
        id: 26,
        name: "NHK World-Japan",
        category: "Haber",
        streamUrl: "https://nhkwlive-ojp.akamaized.net/hls/live/2003458/nhkwlive-ojp-en/index.m3u8",
        logo: "https://via.placeholder.com/56x56/cc0000/ffffff?text=NH",
        description: "NHK World-Japan - Japon uluslararası haber kanalı"
    },
    {
        id: 27,
        name: "Arirang TV",
        category: "Haber",
        streamUrl: "https://amdlive-ch01-ctnd-com.akamaized.net/arirang_1ch/smil:arirang_1ch.smil/playlist.m3u8",
        logo: "https://via.placeholder.com/56x56/003876/ffffff?text=AR",
        description: "Arirang TV - Güney Kore uluslararası haber kanalı"
    },
    {
        id: 28,
        name: "TV5Monde",
        category: "Haber",
        streamUrl: "https://tv5mondehlslive.akamaized.net/hls/live/2023913/event01/index.m3u8",
        logo: "https://via.placeholder.com/56x56/0052a4/ffffff?text=TV5",
        description: "TV5Monde - Fransız uluslararası haber kanalı"
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

    // Eğer YouTube veya web linki varsa, video oynatıcıyı gizle ve buton göster
    if (channel.youtubeUrl) {
        videoWrapper.style.display = 'none';
        currentChannel.textContent = channel.name;
        channelDescription.innerHTML = `${channel.description}<br><br><a href='${channel.youtubeUrl}' target='_blank' style='display:inline-block;padding:12px 24px;background:#e53e3e;color:#fff;border-radius:8px;text-decoration:none;font-weight:600;margin-top:10px;'>YouTube'da İzle</a>`;
        return;
    } else if (channel.webUrl) {
        videoWrapper.style.display = 'none';
        currentChannel.textContent = channel.name;
        channelDescription.innerHTML = `${channel.description}<br><br><a href='${channel.webUrl}' target='_blank' style='display:inline-block;padding:12px 24px;background:#3182ce;color:#fff;border-radius:8px;text-decoration:none;font-weight:600;margin-top:10px;'>Web'de İzle</a>`;
        return;
    } else {
        videoWrapper.style.display = '';
    }

    // Eğer streamUrl yoksa video oynatıcıyı gizle
    if (!channel.streamUrl) {
        videoWrapper.style.display = 'none';
        currentChannel.textContent = channel.name + ' - Yayın Hatası';
        channelDescription.textContent = 'Bu kanal şu anda yayında değil.';
        return;
    }

    currentChannel.textContent = `${channel.name} - Yükleniyor...`;
    channelDescription.textContent = channel.description;

    if (window.hls) {
        window.hls.destroy();
        window.hls = null;
    }

    if (videoPlayer.canPlayType('application/vnd.apple.mpegurl')) {
        videoPlayer.src = channel.streamUrl;
    } else if (Hls.isSupported()) {
        window.hls = new Hls();
        window.hls.loadSource(channel.streamUrl);
        window.hls.attachMedia(videoPlayer);
    } else {
        videoPlayer.src = '';
        currentChannel.textContent = `${channel.name} - Yayın Hatası`;
        channelDescription.textContent = 'Tarayıcınız bu yayını desteklemiyor. Lütfen farklı bir tarayıcı veya cihaz deneyin.';
        return;
    }

    const playPromise = videoPlayer.play();
    if (playPromise !== undefined) {
        playPromise.then(() => {
            currentChannel.textContent = channel.name;
        }).catch(error => {
            console.log('Video oynatma hatası:', error);
            currentChannel.textContent = `${channel.name} - Yayın bulunamadı`;
            channelDescription.textContent = 'Bu kanal şu anda yayında değil veya erişim sağlanamıyor. Lütfen Demo kanalları deneyin.';
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

// Tam ekran butonu
fullscreenBtn.addEventListener('click', () => {
    if (videoPlayer.requestFullscreen) {
        videoPlayer.requestFullscreen();
    } else if (videoPlayer.webkitRequestFullscreen) {
        videoPlayer.webkitRequestFullscreen();
    } else if (videoPlayer.msRequestFullscreen) {
        videoPlayer.msRequestFullscreen();
    }
});

// Ses açma/kapama butonu
muteBtn.addEventListener('click', () => {
    if (videoPlayer.muted) {
        videoPlayer.muted = false;
        muteBtn.innerHTML = '<i class="fas fa-volume-up"></i> Ses';
    } else {
        videoPlayer.muted = true;
        muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i> Ses';
    }
});

// Video player event listeners
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

// Klavye kısayolları
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case ' ':
            e.preventDefault();
            if (videoPlayer.paused) {
                videoPlayer.play();
            } else {
                videoPlayer.pause();
            }
            break;
        case 'f':
        case 'F':
            if (videoPlayer.requestFullscreen) {
                videoPlayer.requestFullscreen();
            }
            break;
        case 'm':
        case 'M':
            videoPlayer.muted = !videoPlayer.muted;
            muteBtn.innerHTML = videoPlayer.muted ? 
                '<i class="fas fa-volume-mute"></i> Ses' : 
                '<i class="fas fa-volume-up"></i> Ses';
            break;
    }
});

// Sayfa yüklendiğinde kanal listesini oluştur
document.addEventListener('DOMContentLoaded', () => {
    createChannelList();
    updateProgramDate();
    
    // İlk kanalı otomatik seç (isteğe bağlı)
    // selectChannel(channels[0]);
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

// Kanal değiştirme için ok tuşları (isteğe bağlı)
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