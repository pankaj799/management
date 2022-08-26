import React, { useEffect, useState } from 'react'
import { Layout } from 'antd';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { Login, Register, ForgotPassword, ForgotOtp, VerifyEmail } from '../../component'


const Auth = () => {
    const login_screen              = useSelector(state => state.auth.login_screen)
    const signup_screen             = useSelector(state => state.auth.signup_screen)
    const forgot_password_screen    = useSelector(state => state.auth.forgot_password_screen)
    const forgot_otp_screen         = useSelector(state => state.auth.forgot_otp_screen)
    const verify_email_screen       = useSelector(state => state.auth.verify_email_screen)

    return (
        <>
            <Layout>
                <div className='authPage'>
                    <div className='container text-center'>
                        <div className='col-12'>
                            {/* <img className='authLogo' src={appLogo}/> */}
                        </div>
                        {login_screen?<Login />:''}
                        {signup_screen?<Register />:''}
                        {forgot_password_screen?<ForgotPassword />:''}
                        {forgot_otp_screen?<ForgotOtp />:''}
                        {verify_email_screen?<VerifyEmail />:''}
                    </div> 
                </div>
            </Layout>
        </>
    )
}

export default Auth