const BookCard = ({ url }) => (
  <div className="flex flex-col gap-3">
    <div
      className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg cursor-pointer"
      style={{ backgroundImage: `url("${url}")` }}
    />
  </div>
);

export default BookCard;
