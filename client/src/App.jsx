import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import AppRoutes from "./components/AppRoutes";

function App() {
  return (
    <Router>
      <div className="app">
        <h1>React On Rails Blog</h1>
        <p>App alojada en client/src/app.jsx</p>
        <NavBar />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
