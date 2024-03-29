import { Route } from "react-router";
import "./App.css";
import NavBar from "./Components/NavBar.jsx";
import MainPage from "./Pages/MainPage.jsx";
import {HashRouter as Router} from 'react-router-dom';
import Detail from "./Components/detail.jsx";
import Ini from "./Components/Ini.jsx";
import Created from "./Components/Created";
function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path="/" component={Ini} />
      <Route path="/home" component={NavBar} />
      <Route exact path="/home" component={MainPage} />
      <Route
        exact
        path="/home/country/:id"
        render={({ match }) => <Detail props={match.params.id} />}
      />
      <Route exact path="/home/create" component={Created} />
      </Router>
    </div>
  );
}
export default App;
