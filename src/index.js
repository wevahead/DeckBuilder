import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import axios from 'axios';

import {fetchCards} from './api';

import {
    DeckList,
    SearchBar,
    SearchResults,
} from './components';

const App = () => {
    const [results, setResults] = useState([]);
    const [deck, setDeck] = useState([]);

    const addCardToDeck = ({ id, name }) => {
        const nextDeck = [...deck];
        const index = nextDeck.findIndex(card => card.id === id);
      
        if (index > -1) {
          nextDeck[index].count += 1;
        } else {
          nextDeck.push({
            id,
            name,
            count: 1
          });
        }
      
        setDeck(nextDeck);
      }

    const removeCardFromDeck = ({ id }) => {
        const nextDeck = [...deck];
        const index = nextDeck.findIndex(card => card.id === id);
        
        if (index === -1) {
            return;
        }
        
        if (nextDeck[index].count === 1) {
            nextDeck.splice(index, 1);
        } else {
            nextDeck[index].count -= 1;
        }
        
    setDeck(nextDeck);
    }

    return (
        <div id='app'>
            <SearchBar setResults={ setResults } />
            <SearchResults
                results={ results }
                addCardToDeck={ addCardToDeck }
                removeCardFromDeck={ removeCardFromDeck } />
            <DeckList 
                deck={ deck } 
                addCardToDeck={addCardToDeck}
                removeCardFromDeck={removeCardFromDeck} />
        </div>
    );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

