import React, { useState, useEffect } from 'react'
import { viewhistory } from '../services/allApis'
import { Link } from 'react-router-dom'

function Watch() {
  const [history, setHistory] = useState([])

  const allHistory = async () => {
    let { data } = await viewhistory()
    console.log(data)
    setHistory(data)
  }
  useEffect(()=>{
    allHistory()
  },[])

  return (
    <div>
      <Link to={'/home'} className='m-5 text-info'><i className="fa fa-backward"></i>Back</Link>
      <table className='table my-5 mx-3 shadow table-bordered'>
        <tr>
          <th>ID</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Date</th>
        </tr>
        {
          history?.map((item, index) => ((
            <tr>
              <td>{index+1}</td>
              <td>{item?.caption}</td>
              <td>{item?.url}</td>
              <td>{item?.date}</td>
            </tr>
          )))
        }
          
      </table>
    </div>
  )
}

export default Watch