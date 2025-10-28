class Barang {
    constructor(){
        this.nama = ["laptop","mouse"];
        this.harga = 5000;
    }
    penambahan(){
       return this.nama.push("keyboard");  
    }
}
const barang = new Barang();
console.log(barang.penambahan());


