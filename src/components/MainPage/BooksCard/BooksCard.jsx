import styles from './BooksCard.module.scss';

const BooksCard = ({title, authors, publishedDate, publisher, imageLinks, description, categories}) => {
    return (
        <div className={styles.bookcard}>
            <img src={imageLinks ? imageLinks.smallThumbnail : "no image" } width="120" height="160"  alt="" />
            <h4>{title}</h4>
            <p>{authors}</p>
            <p>{publisher}</p>
        </div>
        

    )
}

export default BooksCard