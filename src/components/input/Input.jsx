import React, { Component } from 'react';
import './Input.css';

export default class Input extends Component {

    constructor() {
        super();
        this.state = {
            input: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value)
        this.setState({
            input: event.target.value
        }
        )
    }

    changeEvent = (event) => {
        let { value } = event.target;
        if (value.length > 0) {
            console.warn(value)
        }
    }

    render() {
        const { type } = this.props;
        const { placeholder } = this.props;
        const { name } = this.props;
        const { labelText } = this.props;
        const { labelFor } = this.props;


        return (
            <div className="_Input">
                <label htmlFor={labelFor}>{labelText}</label>
                <input type={type} name={name}
                    placeholder={placeholder}
                    onChange={this.handleChange}
                    value={this.state.input}
                    required
                />
            </div>
        )
    }


}