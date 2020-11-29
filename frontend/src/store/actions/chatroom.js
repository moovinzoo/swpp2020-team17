import * as actionTypes from './actionTypes';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'x-csrftoken'

export function getCookie(name) {
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
axios.defaults.xsrfHeaderName = 'x-csrftoken'

const getChatroomList_ = (chatroomList) => {
    return {
        type: actionTypes.GetChatroomList,
        chatrooms: chatroomList
    }
}

export const getChatroomList = () => {
    return dispatch => {
        return axios.get('/api/chatroom/')
        .then(res => {
            dispatch(getChatroomList_(res.data))
        })
    }
}

const createChatroom_ = (chatroom) => {
    return {
        type: actionTypes.CreateChatroom,
        chatroom: chatroom
    }
}

export const createChatroom = (chatroom) => {
    return dispatch => {
        return axios.post('/api/chatroom/', chatroom)
        .then(res => {
            dispatch(createChatroom_(res.data))
        })
    }
}

const getChatroom_ = (chatroom) => {
    return {
        type: actionTypes.GetChatroom,
        chatroom: chatroom
    }
}
export const getChatroom = (id) => {
    return dispatch => {
        return axios.get('api/chatroom/' + id)
        .then(res => {
            dispatch(getChatroom_(res.data))
        })
    }
}

const putChatroom_ = (chatroom) => {
    return {
        type: actionTypes.PutChatroom,
        chatroom: chatroom
    }
}
export const putChatroom = (chatroom) => {
    return dispatch => {
        return axios.put('api/chatroom/' + chatroom.id, chatroom)
        .then(res => {
            dispatch(putChatroom_(res.data))
        })
    }
}

const deleteChatroom_ = (chatroom) => {
    return {
        type: actionTypes.DeleteChatroom,
        chatroom: chatroom
    }
}
export const deleteChatroom = (id) => {
    return dispatch => {
        return axios.delete('api/chatroom/' + id)
        .then(res => {
            dispatch(deleteChatroom_(res.data))
        })
    }
}

export const putUser_ = (user) => {
    return {
        type: actionTypes.PutUser,
        user: user,
    }
}

export const sendShallWe = (newChatroom, receivedUser) => {
    return dispatch => {
        return axios.post('api/chatroom/', newChatroom)
        .then(res1 => {
            dispatch(createChatroom_(res1.data));
            console.log(receivedUser);
            receivedUser.shallWeRoomList.push(res1.data.id);
            axios.put('api/user/' + receivedUser.id, receivedUser)
            .then(res2 => {
                dispatch(putUser_(res2.data))
            })
        })
    }
}
