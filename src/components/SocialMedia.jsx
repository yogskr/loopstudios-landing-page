import { social } from "../assets/data/images-data";

export default function SocialMedia() {
  return social.map((image) => (
    <li
      key={image.id}
      className="group flex h-10 items-center hover:cursor-pointer hover:border-b-2 hover:border-white hover:pb-3 hover:transition-all"
    >
      <img src={image.src} alt={image.alt} />
    </li>
  ));
}
