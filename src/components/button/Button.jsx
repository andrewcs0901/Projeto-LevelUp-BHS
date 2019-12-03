import React, {Component} from 'react';

export default class Button extends Component{

    render(){
        const {text} = this.props;
        return(
            <button className="_Button" style={this.props.style} onClick={ (e) => alert(e.target)}>
                {text}
            </button>

        )

    }
}