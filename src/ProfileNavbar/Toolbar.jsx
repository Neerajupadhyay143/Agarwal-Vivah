import React from 'react'
import "./UiNavbar.css";
function Toolbar() {
  return (
 <>
  <div className="main-sub-nav">
      <div className="container">
        <ul className="ml-auto">
          <li><a href="dashboard.html" className="active">Dashboard</a></li>
          <li><a href="edit-profile.html">Edit Profile</a></li>
          <li><a href="my-photo.html">My Photos</a></li>
          <li><a href="partner-profile.html">Partner Preferences</a></li>
          <li><a href="profile-setting.html">Settings</a></li>
        </ul>
      </div>
    </div>
 </>
  )
}

export default Toolbar;