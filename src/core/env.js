const isDev = window.location.port.includes('8080');

const BACKEND_URL = isDev ? 'http://localhost:3000' : '';

export const ENV = {
    BACKEND_URL
}