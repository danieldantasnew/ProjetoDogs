import { configureStore, getDefaultMiddleware, combineReducers } from "@reduxjs/toolkit";
import feed from "./reducers/feed";


const middleware = [...getDefaultMiddleware()];
const reducer = combineReducers({feed})
const store = configureStore({reducer, middleware});

export default store;