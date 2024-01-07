import React from 'react'
import AsideItems from './AsideItems';
import BlockDetails from './BlockDetails';

function Details() {
  return (
      <div className=' flex my-6 bg-white p-6'>
          <BlockDetails/>
          <AsideItems/>
    </div>
  )
}

export default Details;