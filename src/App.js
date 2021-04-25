import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Pocetna from "./screens/Pocetna";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" component={Pocetna} />
      </Switch>
    </div>
  );
}

export default App;
