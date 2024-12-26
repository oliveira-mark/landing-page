import Image from "next/image";
import Link from "next/link";

const TopTiltle = () => {

  const getRandomAvatar = (exclude = []) => {
    let randomNum;
    do {
      randomNum = Math.floor(Math.random() * 9) + 1;
    } while (exclude.includes(randomNum));
    return randomNum;
  };

  const avatar1 = getRandomAvatar();
  const avatar2 = getRandomAvatar([avatar1]);
  const avatar3 = getRandomAvatar([avatar1, avatar2]);

  return (
    <div className="inline-flex border border-[#EBEBEB] p-1 rounded-full items-center mb-5 bg-white m-2">
      <Image
        src={`/assets/img/avatar/avatar-0${avatar1}.png`}
        alt="QuizCommerce"
        width={35}
        height={35}
        className="object-cover rounded-full border-2 border-white"
      />
      <Image
        src={`/assets/img/avatar/avatar-0${avatar2}.png`}
        alt="QuizCommerce"
        width={35}
        height={35}
        className="object-cover rounded-full ml-[-10px] border-2 border-white"
      />
      <Image
        src={`/assets/img/avatar/avatar-0${avatar3}.png`}
        alt="QuizCommerce"
        width={35}
        height={35}
        className="object-cover rounded-full ml-[-10px] mr-1 border-2 border-white"
      />
      <p
        className="text-[var(--color-text)] font-medium text-[0.8rem] sm:text-[0.9rem] leading-[1.1] text-center pr-3 pl-3 ml-2 border-l border-[#EBEBEB] py-1"
      >
        A product recommendation quiz for your eCommerce!
      </p>
    </div>
  );
};
export default TopTiltle;