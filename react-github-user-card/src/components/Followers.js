import React from 'react'

const Followers = (params) => {


  return(

    <div>
      <h2>{params.userData}'s Followers</h2>
      <div className="ui link cards">
        <div className="card">
          <div className="image">
            <img src={params.follower.avatar_url} alt='GitHub Avatar'/>
          </div>
          <div className="content">
            <h2 className="header">{params.follower.login}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Followers