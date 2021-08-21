import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Editor from "./Pages/Editor";
import CreatePage from "./Pages/CreatePage";

import './static/css/main.css';

function App() {
  return (
      <Router>
        <div className="App">
            <Switch>
                <Route exact path="/">
                    <CreatePage />
                </Route>
                <Route path="/page/:id">
                    <Editor />
                </Route>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
