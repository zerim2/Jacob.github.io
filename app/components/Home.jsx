'use client'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll';
import React, {useState} from "react";
const Home = () => {
		const [nav, setNav] = useState(false);
		const handleClick = () => setNav(!nav);

	return (
		<div name='home' className='w-full h-[950px] flex bg-[#0a192f]'>

			{/*Container */}
			<div className="max-w[1000px] mx-auto px-8 flex flex-col justify-center h-full">
				<p className='text-pink-600'>Hi, my name is </p>
				<h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Jacob Patterson</h1>
			
				<h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]"> I&apos;m a Jr. App Developer</h2>
			
				<p className="text-[#8892b0] py-4 max-w-[700px]">Hi this is where i would put a paragraph describing myself,
				in the best way possible, because i think its pretty neat how far
				ive come and where im going. </p>
				<div>	
					
					<Link onClick={handleClick} to="work" smooth={true} duration={500} className=" w-[200px] text-white group border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600">View Works
					<span className="group-hover:rotate-90 duration-300">
					<HiArrowNarrowRight className="ml-3"/>
					</span>


					</Link>
				</div>
			
			</div>

		</div>

		)

}

export default Home