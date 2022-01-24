import { Route, Switch } from "react-router-dom";
import Accueil from "./pages/Accueil";
import APropos from "./pages/APropos";
import FicheLogement from "./pages/FicheLogement";
import Erreur404 from "./pages/Erreur404";

const routes = (
  <Switch>
    <Route path="/" exact component={Accueil} />
    <Route
      path="/Fiche-Logement/:id"
      render={(props) => <FicheLogement {...props} />}
    />
    <Route path="/A-Propos" component={APropos} />
    <Route component={Erreur404} />
  </Switch>
);

export default routes;
