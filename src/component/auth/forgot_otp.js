import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import { setLoginScreen,forgotPasswordReset } from "../../actions/auth"
import toast from "../../component/common/toast"


const ForgotPassword = () => {

  const dispatch = useDispatch();
  let email = localStorage.getItem("forgot_email");
  const [otp, setOtp]  = useState('')
  const [password, setPassword]  = useState('')

  const [passwordToggle, setPasswordToggle] = useState(false)


  const matchOtpEmail = async () => {
    if (email === "" || email === undefined || otp === "" || otp === undefined || 
        password === "" || password === undefined) {
        toast.error("Please Enter All Required Fields")
        return false
    }

    let bodyData = {
        email:localStorage.getItem("forgot_email"),otp,password
    }
    
    const successCb = (resp) => {
      localStorage.removeItem("forgot_email", email)
      toast.success(resp.message);
      dispatch(setLoginScreen());
    }
    const failureCb = (resp) => {
      toast.error(resp.message);
    }
    dispatch(forgotPasswordReset(bodyData, successCb,failureCb))
  }

  return (
    <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 loginPage mt-5">
              <div className="row">
                <div className="col-12 text-start">
                  <div className="form-floating mb-3">
                    <input disabled value={localStorage.getItem("forgot_email")} type="text" className="form-control" id="email" placeholder="Email address"/>
                    <label htmlFor="email" className="w-100">Email Address</label>
                    <i className="fas fa-envelope-open float-end faBlue fieldIcon" style={{ transform: `translate(-11px, -38px)` }}></i>
                  </div>
                </div>
                <div className="col-12 text-start">
                  <div className="form-floating mb-3">
                    <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} className="form-control" id="otp" placeholder="OTP"/>
                    <label htmlFor="otp" className="w-100">OTP
                    </label>
                  </div>
                </div>
                <div className="col-12 text-start">
                  <div className="form-floating mb-3">
                    <input type={`${passwordToggle ? "text" : "password"}`} value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="new_password" placeholder="New Password"/>
                    <label htmlFor="new_password" className="w-100">New Password</label>
                    <i className={`${passwordToggle ? "fas fa-eye float-end faBlue fieldIcon cursor_pointer" : "fas fa-eye-slash faBlue fieldIcon cursor_pointer"}`} style={{ position: 'absolute', right: '9px', top: '26px', fontFamily: 'Font Awesome 5 Free', color: '#6fb9df' }} onClick={() => setPasswordToggle(!passwordToggle)}></i>
                  </div>
                </div>

                <div className="col-12 mt-4">
                  <div className="d-grid gap-2">
                    <button onClick={() => matchOtpEmail()} className="authBtn btn rounded-pill form-control" type="button">Change Password</button>
                  </div>
                </div>

                <div className="col-12 mt-1 text-center"> 
                  <label onClick={() => dispatch(setLoginScreen())} className="authTextColor">Already Have an Account? Sign In</label>                  
                </div>
              </div>
        </div>

    </div>
  );
}
export default ForgotPassword;