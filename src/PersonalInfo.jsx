import React, { useContext, useState } from 'react'
import CareerEducation from './CareerEducation';
import { Next } from 'react-bootstrap/esm/PageItem';
import { Context } from './App';


function PersonalInfo({currentPage,setCurrentPage}) {

  //   const [currentLocation, setCurrentLocation] = useState('Choose...');
  

    const { state, setState } = useContext(Context);
    const handleCurrentLocationChange = (event) => {
       setState({...state,personalInfo: {...state.personalInfo,currentLocation: event.target.value},});
   
  };

  const handleWillingToRelocateChange = (event) => {
      setState({...state,personalInfo: {...state.personalInfo,willingToRelocate: event.target.value},});
      console.log(state,event.target.value)
   
  };

  const handleLiveWithFamilyChange = (event) => {
  setState({...state,personalInfo: {...state.personalInfo,liveWithFamily: event.target.value,},});
  };

  const NextAction=()=>{
  setCurrentPage(currentPage+1);
  console.log(state)
  }
  const PreviousPage =()=>{
    
      setCurrentPage(currentPage-1);
  }
  return(
   <>
   <div>
    <section className="gray-back">
      <div className="container">
        <div className="row">
            <div className="col-md-12 mx-0">
               <form id='msform' action="edit-profile.html">
 <fieldset>
      <div className="form-card">
        <h2 className="fs-title">Personal Information</h2>
        <div id="step-3" className="box tab">
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="currentLocation" className="form-label">Your current location</label>
                <select
                  className="form-control"
                  id="currentLocation"
                  value={state.personalInfo.currentLocation}
                  onChange={handleCurrentLocationChange}
                >
                  <option>Choose...</option>
                  <option>Jaipur</option>
                  <option>Udaipur</option>
                  <option>Bharatpur</option>
                  <option>Kota</option>
                  <option>Sikar</option>
                </select>
              </div>
            </div>
            <div className="col-sm-6">
              <legend className="col-form-label">Willing to Relocate</legend>
              <div className="form-check form-check-inline">
                <input
                  // className="form-check-input"
                  type="radio"
                  name="relocate"
                  id="relocate-yes"
                  value="yes"
                  checked={state.personalInfo.willingToRelocate ==='yes'}
                  onChange={handleWillingToRelocateChange}
                />
                <label className="form-check-label" htmlFor="relocate-yes">Yes</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  // className="form-check-input"
                  type="radio"
                  name="relocate"
                  id="relocate-no"
                  value="no"
                  checked={state.personalInfo.willingToRelocate === 'no'}
                  onChange={handleWillingToRelocateChange}
                />
                <label className="form-check-label" htmlFor="relocate-no">No</label>
              </div>
            </div>
            <div className="col-sm-6">
              <legend className="col-form-label">You live with your family</legend>
              <div className="form-check form-check-inline">
                <input
                  // className="form-check-input"
                  type="radio"
                  name="liveWithFamily"
                  id="live-with-family-yes"
                  value="yes"
                  checked={state.personalInfo.liveWithFamily === 'yes'}
                  onChange={handleLiveWithFamilyChange}
                />
                <label className="form-check-label" htmlFor="live-with-family-yes">Yes</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  // className="form-check-input"
                  type="radio"
                  name="liveWithFamily"
                  id="live-with-family-no"
                  value="no"
                  checked={state.personalInfo.liveWithFamily === 'no'}
                  onChange={handleLiveWithFamilyChange}
                />
                <label className="form-check-label" htmlFor="live-with-family-no">No</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <input type="button" name="previous" className="previous action-button-previous" value="Previous" onClick={PreviousPage} />
      <input type="button" name="next" className="next action-button" value="Next Step"  onClick={NextAction}/>
    </fieldset>
               </form>
            </div>
        </div>
      </div>
    </section>
   </div>
   </>
  )
}

export default PersonalInfo;


{/* <section className="gray-back">
      <div class="container">
        <div className="row">
            <div className="col-md-12 mx-0">
               <form id='msform' action="edit-profile.html">
                
               </form>
            </div>
        </div>
      </div>
    </section> */}