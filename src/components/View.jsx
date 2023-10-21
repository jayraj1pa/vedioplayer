import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import VedioCard from "./VedioCard"
import { getAllVideos } from '../services/allAPI'


function View({uploadVedioServerResponse}) {


  const [deleteVideoStatus,setDeleteVedioStatus] = useState(false)

  const [allVideos,setAllVideos] = useState([])

  const getAllUploadedVideos = async ()=>{
      const {data}  =  await getAllVideos()
      setAllVideos(data)
  }

  useEffect(()=>{
    getAllUploadedVideos()
    setDeleteVedioStatus(false)
  },[uploadVedioServerResponse,deleteVideoStatus])
  console.log(allVideos); 
  
  return (
    <>
    <Row>{
      allVideos.length>0?
      allVideos.map((videos)=>(
        <Col sm={12} md={6} lg={4} xl={3}>
        <VedioCard  displayData={videos}  setDeleteVedioStatus={setDeleteVedioStatus}/></Col>
      ))
      :
      <p>Add videos to the directory</p>
      }
    </Row>
    </>
  )
}

export default View