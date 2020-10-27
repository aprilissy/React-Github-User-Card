import React from 'react'
import axios from 'axios'
import './App.css';

class App extends React.Component {
  state = {
    user:{},
  }

  fetchUser = (user) => {
    axios.get(`https://api.github.com/users/aprilissy`)
      .then(res => {
        console.log('axios response', res);
        this.setState({
          user:res.data
        })
      })
      .catch(err => {
        console.log('axios error',err);
        
      })
  }

  render() {
    return (
      <div clasName='AppContainer'>
        <h1>Hello github</h1>
      </div>
    );
  }
}

export default App;
