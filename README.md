# Aircrack-ng Web App - Dokumentation

## Übersicht

Diese Web-App ist eine Simulation der Funktionalitäten von Aircrack-ng in einer benutzerfreundlichen Weboberfläche. Sie bietet vier Hauptfunktionen:

1. **Netzwerk-Scanner**: Erkennt und zeigt WLAN-Netzwerke mit Details wie BSSID, Signalstärke und Verschlüsselungstyp an
2. **Paket-Sniffer**: Erfasst und analysiert Netzwerkpakete mit detaillierten Informationen
3. **WEP/WPA-Cracker**: Simuliert verschiedene Angriffsmethoden auf Netzwerke mit Fortschrittsanzeige
4. **Netzwerkanalyse**: Bietet statistische Auswertungen und Sicherheitsbewertungen

## Technologien

Die Anwendung wurde mit folgenden Technologien entwickelt:

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Next.js API-Routen
- **Datenbank**: Cloudflare D1 (SQLite-kompatibel)

## Installation und Ausführung

### Voraussetzungen

- Node.js (Version 18 oder höher)
- npm oder pnpm

### Schritte zur Installation

1. Klonen Sie das Repository:
   ```
   git clone <repository-url>
   cd aircrack-web-app
   ```

2. Installieren Sie die Abhängigkeiten:
   ```
   npm install
   # oder
   pnpm install
   ```

3. Initialisieren Sie die Datenbank:
   ```
   npx wrangler d1 execute DB --local --file=migrations/0001_initial.sql
   ```

4. Starten Sie die Entwicklungsumgebung:
   ```
   npm run dev
   # oder
   pnpm dev
   ```

5. Öffnen Sie die Anwendung in Ihrem Browser:
   ```
   http://localhost:3000
   ```

## Funktionen im Detail

### Netzwerk-Scanner

Der Netzwerk-Scanner simuliert die Erkennung von WLAN-Netzwerken in der Umgebung. Er zeigt Informationen wie:

- SSID (Netzwerkname)
- BSSID (MAC-Adresse des Access Points)
- Kanal
- Verschlüsselungstyp (WEP, WPA, WPA2, etc.)
- Signalstärke

Funktionen:
- Scan starten/stoppen
- Filtern nach Verschlüsselungstyp
- Detailansicht für einzelne Netzwerke

### Paket-Sniffer

Der Paket-Sniffer simuliert das Erfassen und Analysieren von Netzwerkpaketen. Er zeigt Informationen wie:

- Pakettyp (Management, Control, Data)
- Quell- und Ziel-MAC-Adressen
- Paketgröße
- Protokollinformationen

Funktionen:
- Capture starten/stoppen
- Filtern nach Pakettyp oder MAC-Adresse
- Detailansicht für einzelne Pakete

### WEP/WPA-Cracker

Der WEP/WPA-Cracker simuliert verschiedene Angriffsmethoden auf WLAN-Netzwerke. Er unterstützt:

- WEP Cracking
- WPA Handshake Capture
- PMKID Attack
- Dictionary Attack
- Brute Force

Funktionen:
- Auswahl des Zielnetzwerks
- Auswahl der Angriffsmethode
- Fortschrittsanzeige
- Ergebnisdarstellung

### Netzwerkanalyse

Die Netzwerkanalyse bietet statistische Auswertungen und Sicherheitsbewertungen für WLAN-Netzwerke. Sie zeigt:

- Allgemeine Netzwerkstatistiken
- Paketstatistiken
- Sicherheitsbewertung
- Verbundene Geräte
- Angriffsverlauf

Funktionen:
- Auswahl des zu analysierenden Netzwerks
- Verschiedene Analysetypen (Allgemein, Verkehr, Sicherheit)
- Sicherheitsempfehlungen

## API-Endpunkte

Die Anwendung bietet folgende API-Endpunkte:

### Netzwerke

- `GET /api/networks`: Liste aller Netzwerke abrufen
- `POST /api/networks`: Neues Netzwerk hinzufügen

### Pakete

- `GET /api/packets`: Liste aller Pakete abrufen
- `POST /api/packets`: Neues Paket hinzufügen

### Angriffe

- `GET /api/attacks`: Liste aller Angriffssimulationen abrufen
- `POST /api/attacks`: Neue Angriffssimulation starten
- `PUT /api/attacks/:id`: Angriffssimulation aktualisieren

### Analyse

- `GET /api/analysis`: Netzwerkanalyse abrufen

## Datenbank-Schema

Die Anwendung verwendet folgende Tabellen:

- `networks`: Speichert Informationen über WLAN-Netzwerke
- `packets`: Speichert Informationen über Netzwerkpakete
- `attack_simulations`: Speichert Informationen über Angriffssimulationen
- `user_settings`: Speichert Benutzereinstellungen
- `access_logs`: Speichert Zugriffsprotokolle

## Hinweis

Diese Anwendung dient ausschließlich zu Bildungs- und Demonstrationszwecken. Verwenden Sie diese Anwendung nur in Netzwerken, für die Sie eine Genehmigung haben.

## Lizenz

Diese Anwendung ist unter der MIT-Lizenz veröffentlicht.
