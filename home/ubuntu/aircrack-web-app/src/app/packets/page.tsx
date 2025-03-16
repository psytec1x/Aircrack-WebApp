import React from 'react';
import Navbar from '../../components/Navbar';

export default function Packets() {
  return (
    <main>
      <Navbar />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-700 rounded-lg p-4 bg-gray-800">
            <h1 className="text-2xl font-bold mb-6">Paket-Sniffer</h1>
            
            <div className="mb-6 flex justify-between items-center">
              <div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                  Capture starten
                </button>
                <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                  Capture stoppen
                </button>
              </div>
              <div className="flex space-x-2">
                <select className="bg-gray-700 text-white rounded px-3 py-2 border border-gray-600">
                  <option value="all">Alle Pakete</option>
                  <option value="management">Management</option>
                  <option value="control">Control</option>
                  <option value="data">Data</option>
                </select>
                <input 
                  type="text" 
                  placeholder="MAC-Filter" 
                  className="bg-gray-700 text-white rounded px-3 py-2 border border-gray-600"
                />
                <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
                  Filter
                </button>
              </div>
            </div>
            
            <div className="terminal mb-6">
              <div className="terminal-header">
                <span>Paket-Capture</span>
                <span>airodump-ng</span>
              </div>
              <div className="terminal-content">
                <div className="terminal-output">
                  CH  6 ][ Elapsed: 45 s ][ 2025-03-16 13:49 ][ Capture: active
                  
                  BSSID: 00:11:22:33:44:55 (Home-Network)
                  
                  # Time     Source                Destination           Protocol Length Info
                  1 0.000000 00:11:22:33:44:55    FF:FF:FF:FF:FF:FF     802.11   128    Beacon frame
                  2 0.102134 AA:BB:CC:DD:EE:FF    00:11:22:33:44:55     802.11   68     Probe Request
                  3 0.102543 00:11:22:33:44:55    AA:BB:CC:DD:EE:FF     802.11   128    Probe Response
                  4 0.205876 AA:BB:CC:DD:EE:FF    00:11:22:33:44:55     802.11   114    Authentication
                  5 0.206321 00:11:22:33:44:55    AA:BB:CC:DD:EE:FF     802.11   114    Authentication
                  6 0.308754 AA:BB:CC:DD:EE:FF    00:11:22:33:44:55     802.11   114    Association Request
                  7 0.309201 00:11:22:33:44:55    AA:BB:CC:DD:EE:FF     802.11   114    Association Response
                  8 0.412543 AA:BB:CC:DD:EE:FF    00:11:22:33:44:55     802.11   154    EAPOL Key
                  9 0.413012 00:11:22:33:44:55    AA:BB:CC:DD:EE:FF     802.11   154    EAPOL Key
                  10 0.516432 AA:BB:CC:DD:EE:FF    00:11:22:33:44:55     802.11   154    EAPOL Key
                  11 0.516987 00:11:22:33:44:55    AA:BB:CC:DD:EE:FF     802.11   154    EAPOL Key
                  12 0.620123 AA:BB:CC:DD:EE:FF    00:11:22:33:44:55     802.11   1024   Data
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Paketanalyse</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-900 border border-gray-700">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border-b border-gray-700 text-left">#</th>
                      <th className="px-4 py-2 border-b border-gray-700 text-left">Zeit</th>
                      <th className="px-4 py-2 border-b border-gray-700 text-left">Quelle</th>
                      <th className="px-4 py-2 border-b border-gray-700 text-left">Ziel</th>
                      <th className="px-4 py-2 border-b border-gray-700 text-left">Typ</th>
                      <th className="px-4 py-2 border-b border-gray-700 text-left">Größe</th>
                      <th className="px-4 py-2 border-b border-gray-700 text-left">Info</th>
                      <th className="px-4 py-2 border-b border-gray-700 text-left">Aktionen</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="packet-row hover:bg-gray-800">
                      <td className="px-4 py-2">1</td>
                      <td className="px-4 py-2">0.000000</td>
                      <td className="px-4 py-2">00:11:22:33:44:55</td>
                      <td className="px-4 py-2">FF:FF:FF:FF:FF:FF</td>
                      <td className="px-4 py-2"><span className="text-blue-400">Management</span></td>
                      <td className="px-4 py-2">128</td>
                      <td className="px-4 py-2">Beacon frame</td>
                      <td className="px-4 py-2">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-2 rounded">
                          Details
                        </button>
                      </td>
                    </tr>
                    <tr className="packet-row hover:bg-gray-800">
                      <td className="px-4 py-2">2</td>
                      <td className="px-4 py-2">0.102134</td>
                      <td className="px-4 py-2">AA:BB:CC:DD:EE:FF</td>
                      <td className="px-4 py-2">00:11:22:33:44:55</td>
                      <td className="px-4 py-2"><span className="text-blue-400">Management</span></td>
                      <td className="px-4 py-2">68</td>
                      <td className="px-4 py-2">Probe Request</td>
                      <td className="px-4 py-2">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-2 rounded">
                          Details
                        </button>
                      </td>
                    </tr>
                    <tr className="packet-row hover:bg-gray-800">
                      <td className="px-4 py-2">8</td>
                      <td className="px-4 py-2">0.412543</td>
                      <td className="px-4 py-2">AA:BB:CC:DD:EE:FF</td>
                      <td className="px-4 py-2">00:11:22:33:44:55</td>
                      <td className="px-4 py-2"><span className="text-green-400">EAPOL</span></td>
                      <td className="px-4 py-2">154</td>
                      <td className="px-4 py-2">EAPOL Key</td>
                      <td className="px-4 py-2">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-2 rounded">
                          Details
                        </button>
                      </td>
                    </tr>
                    <tr className="packet-row hover:bg-gray-800">
                      <td className="px-4 py-2">12</td>
                      <td className="px-4 py-2">0.620123</td>
                      <td className="px-4 py-2">AA:BB:CC:DD:EE:FF</td>
                      <td className="px-4 py-2">00:11:22:33:44:55</td>
                      <td className="px-4 py-2"><span className="text-yellow-400">Data</span></td>
                      <td className="px-4 py-2">1024</td>
                      <td className="px-4 py-2">Data</td>
                      <td className="px-4 py-2">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-2 rounded">
                          Details
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
