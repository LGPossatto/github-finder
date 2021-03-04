import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import User from "./components/users/User";

import GithubState from "./context/github/GithubState";

const App = () => {
  return (
    <GithubState>
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/about" component={About}></Route>
              <Route exact path="/user/:login" component={User}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </GithubState>
  );
};

export default App;
