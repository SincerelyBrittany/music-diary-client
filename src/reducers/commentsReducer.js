  
  const initialState = {
    results: [],
  }

  const commentsReducer = (state=initialState, action) => {
 
    switch (action.type) {
      case "SET_COMMENTS":
          return {
              ...state,
              results: action.results
          }
      case "ADD_COMMENTS":
          return {
              ...state,
              results: [...state.results, action.results]
          }
      default:
          return state
  }
  }
  
  export default commentsReducer