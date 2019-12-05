import React, { Component } from 'react';
import Formulario from '../../components/formulario/Formulario';
import NavigationIcon from '../../components/navigation/NavigationIcon';
import BackIcon from '../../components/icons/back.png';
import {Link} from 'react-router-dom';

export default class AdicionarItem extends Component {

    render() {
        return (
            <React.Fragment>
                <Link to={this.props.url}>
                <NavigationIcon text={"Adicionar um novo item"} icon={BackIcon}
                    style={{
                        backgroundColor: "#ff5959", color: "black",
                        fontSize: "1.3em", flexDirection: "row",justifyContent: "space-evenly"
                    }} />
                </Link>
 
                <Formulario url={this.props.url}/>
            </React.Fragment>

        )
    }

}