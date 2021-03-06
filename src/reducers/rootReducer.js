import { combineReducers } from "redux";
import commentsReducer from "./commentsReducer";
import searchReducer from "./searchReducer";
import userReducer from './userReducer'
import addSongReducer from './currentSongReducer'
import EntryReducer from './entryReducer'
import entriesReducer from './entriesReducer'
import loadingReducer from './loadingReducer'
import errorsReducer from './errorReducer'


 
const appReducer = combineReducers({
  user: userReducer,
  song: addSongReducer,
  search: searchReducer,
  comments: commentsReducer,
  entries: entriesReducer, 
  entry_id: EntryReducer,
  loading: loadingReducer,
  errors: errorsReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined
  }
  return appReducer(state, action)
}
 
export default rootReducer;