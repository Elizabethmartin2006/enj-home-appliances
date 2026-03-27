import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signin = () => {

  const navigate=useNavigate()


  // the two state
  const[email,SetEmail]=useState("")
  const[password,SetPassword]=useState("")

  // the three state
  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")

  // function to handle submit
  const handleSubmit=async(e)=>{
    e.preventDefault()

    // set loading
    setLoading("please wait...")

    // prepare data
    const formData=new FormData ()

    formData.append("email",email)
    formData.append("password",password)

    try {
      const response=await axios.post("https://mwendwamartin.alwaysdata.net/api/signin",formData)
      setLoading("")
      setError("")
      if(response.data.user){
        setSuccess(response.data.message)
        navigate("/getproduct")

      }
      else{
        setError(response.data.message)
      }
      
      setLoading("")

      // set fields to empty
      SetEmail("")
      SetPassword("")
      
    } catch (error) {
      setLoading("")
      setError(error.message)
      
    }

  }
  return (
    
      <div className="row justify-content-center mt-4 ">
        <div className="col-md-6 card shadow p-4">
          <h1>Signin</h1>
          {/* binding */}
          <h2 className='text-primary'>{loading}</h2>
          <h2 className='text-success'>{success}</h2>
          <h2 className='text-danger'>{error}</h2>

          <form onSubmit={handleSubmit}>

            <input type="email" placeholder='Email' className='form-control' onChange={(e)=>SetEmail(e.target.value)} required/><br /><br />
            <input type="password" placeholder='Password ' className='form-control' onChange={(e)=>SetPassword(e.target.value)}  required /><br /><br />
            <input type="submit" value="Sign in" className='btn btn-info w-100' /><br />
            <p>Dont have an account? <Link to="/signup">signup</Link></p>


          </form>

        </div>
      </div>
        
      
    
  )
}

export default Signin
