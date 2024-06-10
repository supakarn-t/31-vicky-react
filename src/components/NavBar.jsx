import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<nav className="flex justify-end items-center h-16 bg-sky-200 sticky top-0 z-50">
			<ul className="flex justify-end gap-4 pr-4">
				<li className="h-16">
					<Link
						to={"/"}
						className="flex items-center h-full p-4 hover:bg-sky-300"
					>
						Home
					</Link>
				</li>
				<li className="h-16">
					<Link
						to={"/owner"}
						className="flex items-center h-full p-4 hover:bg-sky-300"
					>
						Owner
					</Link>
				</li>
			</ul>
		</nav>
	);
}
