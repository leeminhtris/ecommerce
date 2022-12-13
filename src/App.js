import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Router from "./router/router";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <div className="main">
          <Router />
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
