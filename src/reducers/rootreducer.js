const initialState = { musicList: [], inputItem: {} };

export default function (state = initialState, action) {
  switch (action.type) {
    case "change_inputItem":
      let newState = JSON.parse(JSON.stringify(state));
      
      newState.inputItem = action.item;
      // console.log("change_inputItem");
      // console.log(newState)
      // console.log(newState);
      return {...newState};
    case "add_Item":
      let newstate = JSON.parse(JSON.stringify(state));
      newstate.musicList.push(newstate.inputItem);
      // console.log(newstate);
      return {...newstate};
    default:
      break;
  }
  return { ...state };
  // { ...state }
}
