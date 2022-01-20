import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import UserContext from "./context/user";
import useAuthListener from "./hooks/useAuthListner";
import Connection from "./pages/connection";
import ProtectedRoute from "./utils/protected.route";
import EditProfile from "./pages/editProfile";
import EditAdditional from "./pages/editAddtional";

function App() {
  const { user } = useAuthListener();
  return (
    <UserContext.Provider value={{ user }}>
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <ProtectedRoute user={user} path="/search" exact>
          <Search />
        </ProtectedRoute>
        <ProtectedRoute user={user} exact path="/profile/:uid">
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute user={user} exact path="/edit/profile">
          <EditProfile />
        </ProtectedRoute>
        <ProtectedRoute user={user} exact path="/edit/additional">
          <EditAdditional />
        </ProtectedRoute>
        <ProtectedRoute user={user} path="/connection">
          <Connection />
        </ProtectedRoute>
      </Switch>
      <Footer />
    </UserContext.Provider>
  );
}

export default App;
