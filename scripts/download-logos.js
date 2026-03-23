#!/usr/bin/env node
/**
 * Script pour télécharger les logos clients et certifications
 * Usage: node scripts/download-logos.js
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const LOGOS = {
  clients: [
    {
      name: 'TOGAF',
      url: 'https://www.opengroup.org/getmedia/2e4dc3b4-8f1f-4be1-bb8f-6c1f9f9c8e0c/TOGAF-Logo-Black.png?width=200&height=200',
      filename: 'togaf.png'
    },
    {
      name: 'AWS',
      url: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
      filename: 'aws.png'
    },
    {
      name: 'Fortinet',
      url: 'https://www.fortinet.com/content/dam/fortinet-assets/images/fortinet-logos/Fortinet_logo_Blue_550x160.png',
      filename: 'fortinet.png'
    },
  ],
  certifications: [
    {
      name: 'Cisco CCNA',
      url: 'https://www.cisco.com/c/dam/en_us/about/logos/cisco_logo_blue_rgb.eps',
      filename: 'ccna.png'
    },
  ]
};

function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filepath);
    
    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve(filepath);
        });
      } else {
        reject(new Error(`HTTP ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function downloadLogos() {
  const clientsDir = path.join(__dirname, '../public/assets/clients');
  const certsDir = path.join(__dirname, '../public/assets/certifications');
  
  // Create directories if they don't exist
  if (!fs.existsSync(clientsDir)) fs.mkdirSync(clientsDir, { recursive: true });
  if (!fs.existsSync(certsDir)) fs.mkdirSync(certsDir, { recursive: true });
  
  console.log('📥 Téléchargement des logos...\n');
  
  // Download client logos
  for (const logo of LOGOS.clients) {
    const filepath = path.join(clientsDir, logo.filename);
    try {
      await downloadFile(logo.url, filepath);
      console.log(`✅ ${logo.name} → clients/${logo.filename}`);
    } catch (error) {
      console.log(`⚠️ ${logo.name} → Erreur: ${error.message}`);
    }
  }
  
  // Download certification logos
  for (const logo of LOGOS.certifications) {
    const filepath = path.join(certsDir, logo.filename);
    try {
      await downloadFile(logo.url, filepath);
      console.log(`✅ ${logo.name} → certifications/${logo.filename}`);
    } catch (error) {
      console.log(`⚠️ ${logo.name} → Erreur: ${error.message}`);
    }
  }
  
  console.log('\n✨ Téléchargement terminé!');
}

downloadLogos().catch(console.error);
