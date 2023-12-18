import React,{useState} from 'react'
import { Row,Col } from 'react-bootstrap'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'
import { Link } from 'react-router-dom'

function Home() {
  const [serverRes,setServerRes]=useState({})
  const handleState=(res)=>{
    setServerRes(res)
  }
  return (
    <div>
      <h1 className='text-info mx-5 mb-5 mt-3 d-flex justify-content-between'>
        All Videos
        <Link to={'/watch'} style={{fontSize:'20px',textDecoration:'none',color:'blue'}}>Watch History</Link>
        </h1>
      <div className='container-fluid'>
        <Row className='ms-5 mb-5'>
            <Col md={1}>
              <Add handleState={handleState}/>
            </Col>
            <Col md={7}>
              <View serverRes={serverRes}/>
            </Col>
            <Col >
              <Category/>
            </Col>
        </Row>

      </div>

    </div>
  )
}

export default Home