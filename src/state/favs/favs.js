import firebase from 'firebase'

const initialState = {
    data: null
}

export const addFav = taskId => (dispatch, getState) => {
    const user = getState().auth.user
    if (user === null) {
        return;
    }
    firebase.database().ref(`/favs/${user.uid}/${taskId}`).set(true)
}

export const removeFav = taskId => (dispatch, getState) => {
    const user = getState().auth.user
    if (user === null) {
        return;
    }
    firebase.database().ref(`/favs/${user.uid}/${taskId}`).remove()
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FAVS/SET_FAVS':
            return {
                data: action.favs
            }
        case 'FAVS/RESET':
            return initialState
        default:
            return state
    }
}

export default reducer