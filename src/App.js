import React from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import AllContacts from "./components/AllContacts.js";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import Error from "./components/Error";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact/:id" component={Contact} />
        <Route path="/contact" component={AllContacts} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}
