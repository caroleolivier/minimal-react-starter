import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
        this.onClickHandle = this.onClickHandle.bind(this);
    }

    onClickHandle() {
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {
        return (
            <button onClick={this.onClickHandle}>
                {this.state.counter}
            </button>
        );
    }
}

export default Counter;
