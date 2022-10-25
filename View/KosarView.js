import KosarModel from "../Model/KosarModel.js";

class KosarView {
  #elem;
  constructor() {
    //console.log("kosarview elem: ",elem);
    const kosarmodel = new KosarModel();
    const tomb = kosarmodel.getkosarTomb
    this.#elem = tomb;
    szuloElem = $("#kosar")
    szuloElem.append(`<p>${this.#elem.id}</p>
                      <p>${this.#elem.cim}</p>
                      <p>${this.#elem.ar}</p>`);

    this.sorElem = szuloElem.children("div:last-child");




  }

  getAdat() {}

}
export default KosarView;
