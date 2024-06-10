import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar";

export default function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <NavBar />,
		},
	]);

	return <RouterProvider router={router} />;
}
