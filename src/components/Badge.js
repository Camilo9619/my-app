import React from 'react';
import '../components/styles/badge.css';

import confLogo from '../components/images/badge-header.svg';
class Badge extends React.Component{
    render(){
        return( 
            <div className="">
                <div className="Badge">
                    <div className="row">
                        <div className="col-6">
                            <div className="badge_header">
                                <img src={confLogo} alt="Logo"/>
                            </div>
                            <div className="badge_section-name">
                                <img className="Badge__avatar"src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"/>
                                <h1>{this.props.firstname}<br/>{this.props.lastname}</h1>
                            </div>
                            <div className="badge_section-info ">
                                <h3>{this.props.jobtitle}</h3>
                                <div>@{this.props.twitter}</div>
                            </div>
                            <div className="badge_footer ">
                                #platziconf
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Badge;