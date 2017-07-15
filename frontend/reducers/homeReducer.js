const homeState = {
    name: '',
    password: ''
};

const homeReducer = (state = homeState, action) => {
    switch (action.types) {
        case 'TYPE_NAME':
            return state;
        default:
            return state;

    }
};

export default homeReducer;
