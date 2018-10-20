import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    name: "Kim",
    age: 27,
    cool: true
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          increaseAge: () =>
            this.setState({
              age: this.state.age + 1
            })
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

const Family = props => (
  <div className="family">
    <Person />
  </div>
);

class Person extends Component {
  render() {
    return (
      <div className="person">
        <MyContext.Consumer>
          {context => (
            <Fragment>
              <p>Name: {context.state.name}</p>
              <p>Age: {context.state.age}</p>
              <button onClick={context.increaseAge}>Increase Age</button>
            </Fragment>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div className="App">
          <p>I'm new to react.</p>
          <Family />
        </div>
      </MyProvider>
    );
  }
}

export default App;
