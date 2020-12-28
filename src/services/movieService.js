import http from './httpService';
import { apiUrl } from '../config.json';

const endpoint = apiUrl + "/movies"
export function getMovies() {
    return http.get(endpoint)
}

export function deleteMovie(movieId) {
    return http.delete(`${endpoint}/${movieId}`);
}

