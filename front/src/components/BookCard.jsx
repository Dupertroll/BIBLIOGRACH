import { Link } from "react-router";

const BookCard = ({ url, nombre, id }) => (
  <div className="flex flex-col gap-3">
    <div className="relative group cursor-pointer">
      <Link to={`/books/${id}`}>
        <div
          className="w-full border-[30px] border-[#D9D9D9] bg-center bg-no-repeat aspect-[3/4] bg-cover transition-all duration-300"
          style={{ backgroundImage: `url("${url}")` }}
        />
        {/* Overlay oscuro con nombre del libro - solo visible en hover */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-300 flex items-center justify-center">
          <h3 className="font-ibm text-white text-xl font-medium text-center px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-tight">
            {nombre}
          </h3>
        </div>
      </Link>
    </div>
  </div>
);

export default BookCard;
