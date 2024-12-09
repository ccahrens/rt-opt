import React, { useState } from 'react';
import { Component, /*ChangeEvent, */MouseEvent } from 'react';
import './App.css';
import './index.css'
import { App } from './App'
import usePyodide from "./usePyodide";

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
      <h2>Overview</h2>
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
      <p></p>
      <h2>Limitations</h2>
      <h3>Data Storage</h3>
      <p>
        As part of our goal is to keep this software free for food banks around Washington State to use, there are a 
        few limitations in what we can do. One such limitation is that we currently are not able to host a "back end" 
        for our website. What this means is that we can't store any of your data. Yay, we're not data farming! But 
        also, this means that you can't save any changes you make on this website between sessions. As a result, make 
        sure you download any information you want to keep! This is incredibly important.
      </p>
      <h3>Route Availability</h3>
      <p>At the current moment, we are not able to support the optimization of routes outside of Washington state. 
        If interest in our service increases, we may begin supporting route optimization outside of this region.
      </p>
      <h3>Optimality</h3>
      <p>For any of the more mathematically-inclined users, you may be wondering, "Just how optimal will I get my routes?" 
        This depends on a few factors. First, you are able to add certain constraints to your drivers' routes. For example, 
        they probably all have some limit to the amount of time they can spend delivering. They might also have places they 
        really want to deliver to for a variety of reasons. They probably can't deliver an infinite amount of food in one go. 
        Additionally, if you're trying to optimize a route containing lots of drivers and lots of households, this very rapidly 
        becomes a huge computational problem. With all of these factors in mind, we won't produce something worse than what 
        you currently have, but the route we produce might not be the perfectly optimal one.
      </p>
      <h3>What do I do now?</h3>
      <p>We're currently still in the development process. We hope to have something that works generally within the next few weeks!</p>
      <h3>What if I have questions?</h3>
      <p>Contact us! We'll add our contact information shortly.</p>
      </div>);
  }


  doBackClick = (_evt: MouseEvent<HTMLButtonElement>): void => {
    this.props.onBackClick();
  }
}

// TODO: make this something that actually takes in an upload
// - attempt to pass to a python file
const FileUploader = () => {
  const pyodide = usePyodide();
  const [result, setResult] = useState<string | null>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: figure out if other error checking needs to occur  
    if (!pyodide) {
        alert("Pyodide is still loading. Please try again.");
        return;
    }
    // TODO: loading message of some kind: pyodide may take a while to load,
    // so we should make the users aware of this
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    // reader.onload = async () => {
    //     const data = reader.result as string;

    //     // Run Python script using Pyodide
    //     const pythonScript = `
    // }
  }
}
