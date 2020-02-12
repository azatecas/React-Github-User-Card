import React, { Component }from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Card from './components/Card';
import CardList from './components/CardList'

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: [],
      followers: []   
    }
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/azatecas')
      .then(res => {
        // console.log(res.data)
        this.setState({
          user: res.data
        })
      })
      .catch(err => console.log("something is not right", err));
      
      axios
      .get('https://api.github.com/users/azatecas/followers')
      .then(res => {
        console.log('followers', res.data)
        this.setState({
          followers: res.data,
        });
        console.log('followers', this.state.followers)        

      })
      .catch(err => console.log('followers errors', err));
  }

 render(){
   
    return (
      
      <div className="App">
      
      <div>
        <CardList 
            info={this.state.user}
            followers={this.state.followers}
        />
        </div>
        
      {/* {console.log('render',this.state.user)} */}
      </div>
    );
    
  } 
}

export default App;
