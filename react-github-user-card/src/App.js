import React from 'react'
import axios from 'axios'
import './App.css';
import UserCard from './components/UserCard'
import Followers from './components/Followers'

class App extends React.Component {
  state = {
    userData:{},
    followersData:[],
    userName:''
  }
   

  fetchUser = (user) => {
    axios.get(`https://api.github.com/users/${user}`)
      .then(res => {
        console.log('User axios response', res);
        this.setState({
          userData:res.data
        })
      })
      .catch(err => {
        console.log('User axios error',err);
      })
  }

  fetchFollowers = (user) => {
    axios.get(`https://api.github.com/users/${user}/followers`)
      .then(res => {
        console.log('Followers axios response', res);
        this.setState({
          followersData:res.data
        })
      })
      .catch(err => {
        console.log('Followers axios error',err);
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
    
    console.log('followersData', this.state.followersData)
    console.log('userData', this.state.userData)
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

          {this.state.followersData.map(follower => (
            <Followers follower={follower} key={follower.id}/>
          ))}

        </div>
      </div>
    );
  }
}

export default App;
