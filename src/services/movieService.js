import http from './httpService';

const endpoint = 'http://localhost:3900/api/movies';

export function getMovies() {
    return http.get(endpoint)
}
 
export function deleteMovie(movieId) {
    return http.delete(`${endpoint}/${movieId}`);
}