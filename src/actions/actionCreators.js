const API = "http://localhost:3000/api/v1"

// export const like = () => ({type: "ADD_LIKE"})

// thunk allows us to return a function that takes in the argument of dispatch, instead of a plain object representing the action

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
      dispatch({
      type: "SET_USER",
      payload: {user: response.user}
    })
  })
  }
}

export const reviewFormChange = (e) => ({
  type: "REVIEW_FORM_CHANGE",
  payload: {name: e.target.name, value: e.target.value}
})

export const logout = () => {
  return dispatch => {
    localStorage.clear("token")
    dispatch({type: "LOGOUT"})
  }
}
