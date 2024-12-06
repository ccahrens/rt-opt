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
      <ul>
        <li>Finish up our pitch!</li>
        <li>Create an executable to run our program easily and simply</li>
        <li>Create a tutorial on how to use our software</li>
      </ul>
      <button className="button" type="button" onClick={this.doBackClick}>Go home</button>
      <p></p></div>);
  }


  doBackClick = (_evt: MouseEvent<HTMLButtonElement>): void => {
    this.props.onBackClick();
  }
}
