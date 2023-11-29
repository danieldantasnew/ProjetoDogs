const local = (store) => (next) => (action) => {
  const resultado = next(action);

  if(action.meta && action.meta.localStorage) {
    const {key, value } = action.meta.localStorage;
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  return resultado;
}

export default local;