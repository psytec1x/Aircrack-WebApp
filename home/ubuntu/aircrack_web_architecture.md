# Aircrack-ng Web App Architektur

## Überblick
Diese Web-App wird die Hauptfunktionalitäten von Aircrack-ng in einer browserbasierten Umgebung nachbilden. Da Aircrack-ng ein Netzwerk-Software-Paket zur Bewertung der WLAN-Sicherheit ist, werden wir eine Anwendung erstellen, die ähnliche Funktionen bietet, jedoch mit den Einschränkungen einer Web-Umgebung.

## Technologie-Stack
- **Frontend-Framework**: Next.js
- **Styling**: Tailwind CSS
- **Backend**: Next.js API-Routen + Cloudflare Workers
- **Datenbank**: Cloudflare D1 (SQLite-kompatibel)

## Hauptkomponenten

### 1. Netzwerk-Scanner
- Simulation von WLAN-Netzwerkerkennung
- Anzeige von verfügbaren Netzwerken mit Details (SSID, MAC, Kanal, Verschlüsselung)

### 2. Paket-Sniffer
- Visualisierung von Netzwerkpaketen
- Filterung und Analyse von Paketen

### 3. WEP/WPA-Cracker-Simulation
- Simulation des Passwort-Cracking-Prozesses
- Visualisierung der verschiedenen Angriffsmethoden

### 4. Netzwerkanalyse-Tools
- Statistische Auswertung von Netzwerkdaten
- Visualisierung von Netzwerkaktivitäten

### 5. Benutzeroberfläche
- Terminal-ähnliche Oberfläche für Befehle
- Dashboard für Netzwerküberwachung
- Detailansichten für Analysen

## Datenmodell
- Netzwerke (SSID, MAC, Kanal, Verschlüsselung, Signalstärke)
- Pakete (Typ, Quelle, Ziel, Inhalt, Zeitstempel)
- Angriffssimulationen (Typ, Ziel, Status, Fortschritt, Ergebnis)
- Benutzereinstellungen (Theme, Bevorzugte Tools)

## API-Endpunkte
- `/api/networks` - Simulierte Netzwerke verwalten
- `/api/packets` - Simulierte Pakete verwalten
- `/api/attacks` - Angriffssimulationen verwalten
- `/api/analysis` - Analysefunktionen

## Sicherheitshinweis
Diese Web-App dient ausschließlich zu Bildungs- und Demonstrationszwecken. Sie simuliert die Funktionen von Aircrack-ng, führt aber keine tatsächlichen Netzwerkangriffe durch. Die Anwendung wird deutlich darauf hinweisen, dass sie nur für legale Zwecke und zum Verständnis von Netzwerksicherheit verwendet werden sollte.
