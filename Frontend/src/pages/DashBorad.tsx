import React from 'react'
import Main from '../components/MainContent'
import SideBar from '../components/SideBar'
import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'
import Signup from './Signup'

const DashBorad = () => {
  const {isAuthenticated} = useSelector((state: RootState) => state.user)
  if(!isAuthenticated) {
    return <Signup />
  }
  return (
    <div className='flex'>
      <SideBar />
      <Main  />
    </div>
  )
}

export default DashBorad