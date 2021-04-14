import React from 'react';
import '../styles/Form.css'
class BadgeForm extends React.Component{
    state={};
    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value,
        })
    };
    
    handleClick =e=>{
        console.log('Button was clicked');
    };
    handleSubmit=e=>{
        e.preventDefault();
        console.log('Form was submitted');
        console.log(this.state);
    };
    render(){
        return(
            <div className="Formulario container">
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div classname="form-group">
                        <label>First Name</label>
                        <input 
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="firstname"
                            value={this.props.formValues.firstname}
                        />
                    </div>
                    <br></br>
                    <div classname="form-group">
                        <label>Last Name</label>
                        <input 
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="lastname"
                            value={this.props.formValues.lastname}
                        />
                    </div>
                    <br></br>
                    <div classname="form-group">
                        <label>Email</label>
                        <input 
                            onChange={this.props.onChange}
                            className="form-control"
                            type="email"
                            name="email"
                            value={this.props.formValues.email}
                        />
                    </div>
                    <br></br>
                    <div classname="form-group">
                        <label>Job Title</label>
                        <input 
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="jobtitle"
                            value={this.props.formValues.jobtitle}
                        />
                    </div>
                    <br></br>
                    <div classname="form-group">
                        <label>Twitter</label>
                        <input 
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="twitter"
                            value={this.props.formValues.twitter}
                        />
                    </div>
                    <button onClick={this.handleClick}className="BotonForm">SAVE</button>
                </form>
            </div>
        )
    }
}
export default BadgeForm;