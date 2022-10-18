import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
	return (
		<div className="flex-none text-start">
			<h3 className="text-xl mb-8 font-bold">{title}</h3>
			{blogs.map((blog) => (
				<Link
					className="flex justify-between p-4 mb-5 border rounded-md transition-transform translate-y-0 hover:border-blue-500 hover:-translate-y-1"
					key={blog.id}
					to={`/blogs/${blog.id}`}
				>
					<div className="">
						<h5 className="text-lg font-semibold">{blog.title}</h5>
						<h6 className="text-base text-gray-700 mb-3">
							Written by {blog.author}
						</h6>
					</div>
					<div className="text-sm text-gray-700">
						{blog.publishedAt}
					</div>
				</Link>
			))}
		</div>
	);
};

export default BlogList;
