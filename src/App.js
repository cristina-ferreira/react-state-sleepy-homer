import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: true
    }
  }

  handleClick = () => {
    this.setState({
      working: !this.state.working
    });
  }

  render() {
    const newLogo = this.state.working ? 'App-logo' : 'App-stop';
    const working = this.state.working ? "Homer is working" : "Homer is resting";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={newLogo} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
          <button onClick={this.handleClick}>{working}</button>
        </header>
      </div>
    );
  }
}

export default App;