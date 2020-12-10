import { combineReducers } from "redux";
// import commentsReducer from "./commentsReducer";
import searchReducer from "./searchReducer";

import userReducer from './userReducer'
// import songsReducer from './songsReducer'


 
const appReducer = combineReducers({
  user: userReducer,
  // songs: songsReducer
  search: searchReducer,
  // loginform: loginReducer,
  // comments: commentsReducer,
});

const rootReducer = (state, action) => {
  // if (action.type === 'LOGOUT') {
  //   state = undefined
  // }
  return appReducer(state, action)
}
 
export default rootReducer;