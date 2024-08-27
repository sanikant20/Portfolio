import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import TaskTrackerApp from '../Components/Projects/TaskTrackerAppDetails'

const tasktrackerappScreen = () => {
  return (
    <div>
      <NavBar />
      <TaskTrackerApp />
      <Footer />
    </div>
  )
}

export default tasktrackerappScreen