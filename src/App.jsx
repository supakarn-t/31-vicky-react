import { useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx";
// import UserPage from "./pages/UserPage.jsx";
// import AdminPage from "./pages/AdminPage.jsx";
import UserPageApi from "./pages/UserPageApi.jsx";
import AdminPageApi from "./pages/AdminPageApi.jsx";
import OwnerPage from "./pages/OwnerPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

export default function App() {
	const [userList, setUserList] = useState([]);
	// const [userId, setUserId] = useState(1);

	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<>
					<NavBar />
					<Outlet />
				</>
			),
			errorElement: <ErrorPage />,
			children: [
				{
					path: "/",
					element: <HomePage />,
				},
				{
					path: "/user",
					element: (
						<UserPageApi userList={userList} />

						// <UserPage userList={userList} />
					),
				},
				{
					path: "/admin",
					element: (
						<AdminPageApi userList={userList} setUserList={setUserList} />

						// <AdminPage
						// 	userList={userList}
						// 	setUserList={setUserList}
						// 	userId={userId}
						// 	setUserId={setUserId}
						// />
					),
				},
				{
					path: "/owner",
					element: <OwnerPage />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}
