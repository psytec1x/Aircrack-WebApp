-- Migration number: 0001 	 2025-03-16
DROP TABLE IF EXISTS networks;
DROP TABLE IF EXISTS packets;
DROP TABLE IF EXISTS attack_simulations;
DROP TABLE IF EXISTS user_settings;
DROP TABLE IF EXISTS access_logs;

-- Netzwerke (WLAN-Netzwerke)
CREATE TABLE IF NOT EXISTS networks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ssid TEXT NOT NULL,
  bssid TEXT NOT NULL,  -- MAC-Adresse
  channel INTEGER NOT NULL,
  encryption_type TEXT NOT NULL, -- WEP, WPA, WPA2, etc.
  signal_strength INTEGER NOT NULL, -- in dBm
  first_seen DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  last_seen DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  latitude REAL,
  longitude REAL,
  is_hidden BOOLEAN DEFAULT 0
);

-- Pakete (Netzwerkpakete)
CREATE TABLE IF NOT EXISTS packets (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  network_id INTEGER,
  packet_type TEXT NOT NULL, -- management, control, data
  source_mac TEXT NOT NULL,
  destination_mac TEXT NOT NULL,
  frame_type INTEGER,
  frame_subtype INTEGER,
  size INTEGER NOT NULL,
  signal_strength INTEGER, -- in dBm
  channel INTEGER,
  timestamp DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  raw_data TEXT, -- Hexadezimal-Darstellung der Paketdaten
  FOREIGN KEY (network_id) REFERENCES networks(id)
);

-- Angriffssimulationen
CREATE TABLE IF NOT EXISTS attack_simulations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  network_id INTEGER NOT NULL,
  attack_type TEXT NOT NULL, -- WEP cracking, WPA handshake capture, etc.
  status TEXT NOT NULL, -- running, completed, failed
  progress INTEGER DEFAULT 0, -- Prozent abgeschlossen
  start_time DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  end_time DATETIME,
  result TEXT, -- Ergebnis des Angriffs (z.B. gefundenes Passwort)
  log TEXT, -- Protokoll des Angriffsverlaufs
  FOREIGN KEY (network_id) REFERENCES networks(id)
);

-- Benutzereinstellungen
CREATE TABLE IF NOT EXISTS user_settings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  theme TEXT DEFAULT 'dark',
  preferred_tools TEXT DEFAULT '[]', -- JSON-Array der bevorzugten Tools
  interface_layout TEXT DEFAULT 'default',
  last_login DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Zugriffsprotokolle
CREATE TABLE IF NOT EXISTS access_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ip TEXT,
  path TEXT,
  action TEXT,
  accessed_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Beispieldaten für Netzwerke
INSERT INTO networks (ssid, bssid, channel, encryption_type, signal_strength) VALUES 
  ('Home-Network', '00:11:22:33:44:55', 6, 'WPA2', -65),
  ('Guest-WiFi', '00:11:22:33:44:56', 11, 'WPA2', -72),
  ('FreeWiFi', '00:11:22:33:44:57', 1, 'Open', -80),
  ('Office-Net', '00:11:22:33:44:58', 3, 'WPA2-Enterprise', -58),
  ('IoT-Network', '00:11:22:33:44:59', 6, 'WEP', -70);

-- Beispieldaten für Pakete
INSERT INTO packets (network_id, packet_type, source_mac, destination_mac, frame_type, frame_subtype, size, signal_strength, channel) VALUES 
  (1, 'management', '00:11:22:33:44:55', 'FF:FF:FF:FF:FF:FF', 0, 8, 128, -65, 6),
  (1, 'data', '00:11:22:33:44:55', '11:22:33:44:55:66', 2, 0, 1024, -65, 6),
  (2, 'management', '00:11:22:33:44:56', 'FF:FF:FF:FF:FF:FF', 0, 8, 128, -72, 11),
  (3, 'control', '00:11:22:33:44:57', '22:33:44:55:66:77', 1, 13, 14, -80, 1),
  (4, 'data', '00:11:22:33:44:58', '33:44:55:66:77:88', 2, 0, 2048, -58, 3);

-- Beispieldaten für Angriffssimulationen
INSERT INTO attack_simulations (network_id, attack_type, status, progress) VALUES 
  (5, 'WEP cracking', 'running', 45),
  (1, 'WPA handshake capture', 'completed', 100),
  (2, 'PMKID attack', 'failed', 30);

-- Beispieldaten für Benutzereinstellungen
INSERT INTO user_settings (theme, preferred_tools, interface_layout) VALUES 
  ('dark', '["network-scanner", "packet-analyzer", "wep-cracker"]', 'advanced');

-- Indizes für bessere Leistung
CREATE INDEX idx_networks_bssid ON networks(bssid);
CREATE INDEX idx_networks_ssid ON networks(ssid);
CREATE INDEX idx_packets_network_id ON packets(network_id);
CREATE INDEX idx_packets_timestamp ON packets(timestamp);
CREATE INDEX idx_attack_simulations_network_id ON attack_simulations(network_id);
CREATE INDEX idx_access_logs_accessed_at ON access_logs(accessed_at);
