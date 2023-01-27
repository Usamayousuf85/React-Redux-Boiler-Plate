const INITAL_STATE = {
    users: [
        {
            name: 'usama',
            email: 'usama@yahoo.com'
        },
        {
            name: 'saad',
            email: 'saad@yahoo.com'
        }
    ]
}

export default (state = INITAL_STATE, action) => {
    switch (action.type) {
        case "SETDATA":
            return ({
                ...state,
                users: [...state.users, action.payload]
                // users : [...state.users,action.data]
            })
    }
    return state;
}