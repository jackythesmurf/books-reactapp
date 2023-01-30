import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import BrowsePage from "./components/BrowsePage/BrowsePage.jsx";
import DisplayPage from "./components/MainPage/DisplayPage/DisplayPage.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";

import MainPage from "./components/MainPage/MainPage";

import "./App.css";

function App() {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(false);
	// change initialiser to true to display browse mode
	const [initialiser, setInitialiser] = useState(false);

	// filters and gather book information
	useEffect(() => {
		const filteredBooksData = searchResults.map((books) => {
			let volInfo = books.volumeInfo;
			return {
				title: volInfo.title, // string
				authors: volInfo.authors, // array
				publishedDate: volInfo.publishedDate, // string
				publisher: volInfo.publisher, // string
				imageLinks: volInfo.imageLinks, // object
				description: volInfo.description, // string
				categories: volInfo.categories, //array
			};
		});
		setLoading(true);

		const loadingScreen = setInterval(() => {
			setLoading(false);
			
		}, 2000);
		setBooks(filteredBooksData);
		return () => {clearInterval(loadingScreen)

		}
	}, [searchResults]);

	return (
		<>
			{initialiser ? (
				<div>
					<SearchBar
						searchTerm={searchTerm}
						setSearchTerm={setSearchTerm}
						searchResults={searchResults}
						setSearchResults={setSearchResults}
						initialiser={initialiser}
						setInitialiser={setInitialiser}
					/>
					<BrowsePage />
				</div>
			) : (
				<div>
					<MainPage
						searchTerm={searchTerm}
						setSearchTerm={setSearchTerm}
						searchResults={searchResults}
						setSearchResults={setSearchResults}
						books={books}
						loading={loading}
					/>
				</div>
			)}
		</>
	);
}

export default App;
