import React from 'react'

function Contact() {
  return (
    <div className='flex bg-myColor2 text-myColor1 p-20 justify-around' id='contact'>
        <div className='py-10 px-20'>
          <h1 className='text'>Contact Us Now</h1>
          <p className='opacity-90 font-thin'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique est earum harum.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, delectus!
          </p>
        </div>

        <div>
          <div className='flex '>
            <div className='flex flex-col px-3'>
            <label htmlFor="name">Name</label>
            <input type="text" id='name 'className='bg-myColor4'/>

            </div>
            <div className='flex flex-col px-3'>
            <label htmlFor="email">Email</label>
           
           <input type="email"  id="email" className='bg-myColor4'/>

            </div>
          

            
          </div>
          <div className='flex flex-col px-3'>
          <label htmlFor="message">Message</label>
         <textarea id="message" cols="40" rows="3" className='bg-myColor4'></textarea>

          </div>
          
        </div>

      </div>
  )
}

export default Contact