const initialState = {
    results: [],
    description: "I do not know how to update this yet, will need to ask for guidance",
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
      case "SONG_FORM_CHANGE":
        return {
          ...state,
              description: action.description
        }
      default:
          return state
  }
  }
  
  export default addSongReducer