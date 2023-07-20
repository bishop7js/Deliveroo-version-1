const Initial_state = {
    isSignedIn : null,
    userId: null
}

export default (state = Initial_state, action) => {
    switch(action.type) {
        case 'SIGN_IN':
            return {
                ...state, isSignedIn: true, userId: action.payload
            }

            case 'SIGN_OUT':
            return {
                ...state, isSignedIn: false
            }

            default:
                return state
    }
}