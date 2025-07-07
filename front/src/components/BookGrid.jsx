import BookCard from "./BookCard";

const BookGrid = ({ books }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
      {books.map((book, idx) => (
        <BookCard key={idx} url={book.portada_url} />
      ))}
    </div>
  );
};

export default BookGrid;
