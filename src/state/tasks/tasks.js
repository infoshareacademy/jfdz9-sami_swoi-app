import firebase from 'firebase'

const initialState = {
    data: null
}

const makeCreator = (callback) => (dispatch, getState) => {
    const user = getState().auth.user
    if (user === null) {
        return;
    }
    const ref = firebase.database().ref(`/tasks/${user.uid}`)
    callback(ref)
}

export const addTask = taskTitle => makeCreator(
    ref => ref.push({
        title: taskTitle
    })
)

export const removeTask = taskId => makeCreator(
    ref => ref.child(taskId).remove()
)

export const updateTask = (taskId, taskTitle) => makeCreator(
    ref => ref.child(taskId).update({ title: taskTitle })
)

export const toggleTaskDone = taskId => makeCreator(
    ref => ref.child(taskId).once('value', snapshot => {
        ref.child(taskId).update({
            isDone: !snapshot.val().isDone
        })
    })
)

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TASKS/SET_TASKS':
            return {
                data: action.tasks
            }
        case 'TASKS/RESET':
            return initialState
        default:
            return state
    }
}

export default reducer