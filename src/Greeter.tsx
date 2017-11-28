import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface GreeterProps {
    name: string;
}

interface GreeterState {
    counter: number;
}

export class Greeter extends React.Component<GreeterProps, GreeterState> {

    constructor(props: GreeterProps) {
        super(props);
        const initialState: Readonly<GreeterState> = { counter: 0};
        this.state = initialState;
        this.click = this.click.bind(this);
    }

    render(): JSX.Element {
        return (
            <div>
                <h1>Hello {this.props.name}</h1>
                <h2>{this.state.counter}</h2>
                <button onClick={this.click}>click me</button>
            </div>
        );
    }

    click() {
        const newState: Pick<GreeterState, "counter"> = { counter: this.state.counter+1};
        this.setState(newState);
    }
}