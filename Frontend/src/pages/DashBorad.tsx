import React, { useEffect } from 'react'
import Main from '../components/MainContent'
import SideBar from '../components/SideBar'
import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'
import Signup from './Signup'
import { axiosInstanceContent } from '../api/axiosInstance'

const DashBorad = () => {
  console.log("Reached Dahsboard")
  useEffect(() => {
    async function fetAllContent() {
      const res = await axiosInstanceContent("/all");
      console.log(res)
    }
    fetAllContent()
  }, [])
  const {isAuthenticated, username, id} = useSelector((state: RootState) => state.user);
  console.log("Dashboard", username, id)
  if(!isAuthenticated) {
    return <Signup />
  }
  return (
    <div className='flex'>
      <SideBar />
      <Main username={username} id={id}  />
    </div>
  )
}

export default DashBorad