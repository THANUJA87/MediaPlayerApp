import React, { useState } from 'react'
import { Button, Modal, Form, FloatingLabel } from 'react-bootstrap';
import { saveVedioAPI } from '../services/allApi';



const Add = ({setAddResponseFromHome}) => {
  const [invalidYoutubeLink,setInvalidYoutubeLink] =useState(false)


  const [vedioDetails, setVedioDetails] = useState({
    caption:"", imageUrl:"", youtubeLink:""
  })
  console.log(vedioDetails);
  //modal

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  
  const extractEmbedLinkFromYoutube = (userInputYoutubeLink) =>{
    // steps to create enbed code from youtube link
    if(userInputYoutubeLink.includes("https://www.youtube.com/watch?v=")){
      console.log(userInputYoutubeLink.split("v=")[1].slice(0,11));
      const vedioId = userInputYoutubeLink.split("v=")[1].slice(0,11) 
      setInvalidYoutubeLink(false)
      setVedioDetails({...vedioDetails,youtubeLink:`https://www.youtube.com/embed/${vedioId}`})
      
    }else{
      setInvalidYoutubeLink(true)
      setVedioDetails({...vedioDetails,youtubeLink:""})

     
    }
  }
  
  const handleUploadVedio = async () =>{
    //object destructuring
    const {caption, imageUrl, youtubeLink} =vedioDetails
    if(caption && imageUrl && youtubeLink){
     try {
      const result = await saveVedioAPI(vedioDetails)
      console.log(result);
      if(result.status >= 200 && result.status <300){
        alert("vedio uploaded successfully")
        handleClose()
        // pass the result to view component
        setAddResponseFromHome(result)
      }else{
        console.log(result);
        
      }
      
     } catch (err) {
      console.log(err);
      
     }
      

    }else{
      alert("Please fill the form !!!")
    }

  }
  
  return (
 <>
      <div className='d-flex align-items-center'>
          <h5>Upload New Vedio</h5>
          <button onClick={handleShow} className='btn btn-warning rounded-circle fw-bolder ms-3 fs-5 '>+</button>
  
      </div>
      {/* Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Vedio Details !!!</Modal.Title> 
        </Modal.Header>
        <Modal.Body>
          <div className='border rounded p-3'>
          <FloatingLabel controlId="floatingCaption" label="Caption">
          <Form.Control onChange={e =>setVedioDetails({...vedioDetails,caption:e.target.value}) } type="text" placeholder="Vedio Caption" />
          </FloatingLabel>
          <FloatingLabel className='mt-3' controlId="floatingUrl" label="Vedio image URL">
          <Form.Control onChange={e =>setVedioDetails({...vedioDetails,imageUrl:e.target.value}) }  type="text" placeholder="Vedio Image URL" />
          </FloatingLabel>
          <FloatingLabel className='mt-3' controlId="floatingLink" label="Vedio Youtube Link">
          <Form.Control onChange={e => extractEmbedLinkFromYoutube(e.target.value)} type="text" placeholder="Vedio Youtube Link" />
          </FloatingLabel>
          {
            invalidYoutubeLink && 
            <div className='text-danger'> Invalid Youtube Link</div>
          }
          
          </div>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUploadVedio}  variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
 </>
  )
}

export default Add