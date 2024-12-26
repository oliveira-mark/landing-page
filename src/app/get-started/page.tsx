import Image from "next/image";

export default function GetStarted() {
  return (
    <div className="flex min-h-screen pt-32">
      <main className="flex flex-col gap-1 row-start-2 items-center justify-items-center text-center w-full">
        <h1 className="text-[1.7rem] sm:text-[2.5rem] max-w-[800px] mx-auto leading-[1.4] mb-1">Get started with a free plan</h1>
        <p
          className="max-w-[800px] mx-auto text-[0.9rem] sm:text-[1.1rem] leading-[1.5] text-center opacity-75"
        >
          Sales With QuizCommerce guides your customers throughout their shopping experience and helps them find the right products for them.
        </p>

        <form
          action=""
          method=""
          className="bg-gradient-to-b from-[#f3efff] via-[#fcfbff] to-transparent border border-[#f6edff] p-[50px] px-[20px] sm:px-[40px] rounded-[12px] max-w-[500px] mx-2 sm:mx-auto my-[50px] text-left"
        >
          <Image
            src="/assets/img/logo-sales-with-quiz.svg"
            alt="QuizCommerce"
            width={65}
            height={65}
            className="mb-2"
          />
          <h2
            className="text-[28px] font-semibold mb-2"
          >
            Sign up, it's free!
          </h2>  
          <p
          className="text-[16px] opacity-75 mb-4"
          >
            Join thousands of businesses using QuizCommerce to guide their customers through a personalized shopping experience.
            <strong 
              className="block font-semibold mt-3"
            >
              Simply fill out the form below to get started!
            </strong>
          </p>
          <label
            className="block"
            htmlFor="email"
          >
            Your name
          </label>
          <input
            className="p-[15px] w-full border border-[#e5e5e5] mt-[2px] mb-[10px] rounded-[4px]"
            type="email"
            name="email"
            placeholder="Type your name..."
          />
          <label
            className="block"
            htmlFor="email"
          >
            Your Email
          </label>
          <input
            className="p-[15px] w-full border border-[#e5e5e5] mt-[2px] mb-[10px] rounded-[4px]"
            type="email"
            name="email"
            placeholder="Type your email..."
          />
          <label
            className="block"
            htmlFor="password"
          >
            New Password
          </label>
          <input
            className="p-[15px] w-full border border-[#e5e5e5] mt-[2px] mb-[10px] rounded-[4px]"
            type="password"
            name="password"
            placeholder="Type your password..."
          />
          <label
            className="block"
            htmlFor="password"
          >
            Confirm Password
          </label>
          <input
            className="p-[15px] w-full border border-[#e5e5e5] mt-[2px] mb-[10px] rounded-[4px]"
            type="password"
            name="password"
            placeholder="Confirm your password..."
          />
          <button
            type="submit"
            className="inline-flex bg-gradient-to-r from-[#531bce] to-[#793ffa] text-white px-6 py-4 rounded-md font-bold text-[0.9rem] border border-[#9868ff] relative mt-1"
          >
            Create New Account
          </button>
        </form>
      </main>
    </div>
  );
}