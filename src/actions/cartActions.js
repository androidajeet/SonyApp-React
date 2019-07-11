export function addNumber(number, pName) {

    return {
        type: "ADD",
        payload: number,
        productName: pName


    };

}



export function subtractNumber(number, pName) {

    return {
        type: "SUBTRACT",
        payload: number,
        productName: pName

    };

}

export function clearCart(number) {
    return {
        type: "RESET",
        payload: number

    };
}

export function addAllProduct(arrayOfProducts) {
    return {
        type: "ADD_ALL_PRODUCT",
        payload: arrayOfProducts

    };
}