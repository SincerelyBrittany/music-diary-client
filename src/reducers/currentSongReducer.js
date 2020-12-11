const initialState = {
    results: [],
    description: "",
  }
  
  const addSongReducer = (state=initialState, action) => {
    switch (action.type) {
      case "ADDING_SONG":
        //returns an array of objects 
          return {
              ...state,
              results: []
          }
      case "SONG_RESULTS":
          return {
              ...state,
              results: action.results
          }
      default:
          return state
  }
  }
  
  export default addSongReducer