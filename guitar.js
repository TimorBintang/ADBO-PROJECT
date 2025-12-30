class Guitar{
    constructor(serialnumber,price,builder,model,type,backwood,topwood){
        this.serialnumber = serialnumber;
        this.price = price;
        this.builder = builder;
        this.model = model;
        this.type = type;
        this.backwood = backwood;
        this.topwood = topwood;
    }

    getserialnumber(){
        return this.serialnumber;
    }

    getprice(){
        return this.price;
    }

    setprice(newprice){
        this.price = newprice;
    }

    getbuilder(){
        return this.builder;
    }

    getmodel(){
        return this.model;
    }

    gettype(){
        return this.type;
    }

    getbackwood(){
        return this.backwood;
    }

    gettopwood(){
        return this.topwood;
    }

}


class inventory{
    constructor(){
        this.guitars = [];
    }

    addGuitar(serialnumber,price,builder,model,type,backwood,topwood){
        const newguitar = new Guitar(serialnumber,price,builder,model,type,backwood,topwood);
        this.guitars.push(newguitar)
    }

    getGuitar(jual){
        const juall = jual.toLowerCase();
        const cari = this.guitars.find(i => 
            i.getmodel().toLowerCase() == juall||
            i.gettype().toLowerCase()==juall||
            i.getbuilder().toLowerCase()==juall);
        console.log(cari);
    }

    search(searching){
        const kriteria = searching.toLowerCase();
        for (let i of this.guitars) {
            const model = i.getmodel().toLowerCase();
            const type = i.gettype().toLowerCase();
            if (searching != model && searching != type ) {continue;}
            console.log("Barang Ada!");
            return i;
        }
        console.log("barang gak ada");
        return null;
    }
}

const tokotimor = new inventory;

tokotimor.addGuitar("V210345", 15000000, "Fender", "Stratocaster", "Electric", "Alder", "Maple")
tokotimor.addGuitar("GBS9921", 35000000, "Gibson", "Les Paul", "Electric", "Mahogany", "Mahogany")

console.log(tokotimor.guitars);
tokotimor.search("les paul");
tokotimor.search("electric");
tokotimor.getGuitar("fender");