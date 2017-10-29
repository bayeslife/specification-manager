import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Data extends Component{
  constructor(props) {
    super(props);
    this.state = {
      specs: []
    }
  }
  componentDidMount() {
    fetch("/spec.json")
    .then(results =>{
        return results.json();
    })
    .then(data => {

      this.setState({specs: data})
      console.log(this.state);
    })
  }
  render() {
    return (
      <div>
      </div>
    );
  }
}

class SpecSearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Data>
        </Data>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

class Selector extends Component {
  render() {
    return (
      <div className="Selector">
        <p className="Selector-intro">
          Select Specification
        </p>
        <SpecSearchForm ></SpecSearchForm>
      </div>
    )
  }
}

class Specification extends Component {
  render() {
    return (
      <div className="Specification">
        <p className="Specification-intro">
          Specification
        </p>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Browse and Edit Specifications</h1>
        </header>
        <Selector>

        </Selector>
        <Specification>

        </Specification>
      </div>
    );
  }
}

export default App;
