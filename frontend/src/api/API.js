import axios from 'axios';

export default axios.create({
    //zmienić ip na ip serwera
    baseURL: 'http://145.239.91.137:5931/'
});