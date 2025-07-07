// SearchBar.jsx
const SearchBar = () => {
  return (
    <label className="flex flex-col min-w-40 !h-10 max-w-64">
      <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
        <div className="text-[#637488] flex border-none bg-[#f0f2f4] items-center justify-center pl-4 rounded-l-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
          </svg>
        </div>
        <input
          placeholder="Search"
          className="form-input w-full resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 border-none bg-[#f0f2f4] placeholder:text-[#637488] px-4 rounded-l-none pl-2"
        />
      </div>
    </label>
  );
};

export default SearchBar;
