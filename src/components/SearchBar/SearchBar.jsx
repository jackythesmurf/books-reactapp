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
	
	
	
}) => {

	

	let searchNum = 10
	const handleSubmit = (event) => {
		FetchBooks(searchTerm, setSearchResults, searchNum);
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

	const handleSelect = (event) => {
		searchNum = event.target.value
		
		FetchBooks(searchTerm, setSearchResults, searchNum);
		handleSubmit();
	}
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
			<label>Books Displayed </label>
			<select  onChange={handleSelect} id="">
				<option value="10">10</option>
				<option value="20">20</option>
				<option value="30">30</option>
				<option value="40">40</option>
			</select>
		</div>
	);
};

export default SearchBar;
