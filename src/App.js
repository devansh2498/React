import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent'

class App extends Component {
  constructor(props) {
    super(props)
    }
  render(){
    return (
      <div className="App">
        <Main/>
     </div>
    );
  }
  
}

export default App;
