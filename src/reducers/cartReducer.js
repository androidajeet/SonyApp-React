const initialState = {
    cartSize: 0,
    result: 1,
    lastValues: [],

};
const cartReducer = (state = initialState, action) => {

    switch (action.type) {

        case "ADD":

            state = {

                ...state,

                cartSize: state.cartSize + action.payload,

                lastValues: [...state.lastValues, action.payload]

            };

            break;

        case "SUBTRACT":

            state = {

                ...state,

                result: state.result - action.payload,

                lastValues: [...state.lastValues, action.payload]

            };

            break;
        default:
            break;

    }

    return state;

};


export default cartReducer;