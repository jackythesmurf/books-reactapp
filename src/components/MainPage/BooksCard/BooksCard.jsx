import styles from "./BooksCard.module.scss";
import { motion } from "framer-motion";

const BooksCard = ({
	title,
	authors,
	publishedDate,
	publisher,
	imageLinks,
	description,
	categories,
	variants,
	setBookInfo,
	setFocus,
}) => {
	const handleClick = () => {
		setFocus(true);
		setBookInfo({
			title: title,
			authors: authors,
			publishedDate: publishedDate,
			publisher: publisher,
			imageLinks: imageLinks.smallThumbnail,
			description: description,
			categories: categories,
		});
	};

	return (
		<motion.div
			onClick={handleClick}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
			transition={{ type: "spring", stiffness: 400, damping: 17 }}
			className={styles.bookcard}
			variants={variants}
		>
			<img
				className={styles.bookcard__image}
				src={imageLinks ? imageLinks.smallThumbnail : "no image"}
				width="145"
				height="200"
				alt=""
			/>
			<h4 className={styles.bookcard__title}>{title}</h4>
			<p className={styles.bookcard__author}>by {authors}</p>
		</motion.div>
	);
};

export default BooksCard;
