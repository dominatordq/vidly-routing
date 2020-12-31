import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import * as userService from '../services/userService';
import auth from '../services/authService';

class RegisterForm extends Form {
    state = {
        data: { username: '', password: '', name: '' },
        errors: {}
    };

    schema = {
        username: Joi.string().email().required().label('Username'),
        password: Joi.string().min(5).required().label('Password'),
        name: Joi.string().required().label('Name')
    };

    doSubmit = async () => {
        try {
            // Call the server
            const response = await userService.register(this.state.data);
            auth.loginWithJwt(response.headers['x-auth-token']);
            window.location = '/';
        }
        catch (ex) {
            if (ex.response && ex.response.status === 400) {  // the client does something wrong
                const errors = {...this.state.errors};
                errors.username = ex.response.data; // get the error from the server
                this.setState({ errors });
            }
        }
    }

    render() {
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderInput("name", "Full Name")}
                    {this.renderButton("Register")}
                </form>
            </div>
        );
    }
}
 
export default RegisterForm;