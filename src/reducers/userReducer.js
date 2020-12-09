// export default function userReducer(state = {user: "" }, action) {
//     switch (action.type) {
//         case "ADD_USER":
//             sessionStorage.token = action.token
//             return {
//                 user: action.user,
//             }
//         case "LOGIN":
//             action.rememberMe ? localStorage.token = action.token : sessionStorage.token = action.token
//             return {
//                 user: action.user
//             }
//         case "LOGOUT":
//             localStorage.token ? localStorage.removeItem('token') : sessionStorage.removeItem('token')
//             return {
//                 user: ""
//             }
//         default:
//             return state
//     }
// }


const initialLoginForm = {
    email: "",
    username: "",
    password: "",
    passwordConfirmation: ""
  }
  
  const initialState = {
    id: null,
    email: null,
    signup: false,
    loginForm: initialLoginForm
  }
  
  const userReducer = (state=initialState, action) => {
    switch (action.type){
      case "TOGGLE_SIGNUP":
        return {...state, signup: !state.signup}
      case "LOGIN_FORM_CHANGE":
        return {...state, loginForm: {
          ...state.loginForm,
          [action.payload.name]: action.payload.value
        }}
      case "SET_USER":
        console.log({...state, ...action.payload.user})
        return {...state, ...action.payload.user}
      case "LOGOUT":
        return {...state, username: null, id: null}
      default:
        return {...state}
    }
  }
  
  export default userReducer