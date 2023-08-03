import React, { useContext, useState } from "react";
import "./EditProfile.css";
import { Context } from "../App";
import PartnerPref from "./PartnerPref";


function EditProfile() {
  const{state,setState}=useContext(Context)
  const[slider,setSlider]=useState(false);
  

  // const handleFileChange = (e) => {
  //   setSelectedFile(e.target.files[0]);
  // };

  const toggleSlider=()=>{
    setSlider(true);  }

  return (
    <div>
      <section className="gray-back">
        <div className="container">
          <div className="profile-top box-sm" id="edit-box-sm">
            <div className="row">
              <div className="col-sm-3 col-xl-3 col-lg-3 col-md-12 profilepic-up">
                <img src="founder.jpg" alt="Profile" />
                <p className="mt20">
                  <strong>{state.aboutMyself.completedProfile}</strong> Profile completed
                </p>
                <input
                  type="file"
                  id="real-file"
                  hidden="hidden"
                  onChange={state.aboutMyself.handleFileChange}
                />
                <button
                  type="button"
                  id="custom-button"
                  onClick={() => document.getElementById("real-file").click()}>
                  Upload Photo
                </button>
                <span id="custom-text">
                  {state.aboutMyself.selectedFile ? state.aboutMyself.selectedFile.name : "No file chosen, yet."}
                </span>
                <br />
              </div>
              <div className="col-sm-9 col-lg-9 col-xl-9 col-md-12">
                <div
                  className="profile-heada d-flex justify-content-between"
                  id="lalitgprop">
                  <h5>
                    {state.aboutMyself.name}<img src="verified.svg" alt="Verified" />
                  </h5>
                  <span>{state.aboutMyself.profileID}</span>
                </div>
                <div className="row ageheight">
                  <div className="col-sm-6 col-lg-6 col-xl-6 Single">
                    <ul className="profile-shortlistaa">
                      <li>
                        <strong>Age / Height</strong>: {state.aboutMyself.himselfage}
                      </li>
                      <li>
                        <strong>Marital Status</strong>:{state.aboutMyself.himselfmaritalStatus}
                      </li>
                      <li>
                        <strong>Posted by</strong>: {state.aboutMyself.himselfPosted}
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6 col-lg-6 col-xl-6">
                    <ul className="profile-shortlistaa">
                      <li>
                        <strong>Religion / Community</strong>:{state.aboutMyself.himselfreligion}
                      </li>
                      <li>
                        <strong>Location</strong>: {state.aboutMyself.himselflocation}
                      </li>
                      <li>
                        <strong>Mother Tongue</strong>: {state.aboutMyself.himselfmotherTongue}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="manage-pro">
                  <div className="row">
                    <div className="col-sm-12 col-lg-12 col-xl-12">
                      <h5>Manage your Profile</h5>
                    </div>
                    <div className="col-sm-4 col-xl-4 col-lg-4 edit-filter">
                      <ul>
                        <li>
                          <a href="#">Edit Personal Profile</a>
                        </li>
                        <li>
                          <a href="#">Edit Partner Profile</a>
                        </li>
                        <li>
                          <a href="#">Edit Contact Details</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-4 col-xl-4 col-lg-4 edit-filter">
                      <ul>
                        <li>
                          <a href="#">View Profile Stats</a>
                        </li>
                        <li>
                          <a href="#">Add Photos</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-4 col-xl-4 col-lg-4 edit-filter">
                      <ul>
                        <li>
                          <a href="#">Set Contact Filters</a>
                        </li>
                        <li>
                          <a href="#">Hide / Delete Profile</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 your-preview">
                  <a href="#" className="btn btn-link">
                    Preview your profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-12 col-xl-12">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    className="nav-link "
                    id="nav-aboutmyself-tab"
                    data-toggle="tab"
                    data-target="#nav-aboutmyself"
                    type="button"
                    role="tab"
                    aria-controls="nav-aboutmyself"
                    aria-selected="true"
                    onClick={()=>setSlider(false)}>
                    About MySelf
                  </button>
                  <button
                    className="nav-link "
                    id="nav-partner-tab"
                    data-toggle="tab"
                    data-target="#nav-partner"
                    type="button"
                    role="tab"
                    aria-controls="nav-partner"
                    aria-selected="false"
                    onClick={toggleSlider}>
                    Partner Preferences
                  </button>

                 
                </div>

              </nav>
               {slider ===false?(<>

                <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-aboutmyself"
                  role="tabpanel"
                  aria-labelledby="nav-aboutmyself-tab">
                  <h3 className="education" id="educationds">
                    Personality, Family Details, Career, Partner Expectations
                    etc.
                    <a href="#" className="btn btn-sm ">
                      <img src="editprofile.png" alt="Edit" /> Edit
                    </a>
                  </h3>
                  <p>
                    It is a pleasure sharing a few words about my son. He has
                    completed his M.E / M.Tech. His optimistic personality is
                    adored by one and all. He is looking for a girl with whom he
                    can lead a happy and content life.
                  </p>
                  <h3 className="education">
                    Basics & Lifestyle
                    <a href="#" className="btn btn-sm ">
                      <img src="editprofile.png" /> Edit
                    </a>
                  </h3>
                  <div className="row ageheight">
                    <div className="col-sm-6 col-lg-6 col-xl-6 Single">
                      <ul className="profile-shortlistss">
                        <li>
                            <strong>Age</strong>: {state.aboutMyself.age}
                        </li>
                        <li>
                            <strong>Date of Birth</strong>: {state.aboutMyself.dateOfBirth}
                        </li>
                        <li>
                            <strong>Marital Status</strong>: {state.aboutMyself.maritalStatus}
                        </li>
                        <li>
                            <strong>Height</strong>: {state.aboutMyself.height}
                        </li>
                        <li>
                            <strong>Grew up in</strong>: {state.aboutMyself.grewUpIn}
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6 col-lg-6 col-xl-6">
                      <ul className="profile-shortlistss">
                        <li>
                            <strong>Diet</strong>: {state.aboutMyself.diet}
                        </li>
                        <li>
                            <strong>Personal Values</strong>: {state.aboutMyself.personalValues}
                        </li>
                        <li>
                            <strong>Sun sign</strong>: {state.aboutMyself.sunSign}
                        </li>
                        <li>
                            <strong>Blood Group</strong>: {state.aboutMyself.bloodGroup}
                        </li>
                        <li>
                            <strong>Health Information</strong>: {state.aboutMyself.healthInfo}
                        </li>
                        <li>
                            <strong>Disability</strong>: {state.aboutMyself.disability}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <h3 className="col-sm-6 education">
                      Religious Background
                      <a href="#" className="btn btn-sm ">
                        <img src="editprofile.png" /> Edit
                      </a>
                    </h3>
                    <h3 className="col-sm-6 education">
                      Astro Details
                      <a href="#" className="btn btn-sm ">
                        <img src="editprofile.png" /> Edit
                      </a>
                    </h3>
                  </div>
                  <div className="row ageheight">
                    <div className="col-sm-6 col-lg-6 col-xl-6 Single">
                      <ul className="profile-shortlistss">
                        <li>
                            <strong>Religion</strong>: {state.aboutMyself.religion}
                        </li>
                        <li>
                            <strong>Community</strong>: {state.aboutMyself.community}
                        </li>
                        <li>
                            <strong>Sub community</strong>: {state.aboutMyself.subCommunity}
                        </li>
                        <li>
                            <strong>Gothra/Gothram</strong>: {state.aboutMyself.gothra}
                        </li>
                        <li>
                            <strong>Mother Tongue</strong>: {state.aboutMyself.motherTongue}
                        </li>
                        <li>
                            <strong>Can speak</strong>: {state.aboutMyself.canSpeak}
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6 col-lg-6 col-xl-6">
                      <ul className="profile-shortlistss">
                        <li>
                            <strong>Manglik/Chevvai dosham</strong>: {state.aboutMyself.manglik}
                        </li>
                        <li>
                            <strong>Date of Birth</strong>: {state.aboutMyself.dateOfBirth}
                        </li>
                        <li>
                            <strong>Time of Birth</strong>: {state.aboutMyself.timeOfBirth}
                        </li>
                        <li>
                            <strong>City of Birth</strong>: {state.aboutMyself.cityOfBirth}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h3 className="education">
                    Family details
                    <a href="#" className="btn btn-sm ">
                      <img src="editprofile.png" /> Edit
                    </a>
                  </h3>
                  <div className="row ageheight">
                    <div className="col-sm-6 col-lg-6 col-xl-6 Single">
                      <ul className="profile-shortlistss">
                        <li>
                            <strong>Father's Status</strong>: {state.aboutMyself.fatherStatus}
                        </li>
                        <li>
                            <strong>Mother's Status</strong>: {state.aboutMyself.motherStatus}
                        </li>
                        <li>
                            <strong>Family Location</strong>: {state.aboutMyself.familyLocation}
                        </li>
                        <li>
                            <strong>Native Place</strong>: {state.aboutMyself.nativePlace}
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6 col-lg-6 col-xl-6">
                      <ul className="profile-shortlistss">
                        <li>
                            <strong>No. of Brothers</strong>: {state.aboutMyself.numberOfBrothers}
                        </li>
                        <li>
                            <strong>No. of Sisters</strong>: {state.aboutMyself.numberOfSisters}
                        </li>
                        <li>
                            <strong>Family Type</strong>: {state.aboutMyself.familyType}
                        </li>
                        <li>
                            <strong>Family Values</strong>: {state.aboutMyself.familyValues}
                        </li>
                        <li>
                            <strong>Family Affluence</strong>: {state.aboutMyself.familyAffluence}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h3 className="education">
                    Education & Career
                    <a href="#" className="btn btn-sm ">
                      <img src="editprofile.png" /> Edit
                    </a>
                  </h3>
                  <div className="row ageheight">
                    <div className="col-sm-6 col-lg-6 col-xl-6 Single">
                      <ul className="profile-shortlistss">
                        <li>
                          <strong>Highest Qualification</strong>:
                            {state.aboutMyself.highestQualification}
                        </li>
                        <li>
                          <strong>College(s) Attended</strong>:
                            {state.aboutMyself.collegesAttended}
                        </li>
                        <li>
                            <strong>Annual Income</strong>: {state.aboutMyself.annualIncome}
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6 col-lg-6 col-xl-6">
                      <ul className="profile-shortlistss">
                        <li>
                            <strong>Working With</strong>: {state.aboutMyself.workingWith}
                        </li>
                        <li>
                            <strong>Working As</strong>: {state.aboutMyself.workingAs}
                        </li>
                        <li>
                            <strong>Employer Name</strong>: {state.aboutMyself.employerName}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h3 className="education">
                    Location of Groom
                    <a href="#" className="btn btn-sm ">
                      <img src="editprofile.png" /> Edit
                    </a>
                  </h3>
                  <div className="row ageheight">
                    <div className="col-sm-6 col-lg-6 col-xl-6 Single">
                      <ul className="profile-shortlistss">
                        <li>
                            <strong>Current Residence</strong>: {state.aboutMyself.currentResidence}
                        </li>
                        <li>
                          <strong>State Of Residence</strong>:
                            {state.aboutMyself.stateOfResidence}
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6 col-lg-6 col-xl-6">
                      <ul className="profile-shortlistss">
                        <li>
                            <strong>Residency Status</strong>: {state.aboutMyself.residencyStatus}
                        </li>
                        <li>
                            <strong>Zip / Pin code</strong>: {state.aboutMyself.zipCode}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* <div
                  className="tab-pane fade"
                  id="nav-partner"
                  role="tabpanel"
                  aria-labelledby="nav-partner-tab">
                  <h3 className="education">
                    Basic Info
                    <a href="#" className="btn btn-sm ">
                      <img src="editprofile.png" alt="Edit" /> Edit
                    </a>
                  </h3>
                  Rest of the content in the Partner Preferences section
                </div> */}
              </div>
               </>):(<>
               <PartnerPref/>

               </>)}
             
              <div className="My-Contact-detail">
                <h3>My Contact detail</h3>
              </div>
              <h3 className="education" id="editedd">
                <a href="#" className="btn btn-sm ">
                  <img src="editprofile.png" alt="Edit" /> Edit
                </a>
              </h3>
               <div className="row ageheight">
      <div className="col-sm-6 col-lg-6 col-xl-6 Singlesa">
        <ul className="profile-shortlistss">
          <li>
                      <strong>Mobile</strong>: {state.aboutMyself.mobile}
          </li>
          <li>
                      <strong>Contact Person</strong>: {state.aboutMyself.contactPerson}
          </li>
          <li>
                      <strong>Relationship with the member</strong>: {state.aboutMyself.relationship}
          </li>
          <li>
                      <strong>Convenient Time to Call</strong>: {state.aboutMyself.convenientTime}
          </li>
          <li>
                      <strong>Display Option</strong>: {state.aboutMyself.displayOption}
          </li>
        </ul>
      </div>
      <div className="col-sm-6 col-lg-6 col-xl-6"></div>
    </div>
              <div className="prentpagessa d-flex justify-content-between">
                <a href="#">Preview your profile</a>
                <a href="#" onClick={() => window.print()}>
                  <i className="fa-solid fa-print"></i> Print
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EditProfile;
