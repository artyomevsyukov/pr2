import { DivComponent } from "../../common/div-component";
import "./header.css";

export class Header extends DivComponent {
    constructor(appState) {
        super();
        this.appState = appState;
    }
    render() {
        this.el.classList.add("header");
        this.el.innerHTML = `
             <a href="#"><img src="/static/logo.svg" alt="logo"></a>
             <div class="header__menu">
                 <a class="header__link header_active" href="#">
                    <img src="/static/search.svg" alt="Поиск">
                    Поиск книг
                 </a>
                <a class="header__link" href="#favorites">
                    <img src="/static/favorites.svg" alt="Избранное">
                    Избранное
                </a>
                 <div class="header__counter">${this.appState.favorites.length}</div>
            </div>
        `;
        return this.el;
    }
}
