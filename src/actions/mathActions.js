export function addNumber(number) {

    return {

        type: "ADD",

        payload: 1

    };

}



export function subtractNumber(number) {

    return {

        type: "SUBTRACT",

        payload: number

    };

}