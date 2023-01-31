import styles from "./BrowsePage.module.scss";
import { useState } from "react";
const BrowsePage = ({}) => {
	const [display, setDisplay] = useState(0);

	const listOfBookURL = [
		"https://cdn2.penguin.com.au/covers/original/9781857150704.jpg",
		"https://cdn2.penguin.com.au/covers/original/9781857150353.jpg",
		"https://cdn2.penguin.com.au/covers/original/9781857150629.jpg",
		"https://cdn2.penguin.com.au/covers/original/9780141192093.jpg",
	];


	const handleLeft = () => {
		if ((display - 1) == -1) {
			return setDisplay(listOfBookURL.length - 1)
		} 
		return (
			setDisplay( display - 1)
		)
	}
	const handleRight = () => {
		return (
			setDisplay((display + 1) % listOfBookURL.length)
		)
	}
	return (
		<div className={styles.container}>
			<h3>My Recommendations</h3>

			<div className={styles.articles}>
				<img
					onClick={handleLeft}
					className={styles.articles__leftarrow}
					src="src/components/BrowsePage/images/angle-left-svgrepo-com.svg"
					alt=""
				/>

				<img
					className={styles.articles__bookImg}
					src={listOfBookURL[display]}
					alt=""
					width="300"
				/>
				<img
					onClick={handleRight}
					className={styles.articles__rightarrow}
					src="src/components/BrowsePage/images/angle-right-svgrepo-com.svg"
					alt=""
				/>
			</div>
		</div>
	);
};
export default BrowsePage;
