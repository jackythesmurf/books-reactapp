import BooksCard from "./BooksCard/BooksCard.jsx"
import styles from "./DisplayPage.module.scss"
const DisplayPage = ({ books }) => {
    if (books.length === 0) {
      return <p>Please search for a book</p>;
    } else {
      return (
        <div className={styles.booklist}>
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
      );
    }
  };
export default DisplayPage