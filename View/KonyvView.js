class KonyvView {
    #elem;
  constructor(elem, szuloElem) {
    // console.log("KonyvView");
    this.#elem = elem;
    console.log(elem);
    szuloElem.append(`<tr>
                         <td>${elem.id}</td>
                         <td>${elem.cim}</td>
                         <td>${elem.szerzo}</td>
                         <td>${elem.ar}</td>
                         <td><button id= "mod${elem.id}">Módosít</button></td>
                         <td><button id= "del${elem.id}">töröl</button></td>
                         </tr>`);

this.sorElem = szuloElem.children("tr:last-child");
//console.log(this.sorElem);
this.modositElem = $(`#mod${elem.id}`);
this.torolElem = $(`#del${elem.id}`);

this.modositElem.on("click", ()=>{
    console.log("Módosit a viewban");
    this.KattintasTrigger("modosit");
});

this.torolElem.on("click", ()=>{
    console.log("töröl a viewban");
    this.KattintasTrigger("torol");
})
  
}
KattintasTrigger(esemenynev){
   //console.log("triggerben", esemenynev, this.#elem.id, this.#elem.cim, this.#elem.ar);
    const esemeny = new CustomEvent(esemenynev, {detail:this.#elem.id})
    window.dispatchEvent(esemeny);
  
}


}

export default KonyvView;
