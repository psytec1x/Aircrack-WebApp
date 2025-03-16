import React from 'react';
import Navbar from '../../components/Navbar';

export default function Scanner() {
  return (
    <main>
      <Navbar />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-700 rounded-lg p-4 bg-gray-800">
            <h1 className="text-2xl font-bold mb-6">Netzwerk-Scanner</h1>
            
            <div className="mb-6 flex justify-between items-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Scan starten
              </button>
              <div className="flex space-x-2">
                <select className="bg-gray-700 text-white rounded px-3 py-2 border border-gray-600">
                  <option value="all">Alle Netzwerke</option>
                  <option value="wep">Nur WEP</option>
                  <option value="wpa">Nur WPA/WPA2</option>
                  <option value="open">Nur offene Netzwerke</option>
                </select>
                <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
                  Filter
                </button>
              </div>
            </div>
            
            <div className="terminal mb-6">
              <div className="terminal-header">
                <span>Scan-Ausgabe</span>
                <span>airodump-ng</span>
              </div>
              <div className="terminal-content">
                <div className="terminal-output">
                  CH  5 ][ Elapsed: 30 s ][ 2025-03-16 13:26 ][ Scan: active
                  
                  BSSID              PWR  Beacons    #Data, #/s  CH  MB   ENC  CIPHER AUTH ESSID
                  
                  00:11:22:33:44:55  -65  103       210    0   6  130  WPA2 CCMP   PSK  Home-Network
                  00:11:22:33:44:56  -72  42        15     0   11 54   WPA2 CCMP   PSK  Guest-WiFi
                  00:11:22:33:44:57  -80  67        0      0   1  54   OPN              FreeWiFi
                  00:11:22:33:44:58  -58  124       432    0   3  130  WPA2 CCMP   MGT  Office-Net
                  00:11:22:33:44:59  -70  89        23     0   6  54   WEP  WEP         IoT-Network
                  
                  BSSID              STATION            PWR   Rate    Lost    Frames  Probe
                  
                  00:11:22:33:44:55  AA:BB:CC:DD:EE:FF  -55   0 - 1      0       12
                  00:11:22:33:44:56  11:22:33:44:55:66  -60   0 - 1      0        8
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Erkannte Netzwerke</h2>
              <div className="grid grid-cols-1 gap-4">
                <div className="network-card">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-medium">Home-Network</h3>
                      <p className="text-gray-400">BSSID: 00:11:22:33:44:55</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-blue-900 text-blue-300 px-2 py-1 rounded text-sm">WPA2</span>
                      <p className="text-gray-400">Kanal: 6</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-gray-400 mr-2">Signalstärke:</span>
                      <div className="w-32 bg-gray-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                      <span className="ml-2">-65 dBm</span>
                    </div>
                    <div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-1 px-3 rounded mr-2">
                        Details
                      </button>
                      <button className="bg-red-600 hover:bg-red-700 text-white text-sm py-1 px-3 rounded">
                        Angriff
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="network-card">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-medium">Guest-WiFi</h3>
                      <p className="text-gray-400">BSSID: 00:11:22:33:44:56</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-blue-900 text-blue-300 px-2 py-1 rounded text-sm">WPA2</span>
                      <p className="text-gray-400">Kanal: 11</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-gray-400 mr-2">Signalstärke:</span>
                      <div className="w-32 bg-gray-700 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                      <span className="ml-2">-72 dBm</span>
                    </div>
                    <div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-1 px-3 rounded mr-2">
                        Details
                      </button>
                      <button className="bg-red-600 hover:bg-red-700 text-white text-sm py-1 px-3 rounded">
                        Angriff
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="network-card">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-medium">IoT-Network</h3>
                      <p className="text-gray-400">BSSID: 00:11:22:33:44:59</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-red-900 text-red-300 px-2 py-1 rounded text-sm">WEP</span>
                      <p className="text-gray-400">Kanal: 6</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-gray-400 mr-2">Signalstärke:</span>
                      <div className="w-32 bg-gray-700 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                      </div>
                      <span className="ml-2">-70 dBm</span>
                    </div>
                    <div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-1 px-3 rounded mr-2">
                        Details
                      </button>
                      <button className="bg-red-600 hover:bg-red-700 text-white text-sm py-1 px-3 rounded">
                        Angriff
                      </button>
                    </div>
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
