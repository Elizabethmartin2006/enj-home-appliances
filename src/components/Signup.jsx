import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {

  // create the four state
  const [username,SetUsername]=useState("")
  const [email,SetEmail]=useState("")
  const [password,SetPassword]=useState("")
  const [phone,SetPhone]=useState("")



  // 3 state
  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")


  // create a function to  handle submit
  const handleSubmit=async(e)=>{
    e.preventDefault()

    // set loading
    setLoading("please wait...")


    // prepare data
    const formData=new FormData()


    formData.append("username",username)
    formData.append("email",email)
    formData.append("password",password)
    formData.append("phone",phone)


    try {
      const response=await axios.post("https://mwendwamartin.alwaysdata.net/api/signup",formData)
      setSuccess(response.data.message)
      setLoading("")


      // set fields to empty
      SetUsername("")
      SetEmail("")
      SetPassword("")
      SetPhone("")


    } catch (error) {
      setLoading()
      setError(error.message)
      
      
    }





  }


  return (
    <div className='row justify-content-center mt-4'>
      <div className="col-md-6 card shadow p-4">
        <h1>Signup</h1>

        {/* binding */}
        <h2 className="text-primary">{loading}</h2>
        <h2 className="text-success">{success}</h2>
        <h2 className="text-danger">{error}</h2>
        
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Enter Username' className='form-control' onChange={(e)=>SetUsername(e.target.value)} required/> <br />
          <input type="email" placeholder='Enter Email' className='form-control' onChange={(e)=>SetEmail(e.target.value)} required/> <br />
          <input type="password" placeholder='Enter Password' className='form-control' onChange={(e)=>SetPassword(e.target.value)} required/><br />
          <input type="tel" placeholder='Enter phone' className='form-control' onChange={(e)=>SetPhone(e.target.value)} required/> <br />

          <input type="submit" value="signup" className='btn btn-info w-100' />

        </form>
        <p>Already have an account? <Link to="/signin">Signin</Link> </p>
      </div>
            
    </div>
  )
}

export default Signup
