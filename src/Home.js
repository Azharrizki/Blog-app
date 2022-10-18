import BlogList from "./BlogList";
import useFetch from "./useFetch";
import React from "react";

const Home = () => {
	const {
		data: blogs,
		loading,
		error,
	} = useFetch("http://localhost:8000/blogs");

	return (
		<div className="max-w-4xl p-6 my-4 mx-auto space-x-5">
			{error && (
				<div className="px-3 py-1 bg-red-500 text-white rounded-md">
					{error}
				</div>
			)}
			{loading && <div>Loading...</div>}
			{blogs && <BlogList blogs={blogs} title={"All Blogs"} />}
		</div>
	);
};

export default Home;
