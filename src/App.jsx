import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import HomePage from "./pages/HomePage.jsx";
import OwnerPage from "./pages/OwnerPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

export default function App() {
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
					path: "/owner",
					element: <OwnerPage />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}
