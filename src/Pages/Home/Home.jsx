import React from 'react'
import Navbar from '../../Components/NavBar/Navbar'
import Sidebar from '../../Components/SideBar/Sidebar'
import Widget from '../../Components/Widget/Widget'
import Chart from '../../Features/Chart'
import Circle from '../../Features/Circle'
import './home.scss'
const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className='feature'>
          <Circle />
          <Chart />
          {/* <Table/> */}
        </div>
      </div>
    </div>
  )
}

export default Home