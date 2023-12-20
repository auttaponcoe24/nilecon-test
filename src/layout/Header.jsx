import React, { useState } from "react";
import { TbWorld } from "react-icons/tb";
import { FiChevronDown } from "react-icons/fi";
import logo from "../assets/image/logo.png";
import { useNavigate } from "react-router-dom";
import { Sidenav } from "../components/Sidenav";

export default function Header() {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav className="sticky top-0 left-0 z-50 shadow-md w-full">
			{/* hearder 1 */}
			<header className="hidden xl:block bg-third py-2 text-[#2e383c] font-[300]">
				<section className="flex items-center justify-between mx-[10%] text-[12px]">
					<div className="flex gap-1">
						<div
							className="cursor-pointer hover:underline"
							onClick={() => navigate(`/`)}
						>
							Home
						</div>
						<div>|</div>
						<div className="cursor-pointer hover:underline">E-Library</div>
						<div>|</div>
						<div className="cursor-pointer hover:underline">
							Safety Information
						</div>
					</div>

					<div className="flex items-center gap-1">
						<div className="cursor-pointer hover:underline">Join Us</div>
						<div>|</div>
						<div className="cursor-pointer hover:underline">Contact Us</div>
						<div>|</div>
						<div className="relative flex items-center gap-4">
							<TbWorld size={15} />
							<button
								onClick={() => setIsOpen(!isOpen)}
								className="flex items-center justify-center gap-4 cursor-pointer"
							>
								<p>EN</p>
								<FiChevronDown size={15} />
							</button>
							<div
								className={`${
									isOpen ? "block" : "hidden"
								} absolute top-6 right-0 bg-white w-full flex flex-col items-center justify-center rounded-md shadow-sm font-semibold`}
							>
								<button className="w-full py-2 hover:bg-gray-300">EN</button>
								<button className="w-full py-2 hover:bg-gray-300">TH</button>
							</div>
						</div>
					</div>
				</section>
			</header>

			{/* header 2 */}
			<header className="bg-primary py-1 ">
				<div className="xl:hidden flex items-center ">
					<Sidenav />
					<button
						onClick={() => navigate(`/`)}
						className="w-[41px] h-[40px] mx-auto  cursor-pointer"
					>
						<img src={logo} alt="logo" className="w-full h-full" />
					</button>
				</div>

				<div className="hidden mx-[10%] xl:flex items-center ">
					<button
						onClick={() => navigate(`/`)}
						className="w-[48px] h-[50px] mr-[100px] cursor-pointer"
					>
						<img src={logo} alt="logo" className="w-full h-full" />
					</button>
					<ul className="flex gap-6 items-center justify-center text-primary text-sm">
						<li className="flex items-center gap-2">
							About Us <FiChevronDown />
						</li>
						<li className="flex items-center gap-2">
							Card Info <FiChevronDown />
						</li>
						<li className="flex items-center gap-2">
							Service Information <FiChevronDown />
						</li>
						<li className="flex items-center gap-2">
							Business & Service <FiChevronDown />
						</li>
						<li>News & Activities</li>
						<li>Promotions</li>
						<li>FAQs</li>
					</ul>
				</div>
			</header>
		</nav>
	);
}
