import jwtDecode from 'jwt-decode';
import http from './httpService';
import { apiUrl } from '../config.json';

const endpoint = apiUrl + "/auth";

export async function login(email, password) {
    const { data: jwt } = await http.post(endpoint, { email, password });
    localStorage.setItem('token', jwt); // store json web token in local browser storage
}

export function logout() {
    localStorage.removeItem('token');   // deletes token to log the user out
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem("token");  // gets the JWT from local storage
        return jwtDecode(jwt);  // return the current user based on their JWT
    }
    catch (ex) {
        return null;
    }
}

export default {
    login,
    logout,
    getCurrentUser
};