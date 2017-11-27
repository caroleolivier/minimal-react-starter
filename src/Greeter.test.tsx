import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as testRenderer from 'react-test-renderer';

import { Greeter } from './Greeter';

describe('Greeter component', () => {
    let name: string ;
    let elt: React.ReactElement<Greeter>;

    beforeEach(() => {
        name = 'johndoe';
        elt = <Greeter name={name} />;
    });

    test('renders without crashing', () => {
        const div: HTMLDivElement = document.createElement('div');

        expect(() => ReactDOM.render(elt, div)).not.toThrow();
    });

    test('initial DOM matches snapshot', () => {
        const component = testRenderer.create(elt);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot('rendering');
    });
});