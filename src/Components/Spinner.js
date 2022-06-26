import React from 'react'
import loading from './loading.gif'

export default function Spinner() {
  return (
    <>
      <div className="text-center">
        <img className='my-3' height="30x" src={loading} alt="loading" />
      </div>
    </>
  )
}
