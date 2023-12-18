import React, { useState, useEffect } from 'react'
import VideoCard from './VideoCard'
import { Row, Col } from 'react-bootstrap'
import { getvideos } from '../services/allApis'


function View({serverRes}) {
  const [deleteState,setDeleteState]=useState(false)
  const handleDeleteStatus=()=>{
    setDeleteState(true)
  }
  const [allVideos, setAllVideos] = useState([])
  const getVideos = async () => {
    let response = await getvideos()
    setAllVideos(response.data)
    console.log(allVideos);

  }
  useEffect(() => {
    getVideos()
  },[serverRes,deleteState])

  return (
    <div className='p-3 border rounded'>
      <Row>
        {
          allVideos.map((item) => (
            <Col sm={12} md={6} className='mb-3'>
              <VideoCard video={item} handleDeleteStatus={handleDeleteStatus} />
            </Col>
          ))
        }


      </Row>
    </div>
  )
}

export default View