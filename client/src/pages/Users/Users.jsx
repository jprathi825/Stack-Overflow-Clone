import React from 'react'
import { useLocation } from 'react-router-dom'

import UsersList from './UsersList'
import './Users.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar' 
const Users = () => {

    const location = useLocation();

  return (
    <div className='home-container-1'>
        <LeftSidebar/>
        <div className="home-container-2">
          <h1>Users</h1>
          <UsersList/>
        </div>
    </div>
  )
}

export default Users