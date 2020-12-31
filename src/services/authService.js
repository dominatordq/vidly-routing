import http from './httpService';
import { apiUrl } from '../config.json';

const endpoint = apiUrl + "/auth";

export async function login(email, password) {
    const { data: jwt } = await http.post(endpoint, { email, password });
    localStorage.setItem('token', jwt); // store json web token in local browser storage
}