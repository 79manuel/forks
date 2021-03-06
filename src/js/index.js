import Search from './models/Search';
import {elements, renderLoader, clearLoader} from './views/base';
import * as searchView from './views/searchView';

/*
Global state
    - Search object
    - Current Recipe object
    - Shopping list object.
    - Liked recipes.
*/

const state = {};

const controlSearch = async () => {
    // 1. Get the query from the view
    const query = searchView.getInput();

    if (query) {

        // 2. New search object and add to state
        state.search = new Search(query);

        // 3. Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        // 4. Search for recipes
        await state.search.getResults();

        // Render results in UI
        clearLoader();
        searchView.renderResults(state.search.result);
    }
};

elements.searchForm.addEventListener('submit', e => {
   e.preventDefault();
    // noinspection JSIgnoredPromiseFromCall
    controlSearch();
});


