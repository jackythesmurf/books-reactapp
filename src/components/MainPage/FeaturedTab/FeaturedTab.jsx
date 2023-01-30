import styles from "./FeaturedTab.module.scss"
import FeaturedCard from "./FeaturedCard/FeaturedCard.jsx"
import githubSVG from "./FeaturedCard/images/github-svgrepo-com.svg"
import linkedinSVG from "./FeaturedCard/images/linkedin-svgrepo-com(4).svg"
import bookSVG from "./FeaturedCard/images/book-svgrepo-com.svg"
const FeaturedTab = () => {

	return (
		<div className={styles.tab}>
			<FeaturedCard link={"a"} topic={"Top Book Recommendations"} icon={bookSVG}/>
			<FeaturedCard link={"a"} topic={" Writings"} icon={"a"}/> 
			<FeaturedCard link={"a"} topic={"My Github"} icon={githubSVG}/> 
			<FeaturedCard link={"a"} topic={"My LinkedIn"} icon={linkedinSVG}/>  
		</div>
	);
};

export default FeaturedTab;
