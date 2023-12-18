import React, { useState, useEffect } from 'react'
import { Button, Modal, Form, FloatingLabel } from 'react-bootstrap'
import { toast, ToastContainer } from 'react-toastify';
import { addcategory, getcategories, delcategory, updatecategory, getSpecififcVideos } from '../services/allApis';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import { Row, Col, Card } from 'react-bootstrap'
import VideoCard from './VideoCard';


function Category() {
  const [category, setCategory] = useState({
    id: '', categoryName: '', allVideos: []
  })
  const [sourceData, setSourceData] = useState({})
  const [catList, setCatList] = useState([])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addCategoryForm = (e) => {
    const { name, value } = e.target
    setCategory({ ...category, [name]: value })
  }
  const handleAddCategory = async () => {
    const { id, categoryName } = category
    if (!id || !categoryName) {
      toast.warning("Please fill in completely!")
    }
    else {
      const response = await addcategory(category)
      if (response.status >= 200 && response.status < 300) {
        listcategory()
        setShow(false)
        toast.success("New Video Uploaded!!")
      }
      else {
        toast.error("Post With Unique ID!!")
      }
    }
  }
  const listcategory = async () => {
    const cat = await getcategories()
    if (cat.status >= 200 && cat.status < 300) {
      setCatList(cat.data)
    }

  }

  const handleCatDelete = async (id) => {
    const res = await delcategory(id)
    if (res.status >= 200 && res.status < 300) {
      toast.success("Category Deleted!!")
      listcategory()
    }
  }

  const dragOver = (e) => {
    e.preventDefault()
    console.log("Dragged")
  }

  const dropped = async (e, id) => {
    e.preventDefault()
    console.log("category id:", id);
    let videoid = e.dataTransfer.getData("cardid")
    console.log("videoid", videoid)
    const resp = await getSpecififcVideos(videoid)
    setSourceData(resp.data) 
    let selectedCategory = catList.find(item => item.id === id)
    selectedCategory.allVideos?.push(resp.data)
    let res = await updatecategory(id, selectedCategory)


  }

  useEffect(() => {
    listcategory()
  }, [])
  console.log(catList)



  return (
    <>
      <div className='d-grid'>
        <Button className='btn btn-dark p-2' onClick={handleShow}>Add Categories</Button>
      </div>

      {
        catList.map((item) => (
          <div>
            <div className='border rounded my-2 p-3' droppable onDragOver={e => dragOver(e)} onDrop={e => dropped(e, item?.id)}>

              <span>{item?.categoryName}</span>
              <span style={{ float: 'right' }} className='btn' onClick={() => handleCatDelete(item?.id)}><i className='fa fa-trash text-danger'  ></i></span>
              <Row className='mt-5'>

                {item?.allVideos.map((i) => (
                  <Col sm={12}>
                    <VideoCard video={i} incategory={true} />
                  </Col>
                ))}
              </Row>
            </div>


          </div>
        ))
      }

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel controlId="floatingId" label="Catgory id" className="mb-3">
              <Form.Control type="text" placeholder="Category ID" name='id' onChange={(e) => addCategoryForm(e)} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingname" label="Category Name" className="mb-3">
              <Form.Control type="text" placeholder="Category Name" name='categoryName' onChange={(e) => addCategoryForm(e)} />
            </FloatingLabel>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  )
}

export default Category