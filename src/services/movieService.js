import http from './httpService';

const apiEndpoint = process.env.REACT_APP_API_URL + "/movies";

function movieUrl(id) {  // helper function to get endpoint of a specific movie
    return `${apiEndpoint}/${id}`;
}

export function getMovies() {
    return http.get(apiEndpoint)
}

export function getMovie(movieId) {
    return http.get(movieUrl(movieId));
}

export function saveMovie(movie) {
    if (movie._id) {
        const body = {...movie};
        delete body._id;    // makes it clear which id we're passing to rest api call (http)
        return http.put(movieUrl(movie._id), body);
    }

    return http.post(apiEndpoint, movie);
}

export function deleteMovie(movieId) {
    return http.delete(movieUrl(movieId));
}

