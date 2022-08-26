import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import { setLoginScreen, forgotPasswordApi, setForgotOtpScreen } from "../../actions/auth"
import toast from "../../component/common/toast"


const ForgotPassword = () => {

  const dispatch = useDispatch();
  const [email, setEmail] = useState('')


  const sendForgotEmail = async () => {

    if (email === "" || email === undefined) {
      toast.error("Please Enter Email to Proceed")
      return false
    }

    const successCb = (resp) => {
      localStorage.setItem("forgot_email", email)
      toast.success(resp.message);
      dispatch(setForgotOtpScreen())
    }
    const failureCb = (resp) => {
      toast.error(resp.message);
    }
    dispatch(forgotPasswordApi({ email }, successCb, failureCb))
  }

  return (
    <div className="row justify-content-center">
      <div className="col-lg-4 col-md-6 loginPage mt-5">
        <div className="row">
          <div className="col-12 text-start">
            <div className="form-floating mb-3"
              style={{
                height: '73px'
              }}
            >
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" placeholder="Email address" style={{ height: '100%' }} />
              <label htmlFor="email" className="w-100"
                style={{
                  fontSize: '17px',
                  fontWeight: '500',
                  color: '#9d9b9b'
                }}
              >Email Address
              </label>
              <i className="fas fa-envelope-open float-end faBlue fieldIcon" style={{ position: 'absolute', right: '23px', top: '26px', fontFamily: 'Font Awesome 5 Free', color: '#6fb9df' }}></i>
            </div>
          </div>

          <div className="col-12 mt-4">
            <div className="d-grid gap-2">
              <button onClick={() => sendForgotEmail()} className="authBtn btn rounded-pill form-control" type="button" style={{ boxShadow: `rgba(0, 0, 0, 0.1) 0px 4px 12px`, padding: '1rem 0px' }}>Reset Password</button>
            </div>
          </div>

          <div className="col-12 mt-1 text-center">
            <label onClick={() => dispatch(setLoginScreen())} className="authTextColor">Already Have an Account? <span style={{ fontWeight: '700' }}>Sign In</span></label>
          </div>
        </div>
      </div>

    </div>
  );
}
export default ForgotPassword;