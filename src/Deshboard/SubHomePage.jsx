import React, { useContext, useState } from "react";
import "./SubHomePage.css";
import { Context } from "../App";
function SubHomePage() {
  const [pendingInvitations, setPendingInvitations] = useState(35);
  const [acceptedInvitations, setAcceptedInvitations] = useState(27);
  const [recentVisitors, setRecentVisitors] = useState(14);
  const [contactsViewed, setContactsViewed] = useState(8);
  const [newMatches, setNewMatches] = useState(158);
  const [chatsInitiated, setChatsInitiated] = useState(3);
  const{state,setState}=useContext(Context);
  

  const profileData = [
    {
      name: "Sunidhi Gargeya",
      age: "29 yrs",
      height: "5' 4\"",
      language: "Hindi",
      location: "Ghaziabad",
      profession: "Software Developer / Programmer",
    },
    // Add more profile data as needed
  ];
    const initialNotifications = [
    {
      name: 'Sunidhi Gargeya',
      age: 29,
      height: "5' 4\"",
      language: 'Hindi',
      location: 'Ghaziabad',
      occupation: 'Software Developer / Programmer',
    },
    // Add other notifications as needed
  ];
   const [notifications, setNotifications] = useState(initialNotifications);

  return (
    <>
      <div>
        <section className="gray-back">
          <div className="container">
            <div className="row">
              <div className="col-sm-3 col-lg-3 col-xl-3 col-md-3">
                <img
                  src="founder.jpg"
                  className="img-fluid"
                  id="lalitag-45"
                />
                <h4 className="editprofilepic">
                  <a href="#">+</a>
                </h4>
                <div
                  className="profile-head d-flex justify-content-between"
                  id="lalitgupta">
                  <h5>
                    Lalit Gupta <img src="verified.svg" alt="Verified" />
                  </h5>
                  <span> #AG45789</span>
                </div>
                <div className="mobile-verifid">
                  <span>
                    Mobile no.is verified
                    <img src="mobile-v.png" alt="Mobile Verified" />
                  </span>
                  <p>
                    <a href="#">Verify your ID</a>
                  </p>
                </div>
              </div>
              <div className="col-sm-9 col-lg-9 col-xl-9 col-md-9">
                <h3 className="sub-head">Your Activity Summary</h3>
                <div className="row">
                  <div className="col-sm-4 col-xl-4 col-lg-4 col-md-6">
                    <div className="statics-bx">
                      <span>{pendingInvitations}</span>Pending <br />
                      Invitations
                    </div>
                  </div>
                  <div className="col-sm-4 col-xl-4 col-lg-4 col-md-6">
                    <div className="statics-bx">
                      <span>{acceptedInvitations}</span>Accepted <br />
                      Invitations
                    </div>
                  </div>
                  <div className="col-sm-4 col-xl-4 col-lg-4 col-md-6">
                    <div className="statics-bx">
                      <span>{recentVisitors}</span>Recent <br />
                      Visitors
                    </div>
                  </div>
                  <div className="col-sm-4 col-xl-4 col-lg-4 col-md-6">
                    <div className="statics-bx">
                      <span>{contactsViewed}</span>Contacts <br />
                      Viewed
                    </div>
                  </div>
                  <div className="col-sm-4 col-xl-4 col-lg-4 col-md-6">
                    <div className="statics-bx">
                      <span>{chatsInitiated}</span>Chats <br />
                      Initiated
                    </div>
                  </div>
                  <div className="col-sm-4 col-xl-4 col-lg-4 col-md-6 Improve">
                    <a href="#" className="btn btn-block">
                      Improve your Profile
                    </a>
                  </div>
                  <div className="col-sm-4 col-xl-4 col-lg-4 col-md-6 Downloadb">
                    <a href="#" className="btn btn-block">
                      Download Your Biodata
                    </a>
                  </div>
                  <div className="col-sm-4 col-xl-4 col-lg-4 col-md-6 Downloadb">
                    <a href="#" className="btn btn-block">
                      Download Your Kundali
                    </a>
                  </div>
                  <div className="col-sm-4 col-xl-4 col-lg-4 col-md-6">
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>
            <div className="row newfor">
              <div className="col-sm-8 col-xl-8 col-lg-8 col-md-12">
                <div className="row">
                  <div className="col-12 home-cuple">
                    <img src="shubhvivahh.jpg" alt="Couples" />
                  </div>
                  <div className="col-sm-6 col-xl-6 col-lg-6 col-md-6">
                    <h3 className="sub-head">
                      New Matches for you <span>{newMatches}</span>
                    </h3>
                    <ul className="list-group">
                      {profileData.map((profile, index) => (
                        <li
                          key={index}
                          className="list-group-item d-flex justify-content-between align-items-center">
                          <div className="profile-icon">
                            <a href="my-detailed.html" className="my-dtail">
                              <img src="founder.jpg" alt="Profile" />
                            </a>
                          </div>
                          <div className="profile-listmid">
                            <h4>
                              <a href="my-detailed.html" className="my-dtail">
                                {profile.name}
                              </a>
                            </h4>
                            <p>
                              {profile.age}, {profile.height},
                              {profile.language}, {profile.location}
                              {profile.profession}
                            </p>
                          </div>
                          <div className="connect-link">
                            <a href="#" className="right-tick">
                              <i className="fas fa-check-circle"></i>
                            </a>
                            <a href="#">Connect</a>
                          </div>
                        </li>
                      ))}
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <a href="#" className="viewall">
                          View All
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6 col-xl-6 col-lg-6 col-md-6">
                    <h3 className="sub-head" id="RecentVisitors">
                      Recent Visitors <span>{recentVisitors}</span>
                    </h3>
                    <ul className="list-group">
                      {profileData.map((profile, index) => (
                        <li
                          key={index}
                          className="list-group-item d-flex justify-content-between align-items-center">
                          <div className="profile-icon">
                            <a href="my-detailed.html" className="my-dtail">
                              <img src="founder.jpg" alt="Profile" />
                            </a>
                          </div>
                          <div className="profile-listmid">
                            <h4>
                              <a href="my-detailed.html" className="my-dtail">
                                {profile.name}
                              </a>
                            </h4>
                            <p>
                              {profile.age}, {profile.height},{" "}
                              {profile.language}, {profile.location}{" "}
                              {profile.profession}
                            </p>
                          </div>
                          <div className="connect-link">
                            <a href="#" className="right-tick">
                              <i className="fas fa-check-circle"></i>
                            </a>
                            <a href="#">Connect</a>
                          </div>
                        </li>
                      ))}
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <a href="#" className="viewall">
                          View All
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
               <div className="col-sm-4 col-xl-4 col-lg-4 col-md-6">
      <h3 className="sub-head" id="Notifications">
        Notifications <span>{notifications.length}</span>
      </h3>
      <ul className="list-group">
        {notifications.map((notification, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="profile-icon">
              <a href="my-detailed.html" className="my-dtail">
                <img src="founder.jpg" alt="Profile Icon" />
              </a>
            </div>
            <div className="profile-listmid">
              <h4>
                <a href="my-detailed.html" className="my-dtail">
                  {notification.name}
                </a>
              </h4>
              <p>
                {notification.age} yrs, {notification.height}, {notification.language}, {notification.location}{' '}
                {notification.occupation}
              </p>
            </div>
            <div className="connect-link">
              <a href="#" className="right-tick">
                <i className="fas fa-check-circle"></i>
              </a>
              <a href="#">Connect</a>
            </div>
          </li>
        ))}
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <a href="#" className="viewall">
            View All
          </a>
        </li>
      </ul>
    </div>
            </div>
          </div>
        </section>
        
      </div>
    </>
  );
}

export default SubHomePage;
