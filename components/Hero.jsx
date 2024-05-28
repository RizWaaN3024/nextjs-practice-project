import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Download, Send } from 'lucide-react'
import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine
} from 'react-icons/ri'
import DevImg from './DevImg'
import Badge from './Badge'
import Socials from './Socials'

const Hero = () => {
  return (
    <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none '>
      <div className="container mx-auto">
        <div className='flex justify-between gap-x-8'>
            {/* Text */}
            <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
                <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>Web Developer</div>
                <h1 className='h1 mb-4'>Hello, my name is Ryan Davis</h1>
                <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>Brief description with insights into myself, my vocational journey, and what I engane in professionally</p>
                {/* Buttons */}
                <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
                <Link href='/contact'>
                    <Button className="gap-x-2">
                        Contact Me <Send size={18}/>
                    </Button>
                </Link>
                <Button variant='secondary' className="gap-x-2">
                         Download CV <Download size={18}/>
                </Button>
                </div>
            </div>
            {/* Image */}
            <div className='hidden xl:flex relative'>Image</div>
        </div>
        <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
            <RiArrowDownSLine className='text-3xl text-primary'/>
        </div>
      </div>
    </section>
  )
}

export default Hero
