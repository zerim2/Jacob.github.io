import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Javascript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import Tailwind from '../assets/tailwind.png'
import Mongo from '../assets/mongo.png'
import Github from '../assets/github.png'

const Skills = () => {
	return (
		<div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
		
		{/*Container */}

			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<div>

				<p className='text-4xl font-bold inline border-b-4 border-pink-600 px-10'>Skills</p>
				<p className='py-4'> These are the technologies I've learned across my educational journey </p>
				</div>

				<div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img className='w-20 mx-auto' src='/assets/html.png' alt="HTML icon" />
						<p className='my-4'>HTML</p>
					</div> 
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img className='w-20 mx-auto' src='/assets/css.png' alt="CSS icon" />
						<p className='my-4'>CSS</p>
					</div> 
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img className='w-20 mx-auto' src='/assets/javascript.png' alt="Javascript icon" />
						<p className='my-4'>JAVASCRIPT</p>
					</div> 
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img className='w-20 mx-auto' src='/assets/react.png' alt="REACT icon" />
						<p className='my-4'>REACT</p>
					</div> 
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img className='w-20 mx-auto' src='/assets/github.png' alt="Github icon" />
						<p className='my-4'>GITHUB</p>
					</div> 
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img className='w-20 mx-auto' src='/assets/node.png' alt="NodeJS icon" />
						<p className='my-4'>NODE JS</p>
					</div> 
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img className='w-20 mx-auto' src='/assets/mongo.png' alt="MONGO icon" />
						<p className='my-4'>MONGO DB</p>
					</div> 
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
						<img className='w-20 mx-auto' src='/assets/prisma.png' alt="Prisma icon" />
						<p className='my-4'>PRISMA</p>
					</div> 
				</div>
			</div>

		</div>


		)
}

export default Skills