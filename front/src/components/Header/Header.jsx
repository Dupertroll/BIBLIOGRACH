import { Link } from "react-router";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] px-10 py-3">
      <Link to="/catalog">
        <h2 className="text-[#111418] text-lg font-bold cursor-pointer">BIBLIOGRACH</h2>
      </Link>
      <div className="flex flex-1 justify-end gap-8 items-center">
        <SearchBar />
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 cursor-pointer"
          style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCJ-QYOZuCo6M6DY1WqG8ouQrdKsm9MI5vpDHlNNZzEmXeZW_oMu-QVpndKfjHk3FOuE8H4aMxA9qahZLGzletrI28r0rFP1v9sR9oPtc9IUSeWh5fHRqB-nEH4Fq4U525vcs087VSz8y_0pfC_UFkoQwukg0D3q8kKoNY5TCJwo_lviyGrcCqF5YHnFleB5StZq5avo09Zjlw1I6uoYoErnijB3-m9BqkUGxMVx9OWCUPS_G7yBiJG2Z1GgRh4SJoECK4vQPYwLusG")` }}
        />
      </div>
    </header>
  );
};

export default Header;
