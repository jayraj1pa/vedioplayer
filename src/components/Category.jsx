import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button,Modal,Form, Row, Col } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory } from '../services/allAPI';
import { getAllcategory } from '../services/allAPI';
import { deletecategory } from '../services/allAPI';
import { updateCategory } from '../services/allAPI';
import { getAVideo } from '../services/allAPI';
import VedioCard from './VedioCard';

function Category() {

  const [allCategories,setAllCategories] = useState([])

  const [categoryName,setCategoryName] = useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddCategory = async ()=>{

    if(categoryName){
          let body = {
            categoryName,allVideos:[]
          }
          const response = await addCategory(body)
          if(response.status>=200 && response.status<300){
            handleClose()
            setCategoryName("")
            getCategories()
          }else{
            toast.warning("Something Went Wrong")
          }
          }else{
            toast.warning("Please Provide Category name")
    }

  }
  
  const getCategories = async ()=>{

    const {data} = await getAllcategory()
    setAllCategories(data)

  }

  useEffect(()=>{
    getCategories()
  },[])

  // console.log(allCategories);



  const handleedit = () =>{
    toast.warning("are you sure you want to edit")
  }

  const handleDelete = async (id)=>{
    await deletecategory(id)
    getCategories()
  }


  const dragOver = (e)=>{
      console.log("video drag over category");
    e.preventDefault()
  }

  const VideoDrop = async (e,categoryId)=>{
    // console.log("video dropped inside category id"+categoryId);
    const videoId = e.dataTransfer.getData("videoId")
    console.log("video card id ",videoId);
    // get video detail
    const {data} = await getAVideo(videoId)
    // console.log(data);
    const selectCategory = allCategories?.find(item=>item.id===categoryId)
    selectCategory.allVideos.push(data)
    console.log(selectCategory);
    // to update the json server
    await updateCategory(categoryId,selectCategory)
    getCategories()


  }

  




  return (
  
   <>
   <div className='d-grid ms-3'>
    <button  onClick={handleShow} className='btn btn-info' >Create Category</button>
   </div>

    {
        allCategories?.length>0?allCategories?.map(item=>(
          <div className='m-3 border rounded p-3  '  droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>VideoDrop(e,item?.id)}  >
            <div  className="d-flex justify-content-between align-items-center">
              <h6>  {item?.categoryName}  </h6>
              <div className="d-flex">
              <button  onClick={()=>handleDelete(item?.id)} className='btn btn-danger me-2 '><i className='fa-solid fa-trash '></i></button>
              <button className='btn btn-secondary' onClick={handleedit} >Edit</button> 
              </div>
            </div>
            
            <Row>
  {
    item?.allVideos &&
    item?.allVideos.map(card => {
      if (card) {
        return (
          <Col sm={12}>
            <VedioCard displayData={card}  insideCategory={true} />
          </Col>
        );
      } else {
        return null;
      }
    })
  }
</Row>
            
          </div>
        )):
        <p>Nothing to display</p>

    } 

    

   <Modal
        show={show}
        onHide={handleClose} 
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form className='rounded border border-info p-3'>
              <Form.Label>Enter Category Name</Form.Label>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Enter Category Name" onChange={(e)=>setCategoryName(e.target.value)} />
      </Form.Group>
            </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} variant="btn btn-info">Add </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer
      position='top-center'
      theme='colored'
      autoClose={2000}
      hideProgressBar= "false"

      />
   
   </>
  )
}

export default Category