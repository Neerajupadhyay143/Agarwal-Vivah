import React, { useState } from "react";
import "./EditProfile.css";


function EditProfile() {
  const[slider,setSlider]=useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [age, setAge] = useState(21);
  const [dateOfBirth, setDateOfBirth] = useState("01-Jan-2002");
  const [maritalStatus, setMaritalStatus] = useState("Never Married");
  const [height, setHeight] = useState("4' 5\" (134cm)");
  const [grewUpIn, setGrewUpIn] = useState("India");
  const [diet, setDiet] = useState("Non-Veg");
  const [personalValues, setPersonalValues] = useState("Will tell you later");
  const [sunSign, setSunSign] = useState("Capricorn");
  const [bloodGroup, setBloodGroup] = useState("...");
  const [healthInfo, setHealthInfo] = useState("Not Specified");
  const [disability, setDisability] = useState("None");
  const [religion, setReligion] = useState("Hindu");
  const [community, setCommunity] = useState("Other");
  const [subCommunity, setSubCommunity] = useState("Not Specified");
  const [gothra, setGothra] = useState("Not Specified");
  const [motherTongue, setMotherTongue] = useState("Hindi");
  const [canSpeak, setCanSpeak] = useState("...");
  const [manglik, setManglik] = useState("Don't Know");
  const [timeOfBirth, setTimeOfBirth] = useState("...");
  const [cityOfBirth, setCityOfBirth] = useState("...");
  const [fatherStatus, setFatherStatus] = useState("...");
  const [motherStatus, setMotherStatus] = useState("...");
  const [familyLocation, setFamilyLocation] = useState(
    "Jaipur, Rajasthan, India"
  );
  const [nativePlace, setNativePlace] = useState("Not Specified");
  const [numberOfBrothers, setNumberOfBrothers] = useState("...");
  const [numberOfSisters, setNumberOfSisters] = useState("...");
  const [familyType, setFamilyType] = useState("Not Specified");
  const [familyValues, setFamilyValues] = useState("Not Specified");
  const [familyAffluence, setFamilyAffluence] = useState("...");
  const [highestQualification, setHighestQualification] = useState(
    "M.E / M.Tech - Engineering"
  );
  const [collegesAttended, setCollegesAttended] = useState("...");
  const [annualIncome, setAnnualIncome] = useState("Upto INR 1 Lakh");
  const [workingWith, setWorkingWith] = useState("Private Company");
  const [workingAs, setWorkingAs] = useState("Not Specified");
  const [employerName, setEmployerName] = useState("...");
  const [currentResidence, setCurrentResidence] = useState("Other, India");
  const [stateOfResidence, setStateOfResidence] = useState("Rajasthan");
  const [residencyStatus, setResidencyStatus] = useState("Citizen");
  const [zipCode, setZipCode] = useState("Not Specified");
  const [mobile, setMobile] = useState('+91-7357592858');
  const [contactPerson, setContactPerson] = useState('-');
  const [relationship, setRelationship] = useState('-');
  const [convenientTime, setConvenientTime] = useState('-');
  const [displayOption, setDisplayOption] = useState(
    'You have chosen to display your contact details to all premium members.'
  );
  
 const [ageRange, setAgeRange] = useState('18 to 21');
const [heightRange, setHeightRange] = useState('4\' 5"(134cm) to 4\' 11"(149cm)');

  const [country, setCountry] = useState('India');
  const [state, setState] = useState("Doesn't Matter");
  const [city, setCity] = useState("Doesn't Matter");

    const [education, setEducation] = useState("Doesn't Matter");
  const [professionArea, setProfessionArea] = useState("Doesn't Matter");

   const [profileCreatedBy, setProfileCreatedBy] = useState("Doesn't Matter");
  



  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

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
                  <strong>99%</strong> Profile completed
                </p>
                <input
                  type="file"
                  id="real-file"
                  hidden="hidden"
                  onChange={handleFileChange}
                />
                <button
                  type="button"
                  id="custom-button"
                  onClick={() => document.getElementById("real-file").click()}>
                  Upload Photo
                </button>
                <span id="custom-text">
                  {selectedFile ? selectedFile.name : "No file chosen, yet."}
                </span>
                <br />
              </div>
              <div className="col-sm-9 col-lg-9 col-xl-9 col-md-12">
                <div
                  className="profile-heada d-flex justify-content-between"
                  id="lalitgprop">
                  <h5>
                    Lalit Gupta <img src="verified.svg" alt="Verified" />
                  </h5>
                  <span>Profile ID: AV789</span>
                </div>
                <div className="row ageheight">
                  <div className="col-sm-6 col-lg-6 col-xl-6 Single">
                    <ul className="profile-shortlistaa">
                      <li>
                        <strong>Age / Height</strong>: 21 / 4' 5"
                      </li>
                      <li>
                        <strong>Marital Status</strong>: Never Married
                      </li>
                      <li>
                        <strong>Posted by</strong>: Parent / Guardian
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6 col-lg-6 col-xl-6">
                    <ul className="profile-shortlistaa">
                      <li>
                        <strong>Religion / Community</strong>: Hindu, Other
                      </li>
                      <li>
                        <strong>Location</strong>: Other
                      </li>
                      <li>
                        <strong>Mother Tongue</strong>: Hindi
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
                          <strong>Age</strong>: {age}
                        </li>
                        <li>
                          <strong>Date of Birth</strong>: {dateOfBirth}
                        </li>
                        <li>
                          <strong>Marital Status</strong>: {maritalStatus}
                        </li>
                        <li>
                          <strong>Height</strong>: {height}
                        </li>
                        <li>
                          <strong>Grew up in</strong>: {grewUpIn}
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6 col-lg-6 col-xl-6">
                      <ul className="profile-shortlistss">
                        <li>
                          <strong>Diet</strong>: {diet}
                        </li>
                        <li>
                          <strong>Personal Values</strong>: {personalValues}
                        </li>
                        <li>
                          <strong>Sun sign</strong>: {sunSign}
                        </li>
                        <li>
                          <strong>Blood Group</strong>: {bloodGroup}
                        </li>
                        <li>
                          <strong>Health Information</strong>: {healthInfo}
                        </li>
                        <li>
                          <strong>Disability</strong>: {disability}
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
                          <strong>Religion</strong>: {religion}
                        </li>
                        <li>
                          <strong>Community</strong>: {community}
                        </li>
                        <li>
                          <strong>Sub community</strong>: {subCommunity}
                        </li>
                        <li>
                          <strong>Gothra/Gothram</strong>: {gothra}
                        </li>
                        <li>
                          <strong>Mother Tongue</strong>: {motherTongue}
                        </li>
                        <li>
                          <strong>Can speak</strong>: {canSpeak}
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6 col-lg-6 col-xl-6">
                      <ul className="profile-shortlistss">
                        <li>
                          <strong>Manglik/Chevvai dosham</strong>: {manglik}
                        </li>
                        <li>
                          <strong>Date of Birth</strong>: {dateOfBirth}
                        </li>
                        <li>
                          <strong>Time of Birth</strong>: {timeOfBirth}
                        </li>
                        <li>
                          <strong>City of Birth</strong>: {cityOfBirth}
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
                          <strong>Father's Status</strong>: {fatherStatus}
                        </li>
                        <li>
                          <strong>Mother's Status</strong>: {motherStatus}
                        </li>
                        <li>
                          <strong>Family Location</strong>: {familyLocation}
                        </li>
                        <li>
                          <strong>Native Place</strong>: {nativePlace}
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6 col-lg-6 col-xl-6">
                      <ul className="profile-shortlistss">
                        <li>
                          <strong>No. of Brothers</strong>: {numberOfBrothers}
                        </li>
                        <li>
                          <strong>No. of Sisters</strong>: {numberOfSisters}
                        </li>
                        <li>
                          <strong>Family Type</strong>: {familyType}
                        </li>
                        <li>
                          <strong>Family Values</strong>: {familyValues}
                        </li>
                        <li>
                          <strong>Family Affluence</strong>: {familyAffluence}
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
                          {highestQualification}
                        </li>
                        <li>
                          <strong>College(s) Attended</strong>:
                          {collegesAttended}
                        </li>
                        <li>
                          <strong>Annual Income</strong>: {annualIncome}
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6 col-lg-6 col-xl-6">
                      <ul className="profile-shortlistss">
                        <li>
                          <strong>Working With</strong>: {workingWith}
                        </li>
                        <li>
                          <strong>Working As</strong>: {workingAs}
                        </li>
                        <li>
                          <strong>Employer Name</strong>: {employerName}
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
                          <strong>Current Residence</strong>: {currentResidence}
                        </li>
                        <li>
                          <strong>State Of Residence</strong>:
                          {stateOfResidence}
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6 col-lg-6 col-xl-6">
                      <ul className="profile-shortlistss">
                        <li>
                          <strong>Residency Status</strong>: {residencyStatus}
                        </li>
                        <li>
                          <strong>Zip / Pin code</strong>: {zipCode}
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
<div className="tab-pane fade show active " id="nav-partner" role="tabpanel" aria-labelledby="nav-partner-tab">
  <h3 className="education">Basic Info<a href="#" className="btn btn-sm "><img src="editprofile.png"/> Edit</a></h3>
   <div className="row ageheight">
      <div className="col-sm-6 col-lg-6 col-xl-6 Single">
        <ul className="profile-shortlistss">
          <li>
            <strong>Age</strong>: {ageRange}
          </li>
          <li>
            <strong>Height</strong>: {heightRange}
          </li>
          <li>
            <strong>Religion / Community</strong>: {religion}
          </li>
        </ul>
      </div>
      <div className="col-sm-6 col-lg-6 col-xl-6">
        <ul className="profile-shortlistss">
          <li>
            <strong>Mother tongue</strong>: {motherTongue}
          </li>
          <li>
            <strong>Marital Status:</strong> {maritalStatus}
          </li>
        </ul>
      </div>
    </div>
 <h3 className="education">Location Details<a href="#" className="btn btn-sm "><img src="editprofile.png"/> Edit</a></h3>
 <div className="row ageheight">
      <div className="col-sm-6 col-lg-6 col-xl-6 Single">
        <ul className="profile-shortlistss">
          <li>
            <strong>Country living in</strong>: {country}
          </li>
          <li>
            <strong>State living in</strong>: {state}
          </li>
          <li>
            <strong>City / District</strong>: {city}
          </li>
        </ul>
      </div>
      <div className="col-sm-6 col-lg-6 col-xl-6">
      
      </div>
    </div>
                            <h3 className="education">Education & Career<a href="#" className="btn btn-sm "><img src="img/editprofile.png"/> Edit</a></h3>
                             <div className="row ageheight">
      <div className="col-sm-6 col-lg-6 col-xl-6 Single">
        <ul className="profile-shortlistss">
          <li>
            <strong>Education</strong>: {education}
          </li>
          <li>
            <strong>Working with</strong>: {workingWith}
          </li>
          <li>
            <strong>Profession area</strong>: {professionArea}
          </li>
        </ul>
      </div>
      <div className="col-sm-6 col-lg-6 col-xl-6">
        <ul className="profile-shortlistss">
          <li>
            <strong>Working as</strong>: {workingAs}
          </li>
          <li>
            <strong>Annual income</strong>: {annualIncome}
          </li>
        </ul>
      </div>
    </div>
 <h3 className="education">Other Details<a href="#" className="btn btn-sm "><img src="img/editprofile.png"/> Edit</a></h3>
  <div className="row ageheight">
      <div className="col-sm-6 col-lg-6 col-xl-6 Single">
        <ul className="profile-shortlistss">
          <li>
            <strong>Profile created by</strong>: {profileCreatedBy}
          </li>
        </ul>
      </div>
      <div className="col-sm-6 col-lg-6 col-xl-6">
        <ul className="profile-shortlistss">
          <li>
            <strong>Diet</strong>: {diet}
          </li>
        </ul>
      </div>
    </div>
</div>
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
            <strong>Mobile</strong>: {mobile}
          </li>
          <li>
            <strong>Contact Person</strong>: {contactPerson}
          </li>
          <li>
            <strong>Relationship with the member</strong>: {relationship}
          </li>
          <li>
            <strong>Convenient Time to Call</strong>: {convenientTime}
          </li>
          <li>
            <strong>Display Option</strong>: {displayOption}
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
