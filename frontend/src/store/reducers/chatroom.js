import * as actionTypes from '../actions/actionTypes';

const reducer = (state = {
    chatroomList: []
}, action) => {
    switch (action.type) {
        case actionTypes.GetChatroomList:
            return {...state, chatroomList: action.chatroomList};
        default:
            break;
    }
    return state
};

export default reducer;