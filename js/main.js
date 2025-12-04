document.addEventListener('DOMContentLoaded', (event) => {
    // UWAGA: Funkcjonalność sterowania audio/wideo została usunięta, 
    // ponieważ element tła został zmieniony na iFrame YouTube, 
    // który wymaga zaawansowanego YouTube Player API.
    // Wideo startuje wyciszone (mute=1) i w zapętleniu (loop=1).

    const timeWidget = document.getElementById('current-time-date');
    
    // --- Widget Czasu ---

    function updateTimeWidget() {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit',
            hour12: false 
        };
        const formattedDate = now.toLocaleString('pl-PL', options);
        // Formatowanie daty zgodnie z stylem z zrzutu
        const finalFormat = formattedDate
            .toLowerCase()
            .replace(/,/, '')
            .replace(/(\s\d{4})/, ' $1');

        timeWidget.textContent = finalFormat;
    }

    setInterval(updateTimeWidget, 1000);
    updateTimeWidget(); 
});
