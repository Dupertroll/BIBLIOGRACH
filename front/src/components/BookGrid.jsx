import BookCard from "./BookCard";

const BookGrid = ({ books }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
      {books.map((book) => (
        <BookCard key={book.id} url={book.portada_url} nombre={book.nombre} />
      ))}
    </div>
  );
};

export default BookGrid;
