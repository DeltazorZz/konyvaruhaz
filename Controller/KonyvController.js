import KonyvekView from "../View/KonyvekView.js";
import KonyvekPublicView from "../View/KonyvekPublicView.js";
import KonyvModel from "../Model/KonyvModel.js";

class KonyvController {
    constructor() {
        //console.log("KonyvController");
        const konyvmodel = new KonyvModel();


        $("#admin").on("click", ()=>{
            konyvmodel.adatBe("../adat.json", this.konyvAdatok);
        });

        $("#pub").on("click", ()=>{
            konyvmodel.adatBe("../adat.json", this.konyvPublicAdatok);
        });
        
        $(window).on("modosit", (event)=>{
            console.log("controllerben modosit", event.detail);
            konyvmodel.adatModosit(event.detail)
        })

        $(window).on("torol", (esemeny)=>{
          console.log("controller torol", esemeny.detail)  
          konyvmodel.adatTorol(esemeny.detail);
        })

        $(window).on("kosarba", (kosarevent)=>{
            console.log("Kosárban a Controllerből", kosarevent.detail);
            konyvmodel.adatKosarba(kosarevent.detail)
        })

    }

    konyvAdatok(tomb) {
        //console.log(tomb);
        const szuloElem = $("main")
        new KonyvekView(tomb, szuloElem);
    }

    konyvPublicAdatok(tomb) {
        //console.log(tomb);
        const szuloElem = $("main")
        new KonyvekPublicView(tomb, szuloElem);
    }
}

export default KonyvController;