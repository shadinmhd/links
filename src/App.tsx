import profileImage from "./assets/profile.png"
import Link from "./components/Link"
import { faEarth } from "@fortawesome/free-solid-svg-icons/faEarth"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp"

const App = () => {

	return (
		<div className="flex flex-col gap-10 items-center justify-center h-screen w-screen text-white bg-[#101010]">
			<div className="flex flex-col gap-4 items-center justify-center ">
				<div className="rounded-full">
					<img className="h-40 w-40 bg-black rounded-full" src={profileImage} alt="dp" />
				</div>
				<div className="text-4xl font-bold">
					Shadin Muhammed
				</div>
			</div>
			<div
				className="flex flex-col gap-5"
			>
				<Link index={1} icon={faEarth} to="https://shadinmhd.in" >
					Website
				</Link>
				<Link index={2} icon={faLinkedin} to="https://www.linkedin.com/in/shadin-muhammed-69b004256/" >
					Linkedin
				</Link>
				<Link index={3} icon={faInstagram} to="https://www.instagram.com/_sh.dn_/" >
					Instagram
				</Link>
				<Link index={3} icon={faWhatsapp} to="https://wa.me/+918589908074" >
					Instagram
				</Link>

			</div>
		</div>
	)
}

export default App
