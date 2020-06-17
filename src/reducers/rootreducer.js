const initialState = { num: 0 };

export default function (state = initialState, action) {
  switch (action.type) {
    case "add":
      state.num++;
      break;

    default:
      break;
  }
  return { ...state };
}
