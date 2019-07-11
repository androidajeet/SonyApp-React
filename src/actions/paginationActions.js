export function setCurrentPage(pageNo) {
    return {
        type: "CHANGE_CURRENT_PAGE",
        payload: pageNo
    };
}