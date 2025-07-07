import BookCard from "./BookCard";

const BookGrid = ({ bookImages }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
      {bookImages.map((url, idx) => (
        <BookCard key={idx} url={url} />
      ))}
    </div>
  );
};

export default BookGrid;
