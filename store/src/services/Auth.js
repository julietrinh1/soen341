import axios from 'axios';

const apiURL = "http://localhost:4000";

var loggedIn = false;

async function login(user) {
    axios.post(apiURL + "/users/userlogin", user).then(res => {
        if (res.data) {
            loggedIn = true;
            return res;
        }
        else {
            return false;
        }
    });
}
async function register(user) {
    axios.post(apiURL + "/users/usersignup", user).then((res) => {
        if (res.status !== 500 && res.data) {
            loggedIn = true;
            return res;
        }
        else {
            return false;
        }
    });
}

export default { login, register, loggedIn };