import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './Counter.js';

ReactDOM.render(
    React.createElement(Counter),
    document.getElementById("mount")
);