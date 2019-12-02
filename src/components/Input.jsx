import React, {Component} from 'react';

export default class Input extends Component{

    constructor(){
        super();
        this.state = {
            input: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        console.log(event.target.value);
        console.log(event.target.name)
        this.setState({
            [event.target.name]: event.target.value
        }
        )
    }

    changeEvent = (event) => {
        let {value} = event.target;
        if(value.length > 0){
            console.warn(value)
        }
    }

    render(){
        const {type} = this.props;
        const {placeholder} = this.props;
        const {name} = this.props;
        const {list} = this.props;

        return (
            <input 
                type={type}
                name={name} 
                placeholder={placeholder} 
                onChange={this.handleChange}
                list={list}
                value={this.state.input}
                required
            />
        )
    }


}