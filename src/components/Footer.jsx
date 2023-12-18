import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <div className='d-flex flex-column bg-info text-light justify-content-center align-items-center' style={{ height: '300px', width: '100%' }}>
            <div className='d-flex justify-content-evenly w-100' >
                <div className="website" style={{width:'350px'}}>
                    <h2><i className="fas fa-cloud-upload-alt"></i>{' '}Media Player</h2>
                    <div>
                        React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.
                    </div>
                </div>
                <div className="links d-flex flex-column">
                    <h2>Links</h2>
                    <Link to={'/'} style={{textDecoration:'none'}}>Landing Page</Link>
                    <Link to={'/'} style={{textDecoration:'none'}}>Home</Link>
                    <Link to={'/'} style={{textDecoration:'none'}}>Watch History</Link>
                </div>
                <div className="guides d-flex flex-column">
                    <h2>Guides</h2>
                    <Link to={'https://react.dev/'} style={{textDecoration:'none'}}>React</Link>
                    <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none'}}>Bootstrap</Link>
                    <Link to={'https://fontawesome.com/v5/search'} style={{textDecoration:'none'}}>Fontawesome</Link>
                </div>
            </div>
            <p className='mt-2'>Copyright © Media Player 2023 All rights reserved. </p>
        </div>
    )
}

export default Footer