import  { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session'
// import storage from 'redux-persist/lib/storage' 
import reducers  from '../reducers';
import userReducer from './user/user.reducer';

const persistConfig = {
    key: 'root',
    storage:  storageSession,
    whitelist: ['user']
  }

const rootReducer = combineReducers({
    ...reducers,
    user: userReducer
});

export default persistReducer(persistConfig, rootReducer);