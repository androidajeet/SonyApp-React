export function addNumber(number) {

    return {
        type: "ADD",
        payload: number

    };

}



export function subtractNumber(number) {

    return {
        type: "SUBTRACT",
        payload: number

    };

}

export function clearCart(number){
    return {
        type: "RESET",
        payload: number

    };
}