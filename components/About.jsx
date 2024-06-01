"use client"
import React from 'react'
import DevImg from './DevImg'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar } from 'lucide-react'
import { Briefcase } from 'lucide-react'

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
                company: "ABS Inc",
                role: 'Software Engineer',
                years: '2018 - 2020'
            },
            {
                company: "XYZ Corporation",
                role: 'Senior Developer',
                years: '2020 - 2022'
            },
            {
                company: "Tech Innovators",
                role: 'Lead Developer',
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
                                    <div>
                                        <h3 className='h3 mb-8 text-center xl:text-left'>My Awesome Journey</h3>
                                        {/* Experience and Education Wrapper */}
                                        <div className='grid md:grid-cols-2 gap-y-8'>
                                            {/* Experience */}
                                            <div className='flex flex-col gap-y-6'>
                                            <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                <Briefcase />
                                                <h4 className='capitalize font-medium'>
                                                    {getData(qualificationData, 'experience').title}
                                                </h4>
                                            </div>
                                                {/* List */}
                                                <div className='flex flex-col gap-y-8'>
                                                    {getData(qualificationData, 'experience').data.map((item, index) => {
                                                        const {company, role, years} = item;
                                                        return(
                                                            <div className='flex gap-x-8 group' key={index}>
                                                                <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                                </div>
                                                                <div>
                                                                    <div className='font-semibold text-xl leading-none mb-2'>{company}</div>
                                                                    <div className='text-lg leading-none text-muted-foreground mb-4'>{role}</div>
                                                                    <div className='text-base font-medium'>{years}</div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                            {/* Education */} 
                                            <div className='flex flex-col gap-y-6'>
                                            <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                <GraduationCap size={28} />
                                                <h4 className='capitalize font-medium'>
                                                    {getData(qualificationData, 'education').title}
                                                </h4>
                                            </div>
                                                {/* List */}
                                                <div className='flex flex-col gap-y-8'>
                                                    {getData(qualificationData, 'education').data.map((item, index) => {
                                                        const {university, qualification, years} = item;
                                                        return(
                                                            <div className='flex gap-x-8 group' key={index}>
                                                                <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                                </div>
                                                                <div>
                                                                    <div className='font-semibold text-xl leading-none mb-2'>{university}</div>
                                                                    <div className='text-lg leading-none text-muted-foreground mb-4'>{qualification}</div>
                                                                    <div className='text-base font-medium'>{years}</div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                            </TabsContent>
                            {/* Skills */}
                            <TabsContent value="skills">
                                <div className='text-center xl:text-left'>
                                    <h3 className='h3 mb-8 '>What I Use Everyday</h3>
                                    <div className='mb-16'>
                                        <h4 className='text-xl font-semibold mb-2'>Skills</h4>
                                        <div className='border-b border-border mb-4'></div>
                                        {/* Skills List */}
                                        <div>
                                            {getData(skillData, 'skills').data.map((item, index) => {
                                                const {name} = item;
                                                return(
                                                    <div className='w-2/4 text-center xl:text-left mx-auto xl:mx-0' key={index}>
                                                        <div className='font-medium'>{name}</div>
                                                    </div>
                                                ) 
                                            })}
                                        </div>
                                    </div>
                                    {/* tools */}
                                    <div>
                                        <h4 className='text-xl font-semibold mb-2 xl:text-left'>Tools</h4>
                                        <div className='border-b border-border mb-4'></div>
                                        {/* Tools List */}
                                        <div className='flex gap-x-8 justify-center xl:justify-start'>
                                            {getData(skillData, 'tools').data.map((item, index) => {
                                                const {imgPath} = item;
                                                return (
                                                <div key={index}>
                                                    <Image src={imgPath} 
                                                        width={48}
                                                        height={48}
                                                        alt=''
                                                        priority
                                                    />
                                                </div>
                                            )})}
                                        </div>
                                    </div>
                                </div>
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
