import React, {Component} from 'react';

export default class Button extends Component{

    render(){
        const {text} = this.props;
        return(
            <button className="_Button" style={this.props.style} onClick={this.props.submit}>
                {text}
            </button>

        )

    }
}