import React from 'react';
import Navbar from '../../components/Navbar';

export default function Attacks() {
  return (
    <main>
      <Navbar />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-700 rounded-lg p-4 bg-gray-800">
            <h1 className="text-2xl font-bold mb-6">WEP/WPA-Cracker</h1>
            
            <div className="mb-6 flex justify-between items-center">
              <div>
                <select className="bg-gray-700 text-white rounded px-3 py-2 border border-gray-600 mr-2">
                  <option value="">Netzwerk auswählen</option>
                  <option value="1">Home-Network (WPA2)</option>
                  <option value="2">Guest-WiFi (WPA2)</option>
                  <option value="3">FreeWiFi (Open)</option>
                  <option value="4">Office-Net (WPA2-Enterprise)</option>
                  <option value="5">IoT-Network (WEP)</option>
                </select>
                <select className="bg-gray-700 text-white rounded px-3 py-2 border border-gray-600">
                  <option value="">Angriffsmethode auswählen</option>
                  <option value="wep_cracking">WEP Cracking</option>
                  <option value="wpa_handshake">WPA Handshake Capture</option>
                  <option value="pmkid_attack">PMKID Attack</option>
                  <option value="dictionary">Dictionary Attack</option>
                  <option value="bruteforce">Brute Force</option>
                </select>
              </div>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Angriff starten
              </button>
            </div>
            
            <div className="terminal mb-6">
              <div className="terminal-header">
                <span>Angriffs-Konsole</span>
                <span>aircrack-ng</span>
              </div>
              <div className="terminal-content">
                <div className="terminal-output">
                  [*] Angriff auf IoT-Network (00:11:22:33:44:59) mit WEP Cracking
                  [*] Kanal: 6
                  [*] Verschlüsselung: WEP
                  
                  [+] Sammle Initialisierungsvektoren (IVs)...
                  [+] Gesammelte IVs: 12543
                  [+] Benötigte IVs für erfolgreichen Angriff: ~40000
                  [+] Fortschritt: 31%
                  
                  [*] Angriff läuft... Bitte warten...
                  [*] Geschätzte verbleibende Zeit: 2:34
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Laufende Angriffe</h2>
              <div className="grid grid-cols-1 gap-4">
                <div className="network-card">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-medium">IoT-Network</h3>
                      <p className="text-gray-400">BSSID: 00:11:22:33:44:59</p>
                      <p className="text-gray-400">Angriffsmethode: WEP Cracking</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-red-900 text-red-300 px-2 py-1 rounded text-sm">WEP</span>
                      <p className="text-gray-400">Kanal: 6</p>
                      <p className="text-gray-400">Status: Läuft</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between mb-1">
                      <span>Fortschritt:</span>
                      <span>31%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-bar-fill" style={{ width: '31%' }}></div>
                    </div>
                    <div className="flex justify-between mt-2 text-sm text-gray-400">
                      <span>Gesammelte IVs: 12543</span>
                      <span>Benötigt: ~40000</span>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button className="bg-yellow-600 hover:bg-yellow-700 text-white text-sm py-1 px-3 rounded mr-2">
                      Pausieren
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 text-white text-sm py-1 px-3 rounded">
                      Abbrechen
                    </button>
                  </div>
                </div>
                
                <div className="network-card">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-medium">Home-Network</h3>
                      <p className="text-gray-400">BSSID: 00:11:22:33:44:55</p>
                      <p className="text-gray-400">Angriffsmethode: WPA Handshake Capture</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-blue-900 text-blue-300 px-2 py-1 rounded text-sm">WPA2</span>
                      <p className="text-gray-400">Kanal: 6</p>
                      <p className="text-green-400">Status: Abgeschlossen</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between mb-1">
                      <span>Fortschritt:</span>
                      <span>100%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-bar-fill bg-green-500" style={{ width: '100%' }}></div>
                    </div>
                    <div className="flex justify-between mt-2 text-sm text-gray-400">
                      <span>Handshake erfolgreich aufgezeichnet</span>
                      <span>Bereit für Wörterbuch-Angriff</span>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-1 px-3 rounded mr-2">
                      Wörterbuch-Angriff
                    </button>
                    <button className="bg-gray-600 hover:bg-gray-700 text-white text-sm py-1 px-3 rounded">
                      Löschen
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Angriffsmethoden</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="dashboard-card">
                  <div className="dashboard-card-header">WEP Cracking</div>
                  <div className="dashboard-card-content">
                    <p className="mb-2">Sammelt Initialisierungsvektoren (IVs) und nutzt statistische Angriffe, um WEP-Schlüssel zu knacken.</p>
                    <p className="text-gray-400 text-sm">Effektiv gegen: WEP-verschlüsselte Netzwerke</p>
                    <p className="text-gray-400 text-sm">Benötigte IVs: ~40.000 - 85.000</p>
                  </div>
                </div>
                
                <div className="dashboard-card">
                  <div className="dashboard-card-header">WPA Handshake Capture</div>
                  <div className="dashboard-card-content">
                    <p className="mb-2">Zeichnet den 4-Wege-Handshake auf, wenn sich ein Client mit dem Netzwerk verbindet.</p>
                    <p className="text-gray-400 text-sm">Effektiv gegen: WPA/WPA2-PSK Netzwerke</p>
                    <p className="text-gray-400 text-sm">Benötigt: Aktiven Client oder Deauthentication</p>
                  </div>
                </div>
                
                <div className="dashboard-card">
                  <div className="dashboard-card-header">PMKID Attack</div>
                  <div className="dashboard-card-content">
                    <p className="mb-2">Extrahiert die PMKID aus dem ersten Nachrichtenaustausch ohne Client-Verbindung.</p>
                    <p className="text-gray-400 text-sm">Effektiv gegen: WPA/WPA2-PSK Netzwerke</p>
                    <p className="text-gray-400 text-sm">Vorteil: Kein verbundener Client erforderlich</p>
                  </div>
                </div>
                
                <div className="dashboard-card">
                  <div className="dashboard-card-header">Dictionary Attack</div>
                  <div className="dashboard-card-content">
                    <p className="mb-2">Testet Passwörter aus einer Wörterbuchdatei gegen einen aufgezeichneten Handshake.</p>
                    <p className="text-gray-400 text-sm">Effektiv gegen: Schwache Passwörter</p>
                    <p className="text-gray-400 text-sm">Benötigt: Aufgezeichneten Handshake oder PMKID</p>
                  </div>
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
