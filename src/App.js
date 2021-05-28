import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useSelector} from 'react-redux';
import { selectUserName} from './features/user/userSlice';

function App() {
  const userName = useSelector(selectUserName);

  return (
    <div className="App">
      <Router>
      <Header/> {/* by default all will have Header */}
      <Switch>
        <Route path="/detail/:id">
        <Detail/>
        </Route>
        <Route path="/">
          {userName?<Home/>:<Login/>}
        </Route>
      </Switch>
      </Router>      
    </div>
  );
}

export default App;
