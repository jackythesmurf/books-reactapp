import DisplayPage from "./DisplayPage/DisplayPage";
import FeaturedTab from "./FeaturedTab/FeaturedTab";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./MainPage.module.scss";

const MainPage = ({ books, searchTerm, searchResults, setSearchResults, setSearchTerm}) => {
	return (
		<div className={styles.mainpage}>
			<FeaturedTab />
			<DisplayPage
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				searchResults={searchResults}
				setSearchResults={setSearchResults}
				books={books}
			/>
		</div>
	);
};
export default MainPage;
