export function fetchArticleList() {
  return (dispatch, getState) => {
    console.log(dispatch);
    console.log(getState);
  };
}
export function addMusic() {
  return (dispatch, getState) => {
    let actions={
      type:"add_Item"
    }
    dispatch(actions)
  };
}
export function setNewItem(Item) {
  return (dispatch, getState) => {
    let actions={
      type:"change_inputItem",
      item:Item
    }
    dispatch(actions)
  };
}
