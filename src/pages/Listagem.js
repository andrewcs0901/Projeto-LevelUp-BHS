import React, {Component} from 'react';
import Item from '../components/Item';
import firebaseService from '../services/FirebaseService';
import Formulario from '../components/formulario/Formulario';
import NavigationIcon from '../components/navigation/NavigationIcon';
import BackIcon from '../components/icons/back.png';

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


        return (<div>
                    <NavigationIcon text={"Adicionar um novo item"} icon={BackIcon} url={"/"} 
                                    style={{backgroundColor: "#ff5959", color:"white", 
                                    fontSize: "1.3em", flexDirection: "row"}}/>
                    <Formulario/>
                </div>)
    }

}

export default Listagem;