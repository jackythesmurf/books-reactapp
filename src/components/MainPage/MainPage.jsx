import DisplayPage from "./DisplayPage/DisplayPage";
import FeaturedTab from "./FeaturedTab/FeaturedTab";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./MainPage.module.scss";
import { useState } from "react";
const MainPage = ({
	books,
	searchTerm,
	searchResults,
	setSearchResults,
	setSearchTerm,
	loading,
}) => {
	
	return (
		<div className={styles.mainpage}>
			<FeaturedTab />
			
			
				<DisplayPage
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
					searchResults={searchResults}
					setSearchResults={setSearchResults}
					books={books}
					loading={loading}
				/>
			
		</div>
	);
};
export default MainPage;
