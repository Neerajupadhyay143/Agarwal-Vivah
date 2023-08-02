import React, { useContext, useState } from "react";
import "./PersonalPage.css";
import PersonalInfo from "./PersonalInfo";
import { Context } from "./App";


function PersonalPage({ currentPage, setCurrentPage }) {
  const { state, setState } = useContext(Context);
  // const [fullName, setFullName] = useState('');
  // const [gotra, setGotra] = useState('');
  // const [dob, setDob] = useState('');
  // const [birthPlace, setBirthPlace] = useState('');
  // const [birthTime, setBirthTime] = useState('');
  const PerviousAction = () => {
    setCurrentPage(currentPage - 1);
  };

  const NextAction = () => {
    setCurrentPage(currentPage + 1);
    console.log(state)
  
  };

  // const skipPage=()=>{
  //     setCurrentPage(currentPage+2);
  // }

  return(
    <>
      <div>
      <section className="gray-back">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mx-0">
              <form id="msform" action="edit-profile.html">
                <fieldset >
                  <div className="form-card">
                    <h2 className="fs-title">Personal Information</h2>
                    <div id="step-2" className="box tab">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label htmlFor="inputName" className="form-label">
                              Full Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={state.personalPage.fullName}
                              onChange={(e) => setState({...state,personalPage: {...state.personalPage,fullName: e.target.value,},})}
    
                              id="inputName"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label htmlFor="gotra" className="form-label">
                              Gotra
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={state.personalPage.gotra}
                              onChange={(e) => setState({...state,personalPage: {...state.personalPage,gotra: e.target.value,},})}
                              id="gotra"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label htmlFor="dob" className="form-label">
                              DOB
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              value={state.personalPage.dob}
                             onChange={(e) => setState({...state,personalPage: {...state.personalPage,dob: e.target.value,},})}
                              id="dob"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label
                              htmlFor="birthPlace"
                              className="form-label">
                              Place of birth
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={state.personalPage.birthPlace}
                            onChange={(e) => setState({...state,personalPage: {...state.personalPage,birthPlace: e.target.value,},})}
                              id="birthPlace"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label htmlFor="birthTime" className="form-label">
                              Time of Birth
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={state.personalPage.birthTime}
                             onChange={(e) => setState({...state,personalPage: {...state.personalPage,birthTime: e.target.value,},})}
                              id="birthTime"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <input
                    type="button"
                    name="previous"
                    className="previous action-button-previous"
                    value="Previous"
                    onClick={PerviousAction}
                  />
                  <input
                    type="button"
                    name="next"
                    className="next action-button"
                    value="Next Step"
                    onClick={NextAction}
                  />
                  {/* <div>
                  
        <input
        type="button"
        name="next"
        className="next action-button"
        value="skip"
        onClick={skipPage}
      
      />
      </div> */}
                  
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default PersonalPage;
