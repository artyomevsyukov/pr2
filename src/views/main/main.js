import { AbstractView } from "../../common/view";
import onChange from "on-change";

export class MainView extends AbstractView {
    state = {
        list: [],
        load: false,
        searchQuery: undefined,
        offset: 0,
    };

    constructor(appState) {
        super();
        this.setTitle("Поиск книг");
        this.appState = appState;
        this.appState = onChange(this.appState, this.appStateHook.bind(this));
    }
    appStateHook(path) {
        if (path === "favorites") {
            console.log(path);
        }

        // this.render(); //Реактивность
    }
    render() {
        const main = document.createElement("div");
        main.innerHTML = `Количество кинг: ${this.appState.favorites.length}`;
        this.app.append(main);
        // this.appState.favorites.push("dsfdf");
        // this.appState.buy.push("34534");
    }
}
