  
  const initialState = {
    entry_id: null
  }

  const emptyState = {
    results: [],
  }

  
  const EntryReducer = (state=initialState, action) => {
 
    switch (action.type) {
          case "ADD_COMMENT_ID":
            return {
            //   ...state,
              entry_id: action.id
            }
      default:
          return state
  }
  }
  
  export default EntryReducer