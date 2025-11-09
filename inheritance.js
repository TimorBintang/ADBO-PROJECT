class Karyawan {
    constructor(nama, gaji) {
        this.nama = nama;
        this.gaji = gaji;
    }

    hitungBonus() {
        return 0; 
    }

    dapatkanInfo() {
        const gajiTerformat = this.gaji.toLocaleString('id-ID');
        return `${this.nama} (Gaji: ${gajiTerformat})`;
    }
}


class KaryawanTetap extends Karyawan {    
    hitungBonus() {
        const tarifBonus = 0.10;
        const bonus = this.gaji * tarifBonus;
        console.log(`Bonus ${this.nama} (Tetap 10%): ${bonus.toLocaleString('id-ID')}`);
        return bonus;
    }
}

class KaryawanKontrak extends Karyawan {
    hitungBonus() {
        const tarifBonus = 0.05;
        const bonus = this.gaji * tarifBonus;
        console.log(`Bonus ${this.nama} (Kontrak 5%): ${bonus.toLocaleString('id-ID')}`);
        return bonus;
    }
}


const daftarKaryawan = [
    new KaryawanTetap("Budi", 8000000), 
    new KaryawanKontrak("Sita", 6000000) 
];

let totalBonus = 0;

console.log("--- Perhitungan Bonus Detail ---");
daftarKaryawan.forEach(karyawan => {
    totalBonus += karyawan.hitungBonus();
});

console.log("\n=========================================");
console.log("Output Total Bonus Karyawan:");
daftarKaryawan.forEach(karyawan => {
    console.log(`- ${karyawan.dapatkanInfo()}`);
});
console.log("-----------------------------------------");
console.log(`Total Bonus Keseluruhan: **Rp ${totalBonus.toLocaleString('id-ID')}**`);
console.log("=========================================");