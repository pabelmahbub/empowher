import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

function BlogDetail() {
    const [data, setData] = useState([])
    const {id} = useParams()


    fetch(`https://empower-server-production.up.railway.app/blogs/${id}`)
      .then(response => response.json())
      .then(json => setData(json))

  return (
    <div>
      <h2>{data.Date}</h2>
      <h2>{data.Title}</h2>
      <h2>{data.Name}</h2>

    </div>
  )
}

export default BlogDetail
