import { useState } from "react";
import PageButton from "../components/ChangePageButton";
import PropTypes from "prop-types";
import EditButton from "../components/EditButton";
import DeleteButton from "../components/DeleteButton";
import AddUser from "../components/AddUser";

export default function Admin({ userList, setUserList, userId, setUserId }) {
	const [edit, setEdit] = useState(false);

	// create user obj for store input and add to user list
	const [user, setUser] = useState({
		id: "",
		firstName: "",
		lastName: "",
		position: "",
		editStatus: edit,
	});

	// every change at input update data to user obj
	function handleInputChange(e) {
		const { name, value } = e.target;

		setUser((prevInput) => {
			return {
				...prevInput,
				[name]: value,
			};
		});
	}

	// when submit form user id +1 and user data will add to user list
	function handleSubmit(e) {
		e.preventDefault();

		if (user.firstName == "" || user.lastName == "" || user.position == "") {
			alert("input is empty");
			return;
		}

		const newUser = {
			...user,
			id: `user-${userId}`,
		};

		setUserList((prevUser) => {
			return [...prevUser, newUser];
		});

		setUserId((prevId) => prevId + 1);

		setUser({
			id: "",
			firstName: "",
			lastName: "",
			position: "",
			editStatus: edit,
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

			<AddUser
				user={user}
				handleInputChange={handleInputChange}
				handleSubmit={handleSubmit}
			/>

			<table>
				{userList.length !== 0 && (
					<thead>
						<tr>
							<th className="w-1/8">User Id</th>
							<th className="w-1/4">First Name</th>
							<th className="w-1/4">Last Name</th>
							<th className="w-1/4">Position</th>
							<th className="w-1/8">Action</th>
						</tr>
					</thead>
				)}

				<tbody>
					{/* map user list here */}
					{userList.map((eachUser) => {
						return (
							<tr key={eachUser.id}>
								{eachUser.editStatus ? (
									<>
										<td className="text-center">{eachUser.id}</td>
										<td className="px-4">
											<input
												type="text"
												placeholder="First Name"
												name="firstName"
												value={eachUser.firstName}
												onChange={(e) => handleEditData(e, eachUser.id)}
												required
												className="border border-sky-300 rounded py-2 w-full"
											/>
										</td>
										<td className="px-4">
											<input
												type="text"
												placeholder="Last Name"
												name="lastName"
												value={eachUser.lastName}
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
										<td className="text-center">
											<EditButton
												eachUser={eachUser}
												edit={edit}
												setEdit={setEdit}
											/>
										</td>
									</>
								) : (
									<>
										<td className="text-center">{eachUser.id}</td>
										<td className="px-4">{eachUser.firstName}</td>
										<td className="px-4">{eachUser.lastName}</td>
										<td className="px-4">{eachUser.position}</td>
										<td>
											<div className="flex justify-around px-4">
												<EditButton
													eachUser={eachUser}
													edit={edit}
													setEdit={setEdit}
												/>

												<DeleteButton
													eachUser={eachUser}
													userList={userList}
													setUserList={setUserList}
												/>
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
										setUserList([]), setUserId(1);
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
