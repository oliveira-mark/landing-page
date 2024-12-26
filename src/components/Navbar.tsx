import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="bg-opacity-70 bg-white backdrop-blur-md fixed top-0 left-0 right-0 z-20">
      <nav className="container max-w-[1200px] p-4 flex items-center justify-between mx-auto">
        <Link href="/">
          <div className="flex items-center text-[var(--color-text)] gap-2">
            <Image 
              src="/assets/img/logo-sales-with-quiz.svg"
              alt="QuizCommerce"
              width={40}
              height={40}
            />
            <span className="font-normal leading-[1.1] text-[0.75rem] sm:text-[0.85rem]">Sales With
              <strong className="text-[1rem] sm:text-[1.15rem] block font-semibold">QuizCommerce</strong>
            </span>
          </div>
        </Link>
        <Link
          href="/get-started"
          className="inline-flex bg-gradient-to-r from-[#531bce] to-[#793ffa] text-white px-3 py-3 sm:px-4 sm:py-3 rounded-md font-bold text-[0.6rem] sm:text-[0.8rem] border border-[#9868ff] relative">
            Get Started
            <span className="font-medium pl-1 opacity-75">
              It's Free
            </span>
          </Link>
      </nav>
    </header>
  );
};
export default Navbar;