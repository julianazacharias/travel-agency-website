import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CiHeart, CiCamera } from "react-icons/ci";
import { MdStar } from "react-icons/md";
import images from "../constants/images";
import AOS from "aos";
import "aos/dist/aos.css";

const responsive = {
	superlargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 4,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	module: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

export default function Review() {
	useEffect(() => {
		AOS.init();
	}, []);

	const Card = ({ image, name, position }) => {
		return (
			<div>
				<div className="flex justify-center flex-col items-center">
					<img
						src={image}
						alt=""
						className="rounded-full w-60 hover:opacity-75 transition duration-300"
					/>
					<div className="shadow-bg rounded-lg mt-10 bg-white p-8 text-center h-full">
						<span className="flex justify-center mb-2">
							{[...Array(5)].map((_, index) => (
								<MdStar key={index} className="text-[#ffa801] text-xl" />
							))}
						</span>
						<p className="py-6">
							Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris,
							leite de mula manquis sem cabeça. Quem num gosta di mé, boa gentis
							num é. Pra lá, depois divoltis porris, paradis. Mauris nec dolor
							in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis
							nisl.
						</p>
						<p className="text-textColor text-xl font-semibold">{name}</p>
						<p className="text text-rose py-2 uppercase">{position}</p>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div>
			<div data-aos="fade-up">
				<div>
					<div className="max-w-[1050px] xl:px-0 px-6 mx-auto text-center pt-16">
						<h1 className="text-4xl font-bold">What they are saying</h1>
						<p className="text-rose text-xl mt-8 mb-16">
							Testimonials & reviews
						</p>
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
								<Card
									image={images.woman_01}
									name="Lisa Suzuki"
									position="Digital Nomad"
								/>
								<Card
									image={images.woman_02}
									name="Priyanka Kapoor"
									position="Graduate student"
								/>
								<Card
									image={images.woman_03}
									name="Shahina Mugabi"
									position="Software Engineer"
								/>
								<Card
									image={images.woman_04}
									name="Camila Monteiro"
									position="Journalist and Activist"
								/>
								<Card
									image={images.woman_05}
									name="Mariana Fernandez"
									position="Lawyer"
								/>
								<Card
									image={images.woman_06}
									name="Ayla Asghar"
									position="Marketing Manager"
								/>
								<Card
									image={images.woman_07}
									name="Malaika Guehi"
									position="Entrepreneur"
								/>
								<Card
									image={images.woman_08}
									name="Indira Kaif"
									position="Astronomer"
								/>
								<Card
									image={images.woman_09}
									name="Ashley Winslet"
									position="Designer"
								/>
							</Carousel>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
