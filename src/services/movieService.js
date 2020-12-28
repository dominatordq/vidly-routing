import http from './httpService';
import { apiUrl } from '../config.json';

const endpoint = apiUrl + "/movies"

export function getMovies() {
    return http.get(endpoint)
}

export function getMovie(movieId) {
    return http.get(`${endpoint}/${movieId}`);
}

export function saveMovie(movie) {
    if (movie._id) {
        const body = {...movie};
        delete body._id;    // makes it clear which id we're passing to rest api call (http)
        return http.put(`${endpoint}/${movie._id}`, body);
    }

    return http.post(endpoint, movie);
}

export function deleteMovie(movieId) {
    return http.delete(`${endpoint}/${movieId}`);
}

