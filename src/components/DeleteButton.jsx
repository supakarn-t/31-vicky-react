import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";

export default function DeleteButton({ eachUser, userList, setUserList }) {
	return (
		<button
			onClick={() => {
				setUserList(userList.filter((item) => item.id !== eachUser.id));
			}}
			className="text-red-500 hover:text-black"
		>
			<FaTrash />
		</button>
	);
}

DeleteButton.propTypes = {
	eachUser: PropTypes.object,
	userList: PropTypes.array,
	setUserList: PropTypes.func,
};
