import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import {fetchCards} from './api';

import {
    DeckList,
    SearchBar,
    SearchResults
} from './components';

const App = () => {
    const [results, setResults] = useState([]);

    return (
        <div id="app">
            <SearchBar setResults={ setResults }/>
            <SearchResults results={ results }/>
            <DeckList />
        </div>
    );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

