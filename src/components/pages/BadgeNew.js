import React from 'react';
import '../styles/BadgeNew.css';
import BadgeForm from '../pages/BadgeForm';
import Navbar from '../pages/Navbar';
import '../styles/NavBar.css';
import Badge from '../Badge';
import '../styles/badge.css'
class BadgeNew extends React.Component{
    state={ form:{
        firstname:'',
        lastname:'',
        email:'',
        jobtitle:'',
        twitter:'',
    }};
    handleChange= e=>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            },
        });
    };
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
                                    firstname={this.state.form.firstname}
                                    lastname={this.state.form.lastname}
                                    twitter={this.state.form.twitter}
                                    jobtitle={this.state.form.jobtitle}
                                    email={this.state.form.email}
                                    avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default BadgeNew;
