import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Services from './Services'
import Footer from './Footer'

const Home = () => {

  
  return (
    <section className=' w-screen  px-10 '>
      <Navbar/>
      <About/>
      <Services/>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        <div>
            <img src="/job.jpg" alt="" className='max-w-lg h-full ' />
        </div>
   
    </div>
      <Footer/>
    </section >
  )
}

export default Home
