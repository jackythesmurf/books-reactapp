import BooksCard from "../BooksCard/BooksCard.jsx";
import styles from "./DisplayPage.module.scss";
import SearchBar from "../../SearchBar/SearchBar.jsx";
import { motion } from "framer-motion";
import { useState } from "react";
import loadingSVG from "./images/flower-svgrepo-com (1).svg";
import BooksLargeModel from "../BooksLargeModel/BooksLargeModel.jsx";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";




const DisplayPage = ({
	books,
	searchTerm,
	searchResults,
	setSearchResults,
	setSearchTerm,
	loading,
}) => {
	const container = {
		hidden: { opacity: 1, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	};

	const item = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	};

	const [focus, setFocus] = useState(false);
	const [bookInfo, setBookInfo] = useState({})
	const [isOpen, setIsOpen] = useState(false);
	

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

					{loading ? (
						<div className={styles.box__loading}>
							<motion.img
								key={loadingSVG}
								src={loadingSVG}
								initial={{ scale: 0 }}
								animate={{ rotate: 360, scale: 1 }}
								transition={{
									type: "spring",
									stiffness: 50,
									damping: 20,
								}}
							/>
						</div>
					) : (
						<div>
							{focus ? (
								<BooksLargeModel bookInfo={bookInfo} setFocus={setFocus}/>
							) : (
								<motion.div
									className={[
										styles.box__booklist,
										"container",
									].join(" ")}
									variants={container}
									initial="hidden"
									animate="visible"
								>
									{books.map((book, index) => (
										<BooksCard
											
											key={index}
											title={book.title}
											authors={book.authors}
											publishedDate={book.publishedDate}
											publisher={book.publisher}
											imageLinks={book.imageLinks}
											description={book.description}
											categories={book.categories}
											className={"item"}
											variants={item}
											setBookInfo={setBookInfo}
											setFocus={setFocus}
										/>
									))}
								</motion.div>
							)}
						</div>
					)}
				</div>
			)}
		</div>
	);
};
export default DisplayPage;
