import React, {Component} from 'react';
import './TextArea.css';

export default class TextArea extends Component{

    render(){
        const {placeHolder} = this.props;
        const {label} = this.props;

        return(
                <div className="_TextArea">
                <label htmlFor={label}>{label}</label>

                    <textarea name="comentario" 
                                id="comentario" 
                                cols="30" rows="10" 
                                placeholder={placeHolder}>

                    </textarea>
                </div>
        )

    }

}