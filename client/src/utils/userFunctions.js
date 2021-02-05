import axios from 'axios';

export const registerUser = (userData) => {
    // console.log(userData);
    return axios.post('/api/register', {
        first_name: userData.first_name,
        last_name: userData.last_name,
        email: userData.email,
        password: userData.password,
    });
};

export const loginUser = userData => {
    // console.log(userData);
    return axios
        .post('/api/login', {
            email: userData.email,
            password: userData.password
        })
        .then(res => {
            console.log(res.data);
            localStorage.setItem('usertoken', res.data);
            return res.data;
        })
        .catch(err => {
            console.log(err);
        })
}

export const getUsers = () => {
    return axios.get('/api/displayusers').then((res) => res.data);
};
