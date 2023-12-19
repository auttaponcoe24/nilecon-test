import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import NewsDetails from "../pages/NewsDetails";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ path: "", element: <Home /> },
			{ path: "news-details", element: <NewsDetails /> },
		],
	},
]);

export default function route() {
	return <RouterProvider router={router} />;
}
