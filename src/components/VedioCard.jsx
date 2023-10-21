import { useState } from 'react';
import React from 'react';
import { Card,Modal } from 'react-bootstrap';
import { deleteAVideo } from '../services/allAPI';
import { addToHistory } from '../services/allAPI';

function VedioCard({displayData,setDeleteVedioStatus,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () =>  {
    setShow(true);

    const {caption,embedLink} = displayData
    const today =  new Date()
    const timeStamp = new Intl.DateTimeFormat('en-us',{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(today)

    let videoDetails = {
      caption,embedLink,timeStamp
    }
    await addToHistory(videoDetails)
  }


  const handleDelete = async (id)=>{
     const response  = await deleteAVideo(id)
     setDeleteVedioStatus(true)
     console.log(response);

  }

  const dragStarted = (e,id)=>{
    console.log(e);
    e.dataTransfer.setData("videoId",id)
  }

  return (
    <>
      <Card className='mb-3' draggable onDragStart={(e)=>dragStarted(e,displayData?.id)} >
        <Card.Img onClick={handleShow} maxHeight={"190px"}  variant="top"  src={displayData?.url} />
        <Card.Body >
          <Card.Title className='d-flex align-items-center justify-content-between' >
            <h6> {displayData?.caption}</h6>
            {  insideCategory?"":<button onClick={()=>handleDelete(displayData?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button> }
          </Card.Title>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="315" src={`${displayData?.embedLink}?autoplay=1`} title={displayData.caption}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
</Modal.Body>
      </Modal>
    </>
  );
}

export default VedioCard;
