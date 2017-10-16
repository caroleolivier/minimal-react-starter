import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';


class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: props.startAt
        };
        this.onClickHandle = this.onClickHandle.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ counter: nextProps.startAt });
    }

    onClickHandle() {
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {
        return (
            <button className={style.counter} onClick={this.onClickHandle}>
                {this.state.counter}
            </button>
        );
    }
}

Counter.propTypes = {
    startAt: PropTypes.number.isRequired
};

export default Counter;
