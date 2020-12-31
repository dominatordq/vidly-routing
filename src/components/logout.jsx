import React, { Component } from 'react';

class Logout extends Component {
    componentDidMount() {
        localStorage.removeItem('token');   // deletes token to log the user out
        window.location = '/';
    }

    render() { 
        return null;
    }
}
 
export default Logout;