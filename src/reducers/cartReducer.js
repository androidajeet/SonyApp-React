let initcart = isNaN(parseInt(localStorage.getItem('cartSize'))) ? 0 : parseInt(localStorage.getItem('cartSize'));
let initCarts = localStorage.getItem('carts');
const initialState = {
    cartSize: initcart,
    // result: 1,
    //lastValues: [],
    carts: initCarts,
    allProducts: []
};
const cartReducer = (state = initialState, action) => {
    let updatedCart;
    let updatedItemIndex;
    let updatedCartSize;

    switch (action.type) {
        case "ADD":
            updatedCart = [...state.carts];
            updatedCartSize = state.cartSize;
            updatedItemIndex = updatedCart.findIndex(
                item => item.productName === action.productName
            );
            if (updatedItemIndex < 0) {
                updatedCart.push({ productName: action.productName, quantity: 1 });
                updatedCartSize = state.cartSize + action.payload
            } else {
                const updatedItem = {
                    ...updatedCart[updatedItemIndex]
                };
                updatedItem.quantity++;
                updatedCart[updatedItemIndex] = updatedItem;
            }


            state = {
                ...state,
                cartSize: updatedCartSize,
                carts: updatedCart
            };

            //save to local Store
            localStorage.setItem("cartSize", state.cartSize);
            //  localStorage.setItem("carts", JSON.stringify(state.carts));
            localStorage.setItem("carts", state.carts);

            console.log("------->" + state.cartSize);
            console.log("------->" + state.carts);
            break;

        case "SUBTRACT":
            updatedCartSize = state.cartSize;
            updatedCart = [...state.carts];
            updatedItemIndex = updatedCart.findIndex(
                item => item.productName === action.productName
            );

            console.log("------->>>>>" + updatedItemIndex);
            if (updatedItemIndex > -1) {
                const updatedItem = {
                    ...updatedCart[updatedItemIndex]
                };
                if (updatedItem.quantity > 1) {
                    updatedItem.quantity--;
                    updatedCart[updatedItemIndex] = updatedItem;
                } else {
                    updatedCart.splice(updatedItemIndex, 1);
                    updatedCartSize = state.cartSize - action.payload

                }
            }



            // const updatedItem = {
            //     ...updatedCart[updatedItemIndex]
            // };





            //updatedItem.quantity--;
            // updatedCart[updatedItemIndex] = updatedItem;



            state = {
                ...state,
                cartSize: updatedCartSize,
                carts: updatedCart
            };

            //save to local Store

            localStorage.setItem("cartSize", state.cartSize);
            //  localStorage.setItem("carts", JSON.stringify(state.carts));
            localStorage.setItem("carts", state.carts);


            console.log("------->" + state.cartSize);
            console.log("------->" + state.carts);
            break;

        case "RESET":
            updatedCart = [];
            state = {
                ...state,
                cartSize: 0,
                carts: updatedCart
            };

            //reset  local Store
            localStorage.setItem("cartSize", 0);
            // localStorage.setItem("carts", JSON.stringify(state.carts));
            localStorage.setItem("carts", state.carts);

            console.log("------->" + state.cartSize);
            console.log("------->" + state.carts);
            break;




        case "ADD_ALL_PRODUCT":
            state = {
                ...state,
                allProducts: action.payload
            };
            break;

        default:
            break;

    }

    return state;

};


export default cartReducer;