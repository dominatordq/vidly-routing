import jwtDecode from 'jwt-decode';
import http from './httpService';
import { apiUrl } from '../config.json';

const endpoint = apiUrl + '/auth';
const tokenKey = 'token';

http.setJwt(getJwt());

export async function login(email, password) {
    const { data: jwt } = await http.post(endpoint, { email, password });
    localStorage.setItem(tokenKey, jwt); // store json web token in local browser storage
}

export function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt);
}

export function logout() {
    localStorage.removeItem(tokenKey);   // deletes token to log the user out
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey);  // gets the JWT from local storage
        return jwtDecode(jwt);  // return the current user based on their JWT
    }
    catch (ex) {
        return null;
    }
}

export function getJwt() {
    return localStorage.getItem(tokenKey);
}

export default {
    login,
    loginWithJwt,
    logout,
    getCurrentUser,
    getJwt
};