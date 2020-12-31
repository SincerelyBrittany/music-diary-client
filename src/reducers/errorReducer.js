// const initState = {
//     error: null
//    };
   
//    export function errorReducer(state = initState, action){
//     const { error } = action;
   
//     if(error){
//     return {
//     error: error
//     }
//     }
   
//     return state;
//    }

export default function errorReducer(state = {message: "" }, action) {
    switch (action.type) {
        case "ADD_ERROR":
            return {
                ...state,
                message: action.message
            }
        default:
            return state
    }
}