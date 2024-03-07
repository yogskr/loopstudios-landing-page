import { navTexts } from "../assets/data/text-data";
import { uppercaseLetter } from "../assets/helpers/helper";
import { capitalizedFirstLetter } from "../assets/helpers/helper";

export default function NavMenu({ isHeader }) {
  return navTexts.map((text) => (
    <li
      className="group hover:cursor-pointer hover:border-b-2 hover:border-white hover:pb-3 hover:transition-all"
      key={text.id}
    >
      {isHeader
        ? uppercaseLetter(text.title)
        : capitalizedFirstLetter(text.title)}
    </li>
  ));
}
