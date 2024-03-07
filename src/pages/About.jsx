import { aboutTexts } from "../assets/data/text-data";
import { about } from "../assets/data/images-data";
import { uppercaseLetter } from "../assets/helpers/helper";

export default function About() {
  return (
    <section className="flex flex-col items-center gap-10 px-5 pb-10 pt-20 md:px-10 md:pb-16 md:pt-28 lg:flex-row lg:px-20 xl:px-40">
      <img className="lg:hidden" src={about.srcMobile} alt={about.alt} />
      <img
        className="hidden lg:block lg:w-[65%] xl:max-w-4xl"
        src={about.srcDesktop}
        alt={about.alt}
      />
      <article className="flex h-60 flex-col items-center justify-center text-center lg:absolute lg:left-[50%] lg:h-72 lg:w-[43%] lg:justify-end lg:self-end lg:bg-white lg:pb-0 lg:pl-[4rem] lg:pr-0 lg:text-start xl:left-[51%] xl:h-80 xl:w-[37%] xl:pl-[5.5rem]">
        <h2 className="mb-4 font-josefinSans text-[2rem] font-light leading-none md:text-[2.5rem] lg:text-[2.5rem] xl:text-[3rem]">
          {uppercaseLetter(aboutTexts.heading)}
        </h2>
        <p className="w-72 font-alata leading-relaxed text-darkGray md:w-fit md:text-[1.1rem] lg:text-[15px]">
          {aboutTexts.paragraph}
        </p>
      </article>
    </section>
  );
}
