import React from "react";
import char from "../assets/image/passendger-char.png";
import train from "../assets/image/train.png";
import qr from "../assets/image/qr.jpeg";
import appstore from "../assets/image/appstore-icon.png";
import googleplay from "../assets/image/googleplay.png";

export default function Footer() {
	return (
		<footer className="">
			<div className="bg-third py-4">
				<div className=" flex flex-col xl:flex-row  items-center justify-between mx-[5%] xl:mx-[10%]">
					<div className="flex items-center justify-center gap-2">
						<div className="w-5 h-5">
							<img src={char} alt="char" className="w-full h-full" />
						</div>
						<div className="text-sm text-center">
							Passenger Statics from 21/11/2023 - 17/12/2023 2,373,804 passenger
							trips.
						</div>
					</div>
					<div className="flex flex-col xl:flex-row gap-4 items-center justify-center">
						<div className="text-gray-700 text-sm">Search Sitemap</div>
						<select
							defaultValue={"DEFAULT"}
							name="search"
							id="search"
							className="px-4 py-2 w-[240px] rounded-lg outline-none text-sm  "
						>
							<option value="DEFAULT" disabled>
								Select Menu
							</option>
						</select>
					</div>
				</div>
			</div>

			<div className="bg-four py-4">
				<div className="grid  grid-cols-1 md:grid-cols-2 gap-4 mx-[5%] xl:mx-[10%]">
					<div className="col-span-1 items-center md:items-start flex flex-col  gap-4">
						<h1 className="text-center">MRT Pink Line Khae Rai - Min Buri</h1>
						<div className="flex items-center justify-center  text-sm text-gray-600">
							<ul className="flex flex-col gap-2 mr-[100px] text-center md:text-start">
								<li className="hover:text-secondary cursor-pointer">
									About Us
								</li>
								<li className="hover:text-secondary cursor-pointer">
									Card Info
								</li>
								<li className="hover:text-secondary cursor-pointer">
									Rabbit Card Top-Up
								</li>
								<li className="hover:text-secondary cursor-pointer">
									Routes and Fares
								</li>
							</ul>

							<ul className="flex flex-col gap-2 text-center md:text-start">
								<li className="hover:text-secondary cursor-pointer">
									Other Train Lines
								</li>
								<li className="hover:text-secondary cursor-pointer">
									Promotions
								</li>
								<li className="hover:text-secondary cursor-pointer">
									Contact Us
								</li>
								<li className="hover:text-secondary cursor-pointer">Sitemap</li>
							</ul>
						</div>
					</div>

					<div className="col-span-1 md:items-end flex flex-col gap-4">
						<div className="text-end">
							Download the application THE SKYTRAINs
						</div>
						<div className="flex items-center justify-end gap-4">
							<div className="w-[89px] h-[89px]">
								<img src={train} alt="train-icon" className="w-full h-full" />
							</div>
							<div className="w-[89px] h-[89px]">
								<img src={qr} alt="qr-icon" className="w-full h-full" />
							</div>
							<div className="flex flex-col gap-1">
								<div className="w-[130px] h-[40px]">
									<img
										src={appstore}
										alt="train-icon"
										className="w-full h-full"
									/>
								</div>
								<div className="w-[130px] h-[40px]">
									<img
										src={googleplay}
										alt="train-icon"
										className="w-full h-full"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-primary py-2 pt-4">
				<div className="text-[12px] text-primary mx-[10%] flex flex-col gap-4">
					<div className="grid grid-cols-1 md:grid-cols-3">
						<div className="col-span-1 md:col-span-2 flex flex-col gap-1">
							<h1 className="text-lg  md:text-start">
								NORTHERN BANGKOK MONORAIL COMPANY LIMITED
							</h1>
							<p>
								No. 21, Soi Choi Phuang, Vibhavadi Rangsit Road,Chom Phon
								Sub-district, Chatuchak District, Bangkok 10900
							</p>
							<p className="">Tel: 0 2617 6111</p>
						</div>
						<div className="col-span-1 flex flex-col gap-1 mt-4 md:mt-0">
							<p className="">
								This site is displayed well in Chrome(43) : Safari(9) :
								Firefox(16)
							</p>
							<p>Support system for the visually impaired</p>
						</div>
					</div>

					<div className="border border-gray-600"></div>
					<p className="text-center text-gray-300 tracking-wider py-2">
						Copyright 2566 NORTHERN BANGKOK MONORAIL COMPANY LIMITED, All Rights
						Reserved
					</p>
				</div>
			</div>
		</footer>
	);
}
