import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface GreeterProps {
    name: string;
}

export class Greeter extends React.Component<GreeterProps, {}> {
    render() {
        return <h1>Hello {this.props.name}</h1>;
    }
}