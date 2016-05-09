import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCn87THad7Y6O235gav8pX3zAyLfWx2F64';

//create a new component. This component should produce some HTML

const App = () => {
    return (<div>
            <SearchBar/>
        </div>);
}
//AIzaSyCn87THad7Y6O235gav8pX3zAyLfWx2F64
// Take this component's generated HTML and put it on the page(in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
