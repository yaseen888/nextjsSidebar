import React from 'react'
import Navbar from './Navbar'

const ResponsiveNav = () => {
  return (
    <div style={{position:'sticky', top:0, zIndex:1000}}>
      <Navbar />
    </div>
  );
}

export default ResponsiveNav