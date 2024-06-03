import React from 'react'
import Socials from './Socials'

const Footer = () => {
  return (
    <footer className='bg-seconadry py-12'>
      <div className='container mx-auto'> 
      <div className='flex flex-col items-center justify-between'>
        {/* socials */}
        <Socials containerStyles={`flex gap-x-6 mx-auto xl:mx-0 mb-4`} iconStyles={`text-primary text-[20px] dark:text-white/70 hover:text-white dark:hover:text-primary transition-all`}/>
        {/* copyright */}
        <div className='text-muted-foreground'>
          Copyright &copy; Ryan Davis. All rights reserved.
        </div>
      </div>

      </div>
      
    </footer>
  )
}

export default Footer
