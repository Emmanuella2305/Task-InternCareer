import React,{useContext, useEffect, useState} from 'react'
import PostAuthor from '../Components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog22.jpg'
import {userContext} from 'react'
import Loader from '../Components/Loader'
import DeletePost from './DeletePosts'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail_container">
       <div className="post-detail_header">
          <PostAuthor/>
          <div className="post-detail_buttons">
            <Link to={`/post/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/post/werwer/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This is the post title</h1>
        <div className="post-detail_thumbnail">
            <img src={Thumbnail} alt='' />
        </div>
       <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facere mollitia, perferendis, minima labore expedita reiciendis voluptas ullam iste dolore quasi repellat praesentium dolores dignissimos, illum aspernatur libero suscipit aut officiis voluptatibus modi corporis consequuntur unde? Similique quas culpa sunt.
       </p>
       <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero explicabo perferendis suscipit quisquam esse natus, accusantium sed illum accusamus nulla. Dolores at odit eveniet provident eaque mollitia, sed numquam officia eos sapiente, dolorum quisquam rem architecto temporibus? Nesciunt magni nobis aspernatur itaque iure alias? Reprehenderit officia adipisci rerum. Cumque et odio reiciendis aliquam saepe eligendi!
       </p>
       <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita nesciunt incidunt ducimus doloribus, quam veniam iusto repudiandae, veritatis distinctio officiis ipsum deleniti eum mollitia qui laboriosam. Maiores fugit aspernatur, tenetur libero blanditiis suscipit perferendis. Earum incidunt saepe ipsam asperiores molestiae veniam cum vero temporibus quibusdam totam nostrum neque excepturi est ex provident, magni optio voluptas expedita odio facere. Facere expedita nostrum aliquam atque perferendis nam accusantium repellat, cumque libero excepturi velit est provident eos omnis eius illo ad minus, voluptatem voluptate? Nulla cupiditate et omnis corporis sapiente voluptate placeat necessitatibus fugiat deleniti, natus ad facere autem assumenda laboriosam nostrum expedita architecto labore. Modi illo nobis doloremque pariatur molestiae iure. Quasi, expedita?
       </p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus placeat voluptatibus ut debitis reprehenderit magnam optio. Iure, nostrum porro. Dolor.</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sunt autem atque inventore iste tempore dicta vel tenetur quae rerum consequatur sint, quas ducimus voluptates ipsa unde libero voluptatibus necessitatibus explicabo et porro! Eos eveniet culpa rerum sapiente maiores ullam provident quod repudiandae, eligendi necessitatibus ut facere labore expedita, autem nulla numquam placeat deleniti corrupti. Iusto fuga temporibus distinctio est perferendis eum facilis vitae, tempore sapiente fugit aspernatur velit porro tempora quaerat nihil a maiores eos? Eligendi eos ex saepe placeat ipsam. At eligendi libero voluptatibus, debitis in ipsum doloremque consequuntur! Itaque quisquam eum sunt velit magnam eius tempora dolores doloremque harum molestiae? Veritatis ullam adipisci sint aliquam commodi, vel quisquam nobis quibusdam quos praesentium ab ducimus tenetur ipsa harum, explicabo repellat. Itaque reprehenderit quod, officiis, impedit expedita in sed tempore eveniet porro ducimus facere pariatur, modi rem est sunt? Mollitia reprehenderit pariatur distinctio, repellat laboriosam, impedit nobis, eum molestiae tenetur fugiat ex numquam voluptatem commodi quod itaque quasi? Eius ipsum doloremque qui nihil, earum natus quia quas laborum amet nobis ipsa, rem ullam repellendus recusandae iusto neque soluta fuga asperiores dolorum! Odio temporibus ad saepe, cumque facilis enim amet veniam praesentium quisquam cupiditate iste aut aperiam quae animi esse!
       </p>
      </div>
      
    </section>
  )
}

export default PostDetail
