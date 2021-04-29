import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Pocetna from "./screens/Pocetna";
import Kontakt from "./screens/Kontakt";
import Onama from "./screens/Onama";
import Portfolio from "./screens/Portfolio";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/onama" component={Onama} />
        <Route path="/kontakt" component={Kontakt} />
        <Route path="/" component={Pocetna} />
      </Switch>
    </div>
  );
}

export default App;
