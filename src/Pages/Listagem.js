import React, {Component} from 'react';
import Item from '../components/Item';
import firebaseService from '../services/FirebaseService'

class Listagem extends Component{

    state = {
        listas: []
    };

    componentDidMount() {
        firebaseService.getDataList('produtos', (dataReceived) => this.setState({ data: dataReceived }))
    }

    render(){
        let list = [];
        this.state.listas.forEach(item => {
            list.push(<Item item={item.nome} />)
        });


        return <div></div>
    }

}

export default Listagem;