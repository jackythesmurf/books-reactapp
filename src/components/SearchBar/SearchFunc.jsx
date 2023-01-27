const FetchBooks = (searchTerm, setSearchResults, searchResults) => {
	fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
		.then((response) => {
			if (!response.ok) {
				throw Error("Could not fetch data");
			}
			return response.json();
		})
		.then((data) => setSearchResults(data.items))
		.catch((err) => {
			console.log(err.message);
		});
};

export default FetchBooks;
