import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
  const { title, byline, media, published_date } = post
  return (
    <Link to={{ 
      pathname: '/details', 
      state: { post } 
      }}
      className='rounded-xl w-2/3 shadow-md my-2 px-5 py-2 border cursor-pointer bg-white'>
      <div className='flex justify-start items-center'>
        <img className='w-32 rounded-full' src={media[0]['media-metadata'][0].url} alt="pic" />
        <div className='w-full px-5'>
          <h4 className='font-thin font text-3xl '>{title}</h4>
          <div className='flex mt-5 justify-between items-end h-3/5 md:flex-row sm:flex-col'>
            <p>{byline}</p>
            <p>{published_date}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Post
