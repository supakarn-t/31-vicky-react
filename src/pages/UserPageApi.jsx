import PageButton from "../components/ChangePageButton";
import PropTypes from "prop-types";

export default function UserPage({ userList }) {
	return (
		<div className="flex flex-col items-center my-16 gap-16">
			<h1>
				Generation Thailand <br />
				Home - User Sector
			</h1>

			<PageButton />

			<table>
				{userList.length === 0 ? (
					<h2 className="text-center">Data is Empty...</h2>
				) : (
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Position</th>
					</tr>
				)}

				{userList.map((eachUser) => {
					return (
						<tr key={eachUser.id}>
							<td className="px-4">{eachUser.name}</td>
							<td className="px-4">{eachUser.lastname}</td>
							<td className="px-4">{eachUser.position}</td>
						</tr>
					);
				})}
			</table>
		</div>
	);
}

UserPage.propTypes = {
	userList: PropTypes.array,
};
