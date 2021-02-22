import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Login, Dashboard } from './pages'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import auth from './auth'
import reportWebVitals from './reportWebVitals';

const ProtectedRoute = ({...props}) => {
  return <Route
    {...props}
    render={() => {
      if(auth.isAuthenticated())
        return <Dashboard/>        
      else 
        return <Redirect to='/'/>
    }}
  />
}

ReactDOM.render(
  <Router>
    <Switch>
      <Route 
        exact 
        path='/'
        render={() => <Login/>}/>
      
      <ProtectedRoute 
        exact 
        path='/dashboard' />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
