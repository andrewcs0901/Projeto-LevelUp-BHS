import React, {Component} from 'react';
import './AutoComplete.css';

export default class AutoComplete extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            suggestions: [],
            text: ''
        }
    }

    onTextChanged = (e) => {
        const {items} = this.props;
        const {value} = e.target;

        let suggestions = [];
        if (value.length > 0){
            const regex = new RegExp(`${value}`,'i');
            suggestions = items.sort().filter(v => regex.test(v));
        }
        this.setState( () => ({ suggestions, text: value})  );                  
    }

    suggestionSelected (value) {
        this.setState( () => ({
            text: value,
            suggestions: [],
        }))
    } 

    renderSuggestions () {
        const {suggestions} = this.state;
        if (suggestions.length === 0){
            return null;
        }
        return(
            <ul>
                {suggestions.map( (item ) => <li key={item} onClick={() => this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        )
    }

    render(){
        const {text} = this.state;
        const {placeholder} = this.props;
        return(
            <div className="auto-complete">
                <input value={text} onChange={this.onTextChanged} type="text" placeholder={placeholder} required/>
                {this.renderSuggestions()}
            </div>
        )
    }


}