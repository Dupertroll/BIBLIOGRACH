import BookCard from "./BookCard";

const BookGrid = ({ books }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-15 p-0">
      {books.map((book) => (
        <BookCard
          key={book.id}
          url={book.portada_url}
          nombre={book.nombre}
          id={book.id}
        />
      ))}
    </div>
  );
};

export default BookGrid;
