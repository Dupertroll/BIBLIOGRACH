const ButtonFilter = ({ label }) => {
  return (
    <button className="flex h-8 items-center gap-x-2 rounded-lg bg-[#f0f2f4] pl-4 pr-2 cursor-pointer">
      <span className="text-[#111418] text-sm font-medium">{label}</span>
      <div className="text-[#111418]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
        </svg>
      </div>
    </button>
  );
};

export default ButtonFilter;
