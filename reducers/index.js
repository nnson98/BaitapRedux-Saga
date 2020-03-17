import {combineReducers} from 'redux';
import userReduces from './userReduces';
const allReduces = combineReducers({
  userReduces,
});
export default allReduces;
