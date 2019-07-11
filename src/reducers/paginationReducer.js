const initialState = {
    currentPage: 1,
    itemsPerPage: 6
};

const paginationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_CURRENT_PAGE":
            state = {
                ...state,
                currentPage: action.payload
            };
            break;
        default:
            break;
    }

    return state;
};


export default paginationReducer;