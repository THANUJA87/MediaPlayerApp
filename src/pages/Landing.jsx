import React from 'react'
import { Link } from 'react-router-dom'
import LandingImg from '../assets/bgimage.jpg'
import firstimg from '../assets/music1.jpg'
import secondimg from '../assets/music2.jpg'
import thirdimage from '../assets/music3.jpg'
import { Card } from 'react-bootstrap'



const Landing = () => {
  return (
    <div style={{ paddingTop: '100px' }} className='container'>
      {/* landing part */}
      <div className='row aligin-item-center'>
        <div className='col-lg-5 mt-5'>
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{ textAlign: 'justify' }}>
            Media Player App will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!!</p>
            <Link to={'/home'} className='btn btn-info'> Get Started</Link>
        </div>
        <div className='col'></div>
        <div className='col-lg-6'>
          <img src={LandingImg}  className='img-fluid' ms-5 alt="" />
        </div>
      </div>

       <div>
        <h3 className='text-center'>Features</h3>
         <div className='row my-5'>
          <div className='col-lg-4'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={firstimg} />
              <Card.Body>
                <Card.Title>Managing Vedios</Card.Title>
                <Card.Text>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolor quisquam rem quod doloremque, officiis corrupti nulla, hic nobis natus cum nam ipsa! Ipsum, corporis molestias error voluptatum adipisci beatae..
                </Card.Text>
              
              </Card.Body>
            </Card>
  
          </div>
          <div className='col-lg-4'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={secondimg} />
              <Card.Body>
                <Card.Title>Categorise Vedios</Card.Title>
                <Card.Text>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolor quisquam rem quod doloremque, officiis corrupti nulla, hic nobis natus cum nam ipsa! Ipsum, corporis molestias error voluptatum adipisci beatae..
                </Card.Text>
              
              </Card.Body>
            </Card>
  
          </div>
          <div className='col-lg-4'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={thirdimage} style={{minHeight:'150px'}} />
              <Card.Body>
                <Card.Title>Upload vedios</Card.Title>
                <Card.Text>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolor quisquam rem quod doloremque, officiis corrupti nulla, 
                </Card.Text>
              
              </Card.Body>
            </Card>
  
          </div>
  
         </div>
         <div className='my-5 row align-item-center border rounded p-5'>
          <div className='col-lg-5'>
            <h3 className='text-warning'>Simple, Fast and Powerful</h3>
            <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder'>Managing Vedios :</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor eligendi quaerat, iure minima sit dolore quis officia obcaecati error vero eveniet consectetur velit fugiat modi ea, sed dolorum, quo beatae.</p>

            <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder'>Categorise Vedios :</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor eligendi quaerat, iure minima sit dolore quis officia obcaecati error vero eveniet consectetur velit fugiat modi ea, sed dolorum, quo beatae.</p>

            <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder'>Upload Vedios :</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor eligendi quaerat, iure minima sit dolore quis officia obcaecati error vero eveniet consectetur velit fugiat modi ea, sed dolorum, quo beatae.</p>
          </div>
          <div className='col'></div>
          <div className='col-lg-6'>
          <iframe width="100%" height="390" src="https://www.youtube.com/embed/zGCgPP6JcC8" title="IDENTITY Teaser | Tovino Thomas | Trisha | Vinay Rai | Akhil Paul | Anas Khan"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
          </div>
         </div>
       </div>
    </div>
  )
}

export default Landing