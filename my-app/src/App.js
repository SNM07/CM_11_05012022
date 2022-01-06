
import './App.css';
import './CSS/style.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Accueil from "./Accueil";
import APropos from "./APropos";
import FicheLogement from "./FicheLogement";
import Erreur404 from "./Erreur404";

function App() {
  return (
    <div className="App">
      <Router>
        
        <Header />
          <Switch>
            <Route path="/" exact component={Accueil} />
            <Route path="/Fiche-Logement" component={FicheLogement} />
            <Route path="/A-Propos" component={APropos} />
            <Route path="/" component={Erreur404} />
          </Switch>
        <Footer />
        </Router>
    </div>
  );
}

export default App;
