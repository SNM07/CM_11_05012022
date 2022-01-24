import "./App.css";
import "./CSS/style.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import routes from "./Routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/CM_11_05012022">
        <Header />
        {routes}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
