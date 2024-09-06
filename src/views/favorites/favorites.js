import { AbstractView } from "../../common/view";
import onChange from "on-change";
import { Header } from "../../components/header/header";
import { CardList } from "../../components/card-list/cardList";

export class FavoritesView extends AbstractView {
    constructor(appState) {
        super();
        this.appState = appState;
        this.appState = onChange(this.appState, this.appStateHook.bind(this));
        this.setTitle("Избранное");
    }

    destroy() {
        onChange.unsubscribe(this.appState);
    }

    appStateHook(path) {
        if (path === "favorites") {
            console.log("main clg favorites path: ", path);
            this.render();
        }
    }

    // render() {
    //     const main = document.createElement("div");
    //     main.classList.add("main");
    //     main.innerHTML = `
    // 		<h1>Избранное</h1>
    // 	`;
    //     main.append(
    //         new CardList(this.appState, {
    //             list: this.appState.favorites,
    //         }).render()
    //     );
    //     this.app.innerHTML = "";
    //     this.app.append(main);
    //     this.renderHeader();
    // }
    render() {
        const main = document.createElement("div");
        main.classList.add("main");
        main.innerHTML = `
        		<h1>Избранное</h1>
        	`;
        main.append(
            new CardList(this.appState, {
                list: this.appState.favorites,
            }).render()
        );
        this.app.innerHTML = "";
        this.app.append(main);
        this.renderHeader();
    }

    renderHeader() {
        const header = new Header(this.appState).render();
        this.app.prepend(header);
    }
}
