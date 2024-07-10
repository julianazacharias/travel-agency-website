import { useEffect } from "react";
import { MdSearch, MdOutlineParagliding } from "react-icons/md";
import { GiDeer, GiFishingBoat } from "react-icons/gi";
import { TbBuildingCastle } from "react-icons/tb";
import { BiSolidDrink } from "react-icons/bi";
import { CiFlag1 } from "react-icons/ci";
import { WiTime3 } from "react-icons/wi";
import { FaPeopleCarry } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import video from "../assets/video.mp4";
import AOS from "aos";
import "aos/dist/aos.css";

const responsive = {
	superlargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 5,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 3,
	},
	module: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

export default function Hero() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div
			className="relattive bg-black lg:h-[80vh]"
			data-aos="fade-down"
			data-aos-delay="300"
			data-aos-duration="3000"
		>
			<video
				autoPlay
				muted
				loop
				className="absolute z-10 w-full h-full lg:top-0 -top-[12vh] object-cover opacity-55"
			>
				<source src={video} type="video/mp4" />
			</video>
			<div className="flex flex-col items-center justify-center relative z-10 lg:h-full h-screen max-w-[1200px] px-6 lg:pt-0 pt-16 mx-auto">
				<p className="text-3xl text-rose my-6">
					Let's explore the world together
				</p>
				<h4 className="lg:text-[52px] text-3xl text-white">
					What is your next destination?
				</h4>
				s
				<p className="text-slate-300 text-2xl my-8">
					Explore the world with the company of fellow women travelers
				</p>
				<div className="bg-white grid lg:grid-cols-5 grid-cols-1 rounded-lg w-full">
					<span className="flex items-center py-7 border-r border-gray relative pl-4">
						<MdOutlineParagliding className="text-4xl text-rose" />
						<span className="flex flex-col justify-center absolute h-full left-16 right-2">
							<p className="text-gray text-sm font-bold">Location</p>
							<select className="text-sm w-full">
								<option>Destinations</option>
								<option>Africa</option>
								<option>Morocco</option>
								<option>Nigeria</option>
								<option>Tanzania</option>
							</select>
						</span>
					</span>
					<span className="flex items-center py-7 border-r border-gray relative pl-4">
						<FaPeopleCarry className="text-4xl text-rose" />
						<span className="flex flex-col justify-center absolute h-full left-16 right-2">
							<p className="text-gray text-sm font-bold">Type</p>
							<select className="text-sm w-full">
								<option>Activity</option>
								<option>Adventure</option>
								<option>City Tours</option>
								<option>Cruises</option>
								<option>Discovery</option>
								<option>Historical</option>
							</select>
						</span>
					</span>
					<span className="flex items-center py-7 border-r border-gray relative pl-4">
						<WiTime3 className="text-4xl text-rose" />
						<span className="flex flex-col justify-center absolute h-full left-16 right-2">
							<p className="text-gray text-sm font-bold">Date from</p>
							<input type="date" className="text-sm w-full" />
						</span>
					</span>
					<span className="flex items-center py-7 border-r border-gray relative pl-4">
						<FaPeopleGroup className="text-4xl text-rose" />
						<span className="flex flex-col justify-center absolute h-full left-16 right-2">
							<p className="text-gray text-sm font-bold">Guests</p>
							<input
								type="text"
								placeholder="0"
								className="placeholder:text-black outline-none"
							/>
						</span>
					</span>
					<button className="bg-rose text-white flex items-center justify-center gap-4 py-6 outline-none border-none rounded-r-lg font-semibold text-sm hover:bg-slate-600 transition duration-300">
						<MdSearch size={20} className="text-4xl text-white" /> SEARCH
					</button>
				</div>
			</div>
			<div className="py-16 lg:-mt-24 relative z-10 max-w-[1200px] px-6 mx-auto">
				<Carousel
					partialVisbile={false}
					swipeable={true}
					draggable={false}
					responsive={responsive}
					ssr={true}
					infinite
					autoPlay={true}
					arrows={true}
					keyBoardControl={true}
					itemClass="carouselItem"
				>
					<div className="shadow-xl bg-[white] p-8 rounded-lg flex flex-col justify-center items-center gap-4 hover:bg-rose  hover:text-white">
						<GiDeer className="rounded-full w-20 h-20 p-4 bg-[#e5faf5] text-[#3fd2a8]" />
						<p>Wildlife</p>
					</div>
					<div className="shadow-xl bg-white p-8 rounded-lg flex flex-col justify-center items-center gap-4 hover:bg-rose hover:text-white">
						<TbBuildingCastle className="rounded-full w-20 h-20 p-4 bg-[#ffebde] text-[#f6812e]" />
						<p>Historical</p>
					</div>
					<div className="shadow-xl bg-white p-8 rounded-lg flex flex-col justify-center items-center gap-4 hover:bg-rose hover:text-white">
						<MdOutlineParagliding className="rounded-full w-20 h-20 p-4 bg-[#d1eefafe] text-[#06aff6]" />
						<p>Sports</p>
					</div>
					<div className="shadow-xl bg-white p-8 rounded-lg flex flex-col justify-center items-center gap-4 hover:bg-rose hover:text-white">
						<CiFlag1 className="rounded-full w-20 h-20 p-4 bg-[#f5ecfd] text-[#9e60e5]" />
						<p>Adventure</p>
					</div>
					<div className="shadow-xl bg-white p-8 rounded-lg flex flex-col justify-center items-center gap-4 hover:bg-rose hover:text-white">
						<BiSolidDrink className="rounded-full w-20 h-20 p-4 bg-[#fff4de] text-[#f6b23b]" />
						<p>Nightlife</p>
					</div>
					<div className="shadow-xl bg-white p-8 rounded-lg flex flex-col justify-center items-center gap-4 hover:bg-rose hover:text-white">
						<GiFishingBoat className="rounded-full w-20 h-20 p-4 bg-[#fad7d6] text-[#d03632]" />
						<p>Sightseeing</p>
					</div>
				</Carousel>
			</div>
		</div>
	);
}
