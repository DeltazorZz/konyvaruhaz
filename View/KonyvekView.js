import KonyvView from "./KonyvView.js";

class KonyvekView {
    constructor(tomb, szuloElem) {
        szuloElem.append(`<table><thead><tr>
        <th>ID</th>
        <th>Cím</th>
        <th>Szerző</th>
        <th>Ár</th>
        <th></th>
        <th></th>
        </thead>
        <tbody></tbody>
        </tr></table>`);
        this.tablaElem = szuloElem.children("table:last-child");
        this.tbodyElem = this.tablaElem.children("tbody")
        tomb.forEach(konyv => {
            const konyvem = new KonyvView(konyv,this.tbodyElem);
        });
    }
}

export default KonyvekView;