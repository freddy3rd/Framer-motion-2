import React from 'react'
import avatar from '../assets/avatar.png'

function Customer() {
  return (
    <div className="avatar-group -space-x-6 hidden sm:flex px-2 pt-10 z-50">
  <div className="avatar">
    <div className="w-10">
      <img src={avatar} />
    </div>
  </div>
  <div className="avatar">
    <div className="w-10">
      <img src={avatar} />
    </div>
  </div>
  <div className="avatar">
    <div className="w-10">
      <img src={avatar} />
    </div>
  </div>
  <div className="avatar placeholder">
    <div className="w-10 bg-neutral-focus text-neutral-content">
      <span>+05</span>
    </div>
  </div>
</div>
  )
}

export default Customer