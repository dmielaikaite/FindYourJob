export function userHasError(state = false, action) {
    switch (action.type) {
        case 'USER_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}

export function user(state = [], action) {
    switch (action.type) {
        case 'USER_FETCH_DATA_SUCCESS':
            return action.user;
        default:
            return state;
    }
}
