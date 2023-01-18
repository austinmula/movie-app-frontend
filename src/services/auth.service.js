import axios from 'axios';

const API_URL = 'http://localhost:4001/auth/';

export const login = (user) => {
    return axios
        .post(API_URL + 'login', {
            username: user.username,
            password: user.password
        })
        .then(response => {
            if (response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }

            return response.data;
        });
}

export const logout = () => {
    localStorage.removeItem('user');
}
