:root {
    --primary-red: #ff3333;
    --dark-bg: #111111;
    --text-color: #ffffff;
    --border-color: #333333;
}

/* --- Tło Wideo (JAŚNIEJSZE TŁO) --- */
#background-video {
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    transform: translateX(-50%) translateY(-50%);
    background-size: cover;
    /* Zwiększono jasność, aby wideo było lepiej widoczne jak na zrzucie ekranu */
    filter: brightness(0.9); 
}

/* --- Ekran Startowy --- */
#start-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--dark-bg);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100; 
}

#start-button {
    background-color: var(--primary-red);
    color: var(--text-color);
    border: none;
    padding: 15px 30px;
    font-size: 1.5em;
    font-weight: bold;
    cursor: pointer;
    border-radius: 8px;
    transition: background-color 0.3s, transform 0.1s;
}

/* Nakładka Czerwonej Siatki/Kropek */
.video-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255, 51, 51, 0.05) 1px, transparent 1px) 0 0 / 20px 20px;
    z-index: -99;
    pointer-events: none;
}

/* --- Globalne style i kontener (CENTRUM) --- */
body {
    background-color: var(--dark-bg);
    color: var(--text-color);
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: flex-start; /* Ustawienie na górę kontenera, aby wyśrodkowanie było poprawne */
    min-height: 100vh;
    padding: 50px 0; /* Dodatkowy margines na górze/dole dla estetyki */
    margin: 0;
    position: relative;
    overflow-x: hidden;
}

/* Główny kontener (widoczny po kliknięciu) */
.container {
    max-width: 400px; 
    width: 90%;
    text-align: center;
    padding: 30px;
    z-index: 10;
    background-color: rgba(17, 17, 17, 0.7); /* Lżejsze tło kontenera dla lepszego widoku wideo */
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
    display: none; 
}

/* --- Profil, Status, Linki --- */
.avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 3px solid var(--primary-red);
    object-fit: cover;
    margin-bottom: 10px;
}

.username {
    color: var(--primary-red);
    font-size: 2em;
    margin: 0;
}

.email {
    font-size: 0.9em;
    color: #aaaaaa;
    margin-top: 5px;
    margin-bottom: 25px;
}

.status-box {
    border: 2px solid var(--primary-red);
    padding: 10px 20px;
    margin: 20px 0;
    border-radius: 8px;
    font-size: 1.1em;
    font-weight: bold;
    text-transform: uppercase;
    background-color: rgba(255, 51, 51, 0.05);
}

.links {
    margin-top: 20px; 
}

.link-button {
    display: flex;
    align-items: center;
    text-decoration: none;
    background-color: transparent;
    border: 2px solid var(--border-color);
    color: var(--text-color);
    padding: 10px 15px; 
    margin-bottom: 10px; /* Zgodne z widokiem */
    border-radius: 8px;
    font-size: 1em; 
    width: 100%;
    box-sizing: border-box;
    position: relative;
    white-space: nowrap; /* Zapobiega łamaniu się przycisków */
}

.link-button:hover {
    border-color: var(--primary-red);
    background-color: rgba(255, 51, 51, 0.1);
}

.link-button i {
    font-size: 1.5em;
    margin-right: 15px;
    width: 30px; 
    text-align: center;
}

.link-label {
    display: block;
    font-size: 0.7em; 
    color: #999999;
    font-weight: normal;
    position: absolute;
    right: 15px;
}

.link-button span:not(.link-label) {
    font-weight: bold;
    color: var(--text-color);
    line-height: 1.2;
}

/* --- Stopka (Created by Xnat) --- */
.footer {
    margin-top: 25px; 
    margin-bottom: 0;
    font-size: 0.8em;
    color: #666666;
}

/* --- Kontrolki Audio/Wideo (LEWY DÓŁ) --- */
.controls {
    position: fixed;
    bottom: 10px;
    left: 10px;
    display: flex;
    flex-direction: column; 
    gap: 5px;
    z-index: 50;
    font-weight: bold;
    text-shadow: 0 0 2px black;
}

.control-row {
    display: flex;
    gap: 5px;
}

.control-box {
    background-color: rgba(50, 50, 50, 0.8);
    border: 1px solid var(--primary-red);
    padding: 5px 8px; 
    border-radius: 3px;
    font-size: 0.7em; 
}

/* --- Widget Czasu (PRAWY DÓŁ) --- */
.time-widget {
    position: fixed;
    bottom: 10px;
    right: 10px;
    background-color: rgba(50, 50, 50, 0.8);
    border: 1px solid var(--primary-red);
    padding: 5px 10px;
    border-radius: 3px;
    font-size: 0.8em;
    z-index: 50;
}
