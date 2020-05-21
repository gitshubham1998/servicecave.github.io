import React from 'react';
import Input from '../Input';
import { Link} from 'react-router-dom';
import { formFields } from '../Data'
import './Form.css';

class SignUp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            fields: {},
            errors: {}
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
        console.log(this.state.fields)
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
        if (!fields[formFields.Phone]) {
            isValid = false;
            errors[formFields.Phone] = "Please enter  Phone no.";
        }
        if (typeof fields[formFields.Phone] !== "undefined") {
            if (!fields[formFields.Phone].match(/^[0-9]{10}$/)) {
                isValid = false;
                errors[formFields.Phone] = "Please enter valid Phone no.";
            }
        }
        if (!fields[formFields.UserName]) {
            isValid = false;
            errors[formFields.UserName] = "Please enter UserName.";
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

        return (
            <div class="main-sign">
                <p class="sign" align="center">SignUp</p>
                <form class="form1" method="post" name="submitForm" onSubmit={this.submitForm} >
                    <Input class="pass" align="center" type="Last Name" name={formFields.UserName} errorMsg={this.state.errors.userName} placeholder="User Name" value={this.state.fields.lastNames} onChange={this.handleChange} />
                    <Input class="pass" align="center" type="Phone" name={formFields.Phone} errorMsg={this.state.errors.phone} placeholder="Phone number" value={this.state.fields.phone} onChange={this.handleChange} />
                    <Input class="pass" align="center" type="Email" name={formFields.EmailId} errorMsg={this.state.errors.emailId} placeholder="Email" value={this.state.fields.emailId} onChange={this.handleChange} />
                    <Input type="Password" name={formFields.Password} errorMsg={this.state.errors.password} placeholder="Password" value={this.state.fields.password} onChange={this.handleChange} />
                    <button type="button" onClick={this.submitForm} className="btn btn-info">SignUp</button>
                    <div className="register-link">
                        <Link to="/Form/Login" className="btn btn-link">Already have an account?</Link>
                    </div>
                </form>
            </div>

        );
    }
}
export default SignUp;