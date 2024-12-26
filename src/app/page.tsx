import Image from "next/image";
import TopTiltle from "@/components/TopTiltle";
import Heading from "@/components/Heading";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen pt-32">
      <main className="flex flex-col gap-1 row-start-2 items-center justify-items-center text-center w-full">
        <TopTiltle />
        <Heading />
        <p
          className="max-w-[800px] mx-auto text-[0.9rem] sm:text-[1.1rem] leading-[1.5] text-center"
        >
          Sales With QuizCommerce guides your customers throughout their shopping experience and helps them find the right products for them.
        </p>
        <div className="flex gap-4 justify-center mt-3">
          <Link
            className="inline-flex bg-gradient-to-r from-[#531bce] to-[#793ffa] text-white px-3 py-3 sm:px-4 sm:py-3 rounded-md font-bold text-[0.7rem] sm:text-[0.8rem] border border-[#9868ff] relative"
            href="/get-started"
          >
            Get Started
            <span className="font-medium pl-1 opacity-75">
              It's Free
            </span>
          </Link>
          <Link
            className="inline-block bg-gradient-to-r from-[#F4F4F4] to-[#FFFFFF] text-black px-3 py-3 sm:px-4 sm:py-3 rounded-md font-medium text-[0.7rem] sm:text-[0.8rem] border border-[#E6E6E6] relative"
            href="/contact-us"
          >
            Contact Us
            <span className="font-medium pl-1 opacity-50">
              For Support
            </span>
          </Link>
        </div>
        <div className="columns-1 text-center mt-20">
          <Image
            src="/assets/img/iphone-1.png"
            alt="Cliente"
            width={800}
            height={400}
            className="h-[400px] object-cover object-top w-[800px] sm:absolute sm:bottom-0 sm:left-1/2 sm:transform sm:-translate-x-1/2"
          />
        </div>
      </main>
    </div>
  );
}
