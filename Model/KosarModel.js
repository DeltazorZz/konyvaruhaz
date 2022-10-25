class KosarModel{
    #tomb = [];
    constructor() {
        
    }
    adatKosarba(adat){
        this.#tomb.push(adat);
        console.log("model Kosár", this.#tomb);
        
    }

    getkosarTomb(){
        return this.#tomb;
    }

}
export default KosarModel;