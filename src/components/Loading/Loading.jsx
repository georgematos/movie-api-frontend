import React from 'react'
import './Loading.css'

const Loading = () => {
  return (
    <div className="d-flex justify-content-center spinner">
      <div className="spinner-border" role="status" />
    </div>
  )
}

export default Loading