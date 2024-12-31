import React, { useState } from 'react'
import { Card , Button, Modal} from 'react-bootstrap'
import { removeVedioAPI, saveHistroyApi } from '../services/allApi';




const VedioCard = ({displayData, setDeleteVedioFromVediocard,insideCategory}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () =>{
    setShow(true);
    // story history in json
    const {caption,youtubeLink} =displayData
    const sysDateTime =new Date()
    console.log(sysDateTime);
    console.log(sysDateTime.toLocaleString('en-US',{timeZoneName:'short'}));
    const timeStamp =sysDateTime.toLocaleString('en-US',{timeZoneName:'short'})
    const historyDeatils={caption,youtubeLink,timeStamp}
    try {
      await saveHistroyApi(historyDeatils)
    } catch (err) {
      console.log(err);
      
      
    }
    

  }
  
  const deleteVedio = async (id)=>{
    try {
      const result = await removeVedioAPI(id)
      setDeleteVedioFromVediocard(result)
    } catch (err) {
      console.log(err);
      
    }

  }

  const VedioCardDragStarted = (e,dragVedioDetails) =>{
    console.log("Inside vedioCardDragStarted with vedioId:" + dragVedioDetails?.id);
    //share data using event drag start
    e.dataTransfer.setData("vedioDetails",JSON.stringify(dragVedioDetails))
  }
  return (
    <>
     <Card draggable={true} onDragStart={e => VedioCardDragStarted(e,displayData)} style={{ width: '13rem' }} className='my-3'>
      <Card.Img onClick={handleShow} height={'160px'} variant="top" src={displayData?.imageUrl} />
      <Card.Body>
        <Card.Text className='d-flex justify-content-between'>
          <p>{displayData?.caption}</p>
        {!insideCategory && <button onClick={()=>deleteVedio(displayData?.id)}  className='btn'><i class="fa-solid fa-trash text-danger"></i></button>
      }
        </Card.Text>
      </Card.Body>
    </Card>


    {/* Modal */}
    <Modal
        size='lg'
        centered
        show={show}
        onHide={handleClose}
      
      >
        <Modal.Header closeButton>
          <Modal.Title>Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="360" src={`${displayData?.youtubeLink}?autoplay=1`} title="Mr Bean Coffee Shop! | Mr Bean Animated season 3 | Full Episodes | Mr Bean"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
        
      </Modal>

    </>
  )
}

export default VedioCard