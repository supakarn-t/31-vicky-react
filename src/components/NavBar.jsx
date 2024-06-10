import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function NavBar() {
	const [timeNow, setTimeNow] = useState(new Date().toLocaleTimeString());

	useEffect(() => {
		setInterval(() => {
			setTimeNow(new Date().toLocaleTimeString());
		}, 1000);
	}, [timeNow]);

	return (
		<nav className="flex justify-between items-center px-4 h-16 sticky top-0 z-50 bg-gradient-to-br from-cyan-200 to-sky-300">
			<p className="font-bold">Time Now: {timeNow}</p>
			<ul className="flex justify-end gap-4">
				<li className="h-16">
					<Link
						to={"/"}
						className="flex items-center h-full p-4 hover:bg-cyan-100"
					>
						Home
					</Link>
				</li>
				<li className="h-16">
					<Link
						to={"/owner"}
						className="flex items-center h-full p-4 hover:bg-cyan-100"
					>
						Owner
					</Link>
				</li>
			</ul>
		</nav>
	);
}
