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
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/TRT_Haber_logo.svg/1200px-TRT_Haber_logo.svg.png",
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
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/TRT_%C3%87ocuk_logo.svg/1200px-TRT_%C3%87ocuk_logo.svg.png",
        description: "Çocuklar için eğitici ve eğlenceli içerik"
    },
    {
        id: 5,
        name: "TRT Belgesel",
        category: "Belgesel",
        streamUrl: "https://tv-trtbelgesel.medya.trt.com.tr/master.m3u8",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/TRT_Belgesel_logo.svg/1200px-TRT_Belgesel_logo.svg.png",
        description: "Belgesel ve kültür programları"
    },
    {
        id: 6,
        name: "TRT Müzik",
        category: "Müzik",
        streamUrl: "https://tv-trtmuzik.medya.trt.com.tr/master.m3u8",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/TRT_M%C3%BCzik_logo.svg/1200px-TRT_M%C3%BCzik_logo.svg.png",
        description: "Türk müziği ve kültür programları"
    },
    {
        id: 7,
        name: "TRT Avaz",
        category: "Uluslararası",
        streamUrl: "https://tv-trtavaz.medya.trt.com.tr/master.m3u8",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/TRT_Avaz_logo.svg/1200px-TRT_Avaz_logo.svg.png",
        description: "Uluslararası Türkçe yayın kanalı"
    },
    {
        id: 8,
        name: "TRT Kurdî",
        category: "Yerel",
        streamUrl: "https://tv-trtkurdi.medya.trt.com.tr/master.m3u8",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/TRT_Kurd%C3%AE_logo.svg/1200px-TRT_Kurd%C3%AE_logo.svg.png",
        description: "Kürtçe yayın yapan kanal"
    },
    // Demo için çalışan stream'ler
    {
        id: 9,
        name: "Demo Kanal 1",
        category: "Demo",
        streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Big_Buck_Bunny_icon.png",
        description: "Test stream - Big Buck Bunny"
    },
    {
        id: 10,
        name: "Demo Kanal 2",
        category: "Demo",
        streamUrl: "https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Akamai_logo.png",
        description: "Test stream - Akamai"
    },
    {
        id: 11,
        name: "Demo Kanal 3",
        category: "Demo",
        streamUrl: "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Tears_of_Steel_logo.png",
        description: "Test stream - Tears of Steel"
    },
    {
        id: 12,
        name: "ATV",
        category: "Ulusal",
        streamUrl: "https://edge1.socialsmart.tv/atv/playlist.m3u8", // Demo/test link
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/ATV_logo_2013.png",
        description: "ATV - Demo/Deneme yayınıdır. Gerçek yayın olmayabilir."
    },
    {
        id: 13,
        name: "Kanal D",
        category: "Ulusal",
        streamUrl: "https://dogus-live.daioncdn.net/kanald/kanald.m3u8", // Demo/test link
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Kanal_D_logo_2018.png",
        description: "Kanal D - Demo/Deneme yayınıdır. Gerçek yayın olmayabilir."
    },
    {
        id: 14,
        name: "Show TV",
        category: "Ulusal",
        streamUrl: "https://dogus-live.daioncdn.net/showtv/showtv.m3u8", // Demo/test link
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Show_TV_logo_2018.png",
        description: "Show TV - Demo/Deneme yayınıdır. Gerçek yayın olmayabilir."
    },
    {
        id: 15,
        name: "Star TV",
        category: "Ulusal",
        streamUrl: "https://dogus-live.daioncdn.net/startv/startv.m3u8", // Demo/test link
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Star_TV_logo_2012.png",
        description: "Star TV - Demo/Deneme yayınıdır. Gerçek yayın olmayabilir."
    },
    {
        id: 16,
        name: "FOX TV",
        category: "Ulusal",
        streamUrl: "https://dogus-live.daioncdn.net/foxtv/foxtv.m3u8", // Demo/test link
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/67/FOX_Turkey_logo.png",
        description: "FOX TV - Demo/Deneme yayınıdır. Gerçek yayın olmayabilir."
    },
    {
        id: 17,
        name: "TV8",
        category: "Ulusal",
        streamUrl: "https://dogus-live.daioncdn.net/tv8/tv8.m3u8", // Demo/test link
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/TV8_logo_2013.png",
        description: "TV8 - Demo/Deneme yayınıdır. Gerçek yayın olmayabilir."
    },
    {
        id: 18,
        name: "Kanal 7",
        category: "Ulusal",
        streamUrl: "https://dogus-live.daioncdn.net/kanal7/kanal7.m3u8", // Demo/test link
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Kanal_7_logo.png",
        description: "Kanal 7 - Demo/Deneme yayınıdır. Gerçek yayın olmayabilir."
    },
    {
        id: 19,
        name: "CNN Türk",
        category: "Haber",
        streamUrl: "",
        webUrl: "https://www.cnnturk.com/canli-yayin",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/CNN_T%C3%BCrk_logo.png",
        description: "CNN Türk - Resmi web sitesinden canlı izleyebilirsiniz."
    },
    {
        id: 20,
        name: "NTV",
        category: "Haber",
        streamUrl: "https://dogus-live.daioncdn.net/ntv/ntv.m3u8", // Demo/test link
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/NTV_logo_2017.png",
        description: "NTV - Demo/Deneme yayınıdır. Gerçek yayın olmayabilir."
    },
    {
        id: 21,
        name: "Habertürk",
        category: "Haber",
        streamUrl: "",
        webUrl: "https://www.haberturk.com/canliyayin",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Habert%C3%BCrk_logo.png",
        description: "Habertürk - Resmi web sitesinden canlı izleyebilirsiniz."
    },
    {
        id: 22,
        name: "EuroNews Türkçe",
        category: "Haber",
        streamUrl: "https://rakuten-euronews-1-tr.samsung.wurl.tv/playlist.m3u8",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Euronews_2016_logo.svg",
        description: "EuroNews Türkçe - Açık yayın. Uluslararası haber kanalı."
    },
    {
        id: 23,
        name: "Bloomberg HT",
        category: "Ekonomi",
        streamUrl: "https://live.blutv.com/blutv_bloomberght/live.m3u8",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Bloomberg_HT_logo.png",
        description: "Bloomberg HT - Ekonomi ve finans kanalı."
    },
    {
        id: 24,
        name: "A Haber",
        category: "Haber",
        streamUrl: "https://tv.ahaber.com.tr/live/ahaber/playlist.m3u8",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/A_Haber_logo.png",
        description: "A Haber - Haber kanalı."
    },
    {
        id: 25,
        name: "Kral TV",
        category: "Müzik",
        streamUrl: "https://edge1.socialsmart.tv/kral/playlist.m3u8",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Kral_TV_logo.png",
        description: "Kral TV - Müzik kanalı."
    },
    {
        id: 26,
        name: "PowerTürk TV",
        category: "Müzik",
        streamUrl: "https://edge1.socialsmart.tv/powerturktv/playlist.m3u8",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Power_T%C3%BCrk_TV_logo.png",
        description: "PowerTürk TV - Türkçe müzik kanalı."
    },
    {
        id: 27,
        name: "Mekke TV",
        category: "Dini",
        streamUrl: "",
        youtubeUrl: "https://www.youtube.com/watch?v=2Gub8-cSH9c",
        logo: "https://i.imgur.com/6QK6wQp.png",
        description: "Mekke TV - Kabe'den canlı yayın. YouTube üzerinden izleyebilirsiniz."
    },
    {
        id: 28,
        name: "Medine TV",
        category: "Dini",
        streamUrl: "",
        youtubeUrl: "https://www.youtube.com/watch?v=-jWCvRuC254",
        logo: "https://i.imgur.com/1Q9Z1ZB.png",
        description: "Medine TV - Mescid-i Nebevi'den canlı yayın. YouTube üzerinden izleyebilirsiniz."
    }
];

// DOM elementleri
const channelList = document.getElementById('channelList');
const searchInput = document.getElementById('searchInput');
const videoPlayer = document.getElementById('videoPlayer');
const currentChannel = document.getElementById('currentChannel');
const channelDescription = document.getElementById('channelDescription');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const muteBtn = document.getElementById('muteBtn');

let currentChannelId = null;
let filteredChannels = [...channels];

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