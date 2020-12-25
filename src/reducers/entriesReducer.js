  
  const initialState = {
    results: [],
  }

  // const emptyState = {
  //   results: [],
  // }

  
  const entriesReducer = (state=initialState, action) => {
    switch (action.type) {
      case "START_ENTRY":
        //returns an array of objects 
          return {
              ...state,
              results: []
          }
      case "DISPLAY_ALL_ENTRY_RESULTS":
          return {
              ...state,
              results: action.results
          }
    // case "REMOVE_COMMENTS":
    //         return {
    //           state: emptyState
    //         }
      default:
          return state
  }
  }
  
  export default entriesReducer