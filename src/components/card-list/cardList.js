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
        if (this.parentState.loading) {
            this.el.innerHTML = `<div class="card-list__load">Загрузка...</div>`;
            return this.el;
        }
        this.el.classList.add("card-list");
        this.el.innerHTML = `
            <h1>the lord of the ring</h1>
        `;

        if (this.parentState.searchQuery) {
            // console.log("this.parentState: ", this.parentState);
            // console.log("this.appState: ", this.appState);
            this.el.innerHTML = `
            <h1 class="card-list__title">Найдено книг - ${this.parentState.numFound} по запросу ${this.parentState.searchQuery}</h1>`;
            const cardGrid = document.createElement("div");
            cardGrid.classList.add("card__grid");
            this.el.append(cardGrid);
            // console.log("this.parentState.list", this.parentState.list);
            // console.log(
            //     "this.parentState.list (как обычный массив):",
            //     Array.from(this.parentState.list)
            // );

            // Render cards
            this.parentState.list.forEach((book) => {
                // console.log("cardList clg book: ", book);
                cardGrid.append(new Card(this.appState, book).render());
            });
            // for (const card of this.parentState.list) {
            //     this.el.append(new Card(this.appState, card).render());
            // }

            return this.el;
        }

        return this.el;
    }
}
