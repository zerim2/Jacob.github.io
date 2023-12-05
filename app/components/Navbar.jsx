'use client'

import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import React, {useState} from "react";
import {Link} from 'react-scroll';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {ToastContainer, toast, Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const handleClick = () => setNav(!nav);
	const notify = () => toast.success("Copied to Clipboard");

	return (

		<div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>

		<div >
			<img src='/assets/jacob.png' alt="Insta" style={{width: '130px'}} />
		</div>

		<div className="hidden md:flex">

			<ul className="flex md:flex items-center">
				<li>
				<Link to="home" smooth={true} duration={500}>Home</Link>
				</li>
				<li>
					<Link to="about" smooth={true} duration={500}>About</Link>
				</li>
				<li>
					<Link to="skills" smooth={true} duration={500}>Skills</Link>
				</li>
				<li>
					<Link to="work" smooth={true} duration={500}>Work</Link>
				</li>
				<li>
					<Link to="contact" smooth={true} duration={500}>Contact</Link>
				</li>
			</ul>

		</div>

		{/*Hamburger */}
		<div onClick={handleClick} className="md:hidden z-10">
			{!nav ? <FaBars /> : <FaTimes />}

		</div>

		{/*Mobile Menu */}
		<ul className={!nav ? 'hidden' : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
			<li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
			<li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
			<li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
			<li className='py-6 text-4xl'><Link onClick={handleClick} to="work" smooth={true} duration={500}>Work</Link></li>
			<li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link>t</li>

		</ul>

		{/*Socials */}
		<div className='hidden lg:flex fixed flex-col top-[35%] left-0'> 
			<ul>
				<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
				<a className="flex justify-between items-center w-full text-gray-300"
				 href="/">
				
				Linkedin <FaLinkedin size={30} />
				</a>
				</li>

				<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
				<a className="flex justify-between items-center w-full text-gray-300"
				 href="https://github.com/zerim2">
				
				Github <FaGithub size={30} />
				</a>
				</li>

				<li className="w-[240px] h-[60px] flex justify-between items-center ml-[-180px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
				<a onClick={notify} className="flex items-center w-full text-gray-300 text-sm"
				 >
					<ToastContainer theme={"colored"} autoClose={1500} position="bottom-center" className="font-semibold" transition={Slide} />
					<CopyToClipboard text={"jacob@pattersons.net"} onClick={notify}>
						<span>jacob@pattersons.net</span>

					</CopyToClipboard>

					 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <HiOutlineMail size={30} className={""} />
				</a>
				</li>

				<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
				<a className="flex justify-between items-center w-full text-gray-300"
				 href="/">
				
				 Resume <BsFillPersonLinesFill size={30} />
				</a>
				</li>


			</ul>


		</div>
			


		</div>

		)


}

export default Navbar