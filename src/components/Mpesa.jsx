import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Mpesa = () => {
  const {product}=useLocation().state || {}
  const[phone,setPhone]=useState("")
  const[message,setMessage]=useState("")

  const imgurl="https://mwendwamartin.alwaysdata.net/static/images/"

  const handlesubmit=async(e)=>{
    e.preventDefault()
    setMessage("please wait as we process your request...")

    const formData=new FormData()
    formData.append("phone",phone)
    formData.append("amount",product.product_cost)

    const response=await axios.post("https://mwendwamartin.alwaysdata.net/api/mpesa_payment",formData)
    setMessage(response.data.message)
  }
  return (
    <div className='row justify-content-center'>
      <h2 className="text-success">Lipa na mpesa</h2>
      <h2 className="text-success">{message}</h2>
      <div className="col-md-6">
        <div className="card shadow">
          <img src={imgurl+product.product_photo} alt="" height="350px"/>
          <div className="card-body mt-3">
            <h5>{product.product_name}</h5>
            <p className="text-muted">{product.product_description}</p>
            <b className="text-warning">{product.product_cost}</b>



            <form action="" onSubmit={handlesubmit}>
              <input type="tel" className='form-control' placeholder='Enter phone(254xxxxxxx)' onChange={(e)=>setPhone(e.target.value)} /><br />

              <button type='submit' className='btn btn-outline-info w-100'>Make payment</button>
            </form>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Mpesa
