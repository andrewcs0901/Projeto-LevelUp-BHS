import React, { Component } from 'react';

export default class Button extends Component {

    constructor(props) {
        super(props);
        this.action = this.action.bind(this);
    }

    action() {
        if (this.props.submit) {
            this.props.value ? this.props.submit(this.props.value) : this.props.submit(this.props.text);
        }
    }

    render() {
        const { text } = this.props;
        const { icon } = this.props;

        return (
            <button className="_Button" style={this.props.style} onClick={this.action}>
                {icon ? <img src={icon} alt="" style={{width: '32px'}}></img> : ""} {text}
            </button>

        )

    }
}