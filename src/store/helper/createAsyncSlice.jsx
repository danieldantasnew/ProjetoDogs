import {createSlice} from '@reduxjs/toolkit';

/**
 * Cria um slice com uma função assíncrona
 * @param {Object} config
 * @param {String} config.name
 * @param {Object} config.initialState
 * @param {Object} config.reducers
 * @param {Function} config.fetchConfig
 */

const createAsyncSlice = (config) => {
  const slice = createSlice({
    name: config.name,
    initialState: {
      carregando: null,
      dados: null,
      erro: null,
      ...config.initialState
    },
    reducers: {
      fetchStarted(state) {
        state.carregando = true;
      },
      fetchSucess(state, action) {
        state.carregando = false;
        state.dados = action.payload;
        state.erro = null;
      },
      fetchErro(state, action) {
        state.carregando = false;
        state.dados = null;
        state.erro = action.payload;
      },
      ...config.reducers
    }
  });

  const {fetchStarted, fetchSucess, fetchErro} = slice.actions;

  const asyncSlice = (payload) => async (dispatch) => {
    try {
      dispatch(fetchStarted());
      const {url, options} = config.fetchConfig(payload);
      const response = await fetch(url, options);
      const json = await response.json();
      if(!response.ok) throw new Error(json.message);
      return dispatch(fetchSucess(json));
    }
    catch(error) {
      return dispatch(fetchErro(error.message));
    }
  }

  return {...slice, asyncSlice};
} 

export default createAsyncSlice;