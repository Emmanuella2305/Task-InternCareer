import React, { useState } from 'react'
import { DUMMY_POSTS } from '../data'
import PostItem from '../Components/PostItem'

const CategoryPosts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS)
  return (
    <section>
      {posts.length > 0 ? <div className="container posts__container">
        {
            posts.map(({id, thumbnail, title, category, description, autherID}) => <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={description} autherID={autherID} />)
        }
      </div> : <h2 className='center'>No posts found</h2> }
    </section>
  )
}

export default CategoryPosts

