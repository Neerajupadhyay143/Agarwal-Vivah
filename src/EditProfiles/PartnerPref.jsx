import React, { useContext, useState } from 'react'
import { Context } from '../App';

function PartnerPref() {
    const { state, setState } = useContext(Context);

    return (
        <>
            <div className="tab-pane fade show active " id="nav-partner" role="tabpanel" aria-labelledby="nav-partner-tab">
                <h3 className="education">Basic Info<a href="#" className="btn btn-sm "><img src="editprofile.png" /> Edit</a></h3>
                <div className="row ageheight">
                    <div className="col-sm-6 col-lg-6 col-xl-6 Single">
                        <ul className="profile-shortlistss">
                            <li>
                                <strong>Age</strong>: {state.partnerPref.ageRange}
                            </li>
                            <li>
                                <strong>Height</strong>: {state.partnerPref.heightRange}
                            </li>
                            <li>
                                <strong>Religion / Community</strong>: {state.partnerPref.religion}
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-lg-6 col-xl-6">
                        <ul className="profile-shortlistss">
                            <li>
                                <strong>Mother tongue</strong>: {state.partnerPref.motherTongue}
                            </li>
                            <li>
                                <strong>Marital Status:</strong> {state.partnerPref.maritalStatus}
                            </li>
                        </ul>
                    </div>
                </div>
                <h3 className="education">Location Details<a href="#" className="btn btn-sm "><img src="editprofile.png" /> Edit</a></h3>
                <div className="row ageheight">
                    <div className="col-sm-6 col-lg-6 col-xl-6 Single">
                        <ul className="profile-shortlistss">
                            <li>
                                <strong>Country living in</strong>: {state.partnerPref.country}
                            </li>
                            <li>
                                <strong>State living in</strong>: {state.partnerPref.states}
                            </li>
                            <li>
                                <strong>City / District</strong>: {state.partnerPref.city}
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-lg-6 col-xl-6">

                    </div>
                </div>
                <h3 className="education">Education & Career<a href="#" className="btn btn-sm "><img src="editprofile.png" /> Edit</a></h3>
                <div className="row ageheight">
                    <div className="col-sm-6 col-lg-6 col-xl-6 Single">
                        <ul className="profile-shortlistss">
                            <li>
                                <strong>Education</strong>: {state.partnerPref.education}
                            </li>
                            <li>
                                <strong>Working with</strong>: {state.partnerPref.workingWith}
                            </li>
                            <li>
                                <strong>Profession area</strong>: {state.partnerPref.professionArea}
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-lg-6 col-xl-6">
                        <ul className="profile-shortlistss">
                            <li>
                                <strong>Working as</strong>: {state.partnerPref.workingAs}
                            </li>
                            <li>
                                <strong>Annual income</strong>: {state.partnerPref.annualIncome}
                            </li>
                        </ul>
                    </div>
                </div>
                <h3 className="education">Other Details<a href="#" className="btn btn-sm "><img src="editprofile.png" /> Edit</a></h3>
                <div className="row ageheight">
                    <div className="col-sm-6 col-lg-6 col-xl-6 Single">
                        <ul className="profile-shortlistss">
                            <li>
                                <strong>Profile created by</strong>: {state.partnerPref.profileCreatedBy}
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-lg-6 col-xl-6">
                        <ul className="profile-shortlistss">
                            <li>
                                <strong>Diet</strong>: {state.partnerPref.diet}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PartnerPref;