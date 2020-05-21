import React from "react";
import Input from '../Input';
import { Link, Redirect } from 'react-router-dom';
import {formFields} from '../Data';
import './Form.css';

 class Login extends React.Component {
     constructor(props) {
         super(props)

         this.state = {
             fields: {},
             errors: {},
             loggedIn: false
         }
         this.submitForm = this.submitForm.bind(this);
         this.handleChange = this.handleChange.bind(this);
         this.validateForm = this.validateForm.bind(this);
     }

     handleChange(e) {
         let fields = this.state.fields;
         fields[e.target.name] = e.target.value;
         this.setState({
             fields: fields
         });
     }

     submitForm(e) {
         e.preventDefault(e);
         this.validateForm();
         if (this.state.fields[formFields.EmailId] === "admin@gmail.com" && this.state.fields[formFields.Password] === "admin") {
             this.setState({
                 loggedIn: true
             });
             console.log(this.state.fields)
         }
     }

     validateForm() {
         let fields = this.state.fields;
         let errors = {};
         let isValid = true;
         if (!fields[formFields.EmailId]) {
             isValid = false;
             errors[formFields.EmailId] = "Please enter Email.";

         } else {
             var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

             if (!pattern.test(fields[formFields.EmailId])) {
                 isValid = false;
                 errors[formFields.EmailId] = "Please enter valid Email Like xyz@gmail.com.";
             }
         }

         if (!fields[formFields.Password]) {
             isValid = false;
             errors[formFields.Password] = "Please enter Password.";
         }
         this.setState({
             errors: errors
         });
         return isValid;
     }

    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/Home" />
        }
        return (
            <div class="main">
                <p class="sign" align="center">Login</p>
                <form class="form1" method="post" name="submitForm" onSubmit={this.submitForm} >
                    <Input class="pass" align="center" type="Email" name="emailId" errorMsg={this.state.errors.emailId} placeholder="Email/PhoneNumber" value={this.state.fields.emailId} onChange={this.handleChange} />
                    <Input  type="Password" name="password" errorMsg={this.state.errors.password} placeholder="Password" value={this.state.fields.password} onChange={this.handleChange} />
                    <button type="button" onClick={this.submitForm}  class="btn btn-info">Login</button>  
                    <div className="register-link">
                        <Link to="/Form/SignUp" className="btn btn-link"> New User? Please SignUp</Link>
                    </div>            
            </form>        
        </div>

        );
    }
}
export default Login;