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
        this.el.innerHTML = `
            <h1>abdf</h1>
            <h1>the lord of the ring</h1>
        `;

        if (this.parentState.loading) {
            this.el.innerHTML = `<div class="card-list__load">Загрузка...</div>`;
            return this.el;
        }
        if (this.parentState.searchQuery) {
            // console.log("this.parentState: ", this.parentState);
            // console.log("this.appState: ", this.appState);
            this.el.innerHTML = `
            <h1 class="card-list__title">Найдено книг - ${this.parentState.numFound} по запросу ${this.parentState.searchQuery}</h1>`;

            // Render cards
            console.log("this.parentState.list", this.parentState.list);
            this.parentState.list.forEach((book) => {
                console.log(book);
                this.el.append(new Card(this.appState, book).render());
            });
            // for (const card of this.parentState.list) {
            //     this.el.append(new Card(this.appState, card).render());
            // }

            return this.el;
        }

        return this.el;
    }
}
