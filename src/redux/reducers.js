import { combineReducers } from 'redux'

const username =  (state = '') => state
const password = (state = '') => state

const listings = (state = [], action) => {
    switch(action.type) {
        case 'ADD_LISTINGS':
            return [...state, action.value]
        case 'REMOVE_LISTING':
                const listings = [ ...state ]
                listings.splice(action.value, 1)
                return listings
        default:
            return state
    }
}

export default combineReducers({ username, password, listings})