import { DivComponent } from "../../common/div-component";
import "./search.css";

export class Search extends DivComponent {
    constructor(state) {
        super();
        this.state = state;
    }

    search() {
        const value = this.el.querySelector("input").value;
        this.state.searchQuery = value;
    }

    render() {
        this.el.classList.add("search");
        this.el.innerHTML = `
        <div class="search__input-container">
            <img src="/static/search.svg" alt="Поиск" class="search__input-icon">
            <input 
                type="text" 
                class="search__input search__input-with-bg-icon"
                placeholder="Найти книгу или автора...."
                value=${
                    this.state.searchQuery ? this.state.searchQuery : "ffg"
                }>
        </div>
        <button class="search__btn"><img class="search__icon" src="/static/search-white.svg" alt="Поиск"></button>
        `;
        this.el
            .querySelector("button")
            .addEventListener("click", this.search.bind(this));
        this.el.querySelector("input").addEventListener("keydown", (e) => {
            if (e.code == "Enter") {
                this.search();
            }
        });
        return this.el;
    }
}
