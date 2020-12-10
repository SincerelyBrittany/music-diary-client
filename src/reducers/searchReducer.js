  
  const initialState = {
    results: []
    // name: [],
    // artist: [],
    // image: [],
    // preview: [], 
    // spotify_id: [],
    // lyrics: [],
  }
  
  const searchReducer = (state=initialState, action) => {
    switch (action.type) {
      case "START_SEARCH":
        //returns an array of objects 
          return {
              ...state,
              results: []
              // name: [],
              // artist: [],
              // image: [],
              // preview: [], 
              // spotify_id: [],
              // lyrics: [],
          }
      case "ADD_RESULTS":
          return {
              ...state,
              results: action.results
              // name: action.results.name,
              // artist: action.results.artist,
              // image: action.results.image,
              // preview: action.results.preview,
              // spotify_id: action.results.spotify_id,
              // lyrics: action.results.lyrics,
          }
      default:
          return state
  }
  }
  
  export default searchReducer