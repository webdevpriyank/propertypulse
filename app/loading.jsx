'use client';

import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

const loading = ({loading}) => {

    const override = {
        display: 'block',
        margin: '100px auto'
    }

  return (
    <ClipLoader 
        color='#3b82f6'
        loading={loading}
        size={100}
        cssOverride={override}
        area-label="Loading..."
    />
  )
}

export default loading