import { configureStore, getDefaultMiddleware, combineReducers } from "@reduxjs/toolkit";
import feed from "./reducers/feed";
import login from './reducers/login';
import local from "./middleware/localStorage";


const middleware = [...getDefaultMiddleware(), local];
const reducer = combineReducers({feed, login})
const store = configureStore({reducer, middleware});

export default store;