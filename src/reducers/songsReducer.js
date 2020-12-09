  
  const initialState = {
    id: null,
    name: "",

  }
  
  const songsReducer = (state=initialState, action) => {
    switch (action.type){
      case "SEARCH_SONG":
        return {...state, songs: !state.song}
      case "SET_SONG":
        console.log({...state, ...action.payload.song})
        return {...state, ...action.payload.song}
      default:
        return {...state}
    }
  }
  
  export default songsReducer