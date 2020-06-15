import React from "react";
// import axios from "axios";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>首页</h1>
    </div>
  );
}

function Discover() {
  return (
    <div>
      <h1>发现</h1>
    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Router basename="/admin">
          <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/Discover">Discover</Link>
          </div>
          <Route path="/" exact component={Home}></Route>
          <Route path="/Discover" component={Discover}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
