import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { firebase } from 'firebase'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './state/reducer'
import './firebase'

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

let tasksRef;
let favsRef;

const syncTasks = snapshot => {
    store.dispatch({
        type: 'TASKS/SET_TASKS',
        tasks: snapshot.val()
    })
}

const syncFavs = snapshot => {
    store.dispatch({
        type: 'FAVS/SET_FAVS',
        favs: snapshot.val()
    })
}

firebase.auth().onAuthStateChanged(user => {
    store.dispatch({
        type: 'AUTH/SET_USER',
        user
    })
    if (user !== null) {
        tasksRef = firebase.database().ref(`/tasks/${user.uid}`)
        tasksRef.on('value', syncTasks)

        favsRef = firebase.database().ref(`/favs/${user.uid}`)
        favsRef.on('value', syncFavs)
    } else {
        if (tasksRef !== undefined) {
            tasksRef.off('value', syncTasks)
            store.dispatch({
                type: 'TASKS/RESET'
            })

            favsRef.off('value', syncFavs)
            store.dispatch({
                type: 'FAVS/RESET'
            })
        }
    }
})

export default store