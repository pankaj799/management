import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { setLoginScreen, setVerifyEmail, studentSignupApi, parentSignupApi } from "../../actions/auth"
import toast from "../../component/common/toast"
import { STATE_ARRAY, CLASS_ARRAY, CLASS_OF_ARRAY } from "../../component/common/state"


const Register = () => {
  const dispatch = useDispatch();

  // Student Signup start here

  const [student_first_name, setStudentFirstName] = useState('')
  const [student_last_name, setStudentLastName] = useState('')
  const [student_state, setStudentState] = useState('')
  const [student_class_of, setStudentClassOf] = useState('')
  const [student_school_name, setStudentSchoolName] = useState('')
  const [student_phone_number, setStudentPhoneNumber] = useState('')
  const [student_parent_email, setStudentParentEmail] = useState('')
  const [student_parent_first_name, setStudentParentFirstName] = useState('')
  const [student_parent_last_name, setStudentParentLastName] = useState('')
  const [student_email, setStudentEmail] = useState('')
  const [student_password, setStudentPassword] = useState('')
  const [student_grade, setStudentGrade] = useState('')

  const onStudentSignup = async () => {

    if (student_first_name === "" || student_last_name === "" ||
      student_state === "" || student_class_of === "" ||
      student_school_name === "" || student_phone_number === "" ||
      student_parent_first_name === "" || student_parent_last_name === "" ||
      student_parent_email === "" || student_email === "" ||
      student_password === "" || student_grade === "") {
      toast.error("Please Enter All Required Fields Data")
      return false
    }

    let dataBody = {
      email: student_email,
      password: student_password,
      f_name: student_first_name,
      l_name: student_last_name,
      phone: student_phone_number,
      grade: student_grade,
      school_name: student_school_name,
      state: student_state,
      parent_email: student_parent_email,
      parent_fname: student_parent_first_name,
      parent_lname: student_parent_last_name,
      class_of: student_class_of,

      fcm_token: 'web',
      os: "chrome",
      device_id: "123456"
    };

    const successCb = (resp) => {
      toast.success(resp.message);
      dispatch(setLoginScreen())
    }
    const failureCb = (resp) => {
      toast.error(resp.message);
    }
    dispatch(studentSignupApi(dataBody, successCb, failureCb))
  }

  // Student Signup end here
  // Parent Signup Start here
  const [parent_first_name_1, setParentFirstName_1] = useState('')
  const [parent_last_name_1, setParentLastName_1] = useState('')
  const [parent_state_1, setParentState_1] = useState('')
  const [parent_phone_number_1, setParentPhoneNumber_1] = useState('')
  const [parent_email_1, setParentEmail_1] = useState('')
  const [parent_password_1, setParentPassword_1] = useState('')
  const [parent_student_email_1, setParentStudentEmail_1] = useState('')
  const [parent_student_first_name_1, setParentStudentFirstName_1] = useState('')
  const [parent_student_last_name_1, setParentStudentLastName_1] = useState('')
  const [passwordToggle, setPasswordToggle] = useState(false)


  const onParentSignup = async () => {

    if (parent_first_name_1 === "" || parent_last_name_1 === "" ||
      parent_state_1 === "" || parent_phone_number_1 === "" ||
      parent_email_1 === "" || parent_password_1 === "" ||
      parent_student_email_1 === "" ||
      parent_student_first_name_1 === "" ||
      parent_student_last_name_1 === ""
    ) {
      toast.error("Please Enter All Required Fields Data")
      return false
    }

    let dataBody = {
      email: parent_email_1,
      password: parent_password_1,
      f_name: parent_first_name_1,
      l_name: parent_last_name_1,
      phone: parent_phone_number_1,
      state: parent_state_1,
      student_email: parent_student_email_1,
      student_f_name: parent_student_first_name_1,
      student_l_name: parent_student_last_name_1,

      fcm_token: 'web',
      os: "chrome",
      device_id: "123456"
    };


    const successCb = (resp) => {
      toast.success(resp.message);
      dispatch(setLoginScreen())
    }
    const failureCb = (resp) => {
      toast.error(resp.message);
    }
    dispatch(parentSignupApi(dataBody, successCb, failureCb))
  }




  return (
    <div className="row justify-content-center">

      <div className="col-lg-8 col-md-8 loginPage mt-5">

        <div className="row justify-content-center">

          <div className="col-md-5">
            <ul className="authTabPanel nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist" style={{ borderRadius: '2rem', background: 'white' }}>
              <li className="nav-item studentLi" role="presentation" style={{ borderRadius: '2rem' }}>
                <button className="nav-link active" id="student-tab" data-bs-toggle="pill"
                  data-bs-target="#student" type="button" role="tab" aria-controls="student"
                  aria-selected="true" style={{ fontWeight: '700', padding: '1rem 1rem', margin: '3px', borderRadius: '2rem' }}>STUDENT</button>
              </li>
              <li className="nav-item parentLi" role="presentation" style={{ borderRadius: '2rem' }}>
                <button className="nav-link" id="parent-tab" data-bs-toggle="pill"
                  data-bs-target="#parent" type="button" role="tab" aria-controls="parent"
                  aria-selected="false" style={{ fontWeight: '700', padding: '1rem 1rem', margin: '3px', borderRadius: '2rem' }}>PARENT</button>
              </li>
            </ul>
          </div>

          <div className="col-md-12 mt-3">
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="student" role="tabpanel" aria-labelledby="student-tab">

                <div className="row">

                  <div className="col-md-6 text-start">
                    <div className="form-floating mb-3" style={{ height: '73px' }}>
                      <input value={student_first_name} onChange={(e) => setStudentFirstName(e.target.value)} type="text" className="form-control" id="student_first_name" placeholder="First Name" style={{ height: '100%', borderRadius: '10px' }} />
                      <label htmlFor="student_first_name" className="w-100"
                        style={{
                          fontWeight: '500',
                          color: '#adadad'
                        }}
                      >First Name
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6 text-start">
                    <div className="form-floating mb-3" style={{ height: '73px' }}>
                      <input value={student_last_name} onChange={(e) => setStudentLastName(e.target.value)} type="text" className="form-control" id="student_last_name" placeholder="Last Name" style={{ height: '100%', borderRadius: '10px' }} />
                      <label htmlFor="student_last_name" className="w-100"
                        style={{
                          fontWeight: '500',
                          color: '#adadad'
                        }}
                      >Last Name
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6 text-start">
                    <div className="form-floating mb-3" style={{ height: '73px' }}>
                      <select id="student_state" onChange={(e) => setStudentState(e.target.value)} className="form-select" 
                        aria-label="Floating label select example"
                        style={{ height: '100%', borderRadius: '10px' }}>
                        <option value="">Select State</option>
                        {STATE_ARRAY.map((stateObj) => {
                          return (
                            <option value={stateObj.name}>{stateObj.name}</option>
                          )
                        })}
                      </select>
                      <label htmlFor="student_state" className="w-100"
                        style={{
                          fontWeight: '500',
                          color: '#adadad'
                        }}
                      >State</label>
                    </div>
                  </div>

                  <div className="col-md-6 text-start">
                    <div className="form-floating mb-3" style={{ height: '73px' }}>
                      <select onChange={(e) => setStudentClassOf(e.target.value)} 
                      className="form-select" aria-label="Floating label select example" 
                      id="student_class_of" style={{ height: '100%', borderRadius: '10px' }}>
                        <option value="">Select Class Of</option>
                        {CLASS_ARRAY.map((classObj) => {
                          return (
                            <option value={classObj.class}>{classObj.class}</option>
                          )
                        })}
                      </select>
                      <label htmlFor="student_class_of" className="w-100"
                        style={{
                          fontWeight: '500',
                          color: '#adadad'
                        }}
                      >Class Of
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 text-start">
                    <div className="form-floating mb-3" style={{ height: '73px' }}>
                      <select onChange={(e) => setStudentGrade(e.target.value)} className="form-select" 
                       aria-label="Floating label select example" id="student_grade"
                       style={{ height: '100%', borderRadius: '10px' }}>
                        <option value="">Select Grade</option>
                        {CLASS_OF_ARRAY.map((classofObj) => {
                          return (
                            <option value={classofObj.year}>{classofObj.year}</option>
                          )
                        })}
                      </select>
                      <label htmlFor="student_grade" className="w-100"
                        style={{
                          fontWeight: '500',
                          color: '#adadad'
                        }}
                      >Grade
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6 text-start">
                    <div className="form-floating mb-3" style={{ height: '73px' }}>
                      <input value={student_school_name} onChange={(e) => setStudentSchoolName(e.target.value)}
                       type="text" className="form-control" id="student_school_name" placeholder="School Name" 
                       style={{ height: '100%', borderRadius: '10px' }} />
                      <label htmlFor="student_school_name" className="w-100"
                        style={{
                          fontWeight: '500',
                          color: '#adadad'
                        }}
                      >School Name
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6 text-start">
                    <div className="form-floating mb-3" style={{ height: '73px', position: 'relative' }}>
                      <input
                        value={student_phone_number}
                        // onChange={(e) => setStudentPhoneNumber(e.target.value)}
                        onChange={(event) => {
                          if (event.target.value.length == 11) return false;
                          setStudentPhoneNumber(event?.target.value);
                        }
                        }
                        maxLength="10"
                        type="number"
                        className="form-control"
                        id="student_phone_number"
                        placeholder="Phone Number"
                        min="0"
                        style={{ height: '100%', borderRadius: '10px', paddingLeft: '36px' }}
                      />
                      <p
                      style={{
                        position : 'absolute',
                        top: '33px',
                        left : '10px'
                      }}
                      >+1 | </p>
                      <label htmlFor="student_phone_number" className="w-100"
                        style={{
                          fontWeight: '500',
                          color: '#adadad'
                        }}
                      >Phone Number</label>
                    </div>
                  </div>


                  <div className="col-md-6 text-start">
                    <div className="form-floating mb-3" style={{ height: '73px' }}>
                      <input value={student_parent_first_name} onChange={(e) => setStudentParentFirstName(e.target.value)} type="text" className="form-control" id="student_parent_first_name" placeholder="Parent's First Name" style={{ height: '100%', borderRadius: '10px' }} />
                      <label htmlFor="student_parent_first_name" className="w-100"
                        style={{
                          fontWeight: '500',
                          color: '#adadad'
                        }}
                      >Parent's First Name</label>
                    </div>
                  </div>

                  <div className="col-md-6 text-start">
                    <div className="form-floating mb-3" style={{ height: '73px' }}>
                      <input value={student_parent_last_name} onChange={(e) => setStudentParentLastName(e.target.value)} type="text" className="form-control" id="student_parent_last_name" placeholder="Parent's Last Name" style={{ height: '100%', borderRadius: '10px' }} />
                      <label htmlFor="student_parent_last_name" className="w-100"
                        style={{
                          fontWeight: '500',
                          color: '#adadad'
                        }}
                      >Parent's Last Name</label>
                    </div>
                  </div>

                  <div className="col-md-6 text-start">
                    <div className="form-floating mb-3" style={{ height: '73px' }}>
                      <input value={student_parent_email} onChange={(e) => setStudentParentEmail(e.target.value)} type="email" className="form-control" id="student_parent_email" placeholder="Parent's Email" style={{ height: '100%', borderRadius: '10px' }} />
                      <label htmlFor="student_parent_email" className="w-100"
                        style={{
                          fontWeight: '500',
                          color: '#adadad'
                        }}
                      >Parent's Email
                      </label>
                      <i className="fas fa-envelope-open float-end faBlue fieldIcon" style={{ transform: `translate(-11px, -48px)` }}></i>
                    </div>
                  </div>

                  <div className="col-md-6 text-start">
                    <div className="form-floating mb-3" style={{ height: '73px' }}>
                      <input value={student_email} onChange={(e) => setStudentEmail(e.target.value)} type="email" className="form-control" id="student_email" placeholder="Email Address" style={{ height: '100%', borderRadius: '10px' }} />
                      <label htmlFor="student_email" className="w-100"
                        style={{
                          fontWeight: '500',
                          color: '#adadad'
                        }}
                      >Student Email Address
                      </label>
                      <i className="fas fa-envelope-open float-end faBlue fieldIcon" style={{ transform: `translate(-11px, -48px)` }}></i>
                    </div>
                  </div>

                  <div className="col-md-6 mb-3 text-start">
                    <div className="form-floating" style={{ height: '73px', position: 'relative' }}>
                      <input value={student_password} onChange={(e) => setStudentPassword(e.target.value)} type={`${passwordToggle ? "text" : "password"}`} className="form-control" id="student_password" placeholder="Password" style={{ height: '100%', borderRadius: '10px' }} />
                      <label htmlFor="student_password" className="w-100"
                        style={{
                          fontWeight: '500',
                          color: '#adadad'
                        }}
                      >Password
                      </label>
                      <i className={`${passwordToggle ? "fas fa-eye float-end faBlue fieldIcon cursor_pointer" : "fas fa-eye-slash faBlue fieldIcon cursor_pointer"}`} style={{ position: 'absolute', right: '9px', top: '26px', fontFamily: 'Font Awesome 5 Free' }} onClick={() => setPasswordToggle(!passwordToggle)}></i>
                    </div>
                  </div>


                  <div className="col-md-12 mt-1">
                    <div className="row justify-content-center">
                      <div className="col-md-4 mt-4">
                        <div className="d-grid gap-2">
                          <button onClick={() => onStudentSignup()} className="authBtn btn rounded-pill form-control p-3" type="button">Sign Up</button>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="col-md-12 mt-1 mb-5 text-center">
                    <label onClick={() => dispatch(setLoginScreen())} className="authTextColor">Already Have an Account? <span style={{ fontWeight: '700' }}>Sign In</span></label>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="parent" role="tabpanel" aria-labelledby="parent-tab">
                <div className="row">

                  <div className="col-md-6 text-start">
                    <div className="form-floating mb-3" style={{ height: '73px' }}>
                      <input value={parent_first_name_1} onChange={(e) => setParentFirstName_1(e.target.value)} type="text" className="form-control" id="parent_first_name_1" placeholder="First Name" style={{ height: '100%', borderRadius: '10px' }} />
                      <label htmlFor="parent_first_name_1" className="w-100"
                        style={{
                          fontWeight: '500',
                          color: '#adadad'
                        }}
                      >First Name
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6 text-start">
                    <div className="form-floating mb-3" style={{ height: '73px' }}>
                      <input value={parent_last_name_1} onChange={(e) => setParentLastName_1(e.target.value)} type="text" className="form-control" id="parent_last_name_1" placeholder="Last Name" style={{ height: '100%', borderRadius: '10px' }} />
                      <label htmlFor="parent_last_name_1" className="w-100"
                        style={{
                          fontWeight: '500',
                          color: '#adadad'
                        }}
                      >Last Name
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6 text-start">
                    <div className="form-floating mb-3" style={{ height: '73px' }}>
                      <select onChange={(e) => setParentState_1(e.target.value)} className="form-select" 
                      id="parent_state_1" style={{ height: '100%', borderRadius: '10px' }}>
                        <option value="">Select State</option>
                        {STATE_ARRAY.map((stateObj, i) => {
                          return (
                            <option key={i} value={stateObj.name}>{stateObj.name}</option>
                          )
                        })}
                      </select>
                      <label htmlFor="parent_state_1" className="w-100"
                        style={{
                          fontWeight: '500',
                          color: '#adadad'
                        }}
                      >State</label>
                    </div>
                  </div>

                  {/* <div className="col-md-6 text-start">
                    <div className="form-floating mb-3" style={{ height: '73px' }}>
                      <input value={parent_phone_number_1} onChange={(e) => setParentPhoneNumber_1(e.target.value)} type="text" className="form-control" id="parent_phone_number_1" placeholder="Phone Number" style={{ height: '100%', borderRadius: '10px' }} />
                      <label htmlFor="parent_phone_number_1" className="w-100"
                        style={{
                          fontWeight: '500',
                          color: '#adadad'
                        }}
                      >Phone Number</label>
                    </div>
                  </div> */}

                  <div className="col-md-6 text-start">
                    <div className="form-floating mb-3" style={{ height: '73px', position: 'relative' }}>
                      <input
                        value={parent_phone_number_1}
                        // onChange={(e) => setStudentPhoneNumber(e.target.value)}
                        onChange={(event) => {
                          if (event.target.value.length == 11) return false;
                          setParentPhoneNumber_1(event?.target.value);
                        }
                        }
                        maxLength="10"
                        type="number"
                        className="form-control"
                        id="parent_phone_number_1"
                        placeholder="Phone Number"
                        min="0"
                        style={{ height: '100%', borderRadius: '10px', paddingLeft: '36px' }}
                      />
                      <p
                      style={{
                        position : 'absolute',
                        top: '33px',
                        left : '10px'
                      }}
                      >+1 | </p>
                      <label htmlFor="parent_phone_number_1" className="w-100"
                        style={{
                          fontWeight: '500',
                          color: '#adadad'
                        }}
                      >Phone Number</label>
                    </div>
                  </div>

                  <div className="col-md-6 text-start">
                    <div className="form-floating mb-3" style={{ height: '73px' }}>
                      <input value={parent_student_first_name_1} onChange={(e) => setParentStudentFirstName_1(e.target.value)} type="text" className="form-control" id="parent_student_first_name_1" placeholder="Student's First Name" style={{ height: '100%', borderRadius: '10px' }} />
                      <label htmlFor="parent_student_first_name_1" className="w-100"
                        style={{
                          fontWeight: '500',
                          color: '#adadad'
                        }}
                      >Student's First Name</label>
                    </div>
                  </div>

                  <div className="col-md-6 text-start">
                    <div className="form-floating mb-3" style={{ height: '73px' }}>
                      <input value={parent_student_last_name_1} onChange={(e) => setParentStudentLastName_1(e.target.value)} type="text" className="form-control" id="parent_student_last_name_1" placeholder="Student's Last Name" style={{ height: '100%', borderRadius: '10px' }} />
                      <label htmlFor="parent_student_last_name_1" className="w-100"
                        style={{
                          fontWeight: '500',
                          color: '#adadad'
                        }}
                      >Student's Last Name</label>
                    </div>
                  </div>


                  <div className="col-md-6 text-start">
                    <div className="form-floating mb-3" style={{ height: '73px' }}>
                      <input value={parent_student_email_1} onChange={(e) => setParentStudentEmail_1(e.target.value)} type="email" className="form-control" id="parent_student_email_1" placeholder="Student's Email" style={{ height: '100%', borderRadius: '10px' }} />
                      <label htmlFor="parent_student_email_1" className="w-100"
                        style={{
                          fontWeight: '500',
                          color: '#adadad'
                        }}
                      > Student's Email
                      </label>
                      <i className="fas fa-envelope-open float-end faBlue fieldIcon" style={{ transform: `translate(-11px, -48px)` }}></i>
                    </div>
                  </div>


                  <div className="col-md-6 text-start">
                    <div className="form-floating mb-3" style={{ height: '73px' }}>
                      <input value={parent_email_1} onChange={(e) => setParentEmail_1(e.target.value)} type="email" className="form-control" id="parent_email_1" placeholder="Email Address" style={{ height: '100%', borderRadius: '10px' }} />
                      <label htmlFor="parent_email" className="w-100"
                        style={{
                          fontWeight: '500',
                          color: '#adadad'
                        }}
                      >Email Address
                      </label>
                      <i className="fas fa-envelope-open float-end faBlue fieldIcon" style={{ transform: `translate(-11px, -48px)` }}></i>
                    </div>
                  </div>

                  <div className="col-md-6 mb-3 text-start">
                    <div className="form-floating" style={{ height: '73px', position: 'relative' }}>
                      <input value={parent_password_1} onChange={(e) => setParentPassword_1(e.target.value)} type={`${passwordToggle ? "text" : "password"}`} className="form-control" id="parent_password_1" placeholder="Password" style={{ height: '100%', borderRadius: '10px' }} />
                      <label htmlFor="parent_password" className="w-100"
                        style={{
                          fontWeight: '500',
                          color: '#adadad'
                        }}
                      >Password
                      </label>
                      <i className={`${passwordToggle ? "fas fa-eye float-end faBlue fieldIcon cursor_pointer" : "fas fa-eye-slash faBlue fieldIcon cursor_pointer"}`} style={{ position: 'absolute', right: '9px', top: '26px', fontFamily: 'Font Awesome 5 Free' }} onClick={() => setPasswordToggle(!passwordToggle)}></i>
                    </div>
                  </div>


                  <div className="col-md-12 mt-1">
                    <div className="row justify-content-center">
                      <div className="col-md-4 mt-4">
                        <div className="d-grid gap-2">
                          <button onClick={() => onParentSignup()} className="authBtn btn rounded-pill form-control p-3" type="button">Sign Up</button>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="col-md-12 mt-1 mb-5 text-center">
                    <label onClick={() => dispatch(setLoginScreen())} className="authTextColor">Already Have an Account? <span style={{ fontWeight: '700' }}>Sign In</span></label>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>




      </div>

    </div>

  );
}
export default Register;
