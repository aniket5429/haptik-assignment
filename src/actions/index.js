import actionTypes from './types';


export const addFriend = (payload) => ({
    type: actionTypes.ADD_FRIEND,
    payload,
})

export const updateFriend = (payload) => ({
    type: actionTypes.UPDATE_FRIEND,
    payload,
})

export const removeFriend = (payload) => ({
    type: actionTypes.REMOVE_FRIEND,
    payload,
})