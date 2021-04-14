import React from 'react';
import '../components/styles/badge.css';
import '../components/styles/NavBar.css';
import confLogo from '../images/badge-header.svg';
class Badge extends React.Component{
    render(){
        return( 
            <div className="container">
                <div className="">
                         <a className="Navbar__brand" href="/">
                            <img className="Navbar__brand-logo" src={confLogo} alt="Logo"/>
                            <span className="font-weight-light"></span>
                            <span className="font-weight-bold">Conf</span>
                        </a>
                 </div>
                <div className="Badge">
                    <div className="badge_header">
                        <img src={confLogo} alt="Logo"/>
                    </div>
                    <div className="badge_section-name">
                        <img className="Badge__avatar"src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"/>
                        <h1>{this.props.firstName}<br/>{this.props.lastName}</h1>
                    </div>
                    <div className="badge_section-info ">
                        <h3>{this.props.jobTitle}</h3>
                        <div>{this.props.Twitter}</div>
                    </div>
                    <div className="badge_footer ">
                        #platziconf
                    </div>
                </div>
            </div>
        )
    }
}
export default Badge;