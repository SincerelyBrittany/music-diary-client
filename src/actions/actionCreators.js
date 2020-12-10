const API = "http://localhost:3000/api/v1"

export const toggleSignup = () => ({type: "TOGGLE_SIGNUP"})

export const handleLoginFormChange = (e) => ({
  type: "LOGIN_FORM_CHANGE",
  payload: {name: e.target.name, value: e.target.value}
})

export const sendSignup = (userData) => {
  return dispatch => {
    // localhost:3000/users
    fetch(API + "/users", {
      method: 'POST', // or 'PUT'
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
  })
  }
}

export const sendLogin = (userData) => {

    console.log("here", API + "/login", userData)
  return dispatch => {
    // localhost:3000/users
    fetch(API + "/login", {
      method: 'POST', // or 'PUT'
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
  })
  }
}

export const autoLogin = () => {
  return dispatch => {
    // localhost:3000/users
    fetch(API + "/get_current_user", {
      method: 'POST', // or 'PUT'
      headers: {
        'Authorization': localStorage.token,
      },
    })
    .then(response => response.json())
    .then(response => {
      // debugger
      dispatch({
      type: "SET_USER",
      payload: {user: response.user}
    })
  })
  }
}


export const searchForSong = (search) => {
  return dispatch => {
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
      //returns an array of objects 
      debugger
      dispatch({ type: 'ADD_RESULTS', results })
  })
  }
}

// export const reviewFormChange = (e) => ({
//   type: "REVIEW_FORM_CHANGE",
//   payload: {name: e.target.name, value: e.target.value}
// })

export const logout = () => {
  return dispatch => {
    localStorage.clear("token")
    dispatch({type: "LOGOUT"})
  }
}
