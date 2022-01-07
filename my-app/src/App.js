import "./App.css";
import "./CSS/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Accueil from "./pages/Accueil";
import APropos from "./pages/APropos";
import FicheLogement from "./pages/FicheLogement";
import Erreur404 from "./pages/Erreur404";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Accueil} />
          <Route
            path="/Fiche-Logement/:id"
            render={(props) => <FicheLogement {...props} />}
          />
          <Route path="/A-Propos" component={APropos} />
          <Route path="/" component={Erreur404} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
