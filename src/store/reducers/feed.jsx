import { PHOTOS_GET } from "../../Api";
import createAsyncSlice from "../helper/createAsyncSlice";



const feed = createAsyncSlice({
  name: 'feed',
  initialState:{
    pages: 1,
    infinite: true,
    list: [],
  },
  reducers: {
    nextPage(state) {
      state.pages++;  
    },
    addPhotosInList(state, action) {
      state.list.push(...action.payload);
      if(action.payload.length === 0) state.infinite = false;
    },
    resetState(state) {
      state.pages = 1,
      state.infinite = true;
      state.list = [];
      state.loading = null;
      state.dados = null;
      state.erro = null;
    }
  },
  fetchConfig: ({page, user, total}) => PHOTOS_GET({page, user, total}),
});

const { nextPage, addPhotosInList, resetState} = feed.actions;
const fetchFeed = feed.asyncSlice;

export const carregarNovasFotos = ({total = 6, user}) => async (dispatch, getState) => {
  const {feed} = getState();
  const {payload} = await dispatch(fetchFeed({page: feed.pages, total, user}));
  const lista = getState().feed.list;
  const novaLista = [];
  payload.forEach((elemento)=> {
    if(lista.findIndex((photo)=> photo.id === elemento.id) === -1) {
      novaLista.push(elemento);
    }
  }) 

  dispatch(addPhotosInList(novaLista));
  dispatch(nextPage());
}

export const resetPhotos = () => (dispatch) => {
  dispatch(resetState());
}

export default feed.reducer;