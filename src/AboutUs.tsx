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
      <p className="App-text">Hey there! Look at this, we've got an about us page!</p>
      <button className="button" type="button" onClick={this.doBackClick}>Go home</button>
      <p></p></div>);
  }


  doBackClick = (_evt: MouseEvent<HTMLButtonElement>): void => {
    this.props.onBackClick();
  }
}
