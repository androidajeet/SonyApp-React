


const initialState = {
    cartSize: parseInt(localStorage.getItem('cartSize')),
    result: 1,
    lastValues: [],

    cart: [
        {
            "itemName": "",
            "qty": 0
        }

    ]
};
const cartReducer = (state = initialState, action) => {
    let updatedCart;
    let updatedItemIndex;

    switch (action.type) {

        case "ADD":

            state = {

                ...state,

                cartSize: state.cartSize + action.payload,

                lastValues: [...state.lastValues, action.payload],

              

            };

            //save to local Store
            localStorage.setItem("cartSize", state.cartSize);
            break;

        case "SUBTRACT":

            state = {

                ...state,

                cartSize: state.cartSize - action.payload,

                lastValues: [...state.lastValues, action.payload]

            };

            //save to local Store
            localStorage.setItem("cartSize", state.cartSize);
            break;

        case "RESET":

            state = {

                ...state,

                cartSize: action.payload,

                lastValues: [...state.lastValues, action.payload]

            };
            //reset  local Store
            localStorage.setItem("cartSize", 0);
            break;




        case "ADD_PRODUCT_TO_CART":




            break;

        default:
            break;

    }

    return state;

};


export default cartReducer;