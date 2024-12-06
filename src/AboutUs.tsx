import React from 'react';
import { Component, /*ChangeEvent, */MouseEvent } from 'react';
import './App.css';
import test from './img.png'
import './index.css'
import { App } from './App'

type AboutUsState = {
  page: "home" | "about" | "todo" | "optimize"
}

type AboutUsProps = {
  onBackClick: () => void;
}


export class AboutUs extends Component<AboutUsProps, AboutUsState> {
  constructor(props: AboutUsProps) {
    super(props);
    this.state = {page: "about"}
  }

  render = (): JSX.Element => {
    return (<div>
      <header className="App-header">About Us</header>
      <p className="App-text">This project began in March 2024 as a class project in Math 381 at the University of Washington, Seattle.
      Originally 5 members, we worked with the University District Food Bank to optimize their delivery routes.</p>
      
      <p className="App-text">At the time, they were delivering food twice weekly to more than 300 households, and they were able to do so thanks to the 
      hard work of 30 /volunteer/ drivers. However, with limited time and limited resources, they were unable to help everyone who
      needed it with a waiting list of more than 80 households. We stepped in to take their current routes and optimize them so that
      the time constraints of the drivers would no longer be the limiting factor.</p>
      
      <p className="App-text">By the end of the quarter, we had made progress, but we knew we could do more.</p>
      
      <p className="App-text">We decided to continue the project to make as big of a difference as possible. Along the way, we have learned more about Python,
      Gurobi, route optimization, mathematical modeling, and so much more.</p>
      <button className="button" type="button" onClick={this.doBackClick}>Go home</button>
      <p></p></div>);
  }


  doBackClick = (_evt: MouseEvent<HTMLButtonElement>): void => {
    this.props.onBackClick();
  }
}
