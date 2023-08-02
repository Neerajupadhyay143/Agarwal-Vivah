import React, { useContext, useState } from 'react';
import "./SuccessPage.css";
import { Context } from './App';

function SuccessPage({ viewFormate ,currentPage,setCurrentPage}) {
       const [expressText, setExpressText] = useState('');
  const [biodataFile, setBiodataFile] = useState(null);
  const [biodataFileName, setBiodataFileName] = useState('No file chosen, yet.');
  const{state,setState}=useContext(Context);

  const handleExpressChange = (e) => {
    setState({...state,SuccessPage: {...state.SuccessPage,expressText: e.target.value,},});
  };

  const handleBiodataFileChange = (e) => {
     setState({...state,SuccessPage: {...state.SuccessPage,biodataFile: e.target.value,},});
    const file = e.target.files[0];
    if (file) {
      setBiodataFile(file);
      setBiodataFileName(file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     
     setCurrentPage(viewFormate);
     console.log(state)

    // Process the form data or perform any required actions here
    // Access the expressText and biodataFile state to submit the form data
    // For example: console.log(expressText, biodataFile);
  };


  return (
   <>
   <section className="gray-back">
      <div class="container">
        <div className="row">
            <div className="col-md-12 mx-0">
               <form id='msform' action="edit-profile.html">
                  <fieldset>
      <div className="form-card">
        <h2 className="success">Success!</h2>
        <div id="step-9" className="box tab">
          <div className="row">
            <div className="col-sm-12">
              <label htmlFor="express" className="form-label">
                Express yourself
              </label>
              <textarea
                className="form-control"
                placeholder="Express yourself to your prospective partner to get attention"
                value={state.expressText}
                onChange={handleExpressChange}
              ></textarea>
            </div>
            <div className="col-12">
              <label htmlFor="upload">Upload your Biodata</label><br />
              <input
                type="file"
                id="real-filee"
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
        type="submit"
        name="make_payment"
        className="action-button submit"
        value="Confirm"
        onClick={handleSubmit}

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

export default SuccessPage;