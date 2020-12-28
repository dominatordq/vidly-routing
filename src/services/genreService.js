import http from './httpService';

export function getGenres() {
    const endpoint = 'http://localhost:3900/api/genres';
    return http.get(endpoint);
}
  