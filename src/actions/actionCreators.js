const API = "http://localhost:3000/api/v1"

export const toggleSignup = () => ({type: "TOGGLE_SIGNUP"})

export const handleLoginFormChange = (e) => ({
  type: "LOGIN_FORM_CHANGE",
  payload: {name: e.target.name, value: e.target.value}
})


export const handleSongFormChange = (e) => ({
  type: "SONG_FORM_CHANGE",
  payload: {name: e.target.name, value: e.target.value}
})

export const sendSignup = (userData) => {
  return dispatch => {
    dispatch({ type: 'START_LOADING' })
    fetch(API + "/users", {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    .then(response => response.json())
    .then(response => {
      localStorage.token = response.token
      dispatch({
      type: "SET_USER",
      payload: {user: response.user}
    })
    dispatch({ type: 'STOP_LOADING'})
  })
  }
}

export const sendLogin = (userData) => {
  return dispatch => {
    dispatch({ type: 'START_LOADING' })
    fetch(API + "/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    .then(response => response.json())
    .then(response => {
      localStorage.token = response.token
      dispatch({
      type: "SET_USER",
      payload: {user: response.user}
    })
    dispatch({ type: 'STOP_LOADING'})
  })
  }
}

export const autoLogin = () => {
  return dispatch => {
    dispatch({ type: 'START_LOADING' })
    fetch(API + "/get_current_user", {
      method: 'POST',
      headers: {
        'Authorization': localStorage.token,
      },
    })
    .then(response => response.json())
    .then(response => {
      dispatch({
      type: "SET_USER",
      payload: {user: response.user}
    })
    dispatch({ type: 'STOP_LOADING'})
  })
  }
}


export const searchForSong = (search) => {
  return dispatch => {
    dispatch({ type: 'START_LOADING' })
    dispatch({ type: 'START_SEARCH' })
    fetch(API + "/songs/search", {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({search: search}),
    })
    .then(response => response.json())
    .then(results => {
      dispatch({ type: 'ADD_RESULTS', results })
      dispatch({ type: 'STOP_LOADING'})
  })
  }
}

export const selectSong = (song) => {
  return dispatch => {
    fetch(API + "/songs", {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({song: song}),
    })
    .then(response => response.json())
    .then(results => {
      dispatch({ type: 'SONG_RESULTS', results })
    })
  }
}

export const getAllEntries = () => {
  return dispatch => {
    dispatch({ type: 'START_LOADING' })
     const api_url = "http://localhost:3000/api/v1/entries";
     console.log("c")
        fetch(api_url)
          .then(response => response.json())
          .then(results => {
            console.log("d")
            dispatch({ type: 'DISPLAY_ALL_ENTRY_RESULTS', results })
            dispatch({ type: 'STOP_LOADING' })
        })
      }
  }
 
export const songOfTheDay = (song) => {
  return dispatch => {
    // dispatch({ type: 'REMOVE_RESULTS' })
    fetch(API + "/entries", {
      method: 'POST', 
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({song: song}),
    })
    .then(response => response.json())
    .then(results => {
       if (!results.errors) {
        dispatch({ type: 'REMOVE_ERROR' })
        dispatch({ type: 'SONG_RESULTS', results })
        dispatch({ type: 'REMOVE_RESULTS' })
        } else {
          // console.log(results.errors, "your error messages")
        dispatch({ type: 'ADD_ERROR', message: results.errors })
     }
  })
  }
}


export const viewComments = (id) => {
  return dispatch => {
    // dispatch({ type: 'START_SEARCH' })
    fetch(API + `/entries/${id}/comments`, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify({id: id}),
    })
    .then(response => response.json())
    .then(results => {
      console.log(results, "this is the comments results")
      // //returns an array of objects 
      dispatch({ type: 'ADD_COMMENT_ID', id })
      dispatch({ type: 'SET_COMMENTS', results })
  })
  }
}


export const addComment = (data) => {
  return dispatch => {
    fetch(API + `/entries/${data.entry_id}/comments`, {
      method: 'POST', 
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({data: data}),
    })
    .then(response => response.json())
    .then(results => {
      dispatch({ type: 'ADD_COMMENTS', results })
    })
  }
}


export const logout = () => {
  return dispatch => {
    localStorage.clear("token")
    dispatch({type: "LOGOUT"})
  }
}
