import PropTypes from "prop-types";

export default function AddUser({ user, handleInputChange, handleSubmit }) {
	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-4">
			<h2 className="text-center md:text-left">Create User Here</h2>
			<div className="flex flex-col lg:flex-row justify-center items-center gap-4">
				<div className="flex flex-col md:flex-row gap-4">
					<input
						type="text"
						placeholder="First Name"
						name="firstName"
						value={user.firstName}
						onChange={handleInputChange}
						required
						className="border border-sky-300 rounded-full py-2 px-6 flex-grow"
					/>
					<input
						type="text"
						placeholder="Last Name"
						name="lastName"
						value={user.lastName}
						onChange={handleInputChange}
						required
						className="border border-sky-300 rounded-full py-2 px-6 flex-grow"
					/>
					<input
						type="text"
						placeholder="Position"
						name="position"
						value={user.position}
						onChange={handleInputChange}
						required
						className="border border-sky-300 rounded-full py-2 px-6 flex-grow"
					/>
				</div>

				<button
					type="submit"
					className="w-1/2 md:w-1/3 bg-sky-300 p-4 rounded-xl shadow-[4px_4px_0_0_gray] hover:bg-sky-500 hover:text-white hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
				>
					Save
				</button>
			</div>
		</form>
	);
}

AddUser.propTypes = {
	user: PropTypes.object,
	handleInputChange: PropTypes.func,
	handleSubmit: PropTypes.func,
};
