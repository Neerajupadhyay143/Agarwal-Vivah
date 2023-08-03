import React, { useContext, useState } from 'react';
import  "./SettingPage.css";
import { Context } from '../App';

function SettingPage() {
  const [convert,Setconvert]=useState(true);
  const{state,setState}=useContext(Context);

  return (
    <>
    <section className='gary-back'>
        <div className="container">
           <div className="row">
      <div className="col-sm-3 col-xl-3 col-lg-3 col-md-12">
        <h5>Settings</h5>
        <div className="list-group">
          <a className="list-group-item list-group-item-action active" onClick={()=>Setconvert(true)}>Account Settings</a>
          <a href="contact-filter.html" className="list-group-item list-group-item-action">Contact Filters</a>
          <a href="my-alerts-manager.html" className="list-group-item list-group-item-action">Email / SMS Alerts</a>
          <a href="privacy-option.html" className="list-group-item list-group-item-action">Privacy Options</a>
          <a href="hide-delete-account.html" className="list-group-item list-group-item-action">Hide / Delete Profile</a>
        </div>
      </div>
      {convert ===true ?(<>
      <div className="col-sm-9 col-xl-9 col-lg-9 col-md-12">
        <h3 className="sub-head" id="whocan">My Account</h3>
        <div className="box-111 setting-list" id="setting-lista">
          <div className="Emaillist">Email</div>
          <ul>
            <li><label>Email</label></li>
            <li>: {state.Setting.email}</li>
            <li className="ml-auto"><a href="#">Edit</a></li>
          </ul>
        </div>
        <div className="box-111 setting-list" id="setting-lista">
          <div className="Passwordlist">Password</div>
          <ul>
            <li><label>Password</label></li>
            <li>: {state.Setting.password}</li>
            <li className="ml-auto"><a href="#">Edit</a></li>
          </ul>
        </div>
      </div>
      </>):(<>

      </>) }
      
    </div>

        </div>
    </section>
    </>
  )
}

export default SettingPage;