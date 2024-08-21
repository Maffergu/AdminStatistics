import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Components/AuthContext";
import LoginForm from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import PrivateRoute from "./Components/PrivateRoutes";

function App() {
  return (
    <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                </Routes>
            </Router>
      </AuthProvider>
  );
}

export default App;
