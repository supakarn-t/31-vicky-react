import myPic from "../assets/myPic.jpg";

export default function OwnerPage() {
	return (
		<div className="flex flex-col items-center my-16 gap-8">
			<h1>Vicky - Group B - 31</h1>

			<picture className="w-1/4 rounded-full overflow-hidden hover:scale-110 ">
				<img src={myPic} alt="Vicky" />
			</picture>

			<h2>Short Biography</h2>
			<p className="w-1/2">Hi I&apos;m Supakarn Tangsirivatthanavong.</p>
		</div>
	);
}
