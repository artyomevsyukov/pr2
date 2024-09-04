import { DivComponent } from "../../common/div-component";
import "./cardList.css";

export class CardList extends DivComponent {
    constructor(appState, parentState) {
        super();
        this.appState = appState;
        this.parentState = parentState;
    }

    render() {
        if (this.parentState.loading) {
            this.el.innerHTML = `<div class="card__load">Загрузка...</div>`;
            return this.el;
        }
        this.el.classList.add("card");
        this.el.innerHTML = `
            <h1>Найдено книг - 
                ${this.parentState.numFound}
           </h1>
        `;

        return this.el;
    }
}
