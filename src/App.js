import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  // All react lifecycle methods

  // 1. Constructor
  // Function: Setting state, creating refs and method binding
  constructor(props) {
    super(props);
    // some random state
    this.state = {
      counter: 0
    };
    console.log("Constructor loaded");

    // Bind your custom methods here
    this.addCounter = this.addCounter.bind(this);
  }

  //2. getDerivedStateFromProps
  //Function: Returning state based on initial props
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return { state };
  }

  //3. render method gets called on the third step and we now have a component
  //to work with

  //4. componentDidMount
  //Function: Make AJAX call to load data for your request
  componentDidMount() {
    console.log("Component was successfully mounted");
  }

  //5. getDerivedStateFromProps
  //Function: Updating state based on props if props keep changing

  //6. shouldComponentUpdate
  //Function: Controlling when your component will rerender
  shouldComponentUpdate(nextProps, nextState) {
    console.log(`These are the nextProps ${nextProps} 
    This is the nextState ${nextState}`);
    return true;
  }

  //7. Render gets called again

  //8. getSnapshotBeforeUpdate
  //Function: Passing DOM attributes to componentDidUpdate
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null;
  }

  //9. componentDidUpdate
  //Function: Performs any form of action after DOM has been updated
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`These are the prevProps ${prevProps} 
    This is the p revState ${prevState}`);
    console.log("Component Updated");
  }

  //10. componentWillUnmount
  //Function: clear timers, intervals, close DB connections
  componentWillUnmount() {
    console.log("Component is unmounting");
  }

  // Response to error events on child components
  // getDerivedStateFromError
  //Function: Updates state to display errors from child components
  static getDerivedStateFromError(error) {
    console.error(error);
  }

  // componentDidCatch
  // Functions: Logging errors
  componentDidCatch(error, info) {
    console.log("Whoops, error in one of the lifecycle methods!");
  }

  // Method that adds the count
  addCounter() {
    let { counter } = this.state;
    counter += 1;
    this.setState({ counter });
  }

  // renders our JSX and HTML to the DOM
  render() {
    const { counter } = this.state;
    return (
      <div>
        Some counter component
        <br />
        <button onClick={this.addCounter}>Add Counter</button>
        {counter}
      </div>
    );
  }
}

export default App;

// Deprecated methods as from React 16:

// componentWillRecieveProps
// componentWillUpdate
// componentWillMount
