import KonyvekView from "../View/KonyvekView.js";
import KonyvekPublicView from "../View/KonyvekPublicView.js";
import KonyvModel from "../Model/KonyvModel.js";
import KosarModel from "../Model/KosarModel.js"
import KosarView from "../View/KosarView.js";


class KonyvController {
    constructor() {
        //console.log("KonyvController");
        const konyvmodel = new KonyvModel();
        const kosarmodel = new KosarModel();


        $("#admin").on("click", ()=>{
            konyvmodel.adatBe("../adat.json", this.konyvAdatok);
        });

        $("#pub").on("click", ()=>{
            konyvmodel.adatBe("../adat.json", this.konyvPublicAdatok);
        });

        $(window).on("torol", (esemeny)=>{
          console.log("controller torol", esemeny.detail)  
          konyvmodel.adatTorol(esemeny.detail);
          
        })
        $(window).on("modosit", (esemeny)=>{
          console.log("controller modosit", esemeny.detail)  
          konyvmodel.adatModosit(esemeny.detail);
          
        })

        $(window).on("kosarba", (kosarevent)=>{
            console.log("Kosárban a Controllerből", kosarevent.detail);
            kosarmodel.adatKosarba(kosarevent.detail);
        })

    }

    konyvAdatok(tomb) {
        //console.log(tomb);
        const szuloElem = $("main")
        new KonyvekView(tomb, szuloElem);
    }

    konyvPublicAdatok(tomb) {
        //console.log("konyvpublicadat",tomb);
        const szuloElem = $("main")
        const szuloElem2 = $("header")
        new KonyvekPublicView(tomb, szuloElem);
    }
}

export default KonyvController;