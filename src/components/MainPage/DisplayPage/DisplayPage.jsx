import BooksCard from "../BooksCard/BooksCard.jsx";
import styles from "./DisplayPage.module.scss";
import SearchBar from "../../SearchBar/SearchBar.jsx";
const DisplayPage = ({
	books,
	searchTerm,
	searchResults,
	setSearchResults,
	setSearchTerm,
}) => {
	return (
		<div className={styles.box}>
			{books.length === 0 ? (
				<SearchBar
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
					searchResults={searchResults}
					setSearchResults={setSearchResults}
				/>
			) : (
				<div>
					<SearchBar
						searchTerm={searchTerm}
						setSearchTerm={setSearchTerm}
						searchResults={searchResults}
						setSearchResults={setSearchResults}
					/>
					<div className={styles.box__booklist}>
						{books.map((book) => (
							<BooksCard
								title={book.title}
								authors={book.authors}
								publishedDate={book.publishedDate}
								publisher={book.publisher}
								imageLinks={book.imageLinks}
								description={book.description}
								categories={book.categories}
							/>
						))}
					</div>
				</div>
			)}
		</div>
	);
};
export default DisplayPage;
