import React, {Component} from 'react';

export default class ProgressBar extends Component{
    render(){
        return(
            <div>
                <progress value={this.props.progress} max={100}></progress>
            </div>
        )
    }
}