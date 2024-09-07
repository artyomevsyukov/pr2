import { FavoritesView } from "./views/favorites/favorites";
import { MainView } from "./views/main/main";

class App {
    routes = [
        { path: "", view: MainView },
        { path: "#favorites", view: FavoritesView },
    ];
    appState = {
        favorites: [],
    };

    constructor() {
        window.addEventListener("hashchange", this.onChange.bind(this));
        // window.addEventListener("hashchange", this.route.bind(this));
        // window.addEventListener("hashchange", this.updateActiveLink.bind(this));
        this.route();
        this.updateActiveLink();
    }

    onChange() {
        this.route();
        this.updateActiveLink();
    }

    route() {
        console.log("APP rout: ", location.hash);
        console.log("APP window rout: ", window.location.hash);

        if (this.currentView) {
            this.currentView.destroy();
        }
        const view = this.routes.find((r) => r.path == location.hash).view;
        this.currentView = new view(this.appState);
        this.currentView.render();
    }

    updateActiveLink() {
        const links = document.querySelectorAll(".header__link");

        const currentHash = window.location.hash || "#";
        links.forEach((link) => {
            if (link.getAttribute("href") === currentHash) {
                link.classList.add("header_active");
            } else {
                link.classList.remove("header_active");
            }
        });
        console.log("currentHash: ", currentHash);
    }
}

new App();
