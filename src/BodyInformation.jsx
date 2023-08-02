import React, { useContext, useState } from 'react'
import { Context } from './App';
// import DataContext from './CreateContext';
function BodyInformation({currentPage,setCurrentPage}) {

  // const {userState, setUserState} = useContext(DataContext)


  //   userState.accountinfo.maritalStatus = "married";
  //   setUserState(userState);

  // const [height, setHeight] = useState('Choose...');
  // const [weight, setWeight] = useState('Choose...');
  // const [bodyType, setBodyType] = useState('Choose...');
  // const [complexion, setComplexion] = useState('Choose...');
  const{state,setState}=useContext(Context);

    const handleHeightChange = (event) => {
   setState({...state,bodyInfo:{...state.bodyInfo,height:event.target.value}})
  };

  const handleWeightChange = (event) => {
 setState({...state,bodyInfo:{...state.bodyInfo,weight:event.target.value}})
  };

  const handleBodyTypeChange = (event) => {
 setState({...state,bodyInfo:{...state.bodyInfo,bodyType:event.target.value}})
  };

  const handleComplexionChange = (event) => {
   setState({...state,bodyInfo:{...state.bodyInfo,complexion:event.target.value}})
  };

  
const PreviousPage=()=>{
  setCurrentPage(currentPage -1);
}
  const NextPage =()=>{
    setCurrentPage(currentPage +1);
    console.log(state)
  }


  return (
    <div>
      <section className="gray-back">
      <div className="container">
        <div className="row">
            <div className="col-md-12 mx-0">
               <form id='msform' action="edit-profile.html">
                 <fieldset>
      <div className="form-card">
        <h2 className="fs-title">Personal Information</h2>
        <div id="step-4" className="box tab">
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="height" className="form-label">
                  Height
                </label>
                <select
                  id="height"
                  className="form-control"
                  value={state.bodyInfo.height}
                  onChange={handleHeightChange}
                >
                  <option>Choose...</option>
                  <option>4ft</option>
                  <option>5ft</option>
                  <option>6ft</option>
                  <option>7ft</option>
                </select>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="weight" className="form-label">
                  Weight
                </label>
                <select
                  id="weight"
                  className="form-control"
                  value={state.bodyInfo.weight}
                  onChange={handleWeightChange}
                >
                  <option>Choose...</option>
                  <option>40kg</option>
                  <option>50kg</option>
                  <option>60kg</option>
                  <option>70kg</option>
                  <option>80kg</option>
                </select>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="bodyType" className="form-label">
                  Body type
                </label>
                <select
                  id="bodyType"
                  className="form-control"
                  value={state.bodyInfo.bodyType}
                  onChange={handleBodyTypeChange}
                >
                  <option>Choose...</option>
                  <option>Slim</option>
                  <option>Average</option>
                  <option>Athlete</option>
                  <option>Heavy</option>
                </select>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="complexion" className="form-label">
                  Complexion
                </label>
                <select
                  id="complexion"
                  className="form-control"
                  value={state.bodyInfo.complexion}
                  onChange={handleComplexionChange}
                >
                  <option>Choose...</option>
                  <option>fair</option>
                  <option>medium</option>
                  <option>dark</option>
                  <option>wheatish</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <input type="button" name="previous" className="previous action-button-previous" value="Previous" onClick={PreviousPage} />
      <input type="button" name="next" className="next action-button" value="Next Step" onClick={NextPage} />
    </fieldset>
               </form>
            </div>
        </div>
      </div>
    </section> 
    </div>
  )
}

export default BodyInformation;