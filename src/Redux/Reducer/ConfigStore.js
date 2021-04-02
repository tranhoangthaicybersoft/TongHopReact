import {combineReducers ,createStore , applyMiddleware} from 'redux';
import reduxthunk from 'redux-thunk'
import { LoadingReducer } from './LoadingReducer';
import { PhimReducer } from './PhimReducer';

// State tổng của ứng dụng
const rootReducer = combineReducers({
    PhimReducer : PhimReducer , 
    LoadingReducer : LoadingReducer
})

// Apply thunk để xử lý dispatch API
export const store = createStore(rootReducer,applyMiddleware(reduxthunk));

