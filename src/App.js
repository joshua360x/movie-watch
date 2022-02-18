import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Search from './Search';
import WatchList from './WatchList';
import AuthPage from './AuthPage';

function App() {
  const [authUser, setAuthUser] = useState();

  return (
    <Router>
      <main className="App">
        {authUser && (
          <header className="App-header">
            <NavLink to='/watchList'>WatchList</NavLink>
            <NavLink to='/search'>Search</NavLink>
          </header>
        )}
        <Switch>
          <Route exact path="/">
            {authUser ? <Redirect to='/search' /> : <AuthPage setAuthUser={setAuthUser} />}
          </Route>
          <Route exact path="/search">
            {authUser ? <Search /> : <AuthPage />}
          </Route>
          <Route exact path="/watchList">
            {authUser ? <WatchList /> : <AuthPage />}
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
