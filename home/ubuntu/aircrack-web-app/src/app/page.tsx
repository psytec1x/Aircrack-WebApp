import React from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-700 rounded-lg p-4 bg-gray-800">
            <h1 className="text-2xl font-bold text-center mb-6">Aircrack Web App</h1>
            
            <div className="terminal mb-6">
              <div className="terminal-header">
                <span>Terminal</span>
                <span>aircrack-web</span>
              </div>
              <div className="terminal-content">
                <div className="terminal-prompt">root@aircrack-web:~# </div>
                <div className="terminal-output">
                  Willkommen bei der Aircrack Web App!
                  
                  Diese Anwendung simuliert die Funktionalitäten von Aircrack-ng in einer Web-Umgebung.
                  
                  Verfügbare Module:
                  - Netzwerk-Scanner: Erkennung von WLAN-Netzwerken
                  - Paket-Sniffer: Analyse von Netzwerkpaketen
                  - WEP/WPA-Cracker: Simulation von Passwort-Cracking
                  - Netzwerkanalyse: Statistische Auswertung von Netzwerkdaten
                  
                  HINWEIS: Diese Anwendung dient ausschließlich zu Bildungs- und Demonstrationszwecken.
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="dashboard-card">
                <div className="dashboard-card-header">Netzwerk-Scanner</div>
                <div className="dashboard-card-content">
                  <p className="mb-4">Scannen und Erkennen von WLAN-Netzwerken in der Umgebung.</p>
                  <a href="/scanner" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Scanner öffnen
                  </a>
                </div>
              </div>
              
              <div className="dashboard-card">
                <div className="dashboard-card-header">Paket-Sniffer</div>
                <div className="dashboard-card-content">
                  <p className="mb-4">Erfassen und Analysieren von Netzwerkpaketen.</p>
                  <a href="/packets" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Sniffer öffnen
                  </a>
                </div>
              </div>
              
              <div className="dashboard-card">
                <div className="dashboard-card-header">WEP/WPA-Cracker</div>
                <div className="dashboard-card-content">
                  <p className="mb-4">Simulation von Passwort-Cracking für verschiedene Verschlüsselungstypen.</p>
                  <a href="/attacks" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Cracker öffnen
                  </a>
                </div>
              </div>
              
              <div className="dashboard-card">
                <div className="dashboard-card-header">Netzwerkanalyse</div>
                <div className="dashboard-card-content">
                  <p className="mb-4">Statistische Auswertung und Visualisierung von Netzwerkdaten.</p>
                  <a href="/analysis" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Analyse öffnen
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center text-gray-400 text-sm">
              <p>Diese Anwendung dient ausschließlich zu Bildungs- und Demonstrationszwecken.</p>
              <p>Verwenden Sie diese Anwendung nur in Netzwerken, für die Sie eine Genehmigung haben.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
