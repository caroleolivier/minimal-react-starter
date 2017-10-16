/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


function handleNewHash() {
    const location = window.location.hash.replace(/^#\/?|\/$/g, '').split('/');

    ReactDOM.render(
        React.createElement(App, { location }),
        document.getElementById('mount'),
    );
}

// Handle the initial route and browser navigation events
handleNewHash();
window.addEventListener('hashchange', handleNewHash, false);
