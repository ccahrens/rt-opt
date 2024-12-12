import React, { useState } from 'react';
import { Component, ChangeEvent, MouseEvent } from 'react';
import './App.css';
import './index.css'
import { App } from './App'
import usePyodide from "./usePyodide";

// const { pyodide, loadModelParamsBuilder } = usePyodide();
//     const [result, setResult] = useState<string | null>(null);

type GettingStartedState = {
  page: "home" | "about" | "todo" | "optimize" | "gettingstarted"
  pyodideLoaded: boolean;
  uploadResult: string | null;
}

type GettingStartedProps = {
  // onBackClick: () => void;
  // onAboutClick: (_evt: MouseEvent<HTMLButtonElement>) => void;
}


export class GettingStarted extends Component<GettingStartedProps, GettingStartedState> {
  pyodide: any;

  constructor(props: GettingStartedProps) {
    super(props);
    this.state = {
      page: "gettingstarted",
      pyodideLoaded: false,
      uploadResult: null,
    };
    this.pyodide = null;
  }

  async componentDidMount() {
    // figure out how to use this correctly
    // this.pyodide = await (window as any).loadPyodide();
    // this.setState({ pyodideLoaded: true });
    // const { pyodide, loadModelParamsBuilder } = usePyodide();
    // const [result, setResult] = useState<string | null>(null);
    // usePyodide();
    // await loadModelParamsBuilder(this.pyodide);
    try {
      const loadPyodide = (window as any).loadPyodide;
      if (typeof loadPyodide !== "function") {
        throw new Error("Pyodide has not loaded.");
      }
      // this.pyodide = await (window as any).loadPyodide();
      console.log(loadPyodide);
      this.pyodide = await loadPyodide();
      console.log("setting pyodideLoaded to true");
      this.setState({ pyodideLoaded: true });
    } catch {
      console.error("Error loading Pyodide:", Error);
      // alert("Failed to load Pyodide. Please refesh page or try again later.")
    }
  }

  handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: figure out if other error checking needs to occur  
    console.log("very top of handleFileUpload");
    if (!this.pyodide) {
        alert("Pyodide, which is needed to process your file, is still loading. Please try again in a few seconds.");
        return;
    }
    console.log("in handleFileUpload");
    // TODO: loading message of some kind: pyodide may take a while to load,
    // so we should make the users aware of this
    const file = event.target.files?.[0];
    if (!file) return;
    console.log("made it past check file");

    console.log("here!");
    const reader = new FileReader();
    reader.onload = async () => {
        console.log("in async reader.onload function");
        const data = reader.result as string;

        // Run Python script using Pyodide
        // This is not finished:
        //    - current pythongScript is just filler things
        const pythonScript = `
          import pandas as pd
          from io import { StringifyOptions
          data = StringIO(${JSON.stringify(data)})
          df = pd.read_csv(data)
          output = df.describe().to_json()
          output `;
          try {
            const output = await this.pyodide.runPythonAsync(pythonScript);
            this.setState({ uploadResult: output });
          } catch (error) {
            console.error("Error processing file:", error);
            alert("An error occurred while processing the file.");
          }
        };

        reader.readAsText(file);
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
      <p>After that, you'll then have to upload your spreadsheet to the website. Optimization can take a bit, so hang tight and 
        don't close your computer or the tab! 
        If you do, you might have to start over, since we can't save your data due to limitations on free resources.
      </p>
      <p>
        Once you've uploaded your routes, we'll try to provide a result. This is in the very early stages of beta testing, so not everything will work 
        perfectly on the first go! If there's an issue, rest assured that we're trying to get a patch working soon :)
      </p>
      <p className="increased-indentation">
            <h3>Step 1: Download the template</h3>
            <p>
              <a className="button-download" href="Downloads/TemplateSheet.xlsx" download="TemplateSheet.xlsx">Download Template</a>
            </p>
            <h3>Step 2: Upload your spreadsheet</h3>
            <p>
            <input type="file" onChange={this.handleFileUpload} />
            </p>
            {this.state.uploadResult && (
              <div>
                <h4>Processing Result:</h4>
                <pre>{this.state.uploadResult}</pre>
              </div>
            )}
            <h3>Step 3: Optimize!</h3>
            <p>Unfortunately, this functionality is not yet supported. Check back soon to see if we've released an update!</p>
      </p>
      <h2>Limitations</h2>
      <p className="increased-indentation">
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
      </p>
      <p></p>
      <p></p>
      </div>);
  }


  // doBackClick = (_evt: MouseEvent<HTMLButtonElement>): void => {
  //   this.props.onBackClick();
  // }

  // doAboutClick = (_evt: MouseEvent<HTMLButtonElement>): void => {
  //   this.props.onAboutClick(_evt);
  // }
}

  const ModelParamsBuilderFunctionExecutor = () => {
    const { pyodide, loadModelParamsBuilder } = usePyodide();
    const [result, setResult] = useState<string | null>(null);

    const handleRunFunction = async () => {
        if (!pyodide) {
            alert("Pyodide is still loading. Please try again.");
            return;
        }

        try {
            // Load the specific function from the notebook
            await loadModelParamsBuilder(pyodide);

            // Prepare input data
            // this just garbage data
            // when ready, update this to have real info
            const inputData = [
                { column1: 10, column2: 20 },
                { column1: 30, column2: 40 }
            ];

            // Call the function with parameters
            const output = await pyodide.runPythonAsync(`
                from js import inputData
                import json
                result = process_data(json.loads(inputData))
                result
            `, { inputData: JSON.stringify(inputData) });

            setResult(output);
        } catch (error) {
            console.error("Error running function:", error);
            alert("An error occurred while running the function.");
        }
    };

    return (
        <div>
            <h1>Try out optimization:</h1>
            <button onClick={handleRunFunction}>Go!</button>
            {result && <pre>{result}</pre>}
        </div>
    );
};
