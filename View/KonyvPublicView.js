class KonyvPublicView{
    #elem;
    constructor(elem, szuloElem) {
        this.#elem = elem;
        console.log(elem);
        szuloElem.append(`<div class= "EszmeiKonyv">
                          <h1>Könyvek</h1>
                          <p>${elem.cim}</p>
                          <p>${elem.szerzo}</p>
                          <p>${elem.ar}</p>
                          <button id= "kosarba${elem.id}">Kosárba</button>
                          </div>`);

    this.kosarElem = $(`#kosarba${elem.id}`);
    
    this.kosarElem.on("click", ()=>{
        console.log("Kosárba Raktad");
        this.KattintasTrigger();
    });

}

KattintasTrigger(){
    console.log("kosárban a triggerbol");
    const esemeny = new CustomEvent("kosarba", {detail:this.#elem})
    window.dispatchEvent(esemeny);
};


}
export default KonyvPublicView;