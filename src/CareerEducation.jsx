import React, { useContext, useState } from 'react'
import BodyInformation from './BodyInformation';
import { Context } from './App';

function CareerEducation({currentPage ,setCurrentPage}) {

  const [highestQualification, setHighestQualification] = useState('Choose...');
  const [collegeName, setCollegeName] = useState('Choose...');
  const [workStatus, setWorkStatus] = useState('Choose...');
  const{state,setState}=useContext(Context);


  const handleHighestQualificationChange = (event) => {
 setState({...state,careerInfo:{...state.careerInfo,highestQualification:event.target.value}})
  };

  const handleCollegeNameChange = (event) => {
    setState({...state,careerInfo:{...state.careerInfo,collegeName:event.target.value}})
  };

  const handleWorkStatusChange = (event) => {
    setState({...state,careerInfo:{...state.careerInfo,workStatus:event.target.value}})
  };

  const NextAction = () => {
    setCurrentPage(currentPage + 1);
    console.log(state)
  };
    const PerviousAction = () => {
    setCurrentPage(currentPage - 1);
  };

  // console.log(currentPage)
  
  return(
 <>
 <section className="gray-back">
      <div className="container">
        <div className="row">
            <div className="col-md-12 mx-0">
               <form id='msform' action="edit-profile.html">
                 <fieldset>
      <div className="form-card">
        <h2 className="fs-title">Career & Education</h2>
        <div id="step-3" className="box tab">
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="highestQualification" className="form-label">Your highest qualification</label>
                <select
                  className="form-control"
                  id="highestQualification"
                  value={state.careerInfo.highestQualification}
                  onChange={handleHighestQualificationChange}
                >
                  <option>Choose...</option>
                  <option>B.E/B.Tech</option>
                  <option>M.E/M.Tech</option>
                  <option>BA</option>
                  <option>B.Ed</option>
                  <option>B.com</option>
                </select>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="collegeName" className="form-label">Your college name (Highest degree)</label>
                <select
                  className="form-control"
                  id="collegeName"
                  value={state.careerInfo.collegeName}
                  onChange={handleCollegeNameChange}
                >
                  <option>Choose...</option>
                  <option>Acharya</option>
                  <option>A D M College for Women</option>
                  <option>A K K New Law Academy</option>
                  <option>A J Institute of Medical Sciences and Research Centre</option>
                  <option>A K I 's Poona College</option>
                </select>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="workStatus" className="form-label">You work with</label>
                <select
                  className="form-control"
                  id="workStatus"
                  value={state.careerInfo.workStatus}
                  onChange={handleWorkStatusChange}
                >
                  <option>Choose...</option>
                  <option>Private Company</option>
                  <option>Defense / Civil Services</option>
                  <option>Government / Public Sector</option>
                  <option>Business / Self Employed</option>
                  <option>Not Working</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <input type="button" name="previous" className="previous action-button-previous" value="Previous" onClick={PerviousAction} />
      <input type="button" name="next" className="next action-button" value="Next Step" onClick={NextAction} />
    </fieldset>
               </form>
            </div>
        </div>
      </div>
    </section> 
 </>
  )
}

export default CareerEducation;