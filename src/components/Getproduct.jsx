import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Getproduct = () => {
  const navigate=useNavigate()


  const[products,setProducts]=useState([])
  const[loading,setLoading]=useState("")
  const[error,SetError]=useState("")

  const getProduct=async()=>{
    setLoading("Please wait we are retreving the product...")

    try {
      const response=await axios.get("https://mwendwamartin.alwaysdata.net/api/get_product")
      setLoading("")
      SetError("")
      setProducts(response.data)
    } catch (error) {
      setLoading("")
      SetError(error.message)
      
    }
  }

  useEffect(()=>{
    getProduct()
  },[])

  const imgurl="https://mwendwamartin.alwaysdata.net/static/images/"
  return (
    

    
    <div className='row'>
      <section className="row">
        <div className="col-md-12">
          <div className='carousel slide' data-bs-ride="carousel" id="mycarousel">
            <div className="carousel-inner">
              {/* image1 */}
              <div className="carousel-item active">
                <img src="slide1.jpeg" alt="slide1" width="100%"  />
              </div>
              {/* image2 */}
              <div className="carousel-item">
                <img src="slide2.jpeg" alt="slide2" width="100%" />
              </div>
              {/* image3 */}
              <div className="carousel-item">
                <img src="slide3.jpeg" alt="slide3" width="100%" />
              </div>
              {/* img4 */}
              <div className="carousel-item">
                <img src="slide4.jpeg" alt="slide4" width="100%"/>
              </div>
            </div>
            <a href="#mycarousel" className='carousel-control-prev' data-bs-slide="prev">
              <span className='carousel-control-prev-icon bg-danger'></span>
            </a>
            <a href="#mycarousel" className='carousel-control-next' data-bs-slide="next">
              <span className='carousel-control-next-icon bg-danger'></span>
            </a>
          </div>
        </div>
      </section>


      <h2 className='mt-3 text-info'>Available products</h2>

      <h2 className='text-primary'>{loading}</h2>
      <h2 className='text-danger'>{error}</h2>
      {/* map the array */}
      {products.map((product)=>(

      <div className="col-md-3 justify-content-center ">
        <div className="card shadow bg-dark">
          <img src={imgurl+product.product_photo} alt=""  height="350px"/>

          <div className="card-body">
            <h5 className='mt-3'>{product.product_name}</h5>
            <p className="text-muted">{product.product_description}</p>
            <b className="text-warning">{product.product_cost}</b> <br />
            <button className='btn btn-outline-info w-100' onClick={()=>navigate("/mpesa",{state:{product}})}>purchase now</button>
          </div>

        </div> <br /><br /> 
      </div>
      ))}
      <section className='row bg-info text-dark p-4'>
        <div className="col-md-4">
          <h4>About us</h4>
          <p>We are located at kikiuyu road opposite Mukiriti shop</p>
          <p>We are oppened 24/7</p>
          <p>WE ENHANCE STYLE THAT COMES WITH COMFORT </p>

        </div>
        <div className="col-md-4">
          <h4>Contact us</h4>
          <form action="">
            <input type="email" placeholder='enter your email' className='form-control' /><br /><br />
            <textarea name="" id="" cols="30" rows="10" placeholder='leave your comments' className='form-control'></textarea><br /><br />
            <input type="button" value="send message" className='btn btn-danger' />
          </form>
        </div>

        <div className="col-md-4">
          <h4 className='text-center'>stay conected</h4><br />
          <a href="https://facebook.com">
          <img src="fb.png" alt="fb" />
          </a>
          <a href="https://instagram.com">
          <img src="in.png" alt="in" />
          </a>
          <a href="https://x.com">
          <img src="x.png" alt="x" />
          </a><br />
          <p>Find us in all the mentioned platforms </p>
        </div>
      </section>
      <footer className='text-center bg-dark text-white p-2'>
        <h5>Developed by LIZZY.&copy;2025 All rights reserved</h5>
      </footer>
      
    </div>
  )
}





export default Getproduct
