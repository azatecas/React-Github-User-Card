import React, { Component }from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Card from './components/Card';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: []
    }
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/azatecas')
      .then(res => {
        console.log(res.data)
        this.setState({
          user: res.data
        })
      })
      .catch(err => console.log("something is not right", err));      
  }

 render(){
    return (
      <div className="App">
        <Card 
            info={this.state.user}
        />
      
      </div>
    );
  } 
}

export default App;
