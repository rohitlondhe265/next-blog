export default reducer = (state, action) => {
    switch(action.type) {
        case "SET_LOADING" : return {
            ...state, isLoading: true
        };
        case "GET_POSTS" : return {
            ...state, isLoading: false, data: action.payload.data, tatal: action.payload.totalPages
        };
        case "NEXT_PAGE" : 
            const pageNoInc = state.page + 1;
            if(pageNoInc >= totalPages) {
                pageNoInc = 0;
            }
            return {
            ...state, page: pageNoInc
            };
        case "PREV_PAGE" : 
            const pageNoDec = state.page - 1;
            if(pageNoDec <= 0) {
                pageNoDec = 0;
            }
            return {
            ...state, page: pageNoDec
            };
    }

    return state;
}