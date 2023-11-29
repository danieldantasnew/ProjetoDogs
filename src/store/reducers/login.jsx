import {combineReducers} from '@reduxjs/toolkit';
import { TOKEN_POST, USER_GET } from '../../Api';
import createAsyncSlice from '../helper/createAsyncSlice.jsx';
import getLocalStorage from '../helper/getLocalStorage.jsx';

const token = createAsyncSlice({
  name: 'token',
  initialState:{
    dados: {
      token: getLocalStorage('token', null),
    },
  },
  reducers: {
    fetchSucess:{
      reducer(state, action) {
        state.carregando = false;
        state.dados = action.payload;
        state.erro = null;
      }, 
      prepare(payload) {
        return {
          payload,
          meta: {
            localStorage: {
              key: 'token',
              value: payload.token 
            }
          }
        }
      }
    },
    removeToken(state) {
      state.carregando = null;
      state.dados = null;
      state.erro = null;
    }
  },
  fetchConfig: (user) => TOKEN_POST(user), 
});

const user = createAsyncSlice({
  name: 'user',
  reducers: {
    removeUser(state) {
      state.carregando = null;
      state.dados = null;
      state.erro = null;
    }
  },
  fetchConfig: (token) => USER_GET(token),
});

const fetchToken = token.asyncSlice;
const fetchUser = user.asyncSlice;
const {removeUser} = user.actions;
const {removeToken} = token.actions;


export const autoLogin = () => async (dispatch, getState) => {
  const state = getState();
  const {dados} = state.login.token;
  if(dados.token){
    await dispatch(fetchUser(dados.token));
  }
}

export const login = (usuario) => async (dispatch) => {
  try{
    const {payload} = await dispatch(fetchToken(usuario));
    if(payload.token) {
      await dispatch(fetchUser(payload.token));
    }
  }
  catch(erro){console.log(erro.message)}
} 


export const logOut = () => (dispatch) => {
  dispatch(removeUser());
  dispatch(removeToken());
  window.localStorage.removeItem('token');
}
const reducer = combineReducers({token: token.reducer, user: user.reducer});

export default reducer;