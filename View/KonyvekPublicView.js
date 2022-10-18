import KonyvPublicView from "./KonyvPublicView.js";

class KonyvekPublicView{
    constructor(tomb, szuloElem){
        szuloElem.append(`<div>
                          </div>`);

    this.divElem = szuloElem.children("div:last-child");
    tomb.forEach(konyv => {
        new KonyvPublicView(konyv, this.divElem);
    });


    }
}
export default KonyvekPublicView;