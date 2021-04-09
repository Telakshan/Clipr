import { useCallback, useState } from "react";
import { AuthContext } from "./Context/AuthContext";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Info from "./Pages/Info/Info";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Button from "./Components/Button/Button";
import Video from "./Components/VideoList/Video/Video";
import VideoList from "./Components/VideoList/VideoList";
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import Homepage from "./Components/Hompage/Homepage";
import NewVideo from "./Pages/NewVideo";
import Help from "./Pages/Info/Help";

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
        <Switch>
          <Route exact path="/" component={Info} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/upload" component={NewVideo} />
          <Route exact path="/home" component={Homepage} />
          <Route exact path='/help' component={Help}/>
          <Route exact path='/video' component={VideoPlayer}/>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
