import axios from 'axios';

const apiURL = "http://localhost:4000";

async function login(user) {
    return axios.post(apiURL + "/users/userlogin", user);
}
async function register(user) {
    return axios.post(apiURL + "/users/usersignup", user);
}

export default { login, register };