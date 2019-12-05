import React, {Component} from 'react';
import './AutoComplete.css';

export default class AutoComplete extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            suggestions: [],
            text: '',
            name: props.name
        }
        this.suggestionSelected = this.suggestionSelected.bind(this);

    }

    onTextChanged = (e) => {
        const {items} = this.props;
        const {value} = e.target;

        let suggestions = [];
        if (value.length > 0){
            const regex = new RegExp(`${value}`,'i');
            suggestions = items.sort().filter(v => regex.test(v));
            this.props.onClick({tipo: this.props.name, text: value})
        }
        this.setState( () => ({ suggestions, text: value})  );                  
    }

    handleKey = (e) => {
        if(e.key === "Enter"){
            this.props.onClick({tipo: this.props.name, text: this.state.text})
        }
    } 

    suggestionSelected (value) {
        this.setState( () => ({
            text: value,
            suggestions: [],
        }))
        this.props.onClick({tipo: this.props.name, text: value})
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
                <input value={text} 
                    onChange={this.onTextChanged} 
                    type="text" placeholder={placeholder} 
                    required
                    onKeyPress={this.handleKey}/>
                {this.renderSuggestions()}
            </div>
        )
    }


}