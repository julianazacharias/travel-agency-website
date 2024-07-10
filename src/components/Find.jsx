import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import images from "../constants/images";

export default function Find() {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div data-aos="zoom-in" className="container mx-auto px-16">
			<div className="py-16">
				<span className="flex flex-col items-center text-center gap-2">
					<h2 className="text-4xl font-bold pb-4">
						A journey to create unforgettable memories
					</h2>
					<p className="text-rose text-xl">
						Find trips that fit your travel style
					</p>
				</span>
				<div className="lg:flex items-center justify-between py-16">
					<div className="lg:w-1/2">
						<div>
							<span className="bg-rose text-white px-3 py-1 rounded-xl">
								01
							</span>
							<h2 className="font-bold text-lg py-4 lg:w-1/2">
								Sign Up on Our Website
							</h2>
							<p className="text-gray pb-6 lg:w-1/2">
								Unlock exclusive benefits. Once logged in, you can add your
								favorite trips to your list.
							</p>
						</div>
						<div>
							<span className="bg-rose text-white px-3 py-1 rounded-xl">
								02
							</span>
							<h2 className="font-bold text-lg py-4">
								Discover Trips Tailored to Your Preferences
							</h2>
							<p className="text-gray pb-6 lg:w-1/2">
								Explore a variety of trips that match your sense of freedom. Our
								team will promptly get in touch with you.
							</p>
						</div>
						<div>
							<span className="bg-rose text-white px-3 py-1 rounded-xl">
								03
							</span>
							<h2 className="font-bold text-lg py-4">
								Book your trip, we will take care of everything!
							</h2>
							<p className="text-slate-500 pb-6 lg:w-1/2">
								Book your trip effortlessly, and leave the rest to us. Sit back
								and relax as we keep you updated until your adventure begins!
							</p>
						</div>
						<button className="bg-slate-500 text-white px-6 py-3 transition-bg hover:bg-rose rounded-xl shadow my-8">
							See options
						</button>
					</div>
					<div className="lg:w-1/2 h-full overflow-hidden rounded-2xl">
						<img
							src={images.woman_sunset}
							alt=""
							className="rounded-2xl w-full hover:opacity-75 transition duration-300"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
