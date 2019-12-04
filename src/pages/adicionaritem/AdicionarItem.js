import React, { Component } from 'react';
import Formulario from '../components/formulario/Formulario';
import NavigationIcon from '../components/navigation/NavigationIcon';
import BackIcon from '../components/icons/back.png';

export default class AdicionarItem extends Component {

    render() {
        return (
            <React.Fragment>
                <NavigationIcon text={"Adicionar um novo item"} icon={BackIcon} url={"/"}
                    style={{
                        backgroundColor: "#ff5959", color: "white",
                        fontSize: "1.3em", flexDirection: "row"
                    }} />
                <Formulario />
            </React.Fragment>

        )
    }

}