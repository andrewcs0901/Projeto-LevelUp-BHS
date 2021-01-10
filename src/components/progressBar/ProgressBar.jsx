import React, { Component } from 'react';

export default class ProgressBar extends Component {

    render() {

        const style = {
            WebkitProgressBar: '#efefef',
            WebkitProgressValue: this.props.backgroundColor,
            width: '100%'
        }

        return (
            <div style={{ width: "80%", margin: 'auto' }}>
                <progress value={this.props.progress} max={100} style={style}></progress>
            </div>
        )
    }
}