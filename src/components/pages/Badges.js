import React from 'react'
import Navbar from './Navbar';
import BadgeList from '../BadgesList';
import '../styles/Badges.css'
import conflogo from '../images/badge-header.svg';
import { Link } from 'react-router-dom';
class Badges extends React.Component{
    state={
        data:[
            {
                id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
                firstname: "Freda",
                lastname: "Grady",
                email: "Leann_Berge@gmail.com",
                jobtitle: "Legacy Brand Director",
                twitter: "FredaGrady22221-7573",
                avatarUrl: "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
              },
              {
                id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
                firstname: "Major",
                lastname: "Rodriguez",
                email: "Ilene66@hotmail.com",
                jobtitle: "Human Research Architect",
                twitter: "ajorRodriguez61545",
                avatarUrl: "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
              },
              {
                id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
                firstname: "Daphney",
                lastname: "Torphy",
                email: "Ron61@hotmail.com",
                jobtitle: "National Markets Officer",
                twitter: "DaphneyTorphy96105",
                avatarUrl: "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
              }  
        ]
    }
    render(){
        return(
            <div>
                <Navbar/>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img
                                className="Badges_conf-logo" 
                                src={conflogo}
                                alt="Conf-logo"
                            />
                        </div>
                    </div>
                </div>
                <div className="Badge__container">
                    <div className="Badges__buttons">
                        <Link to="/badges" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>
                    <div class="Badges__list">
                        <div class="Badges__container">
                            <BadgeList badges={this.state.data}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Badges;