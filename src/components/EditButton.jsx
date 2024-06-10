import PropTypes from "prop-types";
import { FaPen } from "react-icons/fa";

export default function EditButton({ eachUser, edit, setEdit }) {
	return (
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
	);
}

EditButton.propTypes = {
	eachUser: PropTypes.object,
	edit: PropTypes.bool,
	setEdit: PropTypes.func,
};
