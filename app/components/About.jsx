import React from 'react'

const About = () => {
	return (
		<div name='about' className='w-full h-[800px] bg-[#0a192f] text-gray-300'>
			<div className='flex flex-col justify-center items-center w-full h-full'>
				<div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
					<div className='sm:text-right pb-8 pl-4'>
						<p className='text-4xl font-bold inline border-b-4 border-pink-600 px-5'>
						About
						</p>
					</div>

					
					<div> </div>

					</div>
					<div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
						<div className='sm:text-right text-4xl font-bold '>
							<p className="p-20"> Hi, my name is Jacob!</p>
						</div>
						<div>
							<p className="mb-4"> I am a Jr. Full-Stack Developer based in Sault Ste. Marie, ON. I worked as a Research Analyst for 4 years.
								There I applied skills such as Data mining,
								Data wrangling and Modelling. In my spare time, I enjoy hiking and playing music, I have always had a strong passion for jazz and it inspires
								while I work.

							</p>

							<p>
								Recently, I started dedicating more time learning coding, and Web design.
								By applying those skills I realized that this something I am passionate about.
								I am excited to be able to pursue a career I know I love.

							</p>
						</div> 
					</div>
			</div>
		</div>


		

		)
}

export default About