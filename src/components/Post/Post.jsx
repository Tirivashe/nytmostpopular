import React from 'react'
import { Link } from 'react-router-dom'
import PostCard from '../PostCard/PostCard'

const Post = ({ post }) => {
  const { title, byline, media, published_date } = post
  
  if(media.length === 1) {return (
    <Link to={{ pathname: '/details', state: { post } }} className='rounded-xl w-2/3 shadow-md my-2 px-5 py-2 border cursor-pointer bg-white'>
      <PostCard title={title} byline={byline} media={media} published_date={published_date}/>
    </Link>
    )}else{
      return null
    }
  }

export default Post
