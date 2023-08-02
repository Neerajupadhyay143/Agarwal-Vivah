import React, { useContext} from 'react';
import "./PartnerPreferences.css";
import { Context } from './App';

function PartnerPrefrences({currentPage ,setCurrentPage}) {
//  const [city, setCity] = useState('');
//   const [age, setAge] = useState('');
//   const [height, setHeight] = useState('');
//   const [maritalStatus, setMaritalStatus] = useState('');
//   const [excludedGotra, setExcludedGotra] = useState('');
//   const [stateLivingIn, setStateLivingIn] = useState('');
//   const [annualIncome, setAnnualIncome] = useState('');  
    const{state,setState}=useContext(Context);

  const NextPage=()=>{
    console.log(state)
    setCurrentPage(currentPage +1);
  }
  const PreviousPage =()=>{
    setCurrentPage(currentPage -1); 
  }
  return (
   <>
  <section className="gray-back">
      <div class="container">
        <div className="row">
            <div className="col-md-12 mx-0">
               <form id='msform' action="edit-profile.html">
                 <fieldset>
      <div className="form-card">
        <h2 className="fs-title">Partner Preferences</h2>
        <div id="step-5" className="box tab">
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="inputCity" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  value={state.partnerPrefrence.city}
                   onChange={(e) =>  setState({...state,partnerPrefrence:{...state.partnerPrefrence,city:e.target.value}})}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <label htmlFor="age">Age</label>
              <input
                type="text"
                name=""
                value={state.partnerPrefrence.age}
                onChange={(e) =>  setState({...state,partnerPrefrence:{...state.partnerPrefrence,age:e.target.value}})}
              />
            </div>
            <div className="col-sm-6">
              <label htmlFor="height">Height</label>
              <input
                type="text"
                name=""
                value={state.partnerPrefrence.height}
                onChange={(e) =>  setState({...state,partnerPrefrence:{...state.partnerPrefrence,height:e.target.value}})}
              />
            </div>
            <div className="col-sm-6">
              <label htmlFor="marital">Marital Status</label>
              <select
                value={state.partnerPrefrence.maritalStatus}
                onChange={(e) =>  setState({...state,partnerPrefrence:{...state.partnerPrefrence,maritalStatus:e.target.value}})}
              >
                <option selected>Choose...</option>
                <option>Single</option>
                <option>Married</option>
              </select>
            </div>
            <div className="col-sm-6">
              <label>Excluded gotra</label>
              <input
                type="text"
                name=""
                value={state.partnerPrefrence.excludedGotra}
               onChange={(e) =>  setState({...state,partnerPrefrence:{...state.partnerPrefrence,excludedGotra:e.target.value}})}
              />
            </div>
            <div className="col-sm-6">
              <label htmlFor="location">State Living in</label>
              <input
                type="text"
                name=""
                value={state.partnerPrefrence.stateLivingIn}
                onChange={(e) =>  setState({...state,partnerPrefrence:{...state.partnerPrefrence,stateLivingIn:e.target.value}})}
              />
            </div>
            <div className="col-sm-6">
              <legend className="col-form-label">Annual Income</legend>
              <input
                type="text"
                name=""
                value={state.partnerPrefrence.annualIncome}
                 onChange={(e) =>  setState({...state,partnerPrefrence:{...state.partnerPrefrence,annualIncome:e.target.value}})}
              />
            </div>
          </div>
        </div>
      </div>
      <input
        type="button"
        name="previous"
        className="previous action-button-previous"
        value="Previous"
        onClick={PreviousPage}
      />
      <input
        type="button"
        name="next"
        className="next action-button"
        value="Next Step"
        onClick={NextPage}
      />
      
    </fieldset>
               </form>
            </div>
        </div>
      </div>
    </section>
   </>
  )
}

export default PartnerPrefrences;