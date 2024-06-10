import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import PageButton from "../components/ChangePageButton";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export default function Admin({ userList, setUserList }) {
	const [edit, setEdit] = useState(false);
	const [user, setUser] = useState({
		name: "",
		lastname: "",
		position: "",
	});
	const [reload, setReload] = useState(false);

	useEffect(() => {
		getUser();
	}, [reload]);

	async function getUser() {
		try {
			const response = await axios.get(
				"https://jsd5-mock-backend.onrender.com/members"
			);
			const data = await response.data;
			setUserList(data);
		} catch (error) {
			console.error("Failed to get data:", error);
		}
	}

	async function postUser() {
		try {
			// eslint-disable-next-line no-unused-vars
			const response = await axios.post(
				"https://jsd5-mock-backend.onrender.com/members",
				user
			);
			setReload(!reload);
		} catch (error) {
			console.error("Failed to post data:", error);
		}
	}

	async function putUser(eachUser) {
		try {
			// eslint-disable-next-line no-unused-vars
			const response = await axios.put(
				`https://jsd5-mock-backend.onrender.com/members`,
				{
					id: eachUser.id,
					name: eachUser.name,
					lastname: eachUser.lastname,
					position: eachUser.position,
				}
			);
			setReload(!reload);
		} catch (error) {
			console.error("Failed to put data:", error);
		}
	}

	async function deleteUser(id) {
		try {
			// eslint-disable-next-line no-unused-vars
			const response = await axios.delete(
				`https://jsd5-mock-backend.onrender.com/member/${id}`
			);
			setReload(!reload);
		} catch (error) {
			console.error("Failed to put data:", error);
		}
	}

	function handleInputChange(e) {
		const { name, value } = e.target;

		setUser((prevInput) => {
			return {
				...prevInput,
				[name]: value,
			};
		});
	}

	function handleSubmit(e) {
		e.preventDefault();

		if (user.name == "" || user.lastname == "" || user.position == "") {
			alert("input is empty");
			return;
		}

		postUser();

		setUser({
			name: "",
			lastname: "",
			position: "",
		});
	}

	function handleEditData(e, Id) {
		const { name, value } = e.target;

		setUserList((prevUserList) =>
			prevUserList.map((item) =>
				item.id === Id ? { ...item, [name]: value } : item
			)
		);
	}

	return (
		<div className="flex flex-col items-center my-16 gap-16">
			<h1>
				Generation Thailand <br />
				Home - Admin Sector
			</h1>

			<PageButton />

			<form onSubmit={handleSubmit} className="flex flex-col gap-4">
				<h2 className="text-center md:text-left">Create User Here</h2>
				<div className="flex flex-col lg:flex-row justify-center items-center gap-4">
					<div className="flex flex-col md:flex-row gap-4">
						<input
							type="text"
							placeholder="First Name"
							name="name"
							value={user.name}
							onChange={handleInputChange}
							required
							className="border border-sky-300 rounded-full py-2 px-6 flex-grow"
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastname"
							value={user.lastname}
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
						className="w-1/2 md:w-1/3 bg-gradient-to-br from-cyan-200 to-sky-300 p-4 rounded-xl shadow-[7px_7px_0_0_gray] hover:translate-x-1 tr hover:translate-y-1 hover:shadow-[3px_3px_0_0_gray]"
					>
						Add User
					</button>
				</div>
			</form>

			<table>
				{userList.length !== 0 && (
					<thead>
						<tr>
							<th className="w-[30%]">First Name</th>
							<th className="w-[30%]">Last Name</th>
							<th className="w-[30%]">Position</th>
							<th className="w-[10%]">Action</th>
						</tr>
					</thead>
				)}

				<tbody>
					{userList.map((eachUser) => {
						return (
							<tr key={eachUser.id} className="h-16">
								{eachUser.editStatus ? (
									<>
										<td className="px-4">
											<input
												type="text"
												placeholder="First Name"
												name="name"
												value={eachUser.name}
												onChange={(e) => handleEditData(e, eachUser.id)}
												required
												className="border border-sky-300 rounded py-2 w-full"
											/>
										</td>
										<td className="px-4">
											<input
												type="text"
												placeholder="Last Name"
												name="lastname"
												value={eachUser.lastname}
												onChange={(e) => handleEditData(e, eachUser.id)}
												required
												className="border border-sky-300 rounded py-2 w-full"
											/>
										</td>
										<td className="px-4">
											<input
												type="text"
												placeholder="Position"
												name="position"
												value={eachUser.position}
												onChange={(e) => handleEditData(e, eachUser.id)}
												required
												className="border border-sky-300 rounded py-2 w-full"
											/>
										</td>
										<td className="text-center ">
											<button
												onClick={() => {
													setEdit((eachUser.editStatus = !edit)),
														putUser(eachUser);
												}}
												className={
													eachUser.editStatus
														? "bg-sky-300 hover:bg-sky-500 hover:text-white py-2 px-4 rounded-xl"
														: ""
												}
											>
												{eachUser.editStatus ? "Save" : <FaPen />}
											</button>
										</td>
									</>
								) : (
									<>
										<td className="px-4">{eachUser.name}</td>
										<td className="px-4">{eachUser.lastname}</td>
										<td className="px-4">{eachUser.position}</td>
										<td>
											<div className="flex justify-around px-4">
												<button
													onClick={() => {
														setEdit((eachUser.editStatus = !edit));
													}}
													className={
														eachUser.editStatus
															? "bg-sky-300 hover:bg-sky-500 hover:text-white py-2 px-4 rounded-xl"
															: ""
													}
												>
													{eachUser.editStatus ? "Save" : <FaPen />}
												</button>

												<button
													onClick={() => deleteUser(eachUser.id)}
													className="text-red-500 hover:text-black"
												>
													<FaTrash />
												</button>
											</div>
										</td>
									</>
								)}
							</tr>
						);
					})}
				</tbody>

				<tfoot>
					{userList.length >= 2 && (
						<tr>
							<td colSpan={5} className="text-right border-none">
								<button
									onClick={() => {
										alert("You can't delete all users on API!");
									}}
									className="bg-red-500 text-white hover:bg-red-700 px-4 py-2 rounded-xl"
								>
									Delete All
								</button>
							</td>
						</tr>
					)}
				</tfoot>
			</table>
		</div>
	);
}

Admin.propTypes = {
	userList: PropTypes.array,
	setUserList: PropTypes.func,
	userId: PropTypes.number,
	setUserId: PropTypes.func,
};
