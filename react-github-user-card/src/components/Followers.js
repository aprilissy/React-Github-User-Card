import React from 'react'

const Followers = (params) => {


  return(
    <div className="ui link cards">
      <div className="card">
        <div className="image">
          <img src={params.follower.avatar_url} alt='GitHub Avatar'/>
        </div>
        <div className="content">
          <div className="header">{params.follower.login}</div>
        </div>
      </div>
    </div>
  )
}

export default Followers