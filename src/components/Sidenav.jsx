import React from "react";
import {
	Drawer,
	Button,
	Typography,
	// IconButton,
	Accordion,
	AccordionHeader,
	AccordionBody,
} from "@material-tailwind/react";

import { FaBars } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import logo from "../assets/image/logo.png";
import { useNavigate } from "react-router-dom";

import { FiChevronDown } from "react-icons/fi";
import { RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";

function Icon({ id, open }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 30 30"
			strokeWidth={1}
			stroke="currentColor"
			className={`${
				id === open ? "rotate-0" : "-rotate-90"
			} h-5 w-5 transition-transform`}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M19.5 8.25l-7.5 7.5-7.5-7.5"
			/>
		</svg>
	);
}

export function Sidenav() {
	const [open, setOpen] = React.useState(false);

	const openDrawer = () => setOpen(true);
	const closeDrawer = () => setOpen(false);

	const [isOpen, setIsOpen] = React.useState(0);

	const handleOpen = (value) => setIsOpen(isOpen === value ? 0 : value);

	const navigate = useNavigate();

	// const Acc = ({ title, child, index }) => {
	// 	return (
	// 		<Accordion
	// 			open={isOpen === index}
	// 			icon={<Icon id={index} open={isOpen} />}
	// 		>
	// 			<AccordionHeader
	// 				className={`${
	// 					isOpen === index ? "bg-primary text-primary font-semibold" : ""
	// 				} border-none text-md w-[112%] ml-[-6%] px-4`}
	// 				onClick={() => handleOpen(index)}
	// 			>
	// 				{title}
	// 			</AccordionHeader>
	// 			<AccordionBody>{child}</AccordionBody>
	// 		</Accordion>
	// 	);
	// };

	return (
		<React.Fragment>
			<FaBars onClick={openDrawer} className="text-primary ml-4" size={20} />
			<Drawer open={open} onClose={closeDrawer} className="p-4 ">
				<div className="mb-6 flex items-center justify-between">
					<button
						onClick={() => navigate(`/`)}
						className="w-[65px] h-[62px] cursor-pointer"
					>
						<img src={logo} alt="logo" className="w-full h-full" />
					</button>
				</div>
				<div className="">
					<ul className="flex flex-col">
						<Accordion open={isOpen === 1} icon={<Icon id={1} open={isOpen} />}>
							<AccordionHeader
								className={`${
									isOpen === 1
										? "bg-primary text-primary hover:text-primary font-semibold"
										: ""
								} border-none text-md w-[112%] ml-[-6%] px-4`}
								onClick={() => handleOpen(1)}
							>
								About Us
							</AccordionHeader>
							<AccordionBody>
								<ul>
									<li className="flex items-center justify-between py-2 ml-4">
										Company's Profile
									</li>
									<li className="flex items-center justify-between py-2 ml-4">
										Vision Mission and Shard Values
									</li>
									<li className="flex items-center justify-between py-2 ml-4">
										Board of Directors
									</li>
									<li className="flex items-center justify-between py-2 ml-4">
										Corporate Social Responsibilities
									</li>
									<li className="flex items-center justify-between py-2 ml-4">
										Personal Information Protection Policies
									</li>
								</ul>
							</AccordionBody>
						</Accordion>

						<Accordion open={isOpen === 2} icon={<Icon id={2} open={isOpen} />}>
							<AccordionHeader
								className={`${
									isOpen === 2
										? "bg-primary text-primary hover:text-primary font-semibold"
										: ""
								} border-none text-md w-[112%] ml-[-6%] px-4`}
								onClick={() => handleOpen(2)}
							>
								Card Info
							</AccordionHeader>
							<AccordionBody>
								<ul>
									<li className="flex items-center justify-between py-2 ml-4">
										Single Journey Ticket
									</li>
									<li className="flex items-center justify-between py-2 ml-4">
										Rabbit Card
									</li>
								</ul>
							</AccordionBody>
						</Accordion>

						<Accordion open={isOpen === 3} icon={<Icon id={3} open={isOpen} />}>
							<AccordionHeader
								className={`${
									isOpen === 3
										? "bg-primary text-primary hover:text-primary font-semibold"
										: ""
								} border-none text-md w-[112%] ml-[-6%] px-4`}
								onClick={() => handleOpen(3)}
							>
								Service Info
							</AccordionHeader>
							<AccordionBody>
								<ul>
									<li className="flex items-center justify-between py-2 ml-4">
										Routes and Fares
									</li>
									<li className="flex items-center justify-between py-2 ml-4">
										Area map
									</li>
									<li className="flex items-center justify-between py-2 ml-4">
										Time Table
									</li>
									<li className="flex items-center justify-between py-2 ml-4">
										Park & Ride
									</li>
									<li className="flex items-center justify-between py-2 ml-4">
										Lost & Found
									</li>
									<li className="flex items-center justify-between py-2 ml-4">
										Annoucemant and Regulation
									</li>
								</ul>
							</AccordionBody>
						</Accordion>

						<Accordion open={isOpen === 4} icon={<Icon id={4} open={isOpen} />}>
							<AccordionHeader
								className={`${
									isOpen === 4
										? "bg-primary text-primary hover:text-primary font-semibold"
										: ""
								} border-none text-md w-[112%] ml-[-6%] px-4`}
								onClick={() => handleOpen(4)}
							>
								Business and Commerce
							</AccordionHeader>
							<AccordionBody>
								<ul>
									<li className="flex items-center justify-between py-2 ml-4">
										Types of Rabbit cards
									</li>
									<li className="flex items-center justify-between py-2 ml-4">
										Rabbit Card Promotion
									</li>
									<li className="flex items-center justify-between py-2 ml-4">
										Shop/service that uses rabbits
									</li>
									<li className="flex items-center justify-between py-2 ml-4">
										Information/Contact
									</li>
									<li className="flex items-center justify-between py-2 ml-4">
										My Rabbit
									</li>
								</ul>
							</AccordionBody>
						</Accordion>

						<li className="flex items-center justify-between py-2 font-[500] text-blue-gray-700">
							News & Activities
						</li>
						<li className="flex items-center justify-between py-2 font-[500] text-blue-gray-700">
							Promotions
						</li>
						<li className="flex items-center justify-between py-2 font-[500] text-blue-gray-700">
							FAQs
						</li>
					</ul>
				</div>
				<hr className="my-4" />
				<div>
					<ul>
						<li className="flex items-center justify-between py-2 font-[500] text-blue-gray-700">
							E-Library
						</li>
						<li className="flex items-center justify-between py-2 font-[500] text-blue-gray-700">
							Safety Information
						</li>
						<li className="flex items-center justify-between py-2 font-[500] text-blue-gray-700">
							Join BTS
						</li>
						<li className="flex items-center justify-between py-2 font-[500] text-blue-gray-700">
							Contact Us
						</li>
					</ul>
				</div>
				<hr className="my-4" />

				<Accordion open={isOpen === 5} icon={<Icon id={5} open={isOpen} />}>
					<AccordionHeader
						className={`${
							isOpen === 5
								? "bg-primary text-primary hover:text-primary font-semibold"
								: ""
						} border-none text-md w-[112%] ml-[-6%] px-4`}
						onClick={() => handleOpen(5)}
					>
						<div className="flex items-center gap-1">
							<TbWorld size={20} />
							<div>Language</div>
						</div>
					</AccordionHeader>
					<AccordionBody>
						<ul>
							<li className="flex items-center justify-between py-2 ml-4">
								EN
							</li>
							<li className="flex items-center justify-between py-2 ml-4">
								TH
							</li>
						</ul>
					</AccordionBody>
				</Accordion>
			</Drawer>
		</React.Fragment>
	);
}
