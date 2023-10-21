import React from 'react'
import { useState } from 'react';
import {Button,Modal,Form} from 'react-bootstrap';
import { uploadVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setUploadVedioServerResponse}) {
  const [video,setVideo] = useState({
    id:"",
    caption:"",
    url:"",
    embedLink:""
  })




  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(video);


  const getEmbedLink = (e)=>{
    const {value} = e.target
    if(value){
      const link = `https://www.youtube.com/embed/${value.slice(-11)}`
      setVideo({...video,embedLink:link})
    }else{
      setVideo({...video,embedLink:""})
    }
  }


  const handleUpload = async ()=>{
    const {id,caption,url,embedLink} = video
    if(!id || !caption || !url || !embedLink){
      toast.warning("please fill the form completely")
    }else{
      const response =  await uploadVideo(video)
      if(response.status>=200 && response.status<300){
        setUploadVedioServerResponse(response.data)
        toast.success(`${response.data.caption} video uploaded successfully `)

        setVideo({
          id:"",caption:"",url:"",embedLink:""
        })

        handleClose()
      }else{
        console.log(response);
            toast.error("please prrovide unique id")
      }
    }
  }

  return (
        <>
            <div className='d-flex align-items-center'>
              <h5>Upload New Vedio</h5>
                <button onClick={handleShow} className='btn' ><i class="fa-solid fa-circle-plus fs-3"></i> </button>
            </div>
            <Modal
        show={show}
        onHide={handleClose} 
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload A Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>Please Fill the following details</p>
            <Form className='rounded border border-info p-3'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Enter Video ID" onChange={(e)=>setVideo({
          ...video,id:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Enter Vedio Caption" onChange={(e)=>setVideo({
          ...video,caption:e.target.value
        })} />
      </Form.Group> <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Enter Video Image URL" onChange={(e)=>setVideo({
          ...video,url:e.target.value
        })} />
      </Form.Group> <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Enter Youtube Video Link"  onChange={getEmbedLink} />
      </Form.Group>
            </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="btn btn-info" onClick={handleUpload} >Upload</Button>
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

export default Add