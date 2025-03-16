import React from 'react';
import Navbar from '../../components/Navbar';

export default function Analysis() {
  return (
    <main>
      <Navbar />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-700 rounded-lg p-4 bg-gray-800">
            <h1 className="text-2xl font-bold mb-6">Netzwerkanalyse</h1>
            
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
                  <option value="general">Allgemeine Analyse</option>
                  <option value="traffic">Verkehrsanalyse</option>
                  <option value="security">Sicherheitsanalyse</option>
                </select>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Analysieren
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div className="dashboard-card">
                <div className="dashboard-card-header">Netzwerkübersicht</div>
                <div className="dashboard-card-content">
                  <div className="mb-4">
                    <h3 className="text-lg font-medium">Home-Network</h3>
                    <p className="text-gray-400">BSSID: 00:11:22:33:44:55</p>
                    <p className="text-gray-400">Kanal: 6</p>
                    <p className="text-gray-400">Verschlüsselung: WPA2</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <span className="text-gray-400 mr-2">Signalstärke:</span>
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <span className="ml-2">-65 dBm</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-400 mr-2">Aktivität:</span>
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                    <span className="ml-2">Hoch</span>
                  </div>
                </div>
              </div>
              
              <div className="dashboard-card">
                <div className="dashboard-card-header">Paketstatistik</div>
                <div className="dashboard-card-content">
                  <div className="mb-2 flex justify-between">
                    <span>Gesamtpakete:</span>
                    <span className="font-bold">1,245</span>
                  </div>
                  <div className="mb-2 flex justify-between">
                    <span>Management:</span>
                    <span>432 (34.7%)</span>
                  </div>
                  <div className="mb-2 flex justify-between">
                    <span>Control:</span>
                    <span>189 (15.2%)</span>
                  </div>
                  <div className="mb-2 flex justify-between">
                    <span>Data:</span>
                    <span>624 (50.1%)</span>
                  </div>
                  <div className="mb-2 flex justify-between">
                    <span>Durchschn. Größe:</span>
                    <span>284 Bytes</span>
                  </div>
                  <div className="mb-2 flex justify-between">
                    <span>Erste Erfassung:</span>
                    <span>13:05:23</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Letzte Erfassung:</span>
                    <span>13:51:12</span>
                  </div>
                </div>
              </div>
              
              <div className="dashboard-card">
                <div className="dashboard-card-header">Sicherheitsbewertung</div>
                <div className="dashboard-card-content">
                  <div className="security-score security-score-medium mb-4">
                    80
                  </div>
                  <div className="mb-4 text-center">
                    <span className="text-yellow-400">Mittlere Sicherheit</span>
                  </div>
                  <div className="mb-2">
                    <h4 className="font-medium mb-1">Sicherheitsprobleme:</h4>
                    <ul className="text-sm">
                      <li className="mb-1 text-yellow-400">• WPA2 kann anfällig für KRACK-Angriffe sein</li>
                      <li className="mb-1 text-gray-400">• Keine WPA3-Unterstützung</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Empfehlungen:</h4>
                    <ul className="text-sm">
                      <li className="mb-1 text-gray-400">• Upgrade auf WPA3, falls unterstützt</li>
                      <li className="mb-1 text-gray-400">• Firmware-Updates für Router installieren</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Verbundene Geräte</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-900 border border-gray-700">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border-b border-gray-700 text-left">MAC-Adresse</th>
                      <th className="px-4 py-2 border-b border-gray-700 text-left">Signalstärke</th>
                      <th className="px-4 py-2 border-b border-gray-700 text-left">Pakete</th>
                      <th className="px-4 py-2 border-b border-gray-700 text-left">Datenvolumen</th>
                      <th className="px-4 py-2 border-b border-gray-700 text-left">Erste Aktivität</th>
                      <th className="px-4 py-2 border-b border-gray-700 text-left">Letzte Aktivität</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-800">
                      <td className="px-4 py-2">AA:BB:CC:DD:EE:FF</td>
                      <td className="px-4 py-2">-55 dBm</td>
                      <td className="px-4 py-2">324</td>
                      <td className="px-4 py-2">1.2 MB</td>
                      <td className="px-4 py-2">13:05:45</td>
                      <td className="px-4 py-2">13:50:12</td>
                    </tr>
                    <tr className="hover:bg-gray-800">
                      <td className="px-4 py-2">11:22:33:44:55:66</td>
                      <td className="px-4 py-2">-62 dBm</td>
                      <td className="px-4 py-2">156</td>
                      <td className="px-4 py-2">0.8 MB</td>
                      <td className="px-4 py-2">13:10:23</td>
                      <td className="px-4 py-2">13:45:47</td>
                    </tr>
                    <tr className="hover:bg-gray-800">
                      <td className="px-4 py-2">22:33:44:55:66:77</td>
                      <td className="px-4 py-2">-68 dBm</td>
                      <td className="px-4 py-2">89</td>
                      <td className="px-4 py-2">0.3 MB</td>
                      <td className="px-4 py-2">13:15:12</td>
                      <td className="px-4 py-2">13:42:34</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Angriffsverlauf</h2>
              <div className="grid grid-cols-1 gap-4">
                <div className="network-card">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-medium">WPA Handshake Capture</h3>
                      <p className="text-gray-400">Startzeit: 13:15:23</p>
                      <p className="text-gray-400">Endzeit: 13:18:45</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-green-900 text-green-300 px-2 py-1 rounded text-sm">Erfolgreich</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-gray-400">Handshake erfolgreich aufgezeichnet. Bereit für Wörterbuch-Angriff.</p>
                  </div>
                </div>
                
                <div className="network-card">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-medium">Dictionary Attack</h3>
                      <p className="text-gray-400">Startzeit: 13:19:12</p>
                      <p className="text-gray-400">Endzeit: 13:24:56</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-red-900 text-red-300 px-2 py-1 rounded text-sm">Fehlgeschlagen</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-gray-400">Passwort nicht im Wörterbuch gefunden. 15.432 Passwörter getestet.</p>
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
