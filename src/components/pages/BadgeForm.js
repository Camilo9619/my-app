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
                <h1>BIENVENIDOS</h1>
                <h2>FORMULARIO</h2>
                <form onSubmit={this.handleSubmit}>
                    <div classname="form-group">
                        <label>First Name</label>
                        <input 
                            onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="firstName"
                            value={this.state.firstName}
                        />
                    </div>
                    <br></br>
                    <div classname="form-group">
                        <label>Last Name</label>
                        <input 
                            onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="LastName"
                            value={this.state.LastName}
                        />
                    </div>
                    <br></br>
                    <div classname="form-group">
                        <label>Email</label>
                        <input 
                            onChange={this.handleChange}
                            className="form-control"
                            type="email"
                            name="Email"
                            value={this.state.Email}
                        />
                    </div>
                    <br></br>
                    <div classname="form-group">
                        <label>Job Title</label>
                        <input 
                            onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="jobtittle"
                            value={this.state.jobTitle}
                        />
                    </div>
                    <br></br>
                    <div classname="form-group">
                        <label>Twitter</label>
                        <input 
                            onChange={this.handleChange}
                            className="form-control"
                            type="text"
                            name="firstName"
                            value={this.state.Twitter}
                        />
                    </div>
                    <button onClick={this.handleClick}className="BotonForm">SAVE</button>
                </form>
            </div>
        )
    }
}
export default BadgeForm;