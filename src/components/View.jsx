import React, { useEffect, useState } from 'react'
import { Col,Row } from 'react-bootstrap'
import VedioCard from './VedioCard'
import { getAllVediosAPI, saveVedioAPI, updatecategoryAPI } from '../services/allApi'


const View = ({addResponseFromHome,deleteResponseFromCategory,setDeleteResponseFromView}) => {

  const [deletevedioFromVediocard,setDeleteVedioFromVediocard] = useState("")

  const [allVedios,setAllVedios] =useState([])
  useEffect(() =>{
    getAllVedio()
  
  },[addResponseFromHome,deletevedioFromVediocard,deleteResponseFromCategory])
  console.log(allVedios);
  

  const getAllVedio = async ()=>{
    try{
      const result = await getAllVediosAPI()
      console.log(result);
      if(result.status >= 200 && result.status <300){
        setAllVedios(result.data)
     
         
      }else{
        console.log("Api call failed");
        
      }

    }catch(err){
      console.log(err);
      

    }
  }

  const dragOverView=(e)=>{
    e.preventDefault()
  }

  const categoryVideoDragOverView= async (e) =>{
    console.log("inside categoryVideoDragOverView");
    const {video,categoryDetails} =JSON.parse(e.dataTransfer.getData("dragData"))
    console.log(video,categoryDetails);
    const updatedCategoryVideoList = categoryDetails?.allVedios?.filter(item=>item.id!= video?.id)
    const updateCategory ={...categoryDetails,allVedios:updatedCategoryVideoList}
    console.log(updateCategory);
    
    //updating the category by delete video from category
    const result = await updatecategoryAPI(updateCategory)
    //use state lifting to communicate data from view to category
    setDeleteResponseFromView(result) 
    //use api to upload video
    await saveVedioAPI(video)
    // call getAllvedio function
    getAllVedio()
  }
  return (
  <>
  <Row droppable="true" onDragOver={dragOverView} onDrop={e=>categoryVideoDragOverView(e)}>

   {
    allVedios?.length >0 ?
    allVedios.map(videos =>( 
      <Col key={videos?.id} sm={12} md={6} lg={4} >
      <VedioCard setDeleteVedioFromVediocard={setDeleteVedioFromVediocard} displayData ={videos}  />
      </Col>
      ))
    
     :
     <div>No vedio uploaded </div>
     
   }
  </Row>

  </>
  )
}

export default View