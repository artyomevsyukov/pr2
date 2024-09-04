import { DivComponent } from "../../common/div-component";
import { Card } from "../card/card";
import "./cardList.css";

export class CardList extends DivComponent {
    constructor(appState, parentState) {
        super();
        this.appState = appState;
        this.parentState = parentState;
    }

    render() {
        this.el.classList.add("card-list");
        if (this.parentState.loading) {
            this.el.innerHTML = `<div class="card-list__load">Загрузка...</div>`;
            return this.el;
        }
        this.el.innerHTML = `
        <h1 class="card-list__title">lord of the ring</h1>  
        <h1 class="card-list__title">Найдено книг - ${this.parentState.numFound}</h1>`;
        for (const card of this.parentState.list) {
            this.el.append(new Card(this.appState, card).render());
        }

        return this.el;
    }
}
