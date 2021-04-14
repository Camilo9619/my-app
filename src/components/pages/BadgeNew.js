import React from 'react';
import '../styles/BadgeNew.css';
import BadgeForm from '../pages/BadgeForm';
import Navbar from '../pages/Navbar';
import '../styles/NavBar.css';
import Badge from '../Badge';
import '../styles/badge.css'
class BadgeNew extends React.Component{
    render(){
        return(
            <div>
                <div className="BadgeNew__hero">
                      <Navbar/>
                 </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                    firstname="Camilo"
                                    lastname="Piñuela"
                                    twitter="camilo9619"
                                    jobtitle="Auxiliar Desarrollo"
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
