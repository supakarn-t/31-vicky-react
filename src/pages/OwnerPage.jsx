import myPic from "../assets/myPic.jpg";

export default function OwnerPage() {
	return (
		<div className="flex flex-col items-center my-16 gap-8">
			<h1>Vicky - Group B - 31</h1>

			<picture className="w-1/4 rounded-full overflow-hidden hover:scale-110 ">
				<img src={myPic} alt="Vicky" />
			</picture>

			<h2>Short Biography</h2>
			<p className="w-1/2">
				A tech enthusiast with experience in JavaScript, React, CSS, Node.js,
				and state management. Able to work together as a team, high orientation
				to detail, and dedicated to providing excellence in every project.
				Driven by the love of coding.
			</p>
		</div>
	);
}
