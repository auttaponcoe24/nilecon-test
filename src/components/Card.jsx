import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Card() {
	const navigate = useNavigate();
	return (
		<div className="w-[278px] h-[327px] rounded-lg shadow-md ">
			<img
				src="https://www.nbm.co.th/cms-pk//WareHouse/News/151223120240Cover.jpg"
				alt="card"
				className="rounded-t-md"
			/>
			<div className="p-4 flex flex-col items-start justify-center gap-2">
				<p className="text-sm text-gray-500">15 December 2023</p>
				<div>
					NBM จัดกิจกรรม "Pink Line ส่งความสุข...ทุกโรงเรียน" พานักเรียน
				</div>
				<div className="border-[2px] border-primary w-14  rounded-full"></div>
				<button
					onClick={() => navigate(`/news-details`)}
					className="self-end flex items-center justify-center border px-4 py-2 rounded-full"
				>
					<p>Read more</p> <IoIosArrowForward />
				</button>
			</div>
		</div>
	);
}
