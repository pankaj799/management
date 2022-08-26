import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import { setSignUpScreen, setForgotPasswordScreen, loginApi } from "../../actions/auth"
import { EyeOutlined } from '@ant-design/icons';
import toast from "../../component/common/toast"
import { TOKEN_VAR } from "../../constants/const"

const Login = () => {

  const dispatch = useDispatch();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordToggle, setPasswordToggle] = useState(false)


  return (
    <div className="row justify-content-center">

     Login

    </div>

  );
}
export default Login;