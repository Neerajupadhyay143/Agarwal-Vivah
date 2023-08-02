import React, { useContext, useState } from 'react';
import "./SocialInformation.css";
import { Context } from './App';

function SocialInformation({currentPage,setCurrentPage}) {
  
  // const [facebookLink, setFacebookLink] = useState('');
  // const [facebookPrivacy, setFacebookPrivacy] = useState('public');
  // const [instagramLink, setInstagramLink] = useState('');
  // const [instagramPrivacy, setInstagramPrivacy] = useState('public');
  // const [linkedinLink, setLinkedinLink] = useState('');
  // const [linkedinPrivacy, setLinkedinPrivacy] = useState('public');
  // const [whatsappNo, setWhatsappNo] = useState('');
  // const [whatsappPrivacy, setWhatsappPrivacy] = useState('public');
  // const [contactNo, setContactNo] = useState('');
  // const [contactPrivacy, setContactPrivacy] = useState('Public');
const{state,setState}=useContext(Context);
  const NextPage=()=>{
    setCurrentPage(currentPage +1);
    console.log(state);
  }
  const PreviousPage =()=>{
    setCurrentPage(currentPage -1); 
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
        <h2 className="fs-title">Social Information</h2>
        <div id="step-8" className="box tab">
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="fblink" className="form-label">
                  Facebook Link
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fblink"
                  value={state.socialInfo.facebookLink}
                 onChange={(e) =>  setState({...state,socialInfo:{...state.socialInfo,facebookLink:e.target.value}})}
                />
                <div className="form-check form-check-inline">
                  <input
                    // className="form-check-input"
                    type="radio"
                    name="fb-links"
                    id="public"
                    value="public"
                    checked={state.socialInfo.facebookPrivacy === 'public'}
                  onChange={(e) =>  setState({...state,socialInfo:{...state.socialInfo,facebookPrivacy:e.target.value}})}
                  />
                  <label className="form-check-label" htmlFor="public">
                    Public
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    // className="form-check-input"
                    type="radio"
                    name="fb-links"
                    id="private"
                    value="private"
                    checked={state.socialInfo.facebookPrivacy === 'private'}
                   onChange={(e) =>  setState({...state,socialInfo:{...state.socialInfo,facebookPrivacy:e.target.value}})}
                  />
                  <label className="form-check-label" htmlFor="private">
                    Private
                  </label>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="fblink" className="form-label">
                  Instagram Link
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fblink"
                  value={state.socialInfo.instagramLink}
                  onChange={(e) =>  setState({...state,socialInfo:{...state.socialInfo,instagramLink:e.target.value}})}
                />
                <div className="form-check form-check-inline">
                  <input
                    // className="form-check-input"
                    type="radio"
                    name="insta-links"
                    id="insta-public"
                    value="public"
                    checked={state.socialInfo.instagramPrivacy === 'public'}
                   onChange={(e) =>  setState({...state,socialInfo:{...state.socialInfo,instagramPrivacy:e.target.value}})}
                  />
                  <label className="form-check-label" htmlFor="insta-public">
                    Public
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    // className="form-check-input"
                    type="radio"
                    name="insta-links"
                    id="insta-private"
                    value="private"
                    checked={state.socialInfo.instagramPrivacy === 'private'}
                    onChange={(e) =>  setState({...state,socialInfo:{...state.socialInfo,instagramPrivacy:e.target.value}})}
                  />
                  <label className="form-check-label" htmlFor="insta-private">
                    Private
                  </label>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="linkedin" className="form-label">
                  Linkedin Link
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="linkedin"
             
                 value={state.socialInfo.linkedinLink}
                  onChange={(e) =>  setState({...state,socialInfo:{...state.socialInfo,linkedinLink:e.target.value}})}
                />
                <div className="form-check form-check-inline">
                  <input
                    // className="form-check-input"
                    type="radio"
                    name="linked-link"
                    id="linkedin-public"
                    value="public"
                    checked={state.socialInfo.linkedinPrivacy === 'public'}
                    onChange={(e) =>  setState({...state,socialInfo:{...state.socialInfo,linkedinPrivacy:e.target.value}})}
                  />
                  <label className="form-check-label" htmlFor="linkedin-public">
                    Public
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    // className="form-check-input"
                    type="radio"
                    name="linked-link"
                    id="linkedin-private"
                    value="private"
                    checked={state.socialInfo.linkedinPrivacy === 'private'}
                    onChange={(e) =>  setState({...state,socialInfo:{...state.socialInfo,linkedinPrivacy:e.target.value}})}
                  />
                  <label className="form-check-label" htmlFor="linkedin-private">
                    Private
                  </label>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="whatsapp" className="form-label">
                  Whatsapp no
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="whatsapp"
                  value={state.socialInfo.whatsappNo}
                  onChange={(e) =>  setState({...state,socialInfo:{...state.socialInfo,whatsappNo:e.target.value}})}
                />
                <div className="form-check form-check-inline">
                  <input
                    // className="form-check-input"
                    type="radio"
                    name="wa-link"
                    id="wa-public"
                    value="public"
                    checked={state.socialInfo.whatsappPrivacy === 'public'}
                   onChange={(e) =>  setState({...state,socialInfo:{...state.socialInfo,whatsappPrivacy:e.target.value}})}
                  />
                  <label className="form-check-label" htmlFor="wa-public">
                    Public
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    // className="form-check-input"
                    type="radio"
                    name="wa-link"
                    id="wa-private"
                    value="private"
                    checked={state.socialInfo.whatsappPrivacy === 'private'}
                   onChange={(e) =>  setState({...state,socialInfo:{...state.socialInfo,whatsappPrivacy:e.target.value}})}
                  />
                  <label className="form-check-label" htmlFor="wa-private">
                    Private
                  </label>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="calling" className="form-label">
                  contact no
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="calling"
                  value={state.socialInfo.contactNo}
                onChange={(e) =>  setState({...state,socialInfo:{...state.socialInfo,contactNo:e.target.value}})}
                />
                <div className="form-check form-check-inline">
                  <input
                    // className="form-check-input"
                    type="radio"
                    name="calling"
                    id="calling-public"
                    value="Public"
                    checked={state.socialInfo.contactPrivacy === 'Public'}
                   onChange={(e) =>  setState({...state,socialInfo:{...state.socialInfo,contactPrivacy:e.target.value}})}
                  />
                  <label className="form-check-label" htmlFor="calling-public">
                    Public
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    // className="form-check-input"
                    type="radio"
                    name="calling"
                    id="calling-private"
                    value="Private"
                    checked={state.socialInfo.contactPrivacy === 'Private'}
                    onChange={(e) =>  setState({...state,socialInfo:{...state.socialInfo,contactPrivacy:e.target.value}})}
                  />
                  <label className="form-check-label" htmlFor="calling-private">
                    Private
                  </label>
                </div>
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

export default SocialInformation;