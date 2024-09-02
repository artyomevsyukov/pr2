import { AbstractView } from "../../common/view";
import onChange from "on-change";
import { Header } from "../../components/header/header";

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
        this.app.append(main);
        this.renderHeader();
    }
    renderHeader() {
        const header = new Header(this.appState).render();
        this.app.prepend(header);
    }
}
