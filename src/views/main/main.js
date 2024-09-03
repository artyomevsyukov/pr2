import { AbstractView } from "../../common/view";
import onChange from "on-change";
import { Header } from "../../components/header/header";
import { Search } from "../../components/search/search";

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
        this.state = onChange(this.state, this.stateHook.bind(this));
    }
    appStateHook(path) {
        if (path === "favorites") {
            console.log(new Search());
        }
    }
    async stateHook(path) {
        if (path === "searchQuery") {
            this.state.load = true;
            const data = await this.loadList(
                // const { docs } = await this.loadList(
                this.state.searchQuery,
                this.state.offset
            );
            console.log(data);
            // console.log(docs);
            this.state.load = false;
        }
    }
    // async loadList(q, offset) {
    //     const res = await fetch(
    //         `https://openlibrary.org/search.json?q=${q}&offset=${offset}`
    //     );
    //     const data = await res.json();
    //     console.log(data);
    //     return data;
    // }
    async loadList(q, offset) {
        const res = await fetch(
            `https://openlibrary.org/search.json?q=${q}&offset=${offset}`
        );
        return res.json();
    }

    render() {
        this.renderHeader();
        const main = document.createElement("div");
        main.append(new Search(this.state).render());

        this.app.append(main);
    }
    renderHeader() {
        const header = new Header(this.appState).render();
        this.app.prepend(header);
    }
}
