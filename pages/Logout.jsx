import React, {userContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

import { UserContext } from '../context/UserContext'

const Logout = () => {
  const {setCurrentUser}= userContext(UserContext)
  const navigate = useNavigate();

  setCurrentUser(null)
  navigate('/login')
  return (
    <></>
  )
}

export default Logout
