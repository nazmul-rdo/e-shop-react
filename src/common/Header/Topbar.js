import React from 'react'
import Head from './Head';
import Search from './Search';

const Topbar = ({carditem}) => {
   
    
  return (
    <div className="container-fluid">
        <Head />
        <Search carditem={carditem} /> 
    </div>
  )
}

export default Topbar