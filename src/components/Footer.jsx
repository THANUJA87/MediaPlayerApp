import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height:'300px'}} className='mt-5 container w-100'>
      <div className='d-flex justify-content-between'>
       {/* intro */}
       <div style={{width:'400px'}}>
          <h5><i class="fa-solid fa-music me-3"></i>
          Media Player</h5>
          <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>
        </div>
        {/* Links */}
        <div className='d-flex flex-column'> 
          <h5>Links</h5>
          <Link to='/' style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
          <Link to='/home' style={{textDecoration:'none',color:'white'}}>Home Page</Link>
          <Link to='/history' style={{textDecoration:'none',color:'white'}}> History Page</Link>
        </div>
            {/* guide */}
        <div className='d-flex flex-column'> 
          <h5>Links</h5>
            <a href="https://react.dev/" style={{textDecoration:'none',color:'white'}}>React</a>
            <a href="https://getbootstrap.com/" style={{textDecoration:'none',color:'white'}}>Bootstrap</a>
            <a href="https://reactrouter.com/" style={{textDecoration:'none',color:'white'}}>React Router</a>
            
        </div>
        
       {/* contact */}
       <div className='d-flex flex-column'>
          <h5>Contact Us</h5>
          <div className='d-flex'>
              <input type="text" placeholder='enter your email here..' className='form-control me-2' />
              <button className='btn btn-info'><i class="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className='d-flex justify-content-between mt-3'>
            <a style={{textDecoration:'none', color:'white'}} target='_blank' href="https://en.wikipedia.org/wiki/Twitter"><i class="fa-brands fa-twitter"></i></a>
            <a style={{textDecoration:'none', color:'white'}} target='_blank' href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
            <a style={{textDecoration:'none', color:'white'}} target='_blank' href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a>
            <a style={{textDecoration:'none', color:'white'}} target='_blank' href="https://www.linkedin.com/"><i class="fa-brands fa-linkedin"></i></a>
            <a style={{textDecoration:'none', color:'white'}} target='_blank' href="https://github.com/"><i class="fa-brands fa-github"></i></a>
            <a style={{textDecoration:'none', color:'white'}} target='_blank' href="https://www.call.com/"><i class="fa-solid fa-phone"></i></a>
          </div>
        </div>
      </div>
      <p className='text-center mt-3'>Copyright &copy; May 2024 Batch, Media Player. Build with React.</p>
    </div>
  )
}

export default Footer