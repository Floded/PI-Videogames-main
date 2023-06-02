// import "./App.css";
import { Route } from "react-router-dom";

import Landing from "./views/Landing/Landing";
import Home from "./views/Home/Home";
import Detail from "./views/Detail/Detail";
import Form from "./views/Form/Form";
import NavBar from "./components/NavBar/NavBar";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/form">
        <Form />
      </Route>
      <Route path="/detail/:detailId">
        <Detail />
      </Route>
    </div>
  );
}

export default App;
