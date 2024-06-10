import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ErrorPage() {
	const error = useRouteError();
	console.log(error);

	return (
		<div className="flex flex-col justify-center items-center gap-8 h-screen bg-gradient-to-br from-cyan-200 to-sky-300 ">
			<h1 className="text-9xl">OOPS!</h1>

			<p className="text-2xl">
				Error {error.status} : Page {error.statusText}
			</p>
			<p className="text-xl">
				I&apos;m sorry, but the page you requested could not be found.
			</p>

			<Link
				to={"/"}
				className="bg-white p-4 rounded-xl shadow-[7px_7px_0_0_gray] hover:translate-x-1 tr hover:translate-y-1 hover:shadow-[3px_3px_0_0_gray] "
			>
				Go to Home Page
			</Link>
		</div>
	);
}
