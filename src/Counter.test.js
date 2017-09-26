import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

describe('Counter component', () => {
    test('renders correctly', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Counter/>, div);
    });
});
