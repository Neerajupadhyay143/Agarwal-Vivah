import React, { useContext, useState } from 'react';
import "./Search.css";
import { Context } from '../App';

function Search() {

  const{state,setState}=useContext(Context);
 
   const submitSearchById = () => {
    // The logic for the search by profile ID can be implemented here.
    // For example, you can get the value of the input field and perform the search operation.
    // You can also make an API call to fetch data based on the profile ID and display the results.
    // For now, let's just log the profile ID to the console.
    const profileIdInput = document.getElementById('profile-id-input');
    const profileId = profileIdInput.value;
    console.log('Searching for Profile ID:', profileId);
  
  };
    console.log(state.searchInfo)
  return (
    <>
    <section className='container'>
        <div className="row">
             <div className="col-sm-8 col-xl-8 col-lg-8 col-md-12 search-vivah">
                <form>
                    <div className="age-search">
      <label className="form_label-search" htmlFor="name">
        Age
      </label>
      <div className="select-age">
        <select className="select-age-1" value={state.searchInfo.age}  onChange={(e) =>  setState({...state,searchInfo:{...state.searchInfo,age:e.target.value}})}>
          {Array.from({ length: 18 }, (_, index) => (
            <option key={index} value={state + index}>
              {18 + index}
            </option>
          ))}
        </select>
        <span>to</span>
        <select className="select-age-2" value={state.searchInfo.endAge} onChange={(e) =>  setState({...state,searchInfo:{...state.searchInfo,endAge:e.target.value}})}>
          {Array.from({ length: 18 }, (_, index) => (
            <option key={index} value={18 + index}>
              {18 + index}
            </option>
          ))}
        </select>
      </div>
    </div>
     <div className="age-search">
      <label className="form_label-search" htmlFor="name">
        Height
      </label>
      <div className="select-age">
        <select value={state.searchInfo.startHeight}onChange={(e) =>  setState({...state,searchInfo:{...state.searchInfo,startHeight:e.target.value}})}>
          <option value="4' 5'' - 134cm">4' 5'' - 134cm</option>
          <option value="4' 6'' - 137cm">4' 6'' - 137cm</option>
          <option value="4' 7'' - 139cm">4' 7'' - 139cm</option>
          <option value="4' 8'' - 142cm">4' 8'' - 142cm</option>
          <option value="4' 9'' - 144cm">4' 9'' - 144cm</option>
          <option value="4' 10'' - 147cm">4' 10'' - 147cm</option>
          <option value="4' 11'' - 149cm">4' 11'' - 149cm</option>
          <option value="6' 4'' - 193cm">6' 4'' - 193cm</option>
          <option value="6' 5'' - 195cm">6' 5'' - 195cm</option>
          <option value="6' 6'' - 198cm">6' 6'' - 198cm</option>
          <option value="6' 7'' - 200cm">6' 7'' - 200cm</option>
          <option value="6' 8'' - 203cm">6' 8'' - 203cm</option>
          <option value="6' 9'' - 205cm">6' 9'' - 205cm</option>
          <option value="6' 10'' - 208cm">6' 10'' - 208cm</option>
          <option value="6' 11'' - 210cm">6' 11'' - 210cm</option>
          <option value="7' - 213cm">7' - 213cm</option>
        </select>
        <span className="toheight">to</span>
        <select value={state.searchInfo.endHeight} onChange={(e) =>  setState({...state,searchInfo:{...state.searchInfo,endHeight:e.target.value}})}>
          <option value="4' 5'' - 134cm">4' 5'' - 134cm</option>
          <option value="4' 6'' - 137cm">4' 6'' - 137cm</option>
          <option value="4' 7'' - 139cm">4' 7'' - 139cm</option>
          <option value="4' 8'' - 142cm">4' 8'' - 142cm</option>
          <option value="4' 9'' - 144cm">4' 9'' - 144cm</option>
          <option value="4' 10'' - 147cm">4' 10'' - 147cm</option>
          <option value="4' 11'' - 149cm">4' 11'' - 149cm</option>
          <option value="5' - 152cm">5' - 152cm</option>
          <option value="6' 9'' - 205cm">6' 9'' - 205cm</option>
          <option value="6' 10'' - 208cm">6' 10'' - 208cm</option>
          <option value="6' 11'' - 210cm">6' 11'' - 210cm</option>
          <option value="7' - 213cm">7' - 213cm</option>
        </select>
      </div>
    </div>
     <div className="age-search">
      <label className="form_label-search">Marital Status</label>
      <div className="select-age">
        <select className="form-control" value={state.searchInfo.maritalStatus} onChange={(e) =>  setState({...state,searchInfo:{...state.searchInfo,maritalStatus:e.target.value}})}>
          <option value="Doesn't Matter">Doesn't Matter</option>
          <option value="Never Married">Never Married</option>
          <option value="Divorced">Divorced</option>
          <option value="Widowed">Widowed</option>
          <option value="Awaiting Divorce">Awaiting Divorce</option>
          <option value="Annulled">Annulled</option>
        </select>
      </div>
    </div>
    <div className="age-search">
      <label className="form_label-search">Have Children</label>
      <div className="select-age">
        <label htmlFor="children-">
          <input
            type="radio"
            name="children"
            id="children-"
            value=""
            checked={state.searchInfo.childrenStatus === ''}
            onChange={(e) =>  setState({...state,searchInfo:{...state.searchInfo,childrenStatus:e.target.value}})}
            className="rad_btn"
          />
          Doesn't Matter
        </label>
        <label htmlFor="children-No">
          <input
            type="radio"
            name="children"
            id="children-No"
            value="No"
            checked={state.searchInfo.childrenStatus === 'No'}
            onChange={(e) =>  setState({...state,searchInfo:{...state.searchInfo,childrenStatus:e.target.value}})}
            className="rad_btn"
          />
          No
        </label>
        <label htmlFor="children-NoYesNotlivingtogether">
          <input
            type="radio"
            name="children"
            id="children-NoYesNotlivingtogether"
            value="No|Yes. Not living together"
            checked={state.searchInfo.childrenStatus === 'No|Yes. Not living together'}
           onChange={(e) =>  setState({...state,searchInfo:{...state.searchInfo,childrenStatus:e.target.value}})}
            className="rad_btn"
          />
          Ok, if not staying together
        </label>
      </div>
    </div>
     <div className="age-search">
      <label className="form_label-search">Religion</label>
      <div className="select-age">
        <select className="form-control" value={state.searchInfo.selectedReligion} onChange={(e) =>  setState({...state,searchInfo:{...state.searchInfo,selectedReligion:e.target.value}})}>
          <option value="">Doesn't Matter</option>
          <option value="Hindu">Hindu</option>
          <option value="Muslim">Muslim</option>
          <option value="Christian">Christian</option>
          <option value="Sikh">Sikh</option>
          <option value="Parsi">Parsi</option>
          <option value="Jain">Jain</option>
          <option value="Buddhist">Buddhist</option>
          <option value="Jewish">Jewish</option>
          <option value="No Religion">No Religion</option>
          <option value="Spiritual">Spiritual</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </div>
    <div className="age-search">
      <label className="form_label-search">Mother Tongue</label>
      <div className="select-age">
        <select className="form-control" value={state.searchInfo.selectedMotherTongue}onChange={(e) =>  setState({...state,searchInfo:{...state.searchInfo,selectedMotherTongue:e.target.value}})}>
          <option value="">Doesn't Matter</option>
          <option value="Bengali">Bengali</option>
          <option value="English">English</option>
          <option value="Gujarati">Gujarati</option>
          <option value="Hindi">Hindi</option>
          <option value="Kannada">Kannada</option>
          <option value="Marathi">Marathi</option>
          <option value="Marwari">Marwari</option>
          <option value="Odia">Odia</option>
          <option value="Punjabi">Punjabi</option>
          <option value="Tamil">Tamil</option>
        </select>
      </div>
    </div>
     <div className="age-search">
      <label className="form_label-search">Community</label>
      <div className="select-age">
        <select className="form-control" value={state.searchInfo.selectedCommunity} onChange={(e) =>  setState({...state,searchInfo:{...state.searchInfo,selectedCommunity:e.target.value}})}>
          <option value="">Doesn't Matter</option>
          <option value="Hindu:24 Manai Telugu Chettiar">24 Manai Telugu Chettiar</option>
          <option value="Hindu:96 Kuli Maratha">96 Kuli Maratha</option>
          <option value="Hindu:96K Kokanastha">96K Kokanastha</option>
          <option value="Hindu:Adi Andhra">Adi Andhra</option>
          <option value="Hindu:Adi Dharmi">Adi Dharmi</option>
          <option value="Hindu:Adi Dravida">Adi Dravida</option>
          <option value="Hindu:Adi Karnataka">Adi Karnataka</option>
          <option value="Hindu:Agamudayar">Agamudayar</option>
          <option value="Hindu:Agarwal">Agarwal</option>
        </select>
      </div>
    </div>
       <div className="age-search">
      <label className="form_label-search">Country Living in</label>
      <div className="select-age">
        <select className="form-control" value={state.searchInfo.selectedCountry} onChange={(e) =>  setState({...state,searchInfo:{...state.searchInfo,selectedCountry:e.target.value}})}>
          <option value="">Doesn't Matter</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="United Kingdom">UK</option>
          <option value="United Arab Emirates">UAE</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
          <option value="New Zealand">New Zealand</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Saudi Arabia">Saudi Arabia</option>
          <option value="Kuwait">Kuwait</option>
          <option value="South Africa">South Africa</option>
        </select>
      </div>
    </div>
     <div className="age-search">
      <label className="form_label-search">Photo Settings</label>
      <div className="select-age">
        <label htmlFor="children-">
          <input
            type="checkbox"
            name="children"
            id="children-"
            value="Yes"
            checked={state.searchInfo.visibleToAll === "Yes"}
           onChange={(e) =>  setState({...state,searchInfo:{...state.searchInfo,visibleToAll:e.target.value}})}
            className="rad_btn"
          />
          Visible to all
        </label>
        <label htmlFor="children-No">
          <input
            type="checkbox"
            name="children"
            id="children-No"
            value="Yes"
            checked={state.searchInfo.protectedPhoto ==="Yes"}
            onChange={(e) =>  setState({...state,searchInfo:{...state.searchInfo,protectedPhoto:e.target.value}})}
            className="rad_btn"
          />
          Protected Photo
          <i className="fa-sharp fa-regular fa-circle-question"></i>
        </label>
      </div>
    </div>

     <div className="search-btn-s">
      <button type="button">
        <a href="#">Search</a> <i className="fa-sharp fa-solid fa-caret-down"></i>
      </button>
      <a href="#">Reset</a>
    </div>

                </form>
             </div>
               <div className="col-sm-4 col-xl-4 col-lg-4 col-md-12">
      <div className="seve-search">
        <h5>My Saved Searches</h5>
        <p>You can access up to 5 Saved Searches as a logged-in user. <i className="fa-sharp fa-regular fa-circle-question"></i></p>
        <div className="sign-seve">
          <button type="button"><a href="#">Sign Up Free</a></button>
        </div>
        <p>Already a member? <a href="#">Login now <i className="fa-sharp fa-solid fa-caret-down"></i></a></p>
      </div>
      <div className="profile-id-search">
        <h5>Profile ID Search</h5>
        <p className="sear_frm">
          <input type="text" placeholder="Enter Profile ID" />
          <a href="javascript:void(0);" onClick={submitSearchById} className="go_button">
            <span className="block">Go</span>
          </a>
        </p>
      </div>
    </div>
        </div>
    </section>

    </>
  )
}

export default Search;