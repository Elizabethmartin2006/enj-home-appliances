import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='row'>
        <div className="col-md-12">
            <div className="navbar navbar-expand-lg">
                <Link className='navbar-brand text-white'>E.N.J Home Appliances</Link>
                <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarnav">
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id='navbarnav'>
                        <div className="navbar-nav me-auto">
                            <div className="nav-item">
                                <Link to="/addproduct" className='nav-link text-info'>Add product</Link>
                            </div>
                            <div className="nav-item">
                                <Link to="/getproduct" className='nav-link text-info'>Get product</Link>
                            </div>
                        </div>

                    <div className="navbar-nav ms-auto">
                        <div className="nav-item">
                            <Link to="/signin" className='nav-link text-info'>signin</Link>
                        </div>
                        <div className="nav-item">
                            <Link to="/signup" className='nav-link text-info'>signup</Link>
                        </div>
                        
                        </div>    
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
