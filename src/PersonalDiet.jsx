import React, { useContext, useState } from 'react'
import { Context } from './App';

function PersonalDiet({currentPage ,setCurrentPage}) {
  //   const [diet, setDiet] = useState('Choose...');
  // const [drink, setDrink] = useState('Choose...');
  // const [smoke, setSmoke] = useState('Choose...');
  // const [hobbies, setHobbies] = useState('Choose...');
  // const [hasPet, setHasPet] = useState('yes'); // Default value is 'yes'
   const{state,setState}=useContext(Context);
    
  const handleDietChange = (event) => {
   setState({...state,personalDiet:{...state.personalDiet,diet:event.target.value}})
  };

  const handleDrinkChange = (event) => {
    setState({...state,personalDiet:{...state.personalDiet,drink:event.target.value}})

  };

  const handleSmokeChange = (event) => {
   setState({...state,personalDiet:{...state.personalDiet,smoke:event.target.value}})
  };

  const handleHobbiesChange = (event) => {
  setState({...state,personalDiet:{...state.personalDiet,hobbies:event.target.value}})
  };

  const handleHasPetChange = (event) => {
setState({...state,personalDiet:{...state.personalDiet,hasPet:event.target.value}})
  };
  const PreviousPage =()=>{
    setCurrentPage(currentPage -1);
  }
  const NextPage=()=>{
    setCurrentPage(currentPage +1);
    console.log(state);
  }
  return (
   <>
   <section className="gray-back">
      <div className="container">
        <div className="row">
            <div className="col-md-12 mx-0">
               <form id='msform' action="edit-profile.html">
      
  
    <fieldset>
      <div className="form-card">
        <h2 className="fs-title">Personal Information</h2>
        <div id="step-6" className="box tab">
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="diet" className="form-label">
                  Diet
                </label>
                <select
                  id="diet"
                  className="form-control"
                  value={state.personalDiet.diet}
                  onChange={handleDietChange}
                >
                  <option>Choose...</option>
                  <option>Veg</option>
                  <option>Non-Veg</option>
                  <option>Jain Food</option>
                  <option>Vegetarian</option>
                </select>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="drink" className="form-label">
                  Drink
                </label>
                <select
                  id="drink"
                  className="form-control"
                  value={state.personalDiet.drink}
                  onChange={handleDrinkChange}
                >
                  <option>Choose...</option>
                  <option>Do not Drink</option>
                  <option>Occasionally</option>
                  <option>Regularly Drink</option>
                </select>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="smoke" className="form-label">
                  Smoke
                </label>
                <select
                  id="smoke"
                  className="form-control"
                  value={state.personalDiet.smoke}
                  onChange={handleSmokeChange}
                >
                  <option>Choose...</option>
                  <option>Do not Smoke</option>
                  <option>Occasionally</option>
                  <option>Regularly Smoke</option>
                </select>
              </div>
            </div>
            <div className="col-sm-6">
              <label htmlFor="hobbies" className="form-label">
                Hobbies
              </label>
              <select
                id="hobbies"
                className="form-control"
                value={state.personalDiet.hobbies}
                onChange={handleHobbiesChange}
              >
                <option>Choose...</option>
                <option>Singing</option>
                <option>Dancing</option>
                <option>Reading</option>
              </select>
            </div>
            <div className="col-sm-6">
              <legend className="col-form-label">Having Pet?</legend>
              <div className="form-check form-check-inline">
                <input
                  // className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="yes-pet"
                  value="yes"
                  checked={state.personalDiet.hasPet === 'yes'}
                  onChange={handleHasPetChange}
                />
                <label className="form-check-label" htmlFor="yes-pet">
                  Yes
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  // className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="pet-no"
                  value="no"
                  checked={state.personalDiet.hasPet === 'no'}
                  onChange={handleHasPetChange}
                />
                <label className="form-check-label" htmlFor="pet-no">
                  No
                </label>
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
        onClick={PreviousPage}
      />
      <input type="button" name="next" className="next action-button" value="Next Step" onClick={NextPage} />
    </fieldset>
               </form>
            </div>
        </div>
      </div>
    </section> 
   </>
  )
}

export default PersonalDiet;