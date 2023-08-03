import React, { useState } from 'react'
import "./LoginPage.css";
function LoginPage({login ,setLogin}) {

    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [showOTPModal, setShowOTPModal] = useState(false);
    const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        // Add your login logic here using the 'mobile' and 'password' states.
        // Example: You can send the login data to your backend for authentication.
    };

  return (
    <>
         { 
              login ?(
            <>
                            
              <div style={{display:"block"}} className="modal fade show" id="login" aria-hidden="true" aria-labelledby="login-pop" tabIndex="-1">
             <div className="backgroundattatched" >    
              <div className="modal-dialog modal-dialog-centered">
                
                  <div className="modal-content">
                      <div className="modal-header">
                          <h5 className="modal-title" id="login-pop">Welcome! Please Login</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=>setLogin(false)} >
                              <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                      <div className="modal-body">
                          <form onSubmit={handleLogin}>
                              <div className="mb-3">
                                  <label htmlFor="mobile" className="form-label">Mobile No. / Email ID</label>
                                  <input
                                      type="text"
                                      className="form-control"
                                      required="required"
                                      id="mobile"
                                      value={mobile}
                                      onChange={(e) => setMobile(e.target.value)}
                                  />
                              </div>
                              <div className="mb-3">
                                  <label htmlFor="password" className="form-label">Password</label>
                                  <input
                                      type="password"
                                      className="form-control"
                                      id="password"
                                      value={password}
                                      onChange={(e) => setPassword(e.target.value)}
                                  />
                              </div>
                              <div className="d-flex justify-content-between" id="login-pop">
                                  <button type="submit" className="btn btn-primary">Login</button>
                                  <button
                                      type="button"
                                      className="btn btn-primary"
                                      data-dismiss="modal"
                                      onClick={() => setShowOTPModal(true)}
                                  >
                                      Login with OTP
                                  </button>
                              </div>
                          </form>
                          <div className="forgot-password">
                              <a href="#" onClick={() => setShowForgotPasswordModal(true)}>Forgot Password?</a>
                          </div>
                          <div className="social-login">
                              <h5>- or Login with -</h5>
                              <a href="#" className="btn google"><i className="fab fa-google"></i> Sign up with Google</a>
                              <a href="#" className="btn facebook"><i className="fab fa-facebook"></i> Sign up with Facebook</a>
                          </div>
                      </div>
                      <div className="footer-pop">
                          Did not registered yet? <a href="#" data-dismiss="modal" data-target="#register" data-toggle="modal">Sign Up Free</a>
                      </div>
                  </div>
              </div>
              {showOTPModal && (<>
              hii</>
        /* Add your OTP modal JSX here */
      )}
              {showForgotPasswordModal && (
                <>
                byy
                </>
        /* Add your forgot password modal JSX here */
      )}
          </div>
          </div>
          </>
          ):null}
    </>
  )
}

export default LoginPage;