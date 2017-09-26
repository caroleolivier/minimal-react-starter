import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Counter from './Counter';

describe('Counter component', () => {
    test('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Counter/>, div);
    });

    test('renders according to snapshot', () => {
        const component = renderer.create(
            <Counter></Counter>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot("rendering");
    });
});
