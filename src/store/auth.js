const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"
export const authReducer = (state = { auth: false }, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                auth: true
            }
        case LOGOUT:
            return {
                ...state,
                auth: false
            }
        default:
            return state
    }
}