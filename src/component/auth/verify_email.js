import React from "react";
import { Layout } from 'antd';
import { useDispatch } from "react-redux"
import { setLoginScreen } from "../../actions/auth"

const { Footer } = Layout;

const VerifyEmail = () => {
  const dispatch = useDispatch();

  return (
    <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 loginPage mt-5">
              <div className="row">

                <div className="col-md-12">
                    <h4 className="authTextColor">Email <strong>Verification</strong></h4>
                    <p className="authTextColor">A Four Digit Code Has Been Sent To Your Email</p>
                </div>

                <div className="col-12 text-start otpBoxSection">
                  <div id="otp" className="inputs d-flex flex-row justify-content-center mt-2"> 
                        <input className="m-2 text-center form-control rounded" type="text" id="first" maxlength="1" /> 
                        <input className="m-2 text-center form-control rounded" type="text" id="second" maxlength="1" />
                        <input className="m-2 text-center form-control rounded" type="text" id="third" maxlength="1" /> 
                        <input className="m-2 text-center form-control rounded" type="text" id="sixth" maxlength="1" />
                    </div>
                </div>

                <div className="col-12 mt-1 text-center"> 
                  <label className="authTextColor float-start">Didn't receive the code?</label>                  
                  <label className="authTextColor float-end">Resend</label>                  
                </div>

                <div className="col-12 mt-4">
                  <div className="d-grid gap-2">
                    <button className="authBtn btn rounded-pill form-control" type="button">Confirm</button>
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
export default VerifyEmail;