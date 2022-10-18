import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("");
	const [date, setDate] = useState("");
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();

		setLoading(true);

		const options = {
			year: "numeric",
			month: "long",
			day: "numeric",
		};

		const dates = new Date(date);
		const publishedAt = dates.toLocaleDateString("en-US", options);
		const blog = { title, body, author, publishedAt };

		fetch("http://localhost:8000/blogs", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(blog),
		}).then(() => {
			console.log("new blog added");
			setLoading(false);
			history.push("/");
		});
	};

	return (
		<div className="flex flex-col my-4 p-6 max-w-4xl justify-center w-2/5 mx-auto">
			<h2 className="text-lg font-semibold mb-8 text-center">New Blog</h2>
			<form onSubmit={handleSubmit}>
				<div className="block mb-4">
					<p className="text-start ">Title</p>
					<input
						type="text"
						className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
					/>
				</div>
				<div className="block mb-4">
					<p className="text-start ">Body</p>
					<textarea
						className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
						rows={"3"}
						value={body}
						onChange={(e) => setBody(e.target.value)}
						required
					/>
				</div>
				<div className="block mb-4">
					<p className="text-start ">Date</p>
					<input
						type="date"
						className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
						onChange={(e) => setDate(e.target.value)}
						required
					/>
				</div>
				<div className="block mb-5">
					<p className="text-start">Author</p>
					<select
						className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
						onChange={(e) => setAuthor(e.target.value)}
						value={author}
						required
					>
						<option>Pilih author...</option>
						<option value="Azhar Rizki">Azhar Rizki</option>
						<option value="Habibi Nur Ilham">
							Habibi Nur Ilham
						</option>
						<option value="Muhammad Alrizki">
							Muhammad Alrizki
						</option>
					</select>
				</div>
				{!loading && (
					<button className="bg-blue-600 px-5 py-1 rounded-md text-white">
						Simpan
					</button>
				)}
				{loading && (
					<button className="bg-blue-600 px-5 py-1 rounded-md text-white">
						Data sedang ditambahkan....
					</button>
				)}
			</form>
		</div>
	);
};

export default Create;
