  
  const initialState = {
    results: [],
  }

  const emptyState = {
    results: [],
  }

  
  const commentsReducer = (state=initialState, action) => {
    switch (action.type) {
      case "START_COMMENTS":
        //returns an array of objects 
          return {
              ...state,
              results: []
          }
      case "ADD_COMMENTS":
          return {
              ...state,
              results: action.results
          }
          case "REMOVE_COMMENTS":
            return {
              state: emptyState
            }
      default:
          return state
  }
  }
  
  export default commentsReducer