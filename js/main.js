document.addEventListener('DOMContentLoaded', (event) => {
    const audio = document.getElementById('background-audio');
    const video = document.getElementById('background-video');
    
    const startScreen = document.getElementById('start-screen');
    const startButton = document.getElementById('start-button');
    const mainContent = document.getElementById('main-content');
    
    const audioControl = document.getElementById('audio-control');
    const videoControl = document.getElementById('video-control');
    
    const audioStatus = document.getElementById('audio-status');
    const videoStatus = document.getElementById('video-status');
    
    const timeWidget = document.getElementById('current-time-date');

    // --- LOGIKA STARTU STRONY (Natychmiastowe uruchomienie mediów) ---
    startButton.addEventListener('click', () => {
        startScreen.style.display = 'none';
        mainContent.style.display = 'block';

        // Uruchom audio (przestaje być wyciszone)
        audio.muted = false; 
        audio.play().catch(e => console.error("Problem z odtwarzaniem audio:", e));
        
        // Uruchom wideo (zostaje wyciszone, żeby nie kolidować z muzyką)
        video.muted = true; 
        video.play().catch(e => console.error("Problem z odtwarzaniem wideo:", e));

        // Ustaw statusy początkowe zgodnie ze zrzutem ekranu
        audioControl.classList.add('active'); 
        audioStatus.textContent = 'Audio: Włączone';
        
        videoControl.classList.remove('active'); 
        videoStatus.textContent = 'Wideo: Wyciszony';
    });

    // --- FUNKCJE STERUJĄCE (Po uruchomieniu) ---
    audioControl.addEventListener('click', () => {
        if (audio.paused || audio.muted) {
            audio.muted = false;
            audio.play().catch(e => console.error("Problem z odtwarzaniem audio:", e));
            audioStatus.textContent = 'Audio: Włączone';
            audioControl.classList.add('active');
        } else {
            audio.muted = true;
            audioStatus.textContent = 'Audio: Wyłączone';
            audioControl.classList.remove('active');
        }
    });

    videoControl.addEventListener('click', () => {
        if (video.muted) {
            video.muted = false;
            videoStatus.textContent = 'Wideo: Odsłuch';
            videoControl.classList.add('active');
        } else {
            video.muted = true;
            videoStatus.textContent = 'Wideo: Wyciszony';
            videoControl.classList.remove('active');
        }
    });

    // --- Widget Czasu ---
    function updateTimeWidget() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        const formattedDate = now.toLocaleString('pl-PL', options);
        
        const finalFormat = formattedDate
            .toLowerCase()
            .replace(/,/, '')
            .replace(/(\s\d{4})/, ' $1');

        timeWidget.textContent = finalFormat;
    }

    setInterval(updateTimeWidget, 1000);
    updateTimeWidget(); 
});
