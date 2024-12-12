import React from 'react';
import { Component, /*ChangeEvent, */MouseEvent } from 'react';
import './css/App.css';
import './css/index.css'
import { App } from './App'

type ToDoState = {}

type ToDoProps = {}


export class ToDo extends Component<ToDoProps, ToDoState> {
  constructor(props: ToDoProps) {
    super(props);
  }

  render = (): JSX.Element => {
    return (<div>
      <header className="App-header">TODO LIST</header>
      <p>
      <ul>
        <li>Finish up our pitch!</li>
        <li>Create an executable to run our program easily and simply</li>
        <li>Create a tutorial on how to use our software</li>
      </ul>
      </p>
      <p></p></div>);
  }
}
