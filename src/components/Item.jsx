import React, { Component } from 'react';
import DelectCompoment from 'react-swipe-to-delete-component';

export default class Item extends Component {

    render() {

        return (
            <div>
                <DelectCompoment key={this.props.id} value={this.props.id}>
                    <p className="list-group-item-text">{this.props.text}</p>
                </DelectCompoment>
            </div>

        )
    }

}