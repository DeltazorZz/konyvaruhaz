class KonyvModel {
    #konyvekTomb = [];

    constructor() {
        //console.log("KonyvModel");
    }


    adatModosit(adat){
        console.log("model modosit", adat);
    }
    adatTorol(adat){
        console.log("model torol", adat);
    }

    adatBe(vegpont, myCallBack) {
        fetch(vegpont, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                this.#konyvekTomb = data.konyv;
                console.log(this.#konyvekTomb);
                myCallBack(this.#konyvekTomb);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

export default KonyvModel;