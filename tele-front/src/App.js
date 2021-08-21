import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Editor from "./Pages/Editor";

import './static/css/main.css';

function App() {
  return (
      <Router>
        <div className="App">
            <Switch>
                <Route path="/">
                    <Editor />
                </Route>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
