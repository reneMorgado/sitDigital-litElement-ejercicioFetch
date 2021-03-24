import { LitElement, html } from 'lit-element';

class MovieCards extends LitElement {
    static get properties() {
        return {
            loaded: { type: Boolean },
            list: {type: Array}
        };
    }
    constructor(){
        super()
        this.loaded = false
        this.list = []
    }
    render() {
        return html`
        ${this.loaded ? html`${this.list.length > 0 ? html`
            <ul>
                ${this.list.map(element => html`<li>${element.title}</li>`)}
            </ul>
        ` : html`<h1>Empty List</h1>`}` : html`<h1>Loading..</h1>`}
            
        `;
    }
}
customElements.define('my-list', MovieCards);