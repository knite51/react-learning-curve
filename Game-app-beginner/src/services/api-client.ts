import axios, { CanceledError } from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: { key: '884582f593234b8aa286642b16a30550' }
})

export { CanceledError };



