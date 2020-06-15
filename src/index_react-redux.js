import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";

// 函数式计数器
// const Couter = function (props) {
//   return (
//     <div>
//       <h1>计数数量：{store.getState().num}</h1>
//       <button onClick={add}>+</button>
//       <button onClick={dec}>-</button>
//     </div>
//   );
// };

class Couter extends React.Component {
  render() {
    const value = this.props.value;
    const onAddClick = this.props.onAddClick;
    return (
      <div>
        <h1>计数数量：{value}</h1>
        <button onClick={onAddClick}>+</button>
        {/* <button onClick={dec}>-</button> */}
      </div>
    );
  }
}
const addAction = {
  type: "add"
};

function reducer(state = { num: 0 }, action) {
  switch (action.type) {
    case "add":
      state.num++;
      break;

    default:
      break;
  }
  return { ...state };
}

const store = createStore(reducer);

function mapStateToProps(state) {
  return {
    value: state.num
  };
}

function mapDispatchToProps(dispath) {
  return {
    onAddClick: () => {
      dispath(addAction);
    }
  };
}
const App = connect(mapStateToProps, mapDispatchToProps)(Couter);

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById("root")
);
