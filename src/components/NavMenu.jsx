import { navTexts } from "../assets/data/text-data";
import { uppercaseLetter } from "../assets/helpers/helper";
import { capitalizedFirstLetter } from "../assets/helpers/helper";

export default function NavMenu({ isHeader }) {
  return navTexts.map((text) => (
    <li
      className="group hover:cursor-pointer hover:border-b-2 hover:border-white hover:pb-3 hover:transition-all"
      // className="group relative hover:cursor-pointer hover:border-white hover:pb-3 hover:before:absolute hover:before:bottom-0 hover:before:left-auto hover:before:right-[1.7rem] hover:before:h-2 hover:before:w-1/2 hover:before:border-b-2 hover:before:content-['']"
      key={text.id}
    >
      {isHeader
        ? uppercaseLetter(text.title)
        : capitalizedFirstLetter(text.title)}
    </li>
  ));
}
