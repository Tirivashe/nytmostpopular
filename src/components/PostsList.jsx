import React from 'react'
import Post from './Post'

const PostsList = ({ posts }) => {
  return (
    <div className='flex flex-col items-center'>
      { posts.map(post => (
        <Post key={post.id} post={post}/>
      )) }
    </div>
  )
}

export default PostsList
