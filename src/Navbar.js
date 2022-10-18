import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="flex justify-between max-w-4xl mx-auto p-6 space-x-72">
			<h1 className="text-2xl font-extrabold text-blue-600">News App</h1>
			<div className="text-lg font-semibold space-x-12">
				<Link className="hover:text-blue-600" to="/">
					Home
				</Link>
				<Link className="hover:text-blue-600" to="/create">
					New Blog
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
