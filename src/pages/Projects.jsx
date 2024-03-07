import { useState, useEffect } from "react";
import { projectListTexts } from "../assets/data/text-data";
import { projectText } from "../assets/data/text-data";
import { uppercaseLetter } from "../assets/helpers/helper";
import Button from "../components/Button";

export default function Projects() {
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 768 && screenWidth < 1024) {
        // Show button inside article tag when screen width is between 768px and 1024px
        setShowButton(false);
      } else if (screenWidth >= 1024) {
        // Hide button inside section tag when screen width is 1024px and above
        setShowButton(true);
      } else {
        // Show button inside article tag when screen width is below 768px
        setShowButton(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set initial state
    handleResize();

    // Remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projectItems = projectListTexts.map((item) => (
    <figure
      key={item.id}
      className={`group flex h-[125px] w-full lg:h-[400px] lg:w-full xl:h-[450px] 2xl:w-full ${item.backgroundMobile} ${item.backgroundDesktop} bg-cover bg-no-repeat`}
    >
      <figcaption className="group flex h-full w-full items-end bg-gradient-to-r from-black/65 p-5 hover:cursor-pointer hover:from-neutral-300/75 hover:to-neutral-300/85 hover:transition-all">
        <p className="flex w-full flex-col text-balance font-josefinSans text-[1.5rem] font-extralight leading-none text-white group-hover:font-normal group-hover:text-black group-hover:transition-all group-hover:delay-100 group-hover:duration-500 md:text-[1.8rem]">
          <span>{uppercaseLetter(item.titleOne)}</span>
          <span>{uppercaseLetter(item.titleTwo)}</span>
        </p>
      </figcaption>
    </figure>
  ));

  return (
    <div className="flex flex-col items-center justify-center gap-10 px-5 pb-20 pt-10 md:px-10 md:pb-28 md:pt-16 lg:px-20 xl:px-40 2xl:px-52">
      <section className="flex w-full items-center justify-center lg:justify-between">
        <h2 className="font-josefinSans text-[2rem] font-light md:text-[2.5rem] lg:text-[2.5rem] xl:text-[3rem]">
          {uppercaseLetter(projectText.heading)}
        </h2>
        {showButton && <Button />}
      </section>
      <figure className="flex w-full flex-col items-center gap-5 lg:grid lg:grid-cols-4 2xl:gap-12">
        {projectItems}
      </figure>
      {!showButton && <Button />}
    </div>
  );
}
