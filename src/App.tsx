import React from 'react';
import { Component, /*ChangeEvent, */MouseEvent } from 'react';
import './App.css';
import test from './img.png'
import './index.css'
import { ToDo } from './ToDo'
import { AboutUs } from './AboutUs'
import { GettingStarted } from './GettingStarted'
//import 'react-native'
//import { View, Text } from 'react-native'
//import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type AppState = {
  page: "home" | "about" | "todo" | "optimize" | "gettingstarted"
}

export class App extends Component<{}, AppState> {
  params : URLSearchParams = new URLSearchParams(window.location.search);
  //Stack = createNativeStackNavigator();
  possiblePage = this.params.get("page");
  constructor(props: {}) {
    super(props);
    if (this.possiblePage === undefined || this.possiblePage === null) {
      this.state = {page: "home"};
    } else if (this.possiblePage === "about") {
      this.state = {page: "about"};
    } else if (this.possiblePage === "todo") {
      this.state = {page: "todo"};
    } else if (this.possiblePage === "optimize") {
      this.state = {page: "optimize"};
    } else {
      this.state = {page: "home"}
    }
  }

  render = (): JSX.Element => {
    if (this.state.page == "home") {
      this.params.set("page", "home");
      return (
            <div className="App">
              <header className="App-header">
                  Welcome to the latest version of the Route Optimizer!
              </header>
              <img src={test} className="App-logo" alt="logo" />
              <p>Hey there friend!</p>
              <p>We're a couple of college students trying to make route optimization easier.
                We're working with the University District Food Bank in Seattle to deliver food to the people who need it most.
                At some point, we'll try to publish our findings and make our code easily accessible by other foodbanks
                around the country and beyond. For now, try clicking some of the buttons to learn more!
              </p>
              <h2>What would you like to do?</h2>
              <button className="button" type="button"
                  onClick={this.doAboutClick}>Learn more about us!</button>
              {/* <p></p> */}
              <button className="button" type="button"
                  onClick={this.doToDoClick}>See our current todo list</button>
              <button className="button" type="button"
                  onClick={this.doGettingStartedClick}>Learn how to use our software</button>
              <p></p>
              <p></p>
            </div>
          );
    } else if (this.state.page == "about") {
      this.params.set("page", "about")
      return <AboutUs onBackClick={this.doBackClick} />
    } else if (this.state.page == "todo") {
      this.params.set("page", "todo")
      return <ToDo onBackClick={this.doBackClick} />
    } else if (this.state.page == "gettingstarted") {
      this.params.set("page", "gettingstarted")
      return <GettingStarted onBackClick={this.doBackClick} />
    }

    return <div><p>How'd you end up here??</p></div>
  }

  home = (): JSX.Element => {
    return(<div>
      {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> */}
      <p>Home Screen</p>
    {/* </View >*/}
    </div>);
  }

  about = (): JSX.Element => {
    return(<div>
      {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> */}
      <p>About Screen</p>
    {/* </View> */}
    </div>);
  }

  doAboutClick = (_evt: MouseEvent<HTMLButtonElement>): void => {
    this.params.set("page", "about")
    this.setState({page: "about"})
    return;
  }

  doToDoClick = (_evt: MouseEvent<HTMLButtonElement>): void => {
    this.params.set("page", "todo")
    this.setState({page: "todo"})
  }

  doBackClick = (): void => {
    this.setState({page: "home"});
  }

  doGettingStartedClick = (): void => {
    this.setState({page: "gettingstarted"});
  }

}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Welcome to the latest version of the Route Optimizer!
//         </p>
//         <img src={test} className="App-logo" alt="logo" />
//       </header>
//     </div>
//   );
// }

// export default App;
