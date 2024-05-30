
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
                        <TabsList>
                            <TabsTrigger value='personal'>Personal Info</TabsTrigger>
                            <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
                            <TabsTrigger value="skills">Skils</TabsTrigger>
                        </TabsList>
                        {/* Tabs Content */}
                        <div className='text-lg mt-12 xl:mt-8'>
                            <TabsContent value="personal">
                                Personal Info
                            </TabsContent>
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
