import React from 'react'


function UiNavBar() {
  return (
  <>
  <div className="sub-main-nav">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 myprofile">
            <ul>
              <li>
                <a href="edit-profile.html">My Profile</a>
              </li>
              <li>
                <a href="my-matches.html">Matches<sup>20</sup></a>
              </li>
              <li>
                <a href="search.html">Search</a>
              </li>
              <li>
                <a href="inbox.html">Inbox</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-2 profile_rt">
            <button
              className="btn dropdown-toggle"
              type="button"
              id="profile-drop"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="profile-icon">
                <img src="founder.jpg" alt="founder" />
              </span>
            </button>
            <div className="dropdown-menu" aria-labelledby="profile-drop">
              <div id="div_help">
                <a href="edit-profile.html">My Profile</a>
                <a href="profile-setting.html">Account Settings</a>
                <a href="#">Change Password</a>
                <a href="privacy-option.html">Privacy Options</a>
                <a href="index.html">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default UiNavBar;