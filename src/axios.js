import axios from 'axios';

const instance=axios.create({
    baseURL:'https://aj-tinder-backend.herokuapp.com/'
})
export default instance;