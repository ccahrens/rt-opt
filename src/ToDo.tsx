import React from 'react';
import { Component, /*ChangeEvent, */MouseEvent } from 'react';
import './App.css';
import test from './img.png'
import './index.css'
import { App } from './App'

type ToDoState = {
  page: "home" | "about" | "todo" | "optimize"
}

type ToDoProps = {
  onBackClick: () => void;
}


export class ToDo extends Component<ToDoProps, ToDoState> {
  constructor(props: ToDoProps) {
    super(props);
    this.state = {page: "home"}
  }

  render = (): JSX.Element => {
    return (<div>
      <header className="App-header">TODO LIST</header>
      <header className="App-content-header">CC's todos:</header>
      <ul>
        <li>Finish writing front end</li>
        <li>Hook up to back end</li>
        <li>Help Cin with Docker</li>
        <li>Refactor data cleaning code</li>
      </ul>
      <button className="button" type="button" onClick={this.doBackClick}>Go home</button>
      <p></p></div>);
  }


  doBackClick = (_evt: MouseEvent<HTMLButtonElement>): void => {
    this.props.onBackClick();
  }
}
