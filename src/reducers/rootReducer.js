import { combineReducers } from "redux";
// import commentsReducer from "./commentsReducer";
import searchReducer from "./searchReducer";
import userReducer from './userReducer'
import addSongReducer from './currentSongReducer'


 
const appReducer = combineReducers({
  user: userReducer,
  song: addSongReducer,
  search: searchReducer,
  // comments: commentsReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined
  }
  return appReducer(state, action)
}
 
export default rootReducer;