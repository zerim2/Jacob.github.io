import React from 'react'





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
					 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
						<img className='w-[312px] h-[250px] absolute flex opacity-80' src={"assets/projectboard.png"} alt="s" />
						{/* Hover Effects*/}
						<div className='w-[312px] h-[250px] opacity-0 group-hover:opacity-100 transition-all duration-700 relative group-hover:bg-blue-700 group-hover:bg-opacity-50'>
							<span className='text-2xl font-bold justify-center flex items-center my-10 text-white tracking-wider'>
							Drawing Board
							</span>

							<div className='pt-8 text-center'>
								<a href="https://project-board-app.vercel.app">
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>

								</a>
								<a href="https://project-board-app.vercel.app">
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>

								</a>
							</div>
						</div>

					</div>

					<div 

					 className= 'shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
						<img className='w-[312px] h-[250px] absolute flex opacity-80' src={"assets/EcommerceImg.png"} alt="s" />
						{/* Hover Effects*/}
						<div className='w-[312px] h-[250px] opacity-0 group-hover:opacity-100 transition-all duration-700 relative group-hover:bg-blue-700 group-hover:bg-opacity-50'>
							<span className='text-2xl font-bold justify-center flex items-center my-10 text-white tracking-wider'>
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

					 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
						<img className='w-[312px] h-[250px] absolute flex opacity-80' src={"assets/bookstoreImgs.png"} alt="s" />
						{/* Hover Effects*/}
						<div className='w-[312px] h-[250px] opacity-0 group-hover:opacity-100  transition-all duration-700 relative group-hover:bg-blue-700 group-hover:bg-opacity-50  '>
							<span className='text-2xl font-bold justify-center flex items-center my-10 text-white tracking-wider'>
							MERN Bookstore App
							</span>
							<div className='pt-8 text-center'>
								<a href="https://book-client-nu.vercel.app">
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>

								</a>
								<a href="https://book-client-nu.vercel.app">
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>

								</a>
							</div>
						</div>

					</div>

					<div 

					 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
						<img className='w-[312px] h-[250px] absolute flex opacity-80' src={"assets/TravelImgs.png"} alt="s" />
						{/* Hover Effects*/}
						<div className='w-[312px] h-[250px] opacity-0 group-hover:opacity-100 transition-all duration-700 relative group-hover:bg-blue-700 group-hover:bg-opacity-50'>
							<span className='text-2xl font-bold justify-center flex items-center my-10 text-white tracking-wider'>
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

					 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
						<img className='w-[312px] h-[250px] absolute flex opacity-80' src={"assets/messengerImgs.png"} alt="s" />
						{/* Hover Effects*/}
						<div className='w-[312px] h-[250px] opacity-0 group-hover:opacity-100  transition-all duration-700 relative group-hover:bg-blue-700 group-hover:bg-opacity-50  '>
							<span className='text-2xl font-bold justify-center flex items-center my-10 text-white tracking-wider'>
							Messenger App
							</span>

							<div className='pt-8 text-center'>
								<a href="https://messenger-app-rosy.vercel.app">
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>

								</a>
								<a href="https://messenger-app-rosy.vercel.app">
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>

								</a>
							</div>
						</div>

					</div>

					<div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
						<img className='w-[312px] h-[250px] absolute flex opacity-80' src={"assets/BlogImg.png"} alt="s" />

						{/* Hover Effects*/}
						<div className='w-[312px] h-[250px] items-center justifycenter flex-auto bg-auto opacity-0 group-hover:opacity-100  transition-all duration-700 relative group-hover:bg-blue-700 group-hover:bg-opacity-50  '>
							<span className='text-2xl font-bold justify-center flex items-center my-10 text-white tracking-wider '>
							        Tech Blog Front-end
							</span>

							<div className='pt-8 text-center'>
								<a href="https://blog-server-h9b2.vercel.app"> {/* Link */}
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
							
					

								</a>
								<a href="https://blog-server-h9b2.vercel.app">
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