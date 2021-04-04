import { useCallback, useState } from "react";
import { AuthContext } from "./Context/AuthContext";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Button from "./Components/Button/Button";

function App() {
  const [token, setToken] = useState(false);
  const [userId, setUserId] = useState(null);

  const login = useCallback((uid, token) => {
    setToken(token);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <Navbar />
        <h1>Homepage</h1>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
