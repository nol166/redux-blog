import { combineReducers } from 'redux'

export default combineReducers({
    replaceMe: () => {
        // adding this to trick redux into thinking our reducer is valid
        return 'test'
    },
})
