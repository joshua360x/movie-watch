import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Search from './Search';
import WatchList from './WatchList';
import AuthPage from './AuthPage';
import { getUser, logout } from './services/fetch-utils';

function App() {
  const [authUser, setAuthUser] = useState(localStorage.getItem('supabase.auth.token'));

  useEffect(() => {
    async function onLoad() {
      const data = await getUser();
      setAuthUser(data);
    }
    onLoad();
  }, []);

  async function logoutFunction() {
    await logout();
    setAuthUser(null);
  }

  return (
    <Router>
      <main className="App">
        {authUser && (
          <header className="App-header">
            <NavLink to="/watchList">WatchList</NavLink>
            <NavLink to="/search">Search</NavLink>
            <button onClick={logoutFunction}>Logout</button>
          </header>
        )}
        <Switch>
          <Route exact path="/">
            {authUser ? <Redirect to="/search" /> : <AuthPage setAuthUser={setAuthUser} />}
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
