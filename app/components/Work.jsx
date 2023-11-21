import React from 'react'
import WorkImg from '../assets/workImg.jpeg'
import realEstate from '../assets/realestate.jpg'

const Work = () => {
	
	return (
		<div name ='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<div className='pb-8 justify-center'>
					<p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 px-10'>Work</p>
					<p className='py-6'> Check out some of my recent projects</p>
				</div>
				{/* Container */}
				<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
					{/* Grid Item */}
					<div 
					style={{backgroundImage: `url($(/assets/workImg.jpeg)`}}
					 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
						
						{/* Hover Effects*/}
						<div className='opacity-0 group-hover:opacity-100 transition-all duration-700'>
							<span className='text-2xl font-bold text-white tracking-wider'>
							Questionnaire Form
							</span>

							<div className='pt-8 text-center'>
								<a href="https://quiz-app-orpin-five.vercel.app">
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>

								</a>
								<a href="/">
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>

								</a>
							</div>
						</div>

					</div>

					<div 
					style={{backgroundImage: `url($(realEstate)`}}
					 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
						
						{/* Hover Effects*/}
						<div className='opacity-0 group-hover:opacity-100 transition-all duration-700'>
							<span className='text-2xl font-bold text-white tracking-wider'>
							E-Commerce
							</span>

							<div className='pt-8 text-center'>
								<a href="https://ecommerce-shop-starter-main-one.vercel.app">
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>

								</a>
								<a href="https://ecommerce-shop-starter-main-one.vercel.app">
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>

								</a>
							</div>
						</div>

					</div>
						{/* Grid Item */}
					<div 
					style={{backgroundImage: `url($(WorkImg)`}}
					 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
						
						{/* Hover Effects*/}
						<div className='opacity-0 group-hover:opacity-100 transition-all duration-700'>
							<span className='text-2xl font-bold text-white tracking-wider'>
							Inventory Management
							</span>

							<div className='pt-8 text-center'>
								<a href="/">
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>

								</a>
								<a href="/">
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>

								</a>
							</div>
						</div>

					</div>

					<div 
					style={{backgroundImage: `url($(realEstate)`}}
					 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

						{/* Hover Effects*/}
						<div className='opacity-0 group-hover:opacity-100 transition-all duration-700'>
							<span className='text-2xl font-bold text-white tracking-wider'>
							Flight Travel Website
							</span>

							<div className='pt-8 text-center'>
								<a href="https://flightbooker-app.vercel.app">
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>

								</a>
								<a href="https://flightbooker-app.vercel.app">
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>

								</a>
							</div>
						</div>

					</div>
						{/* Grid Item */}
					<div 
					style={{backgroundImage: `url($(WorkImg)`}}
					 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
						
						{/* Hover Effects*/}
						<div className='opacity-0 group-hover:opacity-100 transition-all duration-700'>
							<span className='text-2xl font-bold text-white tracking-wider'>
							Messenger App
							</span>

							<div className='pt-8 text-center'>
								<a href="messenger-app-rosy.vercel.app">
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>

								</a>
								<a href="messenger-app-rosy.vercel.app">
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>

								</a>
							</div>
						</div>

					</div>

					<div 
					style={{backgroundImage: `url($(realEstate)`}}
					 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
						
						{/* Hover Effects*/}
						<div className='opacity-0 group-hover:opacity-100 transition-all duration-700'>
							<span className='text-2xl font-bold text-white tracking-wider'>
							        Software Blog
							</span>

							<div className='pt-8 text-center'>
								<a href="/"> {/* Link */}
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
							
					

								</a>
								<a href="/">
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>

								</a>
							</div>
						</div>

					</div>




				</div>


			</div>
		</div>




		)
}

export default Work