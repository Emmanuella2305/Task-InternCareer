import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Avatar from '../images/avatar1.jpg'
import axios from 'axios'
import ReactTimeAgo from 'react-time-ago'
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

const PostAuthor = ({authorId,createdAt}) => {
  const [author, setAuthor] = useState({})


  useEffect(() => {
    const getAuthor = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/${authorId}`)

      } catch (error) {
        console.log(error)
      }
    }

     getAuthor();
  }, [])
  return (
    <Link to={`/posts/users/sdfsdf`} className='post_author'>
      <div className="post_author-avatar">
          <img src={Avatar} alt=''/>

      </div>
      <div className="post_author-details">
         <h5>By: Emma Smith</h5>
         <small>Just Now</small>
      </div>
    </Link>
  )
}

export default PostAuthor
/*on line 25 the backend side use this/=========={`${process.env.REACT_APP_BASE_URL}/uploads${author?.avatar}`}=======*/
/*<small><ReactTimeAgo data={new Date(createdAt)} locale='en-us'/></small>*/