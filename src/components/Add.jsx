import React, { useState } from 'react'
import { Modal, Button,FloatingLabel,Form } from 'react-bootstrap';
import {addvideos} from '../services/allApis'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({handleState}) {
  const [upload,setUpload]=useState({
    id:'',caption:'',thumbnail:'',url:''
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setInput=(e)=>{
    
    const {name,value}=e.target
    setUpload({...upload,[name]:value})
  }

  const extractUrl=(e)=>{
    let youtubeUrl=e.target.value
    if(youtubeUrl.includes("v=")){
      let index=youtubeUrl.indexOf("v=")
      let url=youtubeUrl.substring(index+2,index+13)
      let videoData=upload
      videoData.url=`https://www.youtube.com/embed/${url}`
      setUpload(videoData)
    }
    console.log(upload)
  }
  // console.log(upload)
  const handleAdd=async ()=>{
    const {id,caption,thumbnail,url}=upload

    if(!id || !caption || !thumbnail || !url){
      toast.error("Please in fill in every field!!!!")
    }
    else{
      const response=await addvideos(upload)
      if(response.status>=200 && response.status<300){
        handleState(response.data)
        // console.log(response)
        setShow(false)
        toast.success("New Video Uploaded!!")
      }
      else{
        toast.error("Post With Unique ID!!")
      }
    }
  }
  return (
    <>
      <div className='btn container' onClick={handleShow}>
        <i class="fas fa-plus-circle fa-2x"></i>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel controlId="floatingId" label="Video id" className="mb-3">
              <Form.Control type="text" placeholder="Video ID" name='id' onChange={(e)=>setInput(e)} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingcaption" label="Video Caption" className="mb-3">
              <Form.Control type="text" placeholder="Video Caption" name='caption' onChange={(e)=>setInput(e)} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingUrl" label="Video Cover Image Url" className="mb-3">
              <Form.Control type="text" placeholder="Video Cover Image URL" name='thumbnail' onChange={(e)=>setInput(e)} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingId" label="Video URL" className="mb-3">
              <Form.Control type="text" placeholder="Youtube Video URL" name='url' onChange={(e)=>extractUrl(e)} />
            </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <div onClick={handleClose}>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
          </div>
        </Modal.Footer>
      </Modal>
      <ToastContainer/>
    </>
  )
}

export default Add