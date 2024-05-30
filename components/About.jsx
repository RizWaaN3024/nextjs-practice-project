
import React from 'react'
import DevImg from './DevImg'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, BriefCase } from 'lucide-react'

const infoData = [
    {
        icon: <User2 size={20}/>,
        text: 'Ryan Davis',
    },
    {
        icon: <PhoneCall size={20}/>,
        text: '867458695',
    },
    {
        icon: <MailIcon size={20}/>,
        text: 'rizwaanans786@gmail.com',
    },
    {
        icon: <GraduationCap size={20}/>,
        text: 'Master on Computer Science',
    },
    {
        icon: <Calendar size={20}/>,
        text: 'Born on 10 Mar, 1998',
    },
    {
        icon: <HomeIcon size={20}/>,
        text: '321 Blue Avenue, NY, USA',
    },

];

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: "Example University",
                qualification: 'Bachelor of Science',
                years: '2015 - 2018'
            },
            {
                university: "Another University",
                qualification: 'Master of Science',
                years: '2019 - 2021'
            },
            {
                university: "Yet Another University",
                qualification: 'Ph.D of Science',
                years: '2021 - 2025'
            },
        ]
    },
    {
        title: 'experience',
        data: [
            {
                university: "ABS Inc",
                qualification: 'Software Engineer',
                years: '2018 - 2020'
            },
            {
                university: "XYZ Corporation",
                qualification: 'Senior Developer',
                years: '2020 - 2022'
            },
            {
                university: "Tech Innovators",
                qualification: 'Lead Developer',
                years: '2020 - Present'
            },
            
        ]
    },
];

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'HTML, CSS',
            },
            {
                name: 'Front-end Development',
            },
            {
                name: 'Javascript, PHP',
            },
            {
                name: 'Back-end Development',
            },
        ]
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: './about/vscode.svg',
            },
            {
                imgPath: './about/figma.svg',
            },
            {
                imgPath: './about/notion.svg',
            },
            {
                imgPath: './about/wordpress.svg',
            },
        ]
    },
]
const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title)
    }
  return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
        <div className='container mx-auto'>
            <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>About me</h2>
            <div className='flex flex-col xl:flex-row'>
                {/* Image */}
                <div className='hidden xl:flex flex-1 relative'>
                    <DevImg containerStyles={`bg-about_shape_light dark:bg-about_shape_dark.svg w-[505px] h-[505px] bg-no-repeat relative`} imgSrc='/about/developer.png' />
                </div>
                {/* Tabs */} 
                <div className='flex-1 '>
                    <Tabs defaultValue='personal'>
                        <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value="qualifications">Qualifications</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value="skills">Skils</TabsTrigger>
                        </TabsList>
                        {/* Tabs Content */}
                        <div className='text-lg mt-12 xl:mt-8'>
                            <TabsContent value="personal">
                                <div className='text-center xl:text-left'>
                                    <h3 className='h3 mb-4'>Unmatched Service Quality for Over 10 Years</h3>
                                    <p className='subtitle max-w-xl mx-auto xl:mx-0'>I specialize in crafting intuitive websites with cutting-edge technology, delivering dynamic and engaging user experiences.</p>
                                    {/* icons */}
                                    <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                                        {infoData.map((item, index) => {
                                            return <div className='flex items-center gap-x-4 mx-auto xl:mx-0' key={index}>
                                                <div className='text-primary'>{item.icon}</div>
                                                <div>{item.text}</div>
                                            </div>
                                        })}
                                    </div>
                                    {/* Languages */}
                                    <div className='flex flex-col gap-y-2'>
                                        <div className='text-primary'>Language Skill</div>
                                        <div className='border-b border-border'></div>
                                        <div>English, French, Spanish, Italian</div>
                                    </div>
                                </div>
                            </TabsContent>
                            {/* Qualifications */}
                            <TabsContent value="qualifications">
                                qualifications Info
                            </TabsContent>
                            <TabsContent value="skills">
                                skills Info
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default About
