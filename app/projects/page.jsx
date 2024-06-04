"use client";
import React, { useState } from 'react'
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@radix-ui/react-tabs';
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
      image: '/work/3.png',
      category: 'react js',
      name: 'Nexa Website',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, minus!', 
      link: '/',
      github: '/',
  },
  {
      image: '/work/4.png',
      category: 'next js',
      name: 'Solstice Website',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, minus!', 
      link: '/',
      github: '/',
  },
  {
      image: '/work/2.png',
      category: 'next js',
      name: 'Lumina Website',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, minus!', 
      link: '/',
      github: '/',
  },
  {
      image: '/work/1.png',
      category: 'next js',
      name: 'Evolve Website',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, minus!', 
      link: '/',
      github: '/',
  },
  {
      image: '/work/3.png',
      category: 'next js',
      name: 'Ignite Website',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, minus!', 
      link: '/',
      github: '/',
  },
  {
      image: '/work/4.png',
      category: 'fullstack',
      name: 'Envision Website',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, minus!', 
      link: '/',
      github: '/',
  },
  {
      image: '/work/1.png',
      category: 'fullstack',
      name: 'Serenity Website',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, minus!', 
      link: '/',
      github: '/',
  },
  {
      image: '/work/3.png',
      category: 'fullstack',
      name: 'Nova Website',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, minus!', 
      link: '/',
      github: '/',
  },
  {
      image: '/work/3.png',
      category: 'fullstack',
      name: 'Zenith Website',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, minus!', 
      link: '/',
      github: '/',
  },
];

// remove category duplicates
const uniqueCategory = ['all projects', ...new Set(projectData.map((item) => item.category))];


const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategory);
  const [category, setCategory] = useState('all projects');

  return (
    <section className='min-h-screen pt-12'>
      <div className="container mx-auto">
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>My Projects</h2>
        {/* tabs */}
        <Tabs defaultValue={category}>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category, index) => {
              return (
                <TabsTrigger 
                onClick={() => setCategory(category)}
                value={category} key={index} className='capitalize w-[162px] md:w-auto'>
                  {category}
                </TabsTrigger>
              )
            })}
          </TabsList>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects
