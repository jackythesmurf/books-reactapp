import FetchBooks from "./SearchFunc.jsx";
import styles from "./SearchBar.module.scss";
import { useState, useEffect } from "react";

const SearchBar = ({
	searchTerm,
	setSearchTerm,
	searchResults,
	setSearchResults,
	initialiser,
	setInitialiser,
	focus,
	setFocus,
}) => {
	const handleSubmit = (event) => {
		FetchBooks(searchTerm, setSearchResults, searchResults);
		if (initialiser) {
			setInitialiser(false);
		}
	};
	const handleChange = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			handleSubmit();
		}
	};

	return (
		<div className={styles.box}>
			<input
				className={styles.box__searchbar}
				id="userInput"
				onChange={handleChange}
				onKeyDown={handleKeyDown}
				type="text"
				placeholder="Search for a book . . ."
			/>
		</div>
	);
};

export default SearchBar;
