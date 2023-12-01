import { PHOTO_GET } from "../../Api";
import createAsyncSlice from "../helper/createAsyncSlice";

const photo = createAsyncSlice({
  name: 'photo',
  initialState: {
    modal: false,
  },
  reducers: {
    openModal(state) {
      state.modal = true;
    },
    closeModal(state) {
      state.modal = false;
    }
  },
  fetchConfig: (id) => PHOTO_GET(id),
});

const fetchPhoto = photo.asyncSlice;
export const {openModal, closeModal} = photo.actions;

export const getPhotoItem = (id) => async (dispatch) => {
  try{
    dispatch(fetchPhoto(id));
  }
  catch{''}
}



export default photo.reducer;