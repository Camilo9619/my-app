import React from 'react';
import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import BadgeForm from '../pages/BadgeForm';
import Navbar from '../pages/Navbar';
class BadgeNew extends React.Component{
    render(){
        return(
            <div>
                <div>
                <Navbar/>
                    <div className="BadgeNew__hero">
                        <img className="img-fluid" src={header} alt="Logo"/>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName="Camilo"
                                lastName="Piñuela"
                                twitter="@camilo"
                                jobTitle="Auxiliar Desarrollo"
                                avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default BadgeNew;

