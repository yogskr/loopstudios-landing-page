import { useRef, useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { logo } from "../assets/data/images-data";
import NavMenu from "./NavMenu";

export default function NavBar() {
  // State variables to manage navigation bar functionality
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  // State variables to manage navigation bar scroll behavior
  const [scrolled, setScrolled] = useState(false);

  // Handle the navigation bar when the page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav ref={ref}>
      <div
        className={`fixed left-0 right-0 z-20 flex items-center justify-between px-5 py-8 md:px-10 lg:px-20 xl:px-40 ${
          scrolled
            ? "backdrop-blur-lg backdrop-brightness-50"
            : "bg-transparent"
        }`}
      >
        <img src={logo.src} alt={logo.src} />
        <figure className="lg:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} color="#fff" />
        </figure>
        <ul className="hidden h-12 items-center gap-8 text-white lg:flex">
          <NavMenu isHeader={false} />
        </ul>
      </div>
      {isOpen && (
        <aside className="fixed bottom-0 right-0 z-10 h-full w-full bg-black px-5 py-8 text-white md:px-10">
          <ul className="flex h-full flex-col items-start justify-center gap-6 font-josefinSans text-2xl font-light md:items-center md:gap-12 md:text-4xl">
            <NavMenu isHeader={true} />
          </ul>
        </aside>
      )}
    </nav>
  );
}
