import React from 'react'

const UserCard = (params) => {
  

  return (
  <div className='allUsers'>
    <div className="ui card">
      <div className="content">
        <div className="right floated meta">Public Repos: {params.userData.public_repos}</div>
        <h2>{params.userData.name}</h2>
      </div>
      <div className="image">
        <img src={params.userData.avatar_url} alt='GitHub Avatar'/>
      </div>
      <div className="content">
        <span className="right floated" >
        <h3>GitHub Username: {params.userData.login} </h3>
        </span>
        <h3>Followers: {params.userData.followers}</h3>
        <h3>Following:{params.userData.following} </h3>
      </div>
    </div>
  </div>
  )
}

export default UserCard