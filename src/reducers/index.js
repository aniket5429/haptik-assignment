import uuid from 'react-uuid';

export const friendsInitialState = {
    data: [
        {id: uuid(), name: 'aniket', favourite: false},
        {id: uuid(), name: 'anand', favourite: true},
    ],
};



export function friendsReducer(state, { type, payload }) {
    switch (type) {
        case 'ADD_FRIEND':
            return { 
                data: [
                    ...state.data,
                    payload,
                ],
            };
        case 'REMOVE_FRIEND':
            return { data: state.data.filter(friend => friend.id !== payload) };
        case 'UPDATE_FRIEND':
            return { data: state.data.map(friend => {
                return friend.id === payload.id ? payload: friend
            }) };
        default:
            return state;
    }
}
