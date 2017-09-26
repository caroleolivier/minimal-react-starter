import React from 'react';
import ReactDOM from 'react-dom';
import testRenderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Counter from './Counter';

describe('Counter component', () => {
    test('renders without crashing', () => {
        // test with a DOM and renders deeply (as opposed to a shallowly, i.e. one level deep)
        const div = document.createElement('div');
        ReactDOM.render(<Counter/>, div);
    });

    test('renders according to snapshot', () => {
        // rendering doesn't depend on the DOM
        const component = testRenderer.create(
            <Counter/>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot("rendering");
    });

    test('increases couter on click event', () => {
        const counterWrapper = shallow(<Counter />);
        const counter = counterWrapper.instance();

        expect(counter.state.counter).toBe(0);

        counterWrapper.simulate('click');
        expect(counter.state.counter).toBe(1);
    });
});
