import React from 'react'

const About = () => {
	return (
		<div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
			<div className='flex flex-col justify-center items-center w-full h-full'>
				<div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
					<div className='sm:text-right pb-8 pl-4'> 
						<p className='text-4xl font-bold inline border-b-4 border-pink-600'>
						About
						</p>
					</div>

					
					<div> </div>

					</div>
					<div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
						<div className='sm:text-right text-4xl font-bold'>
							<p> Hi im jacob, nice to meet you, please take a look around at my website.</p>
						</div>
						<div>
							<p> I am passionate about creating excellent software that improves the lives for people around me.
							I specialize in creating software for clients ranging from individuals and small-businesses all the way
							to large corporations. Lorem ipsum lorem ipsem Lorem ipsum lorem ipsem Lorem ipsum lorem ipsem
							</p>
						</div> 
					</div>
			</div>
		</div>


		

		)
}

export default About