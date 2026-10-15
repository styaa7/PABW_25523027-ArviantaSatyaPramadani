import { ambilProyek } from './api.js';
import { render, tampilkanGalat, aturMemuat, setSumberData } from './dom.js';

async function muat() {
  aturMemuat(true); 
  try {
    const data = await ambilProyek(); 
    setSumberData(data);
    render(data); 
  } catch (galat) {
    
    tampilkanGalat('Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.');
    console.error('Galat di app.js:', galat.message);
  } finally {
    aturMemuat(false);
  }
}


muat();