import { Link } from "react-router-dom";

export default function ChangePageButton() {
	return (
		<div className="flex flex-col gap-8 sm:gap-16 sm:flex-row md:gap-40">
			<Link
				to={"/user"}
				className="bg-gradient-to-br from-cyan-200 to-sky-300 p-4 rounded-xl shadow-[7px_7px_0_0_gray] hover:translate-x-1 tr hover:translate-y-1 hover:shadow-[3px_3px_0_0_gray] "
			>
				User Home Sector
			</Link>
			<Link
				to={"/admin"}
				className="bg-gradient-to-br from-cyan-200 to-sky-300 p-4 rounded-xl shadow-[7px_7px_0_0_gray] hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0_0_gray] "
			>
				Admin Home Sector
			</Link>
		</div>
	);
}
