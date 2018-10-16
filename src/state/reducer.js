import { combineReducers } from 'redux'
import tasks from './tasks/tasks'
import auth from './auth/auth'
import favs from './favs/favs'

export default combineReducers({
    tasks,
    auth,
    favs
})