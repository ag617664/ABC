import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactImage from './images/image1.jpg'
import Ap from './index.jsx'
import { HashLink as Link } from 'react-router-hash-link'
// import {Link} from 'react-router-dom'
import Contact from './Components/Contact';
import About from './Components/About.jsx';
import Installation from './Components/Installation.jsx';


function App() {
  return (
    <BrowserRouter>

    <div>
      <div className=' bg-myColor1 w-full sticky top-0 p-2 z-40 flex justify-between'>
        <button className='bg-myColor6 text-myColor1 opacity-90 p-2 rounded-3xl   font-semibold'>Customize</button>
        <ul className='flex text-myColor6 font-semibold px-4 self-center'>
          <Link to='#about' smooth><li className='px-3 cursor-pointer'>About</li></Link>
          <li className='px-3 cursor-pointer' ><Link to='#services' smooth>Services</Link></li>
          <li className='px-3 cursor-pointer' ><Link to='#contact' smooth>Contact</Link></li>
          
          
          
        </ul>

        
      </div >
      <button className='text-myColor6 bg-myColor1 p-2 rounded-3xl fixed bottom-2 right-2 z-40 font-bold'>Regenerate</button>
      <nav className='bg-myColor flex justify-between py-3 px-5'>

        <h1 className='font-semibold text-2xl px-20 tracking-wider'>ASGRV</h1>
        <ul className='flex justify-between  w-1/12 px-4 self-center'>
          <li className='cursor-pointer'><FaFacebook /></li>
          <li className='cursor-pointer'><FaSquareInstagram /></li>
          <li className='cursor-pointer'><FaXTwitter /></li>
        </ul>
      </nav>
      <div className='bg-p text-white opacity-100 py-32 bg-cover pr-36 pl-28'>

        <div className='w-9/12 '>
          <div className='leading-10'>
          <h1 className='text-myColor1  text-4xl tracking-wider font-medium'>Get Expert</h1>
        <h1 className=' text-myColor1 text-4xl tracking-wider font-medium '>Installation Services</h1>

          </div>

        
        <p className='text-myColor1 mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consequuntur itaque nihil omnis ad voluptates ullam eum, enim molestias commodi labore.</p>
        <button className=' rounded-3xl p-2 border-myColor1 border-2 text-myColor1 opacity- mt-10'>
          Contact Now
        </button>

        </div>
        
      </div>
      <About/>
      <Installation/>
      
      
      
        
      <div className='flex bg-myColor2 flex-wrap py-12 px-10 justify-around'>
        <img src={ReactImage} alt="Image" className='w-60 h-60  pt-5  rounded-lg'/>
        <img src={ReactImage} alt="Image" className='w-60 h-60   pt-5 rounded-lg'/>
        <img src={ReactImage} alt="Image" className='w-60 h-60  pt-5 rounded-lg'/>
        <img src={ReactImage} alt="Image" className='w-60 h-60  pt-5 rounded-lg'/>
        <img src={ReactImage} alt="Image" className='w-60 h-60 pt-5 rounded-lg'/>
        
      </div>
      <div className='opacity-95 bg-myColor2 z-1'>
        <div className='flex justify-center'>
          <div className='p-10'>
          <Ap/>
            
          </div>
          
          <div className='flex flex-col  self-center '>
          <span className='text-myColor1'>Location</span>
          <span className='text-myColor1 font-light opacity-95'>New Delhi</span>

          </div>
          
        </div>
      </div>
      <Contact/>
      
      <div className='text-myColor1 bg-myColor5 opacity-100 flex justify-between p-10'>
        <h1 className='text-2xl'>ASGRV</h1>
        <ul className='flex justify-between  w-1/12 px-4 self-center'>
          <li className='cursor-pointer'><FaFacebook /></li>
          <li className='cursor-pointer'><FaSquareInstagram /></li>
          <li className='cursor-pointer'><FaXTwitter /></li>
        </ul>

      </div>
    </div>
    </BrowserRouter>
  )
}

export default App