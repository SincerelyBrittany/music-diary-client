  
  const initialState = {
    results: [],
  }

  const emptyState = {
    results: [],
  }

  
  const searchReducer = (state=initialState, action) => {
    switch (action.type) {
      case "START_SEARCH":
        //returns an array of objects 
          return {
              ...state,
              results: []
          }
      case "ADD_RESULTS":
          return {
              ...state,
              results: action.results
          }
          case "REMOVE_RESULTS":
            return {
              state: emptyState
            }
      default:
          return state
  }
  }
  
  export default searchReducer