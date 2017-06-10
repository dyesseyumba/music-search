import { combineReducers } from 'redux';
import musics from '../music-list/music-list.reducer';

//Define the root reducer
const RootReducer = combineReducers({
  musics
});

export default RootReducer;
