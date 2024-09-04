import { DivComponent } from "../../common/div-component";

export class Card extends DivComponent {
    constructor(appState, cardState) {
        super();
        this.appState = appState;
        this.cardState = cardState;
    }

    render() {
        const existInFavorites = this.appState.favorites.find((b) => {
            if (b.key == this.cardState.key) {
                console.log("Yes");
            }
        });
        this.el.classList.add("card");
        this.el.innerHTML = `
        <div class="card__img">
            <img src="https://covers.openlibrary.org/b/olid/${
                this.cardState.cover_edition_key
            }-S.jpg" alt="Обложка">
        </div>  
        <div class="card__info">
            <div class="card__tag">${
                this.cardState.subject ? this.cardState.subject[0] : "Не задано"
            }</div>
            <div class="card__name">${this.cardState.title}</div>
            <div class="card__author">${
                this.cardState.author_name
                    ? this.cardState.author_name[0]
                    : "не заданно"
            }
            </div>
            <div class="card__footer">
                    <button class="card__btn-add ${
                        existInFavorites ? "card__btn-add_favorites" : ""
                    }">
                ${
                    existInFavorites
                        ? '<img src="/static/favorites-white.svg" alt="Избранное"/>'
                        : '<img src="/static/favorites.svg" alt="Избранное"/>'
                }
                    </button>
            </div>
        </div>
        


        `;
        return this.el;
    }
}
