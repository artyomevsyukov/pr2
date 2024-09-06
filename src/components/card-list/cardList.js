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

        const cardGrid = document.createElement("div");
        cardGrid.classList.add("card__grid");
        this.el.append(cardGrid);

        // Render cards
        this.parentState.list.forEach((book) => {
            // console.log("cardList clg book: ", book);
            cardGrid.append(new Card(this.appState, book).render());
        });

        return this.el;
    }
}
