import React from 'react'
import {Link} from "react-router-dom"
import PostAuthor from './PostAuthor'


const PostItem = ({postID, category, title, description, authorID, thumbnail, createdAt}) => {
    const shortDescription = description.lentgth >145 ? description.substr(0, 145) + '...' :description;
    const postTitle = title.lentgth >30 ? title.substr(0, 30) + '...' :title;
  return (
    <article className='post'>
       <div className='post_thumbnail'>
           <img src={thumbnail} alt={title} />
       </div>
       <div className="post_content">
         <Link to={`/posts/${postID}`}>
            <h3>{postTitle}</h3>
         </Link>
         <p>{shortDescription}</p>
         <div className="post_footer">
            <PostAuthor authorID={authorID} createdAt={createdAt}/>
            <Link to={`/posts/categories/${category}`}>{category}</Link>
         </div>
       </div>
    </article>
  )
}

export default PostItem
/*on line 12 use this code <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${thumbnail}`} alt={title} />*/