import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryApi, getAllHistoryApi } from '../services/allApi'


const History = () => {
  const [allVedioHistory,setAllVedioHistory] = useState([])
  useEffect(() =>{
    getAllHistory()
  },[])

  const removeHistory = async (id)=>{
   try {
    await deleteHistoryApi(id)
    getAllHistory()
  }
   catch (error) {
    console.log(err);
    
   }
  }
  const getAllHistory =async ()=>{
    try {
      const result = await getAllHistoryApi()
      if(result.status >=200 && result.status <300){
        setAllVedioHistory(result.data)
      }else{
        console.log(result);
        
      }
      
    } catch (err) {
      console.log(err);
      
    }
  }

  return (
    <div style={{paddingTop:'100px'}}>
      <div className='d-flex justify-content-between container' >
        <h3>Watch History </h3>
        <Link to={'/home'}> Back to Home</Link>

      </div>
      <table className='container'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Link</th>
            <th>TimeStamp</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
         {
          allVedioHistory?.length >0 ?
          allVedioHistory.map((vedioDetails,index)=>(
            <tr key={vedioDetails?.id}>
              <td>{index+1}</td>
              <td>{vedioDetails?.caption}</td>
              <td>{vedioDetails?.youtubeLink}</td>
              <td>{vedioDetails?.timeStamp}</td>
              <td><button onClick={() =>removeHistory(vedioDetails?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button></td>
            </tr>

          ))
          :
          <div className='text-danger fw-bolder'>No data</div>
          
         }
        </tbody>
      </table>
    </div>
  )
}

export default History