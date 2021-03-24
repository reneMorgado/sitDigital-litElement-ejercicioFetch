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
            <h1>Peliculas</h1>
            <my-list .loaded="${!this.loading}" .list="${this.list}"></my-list>
        `
    }
    _getMovies () {
        const url = "https://api.themoviedb.org/3/movie/now_playing?api_key=4ff32b3a95fabacb861ecfa8aa1dfcba&language=en-US&page=1"
        fetch(url)
            .then((r)=> r.json())
            .then((r)=> {
                this.list = r.results
                this.loading = false
            })
    }
}
customElements.define('my-app', MyApp);