  
  const initialState = {
    results: [],
    entry_id: null
  }

  const emptyState = {
    results: [],
  }

  
  const commentsReducer = (state=initialState, action) => {
 
    switch (action.type) {
      case "SET_COMMENTS":
        //returns an array of objects 
          return {
              ...state,
              // results: []
              // results: action.results
              results: action.results
          }
          // case "ADD_COMMENT_ID":
          //   return {
          //     ...state,
          //     entry_id: action.id
          //   }
      case "ADD_COMMENTS":
          return {
              ...state,
              
              results: [...state.results, action.results]
          }
      //     case "REMOVE_COMMENTS":
      //       return {
      //         state: emptyState
      //       }
      default:
          return state
  }
  }
  
  export default commentsReducer