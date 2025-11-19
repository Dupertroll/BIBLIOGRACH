import BookGrid from "../components/BookGrid"; // IMPORTANTE
import { useCatalog } from "../hooks/useCatalog";

export const AdminPage = () => {
  const { books } = useCatalog();

  return (
    <div className="flex w-full h-screen bg-[#f8f8f8]">
      <svg
        width="20vw"
        height="736"
        viewBox="0 0 417 736"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative left-[-9.5%] top-[-2%]"
      >
        <path
          d="M-399.447 33.9352L-400.935 817.597C-400.971 836.375 -385.777 851.626 -367 851.662L319.99 852.966C338.767 853.002 354.018 837.808 354.054 819.031L354.489 589.684C354.517 574.946 364.037 561.904 378.065 557.386L391.731 552.984C405.759 548.465 415.279 535.423 415.307 520.686L416.228 35.4841C416.264 16.7065 401.071 1.45522 382.293 1.41957L355.607 1.3689L-365.383 -0.000120684C-384.16 -0.0357758 -399.411 15.1576 -399.447 33.9352Z"
          fill="#3B6FF2"
          fill-opacity="0.62"
        />
      </svg>
      <svg
        width="98.9vw"
        viewBox="0 0 1600 123"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute"
      >
        <path
          d="M538.944 120.926H147.502H-68V-7H1605V35.1405H1598.75H604.531C595.751 37.3415 591.343 40.3388 585.272 51.6957L561.327 107.381C555.588 118.982 550.465 121.49 538.944 120.926Z"
          fill="#EA2424"
          fill-opacity="0.06"
          stroke="#F58019"
          stroke-opacity="0.85"
          stroke-width="3"
        />
      </svg>

      <svg
        width="91vw"
        height="572"
        viewBox="0 0 1526 737"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute z-0 left-[7%] top-[9%]"
      >
        <path
          d="M1531 74.5069V714C1531 725.046 1522.05 734 1511 734H23C11.9543 734 3 725.046 3 714V576.779C3 575.479 3.11836 574.174 3.40537 572.906C6.024 561.334 10.6174 555.817 20.7844 549.113C22.3601 548.074 24.1013 547.31 25.9163 546.792L44.3952 541.518C60.5838 534.834 65.1177 528.691 66.6451 514.268V94.5069C66.6451 83.4613 75.5994 74.5069 86.6451 74.5069H481.176C488.714 74.5069 495.611 70.2687 499.017 63.5442L524.132 13.9627C527.538 7.23821 534.435 3 541.973 3H1511C1522.05 3 1531 11.9543 1531 23V74.5069Z"
          fill="white"
        />
        <path
          d="M1511 1.5C1522.87 1.5 1532.5 11.1259 1532.5 23V714C1532.5 725.874 1522.87 735.5 1511 735.5H23C11.1259 735.5 1.5 725.874 1.5 714V576.779C1.5 575.39 1.62636 573.971 1.94238 572.574C3.28361 566.648 5.15672 562.163 8.06445 558.284C10.9607 554.421 14.8138 551.253 19.959 547.86C21.6765 546.728 23.5607 545.905 25.5049 545.35L43.8965 540.1C51.876 536.799 56.7499 533.719 59.8477 529.856C62.9235 526.021 64.392 521.234 65.1455 514.177V94.5068C65.1456 82.6328 74.7714 73.0068 86.6455 73.0068H481.176C488.148 73.0068 494.529 69.0863 497.68 62.8662L522.793 13.2852C526.455 6.0563 533.87 1.5 541.974 1.5H1511Z"
          stroke="#F58019"
          stroke-opacity="0.85"
          stroke-width="3"
        />
      </svg>
      <main className="flex-1 bg-white rounded-lg m-6 shadow-xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h1 className="absolute text-3xl font-bold text-orange-600 tracking-wide left-[5%] z-20">
            BIBLIOGRACH
          </h1>
        </div>

        {/* TABS */}
        <div className="flex w-full border-b">
          <svg
            width="43vw"
            height="75"
            viewBox="0 0 727 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[9%] left-[38%]"
          >
            <path
              d="M25.4982 19.7525L0.000457764 75H726.378C714.532 68.2151 708.117 61.0266 705.65 52.9167L705.398 52.0887C698.016 27.8112 689.559 0 664.271 0H56.369C43.1071 0 31.0555 7.71112 25.4982 19.7525Z"
              fill="black"
            />
          </svg>
          <p className="absolute top-[13%] left-[55%] text-white">
            EDITOR DEL CATÁLOGO
          </p>
          <svg
            width="18vw"
            height="75"
            viewBox="0 0 305 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[9%] left-[80.2%]"
          >
            <path
              d="M36.7034 48.5C39.4111 60.0445 44.8238 65.7718 59.4492 75H305C305 63.9486 303.424 54.4625 302.245 44.9097C299.465 22.4068 282.316 0 259.642 0H0C12.2001 3.83549 17.9625 7.71615 25.3305 19.5C30.589 30.8466 33.1699 37.218 36.7034 48.5Z"
              fill="#F58019"
              fill-opacity="0.85"
            />
          </svg>
          <p className="absolute top-[13%] left-[86%] text-white">
            ADMINISTRADOR
          </p>
        </div>

        <div className="absolute px-25 py-18 h-[80%] overflow-y-scroll top-[20%] right-[1%] w-[90%]">
          <BookGrid books={books} />
        </div>
      </main>
    </div>
  );
};
