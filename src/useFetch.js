import { useState, useEffect } from "react";

// custome Hook
const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const AbortCont = new AbortController();

		setTimeout(() => {
			fetch(url, { signal: AbortCont.signal })
				.then((res) => {
					if (!res.ok) {
						throw Error(
							"Could not fetch the data for that resorce",
						);
					}
					return res.json();
				})
				.then((data) => {
					setData(data);
					setLoading(false);
					setError(null);
				})
				.catch((err) => {
					if (err.name === "AbortError") {
						console.log("fetch aborted");
					} else {
						setLoading(false);
						setError(err.message);
					}
				});
		}, 1000);
		return () => AbortCont.abort();
	}, [url]);

	return { data, loading, error };
};

export default useFetch;
