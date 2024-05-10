import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PublicRoutes from "./routes/PublicRoutes";

function App() {
  return (
    <div>
      <Router>
        <PublicRoutes />
      </Router>
    </div>
  );
}

export default App;
