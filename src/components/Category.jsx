import React, { useEffect } from 'react'
import { useState } from 'react'
import { Button, Modal, Form, FloatingLabel } from 'react-bootstrap';
import { deletecategoryAPI, getCategoryApi, removeVedioAPI, saveCategoryAPI, updatecategoryAPI } from '../services/allApi';
import VedioCard from './VedioCard';
VedioCard
Form

const Category = ({setDeleteResponseFromCategory,deleteResponseFromView}) => {

  const [allCategory,setAllCategory] = useState([])
  const [catgoryName,setCategoryName] = useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
      getAllCategory()
  },[deleteResponseFromView])

  const handleSaveCategory = async()=>{
    if(catgoryName){
      const categorydetails = {catgoryName,allVedios:[]}
      try {
        const result = await saveCategoryAPI(categorydetails)
        alert("category added")
        getAllCategory()
        handleClose()
      } catch (err) {
        console.log(err);
        
      }

    }else{
      alert("please fill the form !!")
    }
  }
  
  const getAllCategory = async ()=>{
    try {
      const result = await getCategoryApi()
      if(result.status >=200 && result.status < 300){
        setAllCategory(result.data)

      }
      
    } catch (err) {
      console.log(err);
      
    }
  }
  console.log(allCategory);

  const removecategory = async (id) =>{
    try {
      await deletecategoryAPI(id)
      getAllCategory()
    } catch (err) {
      console.log(err);
      
    }
  }
  const dragOverCategory=(e)=>{
    e.preventDefault()
  }
  const vedioCardDropOverCategory =async  (e,categoryDetails)=>{
    console.log("Inside vediocardDropOverCategory");
    
    // console.log(categoryDetails);
    const vedioDetails= JSON.parse(e.dataTransfer.getData("vediodetails"))
    console.log(vedioDetails);

    //update category by add vedio to its allVedios
    categoryDetails.allVedios.push(vedioDetails)
    console.log(categoryDetails);

    // Api call to update
    await updatecategoryAPI(categoryDetails)
    getAllCategory()
    const result = await removeVedioAPI(vedioDetails?.id)
    setDeleteResponseFromCategory(result)
  }

  const categoryVedioDragStarted =(e,dragVideoDetails,categoryDetails) =>{
    console.log("inside categoryVedioDragstarted");
    let dragData ={video:dragVideoDetails ,categoryDetails}
    e.dataTransfer.setData("dragData",JSON.stringify(dragData))
  }
  return (
   <>
      <div className='d-flex justify-content-between align-item-center'>
        <h3>All Category</h3>
        <button onClick={handleShow}  className='btn btn-info rounded-circle fw-bolder ms-3 fs-5 '>+</button>
      </div>

      {/* display all category */}
      <div className="container=fluid mt-3">
        {/* set category view */}
        {
          allCategory?.length>0 ?
          allCategory?.map(categoryDetails =>(
            <div droppable="true" onDragOver={dragOverCategory} onDrop={e=>vedioCardDropOverCategory(e,categoryDetails)} key={categoryDetails?.id} className="border rounded p-3 mb-3">
                <div className="d-flex justify-content-between" >
                <h5>{categoryDetails?. catgoryName}</h5>
                <button onClick={()=>removecategory(categoryDetails?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>

                  </div>
                  {/* Display category vedios */}
                  <div className="row mt-2">
                    {
                      categoryDetails?.allVedios?.length>0 && 
                      categoryDetails?.allVedios?.map(video =>(
                        <div key={video?.id} className="col-lg-4" draggable={true} onDragStart={e =>categoryVedioDragStarted(e,video,categoryDetails)}>
                       
                        {/* vedio cards */}
                        <VedioCard insideCategory={true} displayData={video}/>
  
                      </div>
                      ))
                    }
         
                  </div>
                </div>
                  ))
                  :
                  <div className='fw-bolder text-danger fs-5'>No categories are added</div>
                }

            </div>


        {/* modal */}
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
             <FloatingLabel controlId="floatingCategoryName" label="Category Name">
                <Form.Control onChange={(e)=>setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
              </FloatingLabel>
              
         
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button onClick={handleSaveCategory}  variant="primary">Add</Button>
          </Modal.Footer>
        </Modal>
  
  
   </>
  
  )
}

export default Category