import React from 'react';


class BadgeNew extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div class="NavBar">
                    <a className="Navbar_brand" href="/">
                    <img src={logo} alt="Logo"/>
                     <span className="font-weigh-light">Platzi</span>
                    <span className="font-weight-bold">Conf</span>
                    </a>
                </div>
            </div>
        )
    }
}
export default BadgeNew;