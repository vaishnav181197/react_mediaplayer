import React, { useState } from 'react'
import { Card, Modal, Button } from 'react-bootstrap'
import { delvideos } from '../services/allApis';
import { ToastContainer, toast } from 'react-toastify';
import { addhistory } from '../services/allApis';
import { v4 as uuidv4 } from 'uuid';


function VideoCard({ video, handleDeleteStatus, incategory }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    let id = uuidv4()
    let { caption, url } = video
    let date = new Date()
    let body = { id, caption, url, date }
    if (id != "" && caption != "" && url != "" && date != "") {
      const res = await addhistory(body)
      console.log(res)
    }

  }

  const handleDelete = async (id) => {
    const response = await delvideos(id)
    console.log(response)

    if (response.status >= 200 && response.status < 300) {
      // handleState(response.data)
      // setShow(false)
      handleDeleteStatus()
      toast.success(" Video Deleted!!")
    }
    else {
      toast.error("Deletion Failed!!")
    }

  }

  const dragStarted = async (e, id) => {
    console.log(e, id);
    e.dataTransfer.setData('cardid', id)
  }
  return (
    <>
      <div >
        <Card style={{ width: '18rem' }} className='shadow' draggable onDragStart={e => { dragStarted(e, video?.id) }}>
          <Card.Img onClick={handleShow} variant="top" className='img-fluid' height={'200'} src={video?.thumbnail} />
          <Card.Body>
            <span>{video?.caption}</span>
            {incategory ? "" :
              <span className='btn' onClick={() => handleDelete(video?.id)} style={{ float: 'right' }}><i className='fa fa-trash text-danger'  ></i></span>

            }
          </Card.Body>
        </Card>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width={'100%'} height="400" src={`${video?.url}?autoplay=1`} title="Arana puranam | The Legend of Arana | Animation Short Film" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>

      </Modal>
    </>
  )
}

export default VideoCard