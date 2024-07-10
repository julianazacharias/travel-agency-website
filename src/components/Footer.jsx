import {
	MdPhone,
	MdOutlineMailOutline,
	MdOutlineLocationOn,
} from "react-icons/md";
import images from "../constants/images";

export default function Footer() {
	return (
		<footer className="bg-[url(/bg-map-2.png)] bg-rose py-16 bg-cover">
			<div className="text-white flex lg:flex-nowrap flex-wrap justify-between max-w-[1400px] xl:px-0 px-6 mx-auto gap-10">
				<div className="flex flex-col">
					<img src={images.logo} alt="" className="max-w-36" />
				</div>
				<div className="lg:w-1/3">
					<p className="text-white font-bold my-5 lg:mt-0">
						The best travel agency for women
					</p>
					<div className="flex flex-col">
						<ul>
							<li>
								<a
									href="#"
									className="flex items-center gap-2 py-2 hover:text-slate-700"
								>
									<MdPhone className="text-[#083344] mr-2" />
									<span>00 0000 0000</span>
								</a>
							</li>
							<li>
								<a
									href="#"
									className="flex items-center gap-2 py-2 hover:text-slate-700"
								>
									<MdOutlineMailOutline className="text-[#083344] mr-2" />
									<span>contact@example.com</span>
								</a>
							</li>
							<li>
								<a
									href="#"
									className="flex items-center gap-2 py-2 hover:text-slate-700"
								>
									<MdOutlineLocationOn className="text-[#083344] mr-2" />
									<span>Some Address, Some city - Country</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="lg:w-1/5">
					<h6 className="text-white text-xl font-bold my-5 lg:mt-0">Company</h6>
					<ul className="flex flex-col gap-4">
						<a href="" className="hover:text-slate-700">
							About us
						</a>
						<a href="" className="hover:text-slate-700">
							Rewards
						</a>
						<a href="" className="hover:text-slate-700">
							Work with us
						</a>
						<a href="" className="hover:text-slate-700">
							FAQ
						</a>
						<a href="" className="hover:text-slate-700">
							Contact
						</a>
					</ul>
				</div>
				<div className="lg:w-1/5">
					<h6 className="text-white text-xl font-bold my-5 lg:mt-0">Explore</h6>
					<ul className="flex flex-col gap-4">
						<a href="" className="hover:text-slate-700">
							Account
						</a>
						<a href="" className="hover:text-slate-700">
							Privacy Policy
						</a>
						<a href="">Affiliate Program</a>
						<a href="" className="hover:text-slate-700">
							Our Partners
						</a>
						<a href="" className="hover:text-slate-700">
							Events
						</a>
					</ul>
				</div>
				<div className="flex flex-col">
					<h6 className="text-xl font-bold my-5">Newsletter</h6>
					<input
						type="email"
						placeholder="E-mail Address"
						className="bg-white rounded-md py-2 px-4 mb-2"
					/>
					<button className="bg-slate-800 text-white py-2 px-4 rounded-md mb-2 hover:bg-slate-600">
						Subscribe
					</button>
					<label htmlFor="terms" className="text-sm">
						<input type="checkbox" id="terms" className="mr-2" />I agree to all
						terms and policies
					</label>
				</div>
			</div>
		</footer>
	);
}
