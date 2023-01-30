import styles from "./BooksLargeModel.module.scss";
import { useState, useEffect } from "react";
import crossSVG from "./images/cross-svgrepo-com.svg";
import { motion } from "framer-motion";

const BooksLargeModel = ({ bookInfo, setFocus }) => {
	const handleClick = () => {
		setFocus(false);
	};

	return (
		<motion.div
			initial={{ scale: 0 }}
			animate={{ rotate: 360, scale: 1 }}
			transition={{
				type: "spring",
				stiffness: 150,
				damping: 40,
			}}
			className={styles.container}
		>
			<img
				className={styles.container__exit}
				onClick={handleClick}
				src={crossSVG}
				width="30"
				height="30"
			/>
			<div className={styles.container__card}>
				<div className={styles.container__card__pic}>
					<img
						src={bookInfo.imageLinks}
						alt="no image"
						width="200"
						height="300"
					/>
				</div>
				<div className={styles.container__card__info}>
					<h2 className={styles.container__card__info__title}>{bookInfo.title}</h2>
					<p className={styles.container__card__info__author}><span>Author:</span> {bookInfo.authors || "nil."}</p>
					<p className={styles.container__card__info__publisher}><span>Publisher:</span> {bookInfo.publisher || "nil."}</p>
					<p className={styles.container__card__info__publishedDate}><span>Date Published:</span> {bookInfo.publishedDate || "nil."}</p>
					<p className={styles.container__card__info__categories}><span>Genre:</span> {bookInfo.categories || "nil."}</p>
					<p className={styles.container__card__info__description}>{bookInfo.description}</p>
				</div>
			</div>
		</motion.div>
	);
};

export default BooksLargeModel;
