import styles from "./FeaturedCard.module.scss"
const FeaturedCard = ({link, topic, icon}) => {
    return (
        <div className={styles.card}>
            <a className={styles.card__link} href={link}>
                <p className={styles.card__link__icon}><img  src={icon} alt="" /></p>
                 <p className={styles.card__link__text}>{topic}</p>
            </a>
        </div>
    )
}

export default FeaturedCard