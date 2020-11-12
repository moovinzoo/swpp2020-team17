import * as actionTypes from './actionTypes';
import { push } from 'connected-react-router';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'x-csrftoken'

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';'); for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break; 
            }
            return cookieValue; 
        }
    } 
}
const csrftoken = getCookie('csrftoken');

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export const login_ = (user) => {
    return { type: actionTypes.Login, user: true };
}
  
export const login = () => {
    return dispatch => {
        return axios.get('https://discord.com/api/oauth2/authorize?client_id=771395876442734603&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fapi%2Flogin%2Fredirect&response_type=code&scope=identify',
        
        ).then(res => {
            dispatch(login_(res.data))
        });
    }
}

const getUserList_ = (users) => {
    return {
        type: actionTypes.GetUserList,
        users: users
    }
}

export const getUserList = () => {
    return dispatch => {
        return axios.get('/api/user/')
        .then(res => {
            dispatch(dispatch(getUserList_(res.data)))
        })
    }
}

const getCurrentUser_= (user) => {
    return {
        type: actionTypes.GetCurrentUser,
        currentUser: user,
    }
}

export const getCurrentUser = () => {       // read user info from /api/user/
    return dispatch => {
        return axios.get('/api/currentUser/')
        .then(res => {
            return dispatch(getCurrentUser_(res.data))
        })
    }
}

export const getUser_ = (user) => {
    return {
        type: actionTypes.GetUser,
        user: user,
    }
}

export const getUser = (ID) => {        // Get user with id
    return dispatch => {
        return axios.get('/api/user/' + ID)
        .then(res => {
            dispatch(getUser_(res.data))
        })
    }
}

export const putUser_ = (user) => {
    return {
        type: actionTypes.PutUser,
        user: user,
    }
}

export const putUser = (user) => {
    return dispatch => {
        return axios.put('/api/user/' + user.ID, user)
        .then(res => dispatch(putUser_(user)))
    }
}



