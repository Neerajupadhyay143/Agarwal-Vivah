import React, { useContext, useState } from "react";
import { Context } from "./App";

function FamilyDetails({ currentPage, setCurrentPage }) {
  const [fatherName, setFatherName] = useState("");
  const [fatherJob, setFatherJob] = useState("");
  // const [motherName, setMotherName] = useState('');
  // const [motherJob, setMotherJob] = useState('');
  // const [brothersCount, setBrothersCount] = useState('Choose...');
  // const [sistersCount, setSistersCount] = useState('Choose...');
  // const [brotherName, setBrotherName] = useState('');
  // const [brotherJob, setBrotherJob] = useState('Choose...');
  // const [marriedBrotherCount, setMarriedBrotherCount] = useState('Choose...');
  // const [unmarriedBrotherCount, setUnmarriedBrotherCount] = useState('Choose...');
  // const [sisterName, setSisterName] = useState('');
  // const [sisterJob, setSisterJob] = useState('Choose...');
  // const [marriedSisterCount, setMarriedSisterCount] = useState('Choose...');
  // const [unmarriedSisterCount, setUnmarriedSisterCount] = useState('Choose...');
  const { state, setState } = useContext(Context);

  const PreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const NextPage = () => {
    console.log(state);
    setCurrentPage(currentPage + 1);
  };
  return (
    <>
      <section className="gray-back">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mx-0">
              <form id="msform" action="edit-profile.html">
                <fieldset>
                  <div className="form-card">
                    <h2 className="fs-title">Family Detail</h2>
                    <div id="step-7" className="box tab">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label htmlFor="fatherName" className="form-label">
                              Father Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="fatherName"
                              value={state.familyDetails.fatherName}
                              onChange={(e) =>
                                setState({
                                  ...state,
                                  familyDetails: {
                                    ...state.familyDetails,
                                    fatherName: e.target.value,
                                  },
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label htmlFor="fatherJob" className="form-label">
                              Father's Job
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="fatherJob"
                              value={state.familyDetails.fatherJob}
                              onChange={(e) =>
                                setState({
                                  ...state,
                                  familyDetails: {
                                    ...state.familyDetails,
                                    fatherJob: e.target.value,
                                  },
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label htmlFor="motherName" className="form-label">
                              Mother Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="motherName"
                              value={state.familyDetails.motherName}
                              onChange={(e) =>
                                setState({
                                  ...state,
                                  familyDetails: {
                                    ...state.familyDetails,
                                    motherName: e.target.value,
                                  },
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label htmlFor="motherJob" className="form-label">
                              Mother's Job
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="motherJob"
                              value={state.familyDetails.motherJob}
                              onChange={(e) =>
                                setState({
                                  ...state,
                                  familyDetails: {
                                    ...state.familyDetails,
                                    motherJob: e.target.value,
                                  },
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label
                              htmlFor="brothersCount"
                              className="form-label">
                              Brothers
                            </label>
                            <select
                              id="brothersCount"
                              className="form-control"
                              value={state.familyDetails.brothersCount}
                              onChange={(e) =>
                                setState({
                                  ...state,
                                  familyDetails: {
                                    ...state.familyDetails,
                                    brothersCount: e.target.value,
                                  },
                                })
                              }>
                              <option>Choose...</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label
                              htmlFor="sistersCount"
                              className="form-label">
                              Sisters
                            </label>
                            <select
                              id="sistersCount"
                              className="form-control"
                              value={state.familyDetails.sistersCount}
                              onChange={(e) =>
                                setState({
                                  ...state,
                                  familyDetails: {
                                    ...state.familyDetails,
                                    sistersCount: e.target.value,
                                  },
                                })
                              }>
                              <option>Choose...</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="row">
                            <div className="col-sm-6 col-xl-6 col-lg-6 col-md-12">
                              <div className="form-group">
                                <label
                                  htmlFor="brotherName"
                                  className="form-label">
                                  Brother Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="brotherName"
                                  value={state.familyDetails.brotherName}
                                  onChange={(e) =>
                                    setState({
                                      ...state,
                                      familyDetails: {
                                        ...state.familyDetails,
                                        brotherName: e.target.value,
                                      },
                                    })
                                  }
                                />
                              </div>
                            </div>
                            <div className="col-sm-6 col-xl-6 col-lg-6 col-md-12">
                              <div className="form-group">
                                <label
                                  htmlFor="brotherJob"
                                  className="form-label">
                                  Brother job
                                </label>
                                <select
                                  id="brotherJob"
                                  className="form-control"
                                  value={state.familyDetails.brotherJob}
                                  onChange={(e) =>
                                    setState({
                                      ...state,
                                      familyDetails: {
                                        ...state.familyDetails,
                                        brotherJob: e.target.value,
                                      },
                                    })
                                  }>
                                  <option>Choose...</option>
                                  <option>Accountant</option>
                                  <option>Self Employed</option>
                                  <option>Govt. Job</option>
                                  <option>Computer Operator</option>
                                  <option>Software Eng.</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-sm-6 col-xl-6 col-lg-6 col-md-12">
                              <label htmlFor="marriedBrotherCount">
                                Married Brother
                              </label>
                              <select
                                id="marriedBrotherCount"
                                value={state.familyDetails.marriedBrotherCount}
                                onChange={(e) =>
                                  setState({
                                    ...state,
                                    familyDetails: {
                                      ...state.familyDetails,
                                      marriedBrotherCount: e.target.value,
                                    },
                                  })
                                }>
                                <option>Choose...</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>0</option>
                              </select>
                            </div>
                            <div className="col-sm-6 col-xl-6 col-lg-6 col-md-12">
                              <label htmlFor="unmarriedBrotherCount">
                                Unmarried Brother
                              </label>
                              <select
                                id="unmarriedBrotherCount"
                                value={state.familyDetails.unmarriedBrotherCount}
                                onChange={(e) =>
                                  setState({
                                    ...state,
                                    familyDetails: {
                                      ...state.familyDetails,
                                      unmarriedBrotherCount: e.target.value,
                                    },
                                  })
                                }>
                                <option>Choose...</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>0</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="row">
                            <div className="col-sm-6 col-xl-6 col-lg-6 col-md-12">
                              <div className="form-group">
                                <label
                                  htmlFor="sisterName"
                                  className="form-label">
                                  Sister Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="sisterName"
                                  value={state.familyDetails.sisterName}
                                  onChange={(e) =>
                                    setState({
                                      ...state,
                                      familyDetails: {
                                        ...state.familyDetails,
                                        sisterName: e.target.value,
                                      },
                                    })
                                  }
                                />
                              </div>
                            </div>
                            <div className="col-sm-6 col-xl-6 col-lg-6 col-md-12">
                              <div className="form-group">
                                <label
                                  htmlFor="sisterJob"
                                  className="form-label">
                                  Sister job
                                </label>
                                <select
                                  id="sisterJob"
                                  className="form-control"
                                  value={state.familyDetails.sisterJob}
                                  onChange={(e) =>
                                    setState({
                                      ...state,
                                      familyDetails: {
                                        ...state.familyDetails,
                                        sisterJob: e.target.value,
                                      },
                                    })
                                  }>
                                  <option>Choose...</option>
                                  <option>Accountant</option>
                                  <option>Self Employed</option>
                                  <option>Govt. Job</option>
                                  <option>Computer Operator</option>
                                  <option>Software Eng.</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-sm-6 col-xl-6 col-lg-6 col-md-12">
                              <label htmlFor="marriedSisterCount">
                                Married Sister
                              </label>
                              <select
                                id="marriedSisterCount"
                                value={state.familyDetails.marriedSisterCount}
                                onChange={(e) =>
                                  setState({
                                    ...state,
                                    familyDetails: {
                                      ...state.familyDetails,
                                      marriedBrotherCount: e.target.value,
                                    },
                                  })
                                }>
                                <option>Choose...</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>0</option>
                              </select>
                            </div>
                            <div className="col-sm-6 col-xl-6 col-lg-6 col-md-12">
                              <label htmlFor="unmarriedSisterCount">
                                Unmarried Sister
                              </label>
                              <select
                                id="unmarriedSisterCount"
                                value={state.familyDetails.unmarriedSisterCount}
                                onChange={(e) =>
                                  setState({
                                    ...state,
                                    familyDetails: {
                                      ...state.familyDetails,
                                      unmarriedSisterCount: e.target.value,
                                    },
                                  })
                                }>
                                <option>Choose...</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>0</option>
                              </select>
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
  );
}

export default FamilyDetails;
