import React, { useState } from 'react';
import "./PartnerProfile.css";

function PartnerProfile() {
    const [age, setAge] = useState('18 to 21');
  const [height, setHeight] = useState("4' 5'' to 4' 11''");
  const [maritalStatus, setMaritalStatus] = useState('Never Married');
  const [excludeGotra, setExcludeGotra] = useState('Open to all');
  const [stateLivingIn, setStateLivingIn] = useState('Open to all');
  const [qualification, setQualification] = useState('Open to all');
  const [workingWith, setWorkingWith] = useState('Open to all');
  const [profession, setProfession] = useState('Open to all');
  const [annualIncome, setAnnualIncome] = useState('Open to all');
  const [profileCreatedBy, setProfileCreatedBy] = useState('Open to all');
  const [diet, setDiet] = useState('Open to all');
  return (
   <>
  <section class="gray-back" id="yourpartner">
    <div className="container">
      <div className="row">
         <h2>Partner Preferences</h2>
         <div class="col-sm-12 col-lg-12 col-xl-12">
           <div className="ageeepatr">
      <h3>Basic Details</h3>
      <div className="d-flex justify-content-between ageerange">
        <div className="d-flex incameanual">
          <div className="maritalss">
            <a href="#">
              <i className="fa-solid fa-calendar-days"></i> Age
            </a>
          </div>
          <div className="openpartnerr">
            <a href="#">{age}</a>
          </div>
        </div>
        <div>
          <a href="#">
            <i className="fa-solid fa-chevron-right"></i>
          </a>
        </div>
      </div>
      <div className="d-flex justify-content-between ageerange">
        <div className="d-flex incameanual">
          <div className="maritalss">
            <a href="#">
              <i className="fa-solid fa-up-down"></i> Height
            </a>
          </div>
          <div className="openpartnerr">
            <a href="#">{height}</a>
          </div>
        </div>
        <div>
          <a href="#">
            <i className="fa-solid fa-chevron-right"></i>
          </a>
        </div>
      </div>
      <div className="d-flex justify-content-between ageerange">
        <div className="d-flex incameanual">
          <div className="maritalss">
            <a href="#">
              <i className="fa-solid fa-people-group"></i> Marital Status
            </a>
          </div>
          <div className="openpartnerr">
            <a href="#">{maritalStatus}</a>
          </div>
        </div>
        <div>
          <a href="#">
            <i className="fa-solid fa-chevron-right"></i>
          </a>
        </div>
      </div>
      <div className="d-flex justify-content-between ageerange">
        <div className="d-flex incameanual">
          <div className="maritalss">
            <a href="#">
              <i className="fa-solid fa-user"></i> Exclude Gotra
            </a>
          </div>
          <div className="openpartnerr">
            <a href="#">{excludeGotra}</a>
          </div>
        </div>
        <div>
          <a href="#">
            <i className="fa-solid fa-chevron-right"></i>
          </a>
        </div>
      </div>
      <div className="d-flex justify-content-between ageerange">
        <div className="d-flex incameanual">
          <div className="maritalss">
            <a href="#">
              <i className="fa-sharp fa-solid fa-location-dot"></i> State Living in
            </a>
          </div>
          <div className="openpartnerr">
            <a href="#">{stateLivingIn}</a>
          </div>
        </div>
        <div>
          <a href="#">
            <i className="fa-solid fa-chevron-right"></i>
          </a>
        </div>
      </div>
      <div className="d-flex justify-content-between ageerange">
        <div className="d-flex incameanual">
          <div className="maritalss">
            <a href="#">
              <i className="fa-solid fa-indian-rupee-sign"></i> Annual Income
            </a>
          </div>
          <div className="openpartnerr">
            <a href="#">{annualIncome}</a>
          </div>
        </div>
        <div>
          <a href="#">
            <i className="fa-solid fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </div>
     <div className="ageeepatr">
      <h3>Education & Career</h3>
      <div className="d-flex justify-content-between ageerange">
        <div className="d-flex incameanual">
          <div className="qualifica">
            <a href="#">
              <i className="fa-solid fa-graduation-cap"></i> Qualification
            </a>
          </div>
          <div className="openpartnerr">
            <a href="#">{qualification}</a>
          </div>
        </div>
        <div>
          <a href="#">
            <i className="fa-solid fa-chevron-right"></i>
          </a>
        </div>
      </div>
      <div className="d-flex justify-content-between ageerange">
        <div className="d-flex incameanual">
          <div className="qualifica">
            <a href="#">
              <i className="fa-sharp fa-solid fa-building"></i> Working With
            </a>
          </div>
          <div className="openpartnerr">
            <a href="#">{workingWith}</a>
          </div>
        </div>
        <div>
          <a href="#">
            <i className="fa-solid fa-chevron-right"></i>
          </a>
        </div>
      </div>
      <div className="d-flex justify-content-between ageerange">
        <div className="d-flex incameanual">
          <div className="qualifica">
            <a href="#">
              <i className="fa-sharp fa-solid fa-briefcase"></i> Profession
            </a>
          </div>
          <div className="openpartnerr">
            <a href="#">{profession}</a>
          </div>
        </div>
        <div>
          <a href="#">
            <i className="fa-solid fa-chevron-right"></i>
          </a>
        </div>
      </div>
      <div className="d-flex justify-content-between ageerange">
        <div className="d-flex incameanual">
          <div className="qualifica">
            <a href="#">
              <i className="fa-solid fa-indian-rupee-sign"></i> Annual Income
            </a>
          </div>
          <div className="openpartnerr">
            <a href="#">{annualIncome}</a>
          </div>
        </div>
        <div>
          <a href="#">
            <i className="fa-solid fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </div>
      <div className="ageeepatr">
      <h3>Other Details</h3>
      <div className="d-flex justify-content-between ageerange">
        <div className="d-flex incameanual">
          <div className="createdbypro">
            <a href="#">
              <i className="fa-solid fa-user"></i> Profile created by
            </a>
          </div>
          <div className="openpartnerr">
            <a href="#">{profileCreatedBy}</a>
          </div>
        </div>
        <div>
          <a href="#">
            <i className="fa-solid fa-chevron-right"></i>
          </a>
        </div>
      </div>
      <div className="d-flex justify-content-between ageerange">
        <div className="d-flex incameanual">
          <div className="createdbypro">
            <a href="#">
              <i className="fa-sharp fa-solid fa-utensils"></i> Diet
            </a>
          </div>
          <div className="openpartnerr">
            <a href="#">{diet}</a>
          </div>
        </div>
        <div>
          <a href="#">
            <i className="fa-solid fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </div>
         </div>
      </div>
    </div>
  </section>
   </>
  )
}

export default PartnerProfile;