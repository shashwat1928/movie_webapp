import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./pages/login/Login";
import { AuthContext } from "./context/authContext/AuthContext";
import { useContext } from "react";
import ListList from "./pages/listList/ListList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";
import MovieList from "./pages/movieList/MovieList";
import { Movie } from "@material-ui/icons";
import NewMovie from "./pages/newMovie/NewMovie";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        {user && (
          <>
           <Route path="/login">
              <Redirect to="/" />
            </Route>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/movies">
                <MovieList />
              </Route>
              <Route path="/movie/:movieId">
                <Movie />
              </Route>
              <Route path="/newMovie">
                <NewMovie />
              </Route>
              <Route path="/lists">
                <ListList />
              </Route>
              <Route path="/list/:listId">
                <List />
              </Route>
              <Route path="/newlist">
                <NewList />
              </Route>
            </div>
          </>
        )}
        {!user && (
          <>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path= "*"> 
              <Redirect to= "/login" />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
