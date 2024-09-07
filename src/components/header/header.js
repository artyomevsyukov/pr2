import { DivComponent } from "../../common/div-component";
import "./header.css";

export class Header extends DivComponent {
    constructor(appState) {
        super();
        this.appState = appState;
        // window.addEventListener("hashchange", this.updateActiveLink.bind(this));
        // this.updateActiveLink();
    }

    // updateActiveLink() {
    //     const links = document.querySelectorAll(".header__link");

    //     const currentHash = window.location.hash || "#";
    //     links.forEach((link) => {
    //         if (link.getAttribute("href") === currentHash) {
    //             link.classList.add("header_active");
    //         } else {
    //             link.classList.remove("header_active");
    //         }
    //     });
    //     console.log("currentHash: ", currentHash);
    // }

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
                    <div class="header__counter">${this.appState.favorites.length}</div>
                </a>
            </div>
        `;
        return this.el;
    }
}
