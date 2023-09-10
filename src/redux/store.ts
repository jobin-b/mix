import {combineReducers} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import queueReducer from './reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({queueReducer});

export const store = createStore(rootReducer, applyMiddleware(thunk));
