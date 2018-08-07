import axios from 'axios';


export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = '8a12291e5e83c0e34245c74bc7233587';
        try {
            const result = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = result.data.recipes;
            //console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}