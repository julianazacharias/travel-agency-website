import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CiHeart, CiCamera } from "react-icons/ci";
import {
	MdStar,
	MdCheck,
	MdPeopleOutline,
	MdLocationPin,
	MdArrowRightAlt,
} from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { WiTime3 } from "react-icons/wi";
import images from "../constants/images";
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

export default function Destination() {
	useEffect(() => {
		AOS.init();
	}, []);

	const Places = ({ image, country, tours, column }) => {
		return (
			<div
				className={`relative overflow-hidden h-[270px] lg:col-span-${column}`}
			>
				<img
					src={image}
					alt=""
					className="h-full w-full rounded-lg object-cover hoverImg"
				/>
				{/* <p className="text-3xl text-white font-semibold absolute left-6 bottom-6">
					{country}
				</p> */}
				<button className="text-2xl text-white rounded-lg bg-slate-800 bg-opacity-70 p-2 font-semibold absolute left-2 bottom-2">
					{country}
				</button>

				<button className="bg-rose text-white rounded-lg px-4 py-2 text-xs font-semibold absolute top-4 right-4">
					{tours} TOURS
				</button>
			</div>
		);
	};

	const Tours = ({ image, rate, name, location, price, duration, group }) => {
		return (
			<div>
				<div className="relative overflow-hidden rounded-t-lg">
					<img
						src={image}
						alt=""
						className="rounded-t-lg hoverImg w-[280px] h-[250px]"
					/>
					<div className="absolute flex justify-between top-4 left-4 right-4">
						<p className="bg-rose font-semibold rounded-md px-4 py-1 text-white text-sm">
							FEATURED
						</p>
						<button className="bg-[#00000066] p-1 rounded-md">
							<CiHeart className="text-white text-xl" />
						</button>
					</div>
				</div>
				<div className="border border-[#fae2ea] rounded-b-lg relative">
					<div className="absolute w-full h-5 -top-5 bg-white rounded-t-[20px]"></div>
					<div className="p-4 pt-0">
						<div className="flex items-center gap-4 justify-between">
							<span className="flex justify-center">
								{[...Array(5)].map((_, index) => (
									<MdStar key={index} className="text-[#ffa801] tex-xl" />
								))}
								<p className="text-[#757783] pl-2">{rate}</p>
							</span>
						</div>
						<h4 className="text-xl font-semibold py-2 hover:text-rose my-8">
							{name}
						</h4>
						<span className="flex items-center gap-2">
							<MdLocationPin className="text-rose text-xl" />
							<p className="text-[#757783] text-sm">{location}</p>
						</span>
						<span className="text-[#757783] flex py-4">
							From <p className="text-rose mx-2">${price}</p>
						</span>
						<div className="bg-[#FAF8F4] flex justify-between py-4 px-4">
							<span className="flex items-center gap-2">
								<WiTime3 className="text-rose" />
								{duration} days
							</span>
							<span className="flex items-center gap-2">
								<MdPeopleOutline className="text-rose" /> {group} women
							</span>
							<a
								href="#"
								className="flex items-center gap-2 text-rose text-sm font-bold mt-2"
							>
								more <MdArrowRightAlt />
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="lg:mt-60 mt-10" data-aos="fade-down">
			<div className="max-w-[1200px] px-6 mx-auto text-center">
				<p className="text-rose text-xl">Some of our destinations</p>
				<h4 className="font-bold lg:text-[50px] text-[30px] py-6">
					See our tours
				</h4>
				<div className="grid lg:grid-cols-4 grid-cols-1 gap-2">
					<Places
						country="Spain"
						image={images.barcelona}
						tours="4"
						column="1"
					/>
					<Places country="UK" image={images.london_uk} tours="6" column="2" />
					<Places
						country="Argentina"
						image={images.caminito}
						tours="3"
						column="1"
					/>
					<Places
						country="Hungary"
						image={images.hungary}
						tours="2"
						column="2"
					/>
					<Places
						country="Italy"
						image={images.coliseum}
						tours="5"
						column="2"
					/>
					<Places
						country="Thailand"
						image={images.buddism_thailand}
						tours="2"
						column="2"
					/>
					<Places country="Japan" image={images.mt_fuji} tours="5" column="2" />
					<Places
						country="Egypt"
						image={images.piramids}
						tours="5"
						column="2"
					/>
				</div>
			</div>
			<div className="bg-[url(/bg-line-bird.png)] bg-no-repeat py-28">
				<div className="lg:flex max-w-[1300px] px-6 mx-auto gap-8">
					<div className="relative lg:w-1/2 px-10" data-aos="fade-down">
						<img
							src={images.women_diversity}
							alt=""
							className="rounded-t-full hover:opacity-75 transition duration-300"
						/>
					</div>
					<div className="lg:w-1/2" data-aos="fade-up">
						<p className="text-rose text-xl">Get to know us</p>
						<h4 className="font-bold lg:text-[50px] text-[30px] py-2">
							Book a trip with
						</h4>
						<h5 className="font-bold lg:text-[50px] text-[30px]">ELAS TOUR</h5>
						<p className="text-[#757783] leading-8 py-4 mb-8">
							Embark on unforgettable journeys designed exclusively for women
							who prioritize safety, camaraderie, and exploration. At ELAS TOUR,
							we specialize in crafting meticulously planned group tours to the
							world's most secure and captivating destinations. Whether you're
							dreaming of discovering cultural treasures, indulging in serene
							retreats, or seeking adventurous escapes, our carefully curated
							experiences ensure you can travel with confidence and peace of
							mind.
						</p>
						<span className="flex items-center gap-4 py-2 font-medium">
							<MdCheck className="bg-rose text-white rounded-xl" /> Travel
							Safely with a trusted and renowned travel agency
						</span>
						<span className="flex items-center gap-4 py-2 font-medium">
							<MdCheck className="bg-rose text-white rounded-xl" /> Discover
							amazing destinations
						</span>
						<span className="flex items-center gap-4 py-2 font-medium">
							<MdCheck className="bg-rose text-white rounded-xl" /> Make
							lifelong friends
						</span>
						<div>
							<button className="bg-slate-500 text-white px-6 py-3 transition-bg hover:bg-rose rounded-xl shadow my-8">
								Book a trip
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="text-center my-10 px-6" data-aos="fade-down">
				<p className="text-rose text-xl pb-2">Featured Tours</p>
				<h4 className="lg:text-[50px] text-[30px] font-bold mb-8">
					Most popular tours
				</h4>
				<div>
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
						<Tours
							image={images.taj_mahal}
							name="Mumbai, New Delhi and Taj Mahal"
							rate="5.0"
							location="India"
							price="1800"
							duration="10"
							group="16"
						/>
						<Tours
							image={images.camels}
							name="Egypt, Museums and Gizé Pyramids"
							rate="4.9"
							location="Egypt"
							price="2000"
							duration="12"
							group="8"
						/>
						<Tours
							image={images.peru}
							name="Lima, Andes and Machu Picchu"
							rate="4.8"
							location="Peru"
							price="1200"
							duration="18"
							group="15"
						/>
						<Tours
							image={images.great_wall_china}
							name="Shangai, Pequim and Great Wall"
							rate="5.0"
							location="China"
							price="3000"
							duration="20"
							group="14"
						/>
						<Tours
							image={images.rio}
							name="Rio de Janeiro, São Paulo and Amazonia"
							rate="5.0"
							location="Brazil"
							price="2600"
							duration="20"
							group="10"
						/>
						<Tours
							image={images.sapa}
							name="Hanoi, Sapa, Rice fields and Hong Kong"
							rate="4.9"
							location="Vietnam and Hong Kong"
							price="1500"
							duration="7"
							group="8"
						/>
					</Carousel>
				</div>
			</div>
		</div>
	);
}
