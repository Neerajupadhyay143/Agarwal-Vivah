import React, { useContext, useEffect, useState } from "react";
import PersonalPage from "./PersonalPage";
import "./AccountInformation.css";

import PersonalInfo from "./PersonalInfo";
import CareerEducation from "./CareerEducation";
import BodyInformation from "./BodyInformation";
import PersonalDiet from "./PersonalDiet";
import FamilyDetails from "./FamilyDetails";
import SocialInformation from "./SocialInformation";
import PartnerPrefrences from "./PartnerPrefrences";
import SuccessPage from "./SuccessPage";
import { Context } from "./App";

function AccountInformation({ viewFormate }) {
  const [currentPage, setCurrentPage] = useState(0);
  const { state, setState } = useContext(Context);
  const [maritalStatus, setMaritalStatus] = useState("Choose...");
 
  const [biodataFileName, setBiodataFileName] = useState(
    "No file chosen, yet."
  );

 

  const handleProfileForChange = (event) => {
    setState({...state,accountinfo: {...state.accountinfo,profileFor: event.target.value,},});
    // console.log(state[0]);
  };

  const handleMaritalStatusChange = (event) => {
    setMaritalStatus(event.target.value);
    setState({
      ...state,
      accountinfo: {
        ...state.accountinfo,
        maritalStatus: event.target.value,
      },
    });
  };

  const handleKundliMatchChange = (event) => {
   
    setState({
      ...state,
      accountinfo: {
        ...state.accountinfo,
        kundliMatch: event.target.value,
      },
    });
  };

  const handleBiodataFileChange = (event) => {
    setState({
      ...state,
      accountinfo: {
        ...state.accountinfo,
        biodataFileName: event.target.value,
      },
    });
    const file = event.target.files[0];
    if (file) {
      setBiodataFileName(file.name);
    } else {
      setBiodataFileName("No file chosen, yet.");
    }
    console.log(state);
  };

  const ActivePage = (event) => {
    // setState({
    //   accountinfo: {
    //     ...state.accountinfo,
    //     profileFor: event.target.value,
    //   },
    // });

    setCurrentPage(currentPage + 1);
    console.log(state);
  };
  return currentPage === 0 ? (
    <>
      <section className="gray-back">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mx-0">
              <form id="msform" action="edit-profile.html">
                <fieldset>
                  <div className="form-card">
                    <h2 className="fs-title">Account Information</h2>
                    <div id="step-1" className="box tab">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label htmlFor="profile-for" className="form-label">
                              Creating profile for
                            </label>
                            <select
                              className="form-control"
                              value={state.accountinfo.profileFor}
                              onChange={handleProfileForChange}>
                              <option>Choose...</option>
                              <option>Myself</option>
                              <option>Son</option>
                              <option>Daughter</option>
                              <option>Friends</option>
                              <option>Relative</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label
                              htmlFor="maritalStatus"
                              className="form-label">
                              Your current marital status
                            </label>
                            <select
                              className="form-control"
                              value={ state.accountinfo.maritalStatus}
                              onChange={handleMaritalStatusChange}>
                              <option>Choose...</option>
                              <option>Single</option>
                              <option>Divorced</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <legend className="col-form-label">
                            Do you want kundli match?
                          </legend>
                          <div className="form-check form-check-inline">
                            <input
                              className="fd==-flex"
                              type="radio"
                              name="gridRadios"
                              id="yes"
                              value="yes"
                              checked={state.accountinfo.kundliMatch==="yes"}
                              onChange={handleKundliMatchChange}
                            />
                            <label className="form-check-label" htmlFor="yes">
                              Yes
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              // className="form-check-input"
                              type="radio"
                              name="gridRadios"
                              id="no"
                              value="no"
                              checked={state.accountinfo.kundliMatch === "no"}
                              onChange={handleKundliMatchChange}
                            />
                            <label className="form-check-label" htmlFor="no">
                              No
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <label htmlFor="upload">Upload your Biodata</label>
                          <br />
                          <input
                            type="file"
                            id="real-file"
                            hidden="hidden"
                            onChange={handleBiodataFileChange}
                          />
                          <button type="button" id="custom-buttonb">
                            Upload Biodata
                          </button>
                          <span id="custom-textt">{biodataFileName}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <input
                    type="button"
                    name="next"
                    className="next action-button"
                    value="Next Page"
                    onClick={ActivePage}
                  />
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  ) : currentPage === 1 ? (
    <PersonalPage currentPage={currentPage} setCurrentPage={setCurrentPage} />
  ) : currentPage === 2 ? (
    <>
      <PersonalInfo currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  ) : currentPage === 3 ? (
    <>
      <CareerEducation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  ) : currentPage === 4 ? (
    <>
      <BodyInformation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  ) : currentPage === 5 ? (
    <>
      <PersonalDiet currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  ) : currentPage === 6 ? (
    <>
      <FamilyDetails
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  ) : currentPage === 7 ? (
    <>
      <SocialInformation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  ) : currentPage === 8 ? (
    <>
      <PartnerPrefrences
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  ) : (
    <>
      <SuccessPage
        viewFormate={viewFormate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default AccountInformation;
