import axios from 'axios'
import React, { useState } from 'react'

const Addproduct = () => {


  // states for holding the data
  const[productname,SetProductname]=useState("")
  const[productdescription,SetProductdescription]=useState("")
  const[productcost,SetProductcost]=useState("")
  const[productphoto,SetProductphoto]=useState("")

  // states of the tree processes
  const[loading,SetLoading]=useState("")
  const[success,SetSuccess]=useState("")
  const[error,SetError]=useState("")

  // create a function to handle submit
  const handleSubmit=async(e)=>{
    e.preventDefault()

    SetLoading("please wait ...")

    // create form data
    const formData=new FormData()

    formData.append("product_name",productname)
    formData.append("product_description",productdescription)
    formData.append("product_cost",productcost)
    formData.append("product_photo",productphoto)


    try {
      const response=await axios.post("https://mwendwamartin.alwaysdata.net/api/add_product",formData)
      SetLoading("")
      SetError("")
      SetSuccess(response.data.message)
    } catch (error) {
      SetLoading("")
      SetSuccess("")
      SetError(error.message)
      
    }
  }

  return (

    <div className="row justify-content-center mt-4">
      <div className="col-md-6 card shadow p-4">
      {/* {bindfing} */}
      <h2 className='text-primary'>{loading}</h2>
      <h2 className='text-success'>{success}</h2>
      <h2 className='text-danger'>{error}</h2>
      
      
      
      <form action="" onSubmit={handleSubmit}>
        <h1>Upload product</h1>
        <input type="text" placeholder='Enter product name' className='form-control' onChange={(e)=>SetProductname(e.target.value)} required /><br />
        <textarea name="" id="" placeholder='Describe your product' onChange={(e)=>SetProductdescription(e.target.value)} className='form-control' required></textarea><br />
        <input type="number" placeholder='Enter product Cost' className='form-control' onChange={(e)=>SetProductcost(e.target.value)}/><br />

        <input type="file" placeholder='Choose file' className='form-control' onChange={(e)=>SetProductphoto(e.target.files[0])} accept='image/*'/><br />

        <input type="submit" value="upload product" className='btn btn-info w-100' />
        </form>



      </div>


    </div>



    
  )
}

export default Addproduct
