import React, {Component} from 'react';

export default class ProgressBar extends Component{

    render(){

        const style = {
            backgroundColor: this.props.backgroundColor,
            WebkitProgressBar: '#efefef',
            WebkitProgressValue: this.props.backgroundColor
          }

        return(
            <div>
                <progress value={this.props.progress} max={100} style={style}></progress>
            </div>
        )
    }
}