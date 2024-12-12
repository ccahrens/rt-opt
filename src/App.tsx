import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import { Component, /*ChangeEvent, */MouseEvent } from 'react';
import './App.css';
import './index.css'
import { ToDo } from './ToDo'
import { AboutUs } from './AboutUs'
import { GettingStarted } from './GettingStarted'

type AppState = {
  page: "home" | "about" | "todo" | "optimize" | "gettingstarted"
}

export class App extends Component<{}, AppState> {
  // params : URLSearchParams = new URLSearchParams(window.location.search);
  // possiblePage = this.params.get("page");
  constructor(props: {}) {
    super(props);
    // if (this.possiblePage === undefined || this.possiblePage === null) {
    //   this.state = {page: "home"};
    // } else if (this.possiblePage === "about") {
    //   this.state = {page: "about"};
    // } else if (this.possiblePage === "todo") {
    //   this.state = {page: "todo"};
    // } else if (this.possiblePage === "optimize") {
    //   this.state = {page: "optimize"};
    // } else {
    //   this.state = {page: "home"}
    // }
  }

  render = (): JSX.Element => {
      return (
        <Router>
            <div className="App">
              <header className="App-header">
                  Route Optimizer
              </header>
              <nav>
                <Link to="/rt-opt" className="button-navigation">Home</Link>
                <Link to="/rt-opt/about-us" className="button-navigation">About</Link>
                <Link to="/rt-opt/next-steps" className="button-navigation">Next Steps</Link>
                <Link to="/rt-opt/getting-started" className="button-navigation">Getting Started</Link>
              </nav>
              <Routes>
                <Route path="/rt-opt" element={<Home />} />
                <Route path="/rt-opt/about-us" element={<AboutUs/>} />
                <Route path="/rt-opt/next-steps" element={<ToDo/>} />
                <Route path="/rt-opt/getting-started" element={<GettingStarted/>} />
              </Routes>
              <p></p>
              <p></p>
            </div>
          </Router>
          );
  }

  // doAboutClick = (_evt: MouseEvent<HTMLButtonElement>): void => {
  //   this.params.set("page", "about")
  //   this.setState({page: "about"})
  //   return;
  // }

  // doToDoClick = (_evt: MouseEvent<HTMLButtonElement>): void => {
  //   this.params.set("page", "todo")
  //   this.setState({page: "todo"})
  // }

  // doBackClick = (): void => {
  //   this.setState({page: "home"});
  // }

  // doGettingStartedClick = (): void => {
  //   this.setState({page: "gettingstarted"});
  // }

}

const Home = (): JSX.Element => (
  <div>
    <p>Hey there friend!!</p>
    <p>
      We're a couple of college students trying to make route optimization easier.
      We're working with the University District Food Bank in Seattle to deliver food to the people who need it most.
      At some point, we'll try to publish our findings and make our code easily accessible by other foodbanks
      around the country and beyond. For now, navigate around our site to learn more about where we are now!
    </p>
  </div>
);