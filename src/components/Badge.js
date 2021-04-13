import React from 'react';
import './styles/badge.css'
class Badge extends React.Component{
    render(){        
        const firstname="Camilo";
        const lastname="Piñuela";
        const jobtitle="auxiliar";
        return <div>
            <div className="imagen">
                <img src="/images/avatar" alt="Logo"/>
            </div>
            <div className="Nombre">
                <h1>{this.props.firstname} <br/>{this.props.lastname}</h1>
                <h1>{this.props.jobtitle}</h1>
            </div>
            <div className="imagen">
                <img src="avatar.jpg" alt="Avatar"/>
                <p>camilo9619@gmail.com</p>
                <p>estudiante</p>
            </div>
            <div className="Red">
                #platziconfS
            </div>
        </div>
    }
}
export default Badge;