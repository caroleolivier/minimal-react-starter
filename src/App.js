import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Counter from './Counter';
import { Greeter } from './Greeter.tsx';

function Home() {
    return <div>Welcome</div>;
}

function PageNotFound() {
    return <div>Page not found</div>;
}

const routes = {
    counter: {
        getComponent: (urlParams) => {
            const startAt = urlParams[0] && !isNaN(Number(urlParams[0])) ? Number(urlParams[0]) : 0;
            return <Counter startAt={startAt} />;
        }
    },
    greet: {
        getComponent: (urlParams) => {
            const who = urlParams[0] ? urlParams[0] : 'somebody';
            return <Greeter name={who} />;
        }
    },
    home: {
        getComponent: () => <Home />
    },
    '': {
        getComponent: () => <Home />
    },
    404: {
        getComponent: () => <PageNotFound />
    }
};

class App extends Component {
    render() {
        if (this.props.location[0] in routes) {
            const component = routes[this.props.location[0]].getComponent(this.props.location.slice(1));
            return component;
        }
        return routes['404'].getComponent();
    }
}

App.propTypes = {
    location: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
