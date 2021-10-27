import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'

const Details = () => {
  const location = useLocation()
  const history = useHistory()
  const { post } = location.state
  const { title, abstract, published_date, byline, media } = post
  return (
    <div className='w-1/2 mx-auto flex flex-col'>
      <div>
        <h1 className='text-4xl font-bold text-center my-10 px-10'>{title}</h1>
        <div className="flex justify-between px-4">
          <p className="font-light w-60">{byline}</p>
          <p className="font-light">{published_date}</p>
        </div>
      </div>
      <section className='my-10'>
        <article className='leading-loose tracking-wide'>{abstract}</article>
      </section>
      <div>
        <img className='w-full' src={media[0]['media-metadata'][2].url} alt="pic" />
        <p className='font-extralight text-sm py-3'>{media[0].caption}</p>
      </div>
      <button className='text-center w-20 h-10 my-10 mx-auto border rounded-md bg-green-500 shadow-sm text-white' onClick={()=> history.push('/')}>Back</button>
    </div>
  )
}

export default Details
