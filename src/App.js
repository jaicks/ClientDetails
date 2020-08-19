import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import UserList from './component/UserList';
import UserDetail from './component/UserDetail'
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={UserList} />
        <Route exact path="/profile" component={UserDetail} />
      </div>
    </Router>
    
  );
}

export default App;
