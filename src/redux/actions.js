export const addListings = (listing) => {
    return {
        type: 'ADD_LISTINGS',
        value: listing
    }
}

export const removeListings = (index) => {
    return {
        type: 'REMOVE_LISTING',
        value: index
    }
}

export const login = (user) => {
    return {
        type: 'LOG_IN',
        value: user
    }
}

export const logout = () => {
    return {
        type: 'LOG_OUT',
        username: null
    }
}
