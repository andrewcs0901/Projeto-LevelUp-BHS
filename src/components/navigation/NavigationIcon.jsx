import React, { Component } from 'react';
import './Navigation.css'

export default class NavigationIcon extends Component {

    willRender(component, element) {
        return component ? element : null
    }

    render() {
        return (
            <div className="_Navigation" style={this.props.style}>

                {this.willRender(this.props.icon,
                    <img src={this.props.icon} alt={this.props.icon}></img>)}
                {this.willRender(this.props.text, <span className="_NavigationIcon" style={this.props.style}>
                    {this.props.text}</span>)}
            </div>

        )
    }

}