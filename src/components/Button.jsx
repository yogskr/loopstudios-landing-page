import { projectText } from "../assets/data/text-data";
import { uppercaseLetter } from "../assets/helpers/helper";

export default function Button() {
  return (
    <>
      <button
        className={`border border-black bg-white p-[0.6rem] px-12 align-middle font-josefinSans font-semibold tracking-widest hover:cursor-pointer hover:bg-black hover:text-white hover:transition md:text-[1.1rem]`}
      >
        {uppercaseLetter(projectText.button)}
      </button>
    </>
  );
}
