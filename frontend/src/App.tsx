import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Customize from "./components/Customize";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <div className="pt-20">
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/customize">
              <Customize />
            </Route>
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
