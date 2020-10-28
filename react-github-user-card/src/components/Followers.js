import React from 'react'
import axios from 'axios'

const Followers = (params) => {


  return(
    <div className="ui link cards">
      <div className="card">
        <div className="image">
          <img src="/images/avatar2/large/matthew.png" alt=''/>
        </div>
        <div className="content">
          <div className="header">Matt Giampietro</div>
          <div className="meta">
            <a>Friends</a>
          </div>
          <div className="description">
            Matthew is an interior designer living in New York.
          </div>
        </div>
        <div className="extra content">
          <span className="right floated">
            Joined in 2013
          </span>
          <span>
          <i className="user icon"></i>
            75 Friends
          </span>
        </div>
      </div>
    </div>
  )
}

export default Followers