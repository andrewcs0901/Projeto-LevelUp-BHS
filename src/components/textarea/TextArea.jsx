import React, {Component} from 'react';
import './TextArea.css';

export default class TextArea extends Component{

<<<<<<< HEAD
=======
    constructor(props){
        super(props)

    }

>>>>>>> d6183d308e43c97b5fd9362d800326d2b5cec6ee
    render(){
        const {placeHolder} = this.props;
        const {label} = this.props;

        return(
                <div className="_TextArea">
                <label htmlFor={label}>{label}</label>

                    <textarea name="comentario" 
                                id="comentario" 
                                cols="30" rows="10" 
                                placeholder={placeHolder} 
                                onChange={ (e) => this.props.onClick({tipo: 'comentario', text:e.target.value})}>

                    </textarea>
                </div>
        )

    }

}