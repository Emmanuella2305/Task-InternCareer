import React, {useContext, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import { UserContext} from '../context/UserContext';

const DeletePosts = () => {
  const navigate = useNavigate();

  const {currentUser} = useContext(UserContext)
  const token = currentUser?.token;

  // redirect to login page for any user who isn't looged in
  useEffect(() => {
    if(!token) {
      navigate('/login')
    }
  }, [])
  return (
    <div>DeletePosts</div>
  )
}

export default DeletePosts
