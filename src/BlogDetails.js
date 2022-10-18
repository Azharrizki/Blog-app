import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
	const { uuid } = useParams();
	const {
		data: blog,
		loading,
		error,
	} = useFetch("http://localhost:8000/blogs/" + uuid);

	const history = useHistory();

	const handleClick = () => {
		fetch("http://localhost:8000/blogs/" + uuid, {
			method: "DELETE",
		}).then(() => {
			history.push("/");
		});
	};

	return (
		<div className="max-w-4xl p-6 my-4 mx-auto space-x-5">
			{error && (
				<div className="px-3 py-1 bg-red-500 text-white rounded-md">
					{error}
				</div>
			)}
			{loading && <div>Memuat detail blog...</div>}
			{blog && (
				<article className="border p-4 rounded-md">
					<div className="flex justify-between mb-5">
						<span className="text-base font-medium text-blue-600">
							{blog.author}
						</span>
						<span className="text-sm text-gray-400">
							{blog.publishedAt}
						</span>
					</div>
					<div className="text-justify">
						<h3 className="text-2xl font-semibold text-gray-800 mb-4">
							{blog.title}
						</h3>
						<p className="text-gray-600 mb-5">{blog.body}</p>
						<button
							onClick={handleClick}
							className="flex justify-between px-5 py-1 border-2 text-red-600 hover:text-white border-red-400 hover:border-red-600 hover:bg-red-600 transition-all rounded-md"
						>
							Hapus Blog
						</button>
					</div>
				</article>
			)}
		</div>
	);
};

export default BlogDetails;
