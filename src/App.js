import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PublicRoutes from "./routes/PublicRoutes";
import AdminRoutes from "./routes/AdminRoutes";

function App() {
 const login = true
  return (
    <div>
      <Router>
        {login ? <AdminRoutes /> : <PublicRoutes />}
      </Router>
    </div>
  );
}

export default App;
