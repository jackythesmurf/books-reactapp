import styles from "./BrowsePage.module.scss";
const BrowsePage = ({}) => {

    const listOfBookURL = ["https://cdn2.penguin.com.au/covers/original/9781857150704.jpg",
                        "https://cdn2.penguin.com.au/covers/original/9781857150353.jpg",
                    "https://cdn2.penguin.com.au/covers/original/9781857150629.jpg",
                    "https://cdn2.penguin.com.au/covers/original/9780141192093.jpg"]
	return (
		<div>
			<h3>My Recommendations</h3>
			<div className={styles.articles}>
				<img 
					src="https://cdn2.penguin.com.au/covers/original/9781857150704.jpg"
					alt=""
					width="300"
				/>
				<img
					width="300"
					src="https://cdn2.penguin.com.au/covers/original/9781857150353.jpg"
					alt=""
				/>
				<img
					width="300"
					src="https://cdn2.penguin.com.au/covers/original/9781857150629.jpg"
					alt=""
				/>
                <img width="315" src="https://cdn2.penguin.com.au/covers/original/9780141192093.jpg" alt="" />
			</div>
		</div>
	);
};
export default BrowsePage;
