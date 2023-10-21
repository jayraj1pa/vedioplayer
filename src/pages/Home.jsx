import React, { useState } from 'react'
import Add from '../components/Add';
import { Link } from 'react-router-dom';
import View from '../components/View';
import Category from '../components/Category';

function Home() {
    const [deleteVideoStatus,setDeleteVedioStatus] = useState(false)


  const[uploadVedioServerResponse,setUploadVedioServerResponse] = useState({})

  return (
<>
      <div className="container mt-5 mb-5 d-flex justify-content-between align-items-center w-100 ">
        <div className="add-vedios ">
          <Add setUploadVedioServerResponse={setUploadVedioServerResponse} />
        </div>
          <Link to={"/WatchHistory"} className="fs-5" style={{textDecoration:"none",color:"White"}} >Watch History</Link>
      </div>

      <div className="container-fluid mt-5 mb-5 d-flex  justify-content-between w-100 " >
        <div className="all-videos col-lg-9 ">
          <h2>All Videos</h2>
          <View uploadVedioServerResponse={uploadVedioServerResponse} />
        </div>
        <div className="category col-lg-3 ">
          <Category/>
        </div>
      </div>


</>
    )
}

export default Home