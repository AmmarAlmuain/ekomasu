import React from 'react'
import ContentMain from './ContentMain/ContentMain'
import Details from './Details/Details'
import Recommend from './Recommend/Recommend'

function Preview() {
  return (
      <section className='bg-wall w-full max-w-[1180px] justify-center flex flex-col m-auto'>
          <ContentMain />
          <Details />
          <Recommend/>
   </section>
  )
}

export default Preview;