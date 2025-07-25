import { Link } from "react-router";

const Header = () => {
  return (
    <nav className="bg-white flex items-center justify-between px-6 md:px-8 py-3 border-b flex-none">
      <Link className="text-2xl md:text-3xl font-black tracking-wide" to="/">
        BIBLIOGRACH
      </Link>

      <ul className="hidden md:flex space-x-6 md:space-x-8 text-lg md:text-xl font-semibold">
        {[
          { href: "/", label: "Inicio" },
          { href: "/about", label: "Nosotros" },
          { href: "/books", label: "Catálogo" },
        ].map(({ href, label }) => (
          <li key={href}>
            <a href={href} className="hover:underline">
              {label}
            </a>
          </li>
        ))}
      </ul>

      <Link
        className="border-2 border-black px-4 py-2 text-xs md:text-sm tracking-wider rounded-[40px] hover:bg-black hover:text-white transition-colors"
        to="/login"
      >
        INICIAR SESIÓN
      </Link>
    </nav>
  );
};

export default Header;
