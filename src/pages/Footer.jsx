import { logo } from "../assets/data/images-data";
import { footerText } from "../assets/data/text-data";
import NavMenu from "../components/NavMenu";
import SocialMedia from "../components/SocialMedia";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-black py-14 lg:flex-row lg:justify-between lg:px-20 xl:px-40">
      <div>
        <img className="w-36 md:w-44" src={logo.src} alt={logo.alt} />
        <ul className="flex h-[16rem] flex-col items-center gap-4 pb-0 pt-10 font-alata text-white md:text-[1rem] lg:mt-4 lg:h-[2rem] lg:flex-row lg:pt-0">
          <NavMenu isHeader={false} />
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center lg:items-end">
        <ul className="group flex gap-4">
          <SocialMedia />
        </ul>
        <p className="mt-3 font-alata text-darkGray lg:mt-4">
          {footerText.title}
        </p>
      </div>
    </footer>
  );
}
