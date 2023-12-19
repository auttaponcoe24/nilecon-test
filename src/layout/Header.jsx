import React, { useState } from "react";
import { TbWorld } from "react-icons/tb";
import { FiChevronDown } from "react-icons/fi";
import logo from "../assets/image/logo.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	return (
		<nav className="sticky top-0 left-0 z-50 shadow-md">
			<header className="bg-third py-2 text-[#2e383c] font-[300]">
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
								} absolute top-6 right-0 bg-white w-full flex flex-col items-center justify-center gap-2 py-2 rounded-md font-semibold`}
							>
								<button>EN</button>
								<button>TH</button>
							</div>
						</div>
					</div>
				</section>
			</header>
			<header className="bg-primary py-2">
				<div className="mx-[10%] flex items-center ">
					<div className="w-[48px] h-[50px] mr-[100px]">
						<img src={logo} alt="logo" className="w-full h-full" />
					</div>
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
