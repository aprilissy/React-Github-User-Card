import React from 'react'
import axios from 'axios'
import './App.css';
import UserCard from './components/UserCard'
import Followers from './components/Followers'

class App extends React.Component {
  state = {
    userData:{},
    followersData:{},
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

  fetchFollowers = (user) => {
    axios.get(`https://api.github.com/users/${user}/followers`)
      .then(res => {
        console.log('axios response', res);
        this.setState({
          followerData:res.data
        })
      })
      .catch(err => {
        console.log('axios error',err);
      })
  }

  handleSearch = (e) => {
    e.preventDefault()
    this.fetchUser(this.state.userName)
    this.fetchFollowers(this.state.userName)
    this.setState({userName:''})
  }

  handleChange = (e) => {
    this.setState({userName:e.target.value})
  }

  render() {
    return (
      <div className='App'>
        <h1>Hello github</h1>
        <form onSubmit={this.handleSearch}>
          <input 
            type='text'
            value={this.state.userName}
            onChange={this.handleChange}
          />
        </form>
        <div className='Cards'>
          <UserCard userData={this.state.userData}/>
          <Followers followersData={this.state.followersData}/>
        </div>
      </div>
    );
  }
}

export default App;
