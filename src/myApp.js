import { LitElement, html, css } from 'lit-element';
import './pokemonCards'
import './movieCards'

class MyApp extends LitElement {
    static get properties(){
        return{
            loading: {type: Boolean},
            list: {type: Array}
        }
    }
    constructor(){
        super()
        this.loading = true
        this.list = []
        this._getMovies()
    }
    render(){
        return html`
            <my-list .loaded="${!this.loading}" .list="${this.list}"></my-list>
        `
    }
    _getMovies () {
        const url = "https://api.pokemontcg.io/v1/cards"
        fetch(url)
            .then((r)=> r.json())
            .then((r)=> {
                console.log(r)
                this.list = r.cards
                this.loading = false
            })
    }
}
customElements.define('my-app', MyApp);