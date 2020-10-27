import React from 'react'
import axios from 'axios'
import './App.css';
import './components/UserCard'

class App extends React.Component {
  state = {
    userData:{},
    userName:''
  }

  fetchUser = (user) => {
    axios.get(`https://api.github.com/users/${user}`)
      .then(res => {
        console.log('axios response', res);
        this.setState({
          userData:res.data
        })
      })
      .catch(err => {
        console.log('axios error',err);
        
      })
  }

  handleSearch = (e) => {
    e.preventDefault()
    this.fetchUser(this.state.userName)
    this.setState({userName:''})
  }

  handleChange = (e) => {
    this.setState({userName:e.target.value})
  }

  render() {
    return (
      <div className='AppContainer'>
        <h1>Hello github</h1>
        <form onSubmit={this.handleSearch}>
          <input 
            type='text'
            value={this.state.userName}
            onChange={this.handleChange}
          />
        </form>
        <div className='UserCard'>
          <UserCard userData={userData}/>
        </div>
      </div>
    );
  }
}

export default App;
