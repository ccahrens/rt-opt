import React from 'react';
import { Component, /*ChangeEvent, */MouseEvent } from 'react';
import './App.css';
import './index.css'
import { App } from './App'

type GettingStartedState = {
  page: "home" | "about" | "todo" | "optimize" | "gettingstarted"
}

type GettingStartedProps = {
  onBackClick: () => void;
}


export class GettingStarted extends Component<GettingStartedProps, GettingStartedState> {
  constructor(props: GettingStartedProps) {
    super(props);
    this.state = {page: "gettingstarted"}
  }

  render = (): JSX.Element => {
    return (<div>
      <header className="App-header">Getting Started With Our Software</header>
      <p>Using our software is quick, simple, and (mostly) easy. However, we'll need you to do a few things first.</p>
      <p>To start, you'll need your routes properly formatted so that our software can understand what you want.</p>
      <p>You'll have the ability to specify routes that need to stay the same, as well as indicate required stops and more.
        You can even specify bike routes! To get started on all of this, please download the template spreadsheet and adjust values according to your needs.
        The template spreadsheet, which you can download below, includes examples of what to add to the form.
      </p>
      <p>
        <a className="button" href="Downloads/TemplateSheet.xlsx" download="TemplateSheet.xlsx">Download Template</a>
      </p>
      <p>
      <button className="button" type="button" onClick={this.doBackClick}>Go home</button></p>
      <p></p></div>);
  }


  doBackClick = (_evt: MouseEvent<HTMLButtonElement>): void => {
    this.props.onBackClick();
  }
}
