import React from "react";
import picHome1 from "../assets/image/picHome1.jpeg";
import picHome2 from "../assets/image/picHome2.jpeg";
import picHome3 from "../assets/image/picHome3.png";
import picTrain from "../assets/image/pic2.png";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import bt1 from "../assets/image/bt1.png";
import bt2 from "../assets/image/bt2.png";
import bt3 from "../assets/image/bt3.png";
import bt4 from "../assets/image/bt4.png";
import bt5 from "../assets/image/bt5.png";
import bt6 from "../assets/image/bt6.png";
import Card from "../components/Card";
import { IoIosArrowForward, IoIosArrowRoundForward } from "react-icons/io";
import { FaFacebook, FaYoutube, FaLine } from "react-icons/fa";

import pic3 from "../assets/image/pic3.jpeg";

import { Carousel } from "@material-tailwind/react";

export default function Home() {
	return (
		<>
			<section>
				{/* section 1 */}
				<div className="max-h-[450px]">
					<Carousel className="rounded-xl" autoplay={true} loop={true}>
						<img
							src={picHome1}
							alt="image 1"
							className="h-full w-full object-cover"
						/>
						<img
							src={picHome2}
							alt="image 2"
							className="h-full w-full object-cover"
						/>
						<img
							src={picHome3}
							alt="image 3"
							className="h-full w-full object-cover"
						/>
					</Carousel>
					{/* <img
						src={picHome1}
						alt="picHome"
						className="w-full h-full object-cover"
					/> */}
				</div>

				{/* section 2 */}
				<div className="grid grid-cols-1 xl:grid-cols-2 mx-[5%] xl:mx-[10%] my-10">
					<div className="col-span-1 flex flex-col gap-6">
						<h1 className="text-3xl text-center">The MRT Pink Line</h1>
						<div className="border-[2px] border-primary w-14 mx-auto rounded-full"></div>
						<div>
							<h1 className="font-semibold text-lg">Vision</h1>
							<p className="text-gray-700">
								Leader in providing the best mass rapid transit system
							</p>
						</div>
						<div>
							<h1 className="font-semibold text-lg">Mission</h1>
							<p className="text-gray-700">
								We aim to continuously develop our system, operation and
								personnel and to manage our resources efficiently so as to
								provide a modern, fast, safe, efficient and reliable service for
								our stakeholders and society.
							</p>
						</div>
						<div>
							<h1 className="font-semibold text-lg">Shared values</h1>
							<p className="text-gray-700">
								We are committed to good governance and honing our personnel in
								order to provide the best-in-class service to our passengers.
							</p>
						</div>
					</div>
					<div className="col-span-1">
						<img
							src={picTrain}
							alt="picTrain"
							className="w-full h-full object-cover"
						/>
					</div>
				</div>

				{/* section 3 */}
				<div className="bg-[url('https://www.nbm.co.th/assets/images/home/routemap.jpg')] bg-cover py-4">
					<div className="grid grid-cols-1 mx-[5%] xl:grid-cols-2 xl:mx-[10%] my-10">
						<div className="col-span-1">
							<h1 className="text-3xl text-center text-primary mb-4">
								The MRT Pink Line
							</h1>
							<div className="border-[2px] border-primary w-14 mx-auto rounded-full"></div>
						</div>
					</div>
					<div className="col-span-1"></div>
					<div className="grid grid-cols-1 mx-[5%] xl:grid-cols-2 xl:mx-[10%] gap-4 my-10">
						<div className="col-span-1 flex flex-col gap-6 text-primary">
							<div className="bg-primary p-6 rounded-lg flex flex-col gap-5">
								<h1 className="text-xl font-semibold">Station and Places</h1>
								<p>(Origin):</p>
								<input
									type="text"
									placeholder="Select Origin Station"
									className="px-4 py-2 bg-white rounded-lg "
								/>
								<div className="flex items-center justify-between">
									<p>(Destination):</p>
									<div className="relative bg-gray-300 w-5 h-5 rounded-full p-4 flex items-center justify-center">
										<HiOutlineSwitchVertical
											size={20}
											className="absolute text-black"
										/>
									</div>
								</div>
								<input
									type="text"
									placeholder="Select Destination Station"
									className="px-4 py-2 bg-white rounded-lg "
								/>
								<button className="bg-[#2E383C] text-sm py-2 rounded-lg">
									Search
								</button>
							</div>
						</div>
						<div className="col-span-1">
							<div className="grid grid-cols-2 gap-4">
								<div className="col-span-1 flex flex-col gap-4">
									<div className="flex items-center gap-2 bg-white rounded-lg p-2 cursor-pointer text-gray-600 hover:text-secondary">
										<img src={bt1} alt="" className="w-[60px] h-[60px]" />
										<p className="text-sm">Route and Fares</p>
									</div>
									<div className="flex items-center gap-2 bg-white rounded-lg p-2 cursor-pointer text-gray-600 hover:text-secondary">
										<img src={bt2} alt="" className="w-[60px] h-[60px]" />
										<p className="text-sm">Time Table</p>
									</div>
									<div className="flex items-center gap-2 bg-white rounded-lg p-2 cursor-pointer text-gray-600 hover:text-secondary">
										<img src={bt3} alt="" className="w-[60px] h-[60px]" />
										<p className="text-sm">Park & Ride</p>
									</div>
								</div>
								<div className="col-span-1 flex flex-col gap-4">
									<div className="flex items-center gap-2 bg-white rounded-lg p-2 cursor-pointer text-gray-600 hover:text-secondary">
										<img src={bt4} alt="" className="w-[60px] h-[60px]" />
										<p className="text-sm">Area Map</p>
									</div>
									<div className="flex items-center gap-2 bg-white rounded-lg p-2 cursor-pointer text-gray-600 hover:text-secondary">
										<img src={bt5} alt="" className="w-[60px] h-[60px]" />
										<p className="text-sm">Locations and activities</p>
									</div>
									<div className="flex items-center gap-2 bg-white rounded-lg p-2 cursor-pointer text-gray-600 hover:text-secondary">
										<img src={bt6} alt="" className="w-[60px] h-[60px]" />
										<p className="text-sm">Lost Property</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* section 4 */}
				<div className="flex flex-col mx-[5%] xl:mx-[10%] py-4">
					<div className="flex flex-col items-center justify-center gap-4 mb-8">
						<h1 className="text-3xl">Promotions</h1>
						<div className="border-[2px] border-primary w-24 mx-auto rounded-full"></div>
						<p>New promotion are coming soon</p>
						<button className="flex items-center justify-center">
							<p>See more</p>
							<IoIosArrowForward />
						</button>
					</div>

					<div className="flex flex-col gap-4">
						<h1 className="text-center text-3xl">News & Activities</h1>
						<div className="border-[2px] border-primary w-14 mx-auto rounded-full"></div>
						<div className="hidden md:flex items-center justify-center gap-4">
							<Card />
							<Card />
							<Card />
						</div>
						<Carousel className="md:hidden mb-4" autoplay={true} loop={true}>
							<Card />
							<Card />
							<Card />
						</Carousel>
						<button className="flex items-center justify-center">
							<p>See more</p>
							<IoIosArrowForward />
						</button>
					</div>
				</div>

				{/* section 5 */}
				<div className="bg-[url('https://www.nbm.co.th/assets/images/home/elib.png')] bg-cover py-4 bg-third">
					<div className="mx-[5%] xl:mx-[10%] my-10 flex flex-col gap-4">
						<h1 className="text-center text-3xl ">E-Library</h1>
						<div className="border-[2px] border-primary w-14 mx-auto rounded-full"></div>

						<Carousel
							className="mb-4 md:w-[300px] mx-auto md:hidden"
							autoplay={true}
							loop={true}
						>
							{/* <div className="row-span-1"> */}
							<div className=" relative flex items-center justify-center">
								<div className="absolute w-full h-full bg-black/60 rounded-xl flex flex-col gap-4 justify-center pl-6">
									<div className="text-primary">
										<h1 className="text-xl">ระบบรักษาความปลอดภัย</h1>
										<h3>Security System</h3>
									</div>
									<button className="flex items-center gap-2 bg-white p-2 rounded-lg text-sm self-start">
										More <IoIosArrowRoundForward />
									</button>
								</div>
								<div className="w-[364px] h-[162px]">
									<img
										src={pic3}
										alt="picCard"
										className="w-full h-full object-cover rounded-xl"
									/>
								</div>
							</div>
							<div className=" relative flex items-center justify-center">
								<div className="absolute w-full h-full bg-black/60 rounded-xl flex flex-col gap-4 justify-center pl-6">
									<div className="text-primary">
										<h1 className="text-xl">ระบบรักษาความปลอดภัย</h1>
										<h3>Security System</h3>
									</div>
									<button className="flex items-center gap-2 bg-white p-2 rounded-lg text-sm self-start">
										More <IoIosArrowRoundForward />
									</button>
								</div>
								<div className="w-[364px] h-[162px]">
									<img
										src={pic3}
										alt="picCard"
										className="w-full h-full object-cover rounded-xl"
									/>
								</div>
							</div>
							<div className=" relative flex items-center justify-center">
								<div className="absolute w-full h-full bg-black/60 rounded-xl flex flex-col gap-4 justify-center pl-6">
									<div className="text-primary">
										<h1 className="text-xl">ระบบรักษาความปลอดภัย</h1>
										<h3>Security System</h3>
									</div>
									<button className="flex items-center gap-2 bg-white p-2 rounded-lg text-sm self-start">
										More <IoIosArrowRoundForward />
									</button>
								</div>
								<div className="w-[364px] h-[162px]">
									<img
										src={pic3}
										alt="picCard"
										className="w-full h-full object-cover rounded-xl"
									/>
								</div>
							</div>
							{/* </div> */}
						</Carousel>

						<div className="hidden md:flex gap-1 overflow-hidden">
							<div className=" relative flex items-center justify-center">
								<div className="absolute w-full h-full bg-black/60 rounded-xl flex flex-col gap-4 justify-center pl-6">
									<div className="text-primary">
										<h1 className="text-xl">ระบบรักษาความปลอดภัย</h1>
										<h3>Security System</h3>
									</div>
									<button className="flex items-center gap-2 bg-white p-2 rounded-lg text-sm self-start">
										More <IoIosArrowRoundForward />
									</button>
								</div>
								<div className="w-[364px] h-[162px]">
									<img
										src={pic3}
										alt="picCard"
										className="w-full h-full object-cover rounded-xl"
									/>
								</div>
							</div>
							<div className=" relative flex items-center justify-center">
								<div className="absolute w-full h-full bg-black/60 rounded-xl flex flex-col gap-4 justify-center pl-6">
									<div className="text-primary">
										<h1 className="text-xl">ระบบรักษาความปลอดภัย</h1>
										<h3>Security System</h3>
									</div>
									<button className="flex items-center gap-2 bg-white p-2 rounded-lg text-sm self-start">
										More <IoIosArrowRoundForward />
									</button>
								</div>
								<div className="w-[364px] h-[162px]">
									<img
										src={pic3}
										alt="picCard"
										className="w-full h-full object-cover rounded-xl"
									/>
								</div>
							</div>
							<div className=" relative flex items-center justify-center">
								<div className="absolute w-full h-full bg-black/60 rounded-xl flex flex-col gap-4 justify-center pl-6">
									<div className="text-primary">
										<h1 className="text-xl">ระบบรักษาความปลอดภัย</h1>
										<h3>Security System</h3>
									</div>
									<button className="flex items-center gap-2 bg-white p-2 rounded-lg text-sm self-start">
										More <IoIosArrowRoundForward />
									</button>
								</div>
								<div className="w-[364px] h-[162px]">
									<img
										src={pic3}
										alt="picCard"
										className="w-full h-full object-cover rounded-xl"
									/>
								</div>
							</div>
						</div>

						<button className="flex items-center justify-center">
							<p>See more</p>
							<IoIosArrowForward />
						</button>
					</div>
				</div>

				{/* section 6 */}
				<div className="mx-[5%] xl:mx-[10%] my-10">
					<h1 className="text-3xl">Contact Us</h1>
					<div className="border-[2px] border-primary w-8 rounded-full mb-4"></div>
					<div className="grid grid-cols-1 xl:grid-cols-3">
						<div className="col-span-1 flex flex-col items-start justify-end gap-2">
							<div className="font-semibold">Call Center</div>
							<div className="text-md text-gray-600">
								Contact 0 2617 6000 everyday from 06.00 - 24.00
							</div>
						</div>

						<div className="col-span-1 xl:col-span-2 flex items-center justify-center gap-20 mt-4">
							<div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
								<a
									href="https://www.facebook.com/MRTPinkLine/"
									target="_blank"
									className=" flex flex-col items-center justify-center gap-2 cursor-pointer"
								>
									<FaFacebook size={60} className="hover:text-light-blue-600" />
									<p>MRTPinkLine</p>
								</a>
								<a
									href="https://line.me/R/ti/p/@492nlrdh"
									target="_blank"
									className="flex flex-col items-center justify-center gap-2 cursor-pointer"
								>
									<FaLine size={60} className="hover:text-green-600" />
									<p>Pinkyellowline</p>
								</a>
								<a
									href="https://www.youtube.com/channel/UCXB9CAlDbhjNE-UDazg7fEw"
									target="_blank"
									className="flex flex-col items-center justify-center gap-2 cursor-pointer"
								>
									<FaYoutube size={60} className="hover:text-red-600" />
									<p>MRTPinkLine</p>
								</a>
								<a
									href="https://twitter.com/MRTPinkLine"
									target="_blank"
									className="flex flex-col items-center justify-center gap-2 cursor-pointer"
								>
									<div className="bg-[url('https://www.nbm.co.th/assets/images/home/icon/tw.jpg')] hover:bg-[url('https://www.nbm.co.th/assets/images/home/icon/Group%20361.png')] w-[70px] h-[70px] bg-cover"></div>
									<p>@MRTPinkLine</p>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
