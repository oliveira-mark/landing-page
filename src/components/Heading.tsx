const Heading = () => {
  return (
    <h1 className="text-[1.7rem] sm:text-[2.5rem] max-w-[800px] mx-auto leading-[1.4] mb-1">
      A digital&nbsp;
      <span className="relative w-fit mx-auto border-2 border-[#793ffa] px-1.5 py-0 whitespace-nowrap block sm:inline sm:w-full sm:h-full">
      <span className="absolute w-2.5 h-2.5 border-2 border-[#793ffa] left-[-6px] top-[-6px] bg-white"></span>
      <span className="absolute w-2.5 h-2.5 border-2 border-[#793ffa] left-[-6px] bottom-[-6px] bg-white"></span>
      <span className="absolute w-2.5 h-2.5 border-2 border-[#793ffa] right-[-6px] top-[-6px] bg-white"></span>
      <span className="absolute w-2.5 h-2.5 border-2 border-[#793ffa] right-[-6px] bottom-[-6px] bg-white"></span>
      <svg className="absolute bottom-[-21px] left-[-2px]" width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i_93_335)">
          <path d="M0.370073 0.59814L16.7246 14.6036C8.10338 13.9926 8.18394 14.1321 2.58608 20.0308L0.370073 0.59814Z" fill="black"/>
        </g>
        <defs>
          <filter id="filter0_i_93_335" x="0.370117" y="-1.40186" width="16.3545" height="21.4326" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="-2"/>
            <feGaussianBlur stdDeviation="2.5"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_93_335"/>
          </filter>
        </defs>
      </svg>
       Personal Shopper
      </span>
      &nbsp;that does the selling for you!
    </h1>
  );
};
export default Heading;