import React from 'react'
import { Row, Col, Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function Landing() {
    const navigateByUrl=useNavigate()

    const navigateTo=()=>{
        navigateByUrl('/home')
    }

    return (
        <div>
            <Row className='mb-5 mt-5 align-items-center justify-content-evenly'>
                <Col md={4}>
                    <h2>Welcome to <h2 className='text-danger fw-bold d-inline fw-bold'>MediaPlayer.com</h2></h2>
                    <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis metus nec quam viverra,
                        quis viverra tellus ullamcorper. Sed vitae mollis sapien. Duis gravida gravida velit, in volutpat
                        sem faucibus sit amet. Donec non lacinia urna, eu vestibulum sapien. Mauris tristique, erat eget
                        lacinia sollicitudin, mauris dolor sagittis nunc, ut volutpat felis ligula ut metus. Nullam tincidunt
                        nulla et nunc ultricies ultricies. Cras ac mauris venenatis, consequat neque quis, luctus lorem.
                        Duis sapien nisi, efficitur et turpis sed, placerat vestibulum ante. Vestibulum commodo viverra metus.</p>
                    <Button className='fw-bold btn btn-success mt-2' onClick={navigateTo} >Get Started</Button>
                </Col>
                <Col md={5}>
                    <img src="https://www.samemovie.com/assets/img/blog/netflix-vd-banner-blog.png"
                        className='img-fluid' alt="landing" />
                </Col>
            </Row>
            <div className='features mt-5 d-flex flex-column align-items-center'>
                <h2>Features</h2>
                <div className='feturecards d-flex align-item-center justify-content-between w-100 p-5'>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" height={'250px'} src="https://media.tenor.com/2jd3xi2WVt0AAAAC/recurring-settings.gif" />
                        <Card.Body>
                            <Card.Title>Managing Videos</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" height={'250px'} src="https://cdn.dribbble.com/users/3191392/screenshots/6446992/dribb.gif" />
                        <Card.Body>
                            <Card.Title>Categorizing Videos</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" height={'250px'} src="https://assets.materialup.com/uploads/0c2ee7bc-a181-44b1-b057-b6c6b00c4f01/preview.gif" />
                        <Card.Body>
                            <Card.Title>Watch History</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </div>
                <div className='border p-3 mb-5 container border-danger shadow d-flex align-items-center justify-content-evenly'>
                    <div width='50%'>
                        <h2 className='text-warning'>Simple,Fast and Secure</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis metus nec quam viverra,
                            quis viverra tellus ullamcorper. Sed vitae mollis sapien. Duis gravida gravida velit, in volutpat
                            sem faucibus sit amet. Donec non lacinia urna, eu vestibulum sapien. Mauris tristique, erat eget
                            lacinia sollicitudin, mauris dolor sagittis nunc, ut volutpat felis ligula ut metus. Nullam tincidunt</p>
                    </div>
                    <div>
                        <iframe width="560px" height="315" src="https://www.youtube.com/embed/y9n6HkftavM?si=EEAJIOzYzeXVy2a-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Landing