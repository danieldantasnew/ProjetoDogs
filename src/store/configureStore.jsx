import { configureStore, getDefaultMiddleware, combineReducers } from "@reduxjs/toolkit";
import feed from "./reducers/feed";
import login from './reducers/login';
import local from "./middleware/localStorage";
import photo from './reducers/getPhoto';

const middleware = [...getDefaultMiddleware(), local];
const reducer = combineReducers({feed, login, photo})
const store = configureStore({reducer, middleware});

export default store;