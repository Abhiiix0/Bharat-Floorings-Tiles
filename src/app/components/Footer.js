import Image from "next/image";
import whiteLogo from "../../../public/svgs/bftLogoWhite.svg";
import blackLogo from "../../../public/svgs/bftLogoBlack.svg";

const Footer = () => {
  const colorPalettes = [
    { colorCode: "#b95485", colorName: "Pink", textColor: "#FFFFFF" },
    { colorCode: "#24a482", colorName: "Teal", textColor: "#FFFFFF" },
    { colorCode: "#da5f69", colorName: "Salmon", textColor: "#000000" },
    { colorCode: "#35e86a", colorName: "Lime Green", textColor: "#000000" },
    { colorCode: "#5c4372", colorName: "Purple", textColor: "#FFFFFF" },
    { colorCode: "#fde2ae", colorName: "Peach", textColor: "#000000" },
    { colorCode: "#94e682", colorName: "Light Green", textColor: "#000000" },
    { colorCode: "#a738e6", colorName: "Violet", textColor: "#FFFFFF" },
    { colorCode: "#54acb2", colorName: "Turquoise", textColor: "#000000" },
    { colorCode: "#ca3c30", colorName: "Red", textColor: "#FFFFFF" },
    { colorCode: "#39825a", colorName: "Forest Green", textColor: "#FFFFFF" },
    { colorCode: "#a341f1", colorName: "Indigo", textColor: "#FFFFFF" },
    { colorCode: "#8c6c55", colorName: "Brown", textColor: "#FFFFFF" },
    { colorCode: "#9d639e", colorName: "Lavender", textColor: "#FFFFFF" },
    { colorCode: "#c5af56", colorName: "Olive", textColor: "#000000" },
    { colorCode: "#e35713", colorName: "Orange", textColor: "#FFFFFF" },
    { colorCode: "#b45502", colorName: "Copper", textColor: "#FFFFFF" },
    { colorCode: "#426e0b", colorName: "Dark Green", textColor: "#FFFFFF" },
    { colorCode: "#d70571", colorName: "Magenta", textColor: "#FFFFFF" },
    { colorCode: "#9de436", colorName: "Lime", textColor: "#000000" },
    { colorCode: "#49be64", colorName: "Mint", textColor: "#000000" },
    { colorCode: "#5f9e8e", colorName: "Sea Green", textColor: "#000000" },
    { colorCode: "#7e8b39", colorName: "Moss Green", textColor: "#FFFFFF" },
    { colorCode: "#7a9ad9", colorName: "Sky Blue", textColor: "#000000" },
    { colorCode: "#565583", colorName: "Midnight Blue", textColor: "#FFFFFF" },
    { colorCode: "#e7376c", colorName: "Fuchsia", textColor: "#FFFFFF" },
    { colorCode: "#74b49c", colorName: "Aqua", textColor: "#000000" },
    { colorCode: "#df064d", colorName: "Crimson", textColor: "#FFFFFF" },
    { colorCode: "#b4d2c4", colorName: "Pale Blue", textColor: "#000000" },
  ];

  const footerLinks = [
    [
      { link: "https://www.google.com", text: "About us" },
      { link: "https://www.bing.com", text: "history" },
      { link: "https://www.google.com", text: "Management" },
      { link: "https://www.bing.com", text: "Quality Policy" },
    ],
    [
      { link: "https://www.google.com", text: "CORPORATE VIDEOS" },
      { link: "https://www.bing.com", text: "SITEMAP" },
      { link: "https://www.google.com", text: "ALL COLLECTIONS" },
      { link: "https://www.bing.com", text: "MANUFACTURING PROCESS" },
    ],
    [
      { link: "https://www.google.com", text: "MAINTENANCE" },
      { link: "https://www.bing.com", text: "COLOUR CHART" },
      { link: "https://www.google.com", text: "FAQ" },
      { link: "https://www.bing.com", text: "ORDER SAMPLE" },
    ],
    [
      { link: "https://www.google.com", text: "FLOOR DESIGN" },
      { link: "https://www.bing.com", text: "NEW TILE DESIGN" },
      { link: "https://www.google.com", text: "CIVIL CONTRACTING" },
      { link: "https://www.bing.com", text: "MISSION AND VISION" },
    ],
    [
      { link: "https://www.google.com", text: "VALUES & PHILOSOPHY" },
      { link: "https://www.bing.com", text: "PRESS AND MEDIA" },
      { link: "https://www.google.com", text: "EVENTS AND PROMOTIONS" },
      { link: "https://www.bing.com", text: "CAREERS" },
    ],
    [
      { link: "https://www.google.com", text: "AWARDS" },
      { link: "https://www.bing.com", text: "CLIENT LIST" },
      { link: "https://www.google.com", text: "TESTIMONIAL VIDEOS" },
      { link: "https://www.bing.com", text: "CONTACT US" },
      { link: "https://www.google.com", text: "DOWNLOAD" },
      { link: "https://www.google.com", text: "RESOURCES" },
    ],
  ];
  return (
    <footer className="max-w-[1920px] font-Inter relative  mx-auto">
      <div className=" h-[1rem] md:h-[22rem] w-full flex">
        {colorPalettes.map((cPalettes) => (
          <div
            key={cPalettes.colorCode}
            style={{
              backgroundColor: cPalettes.colorCode,
              color: cPalettes.textColor,
            }}
            className={`bg-[#b4d2c4] text-[${cPalettes.textColor}] group flex items-start justify-center w-full `}
          >
            <p className=" w-fit hidden group-hover:flex flex-col gap-0">
              {cPalettes.colorName
                .split("")
                .reverse()
                .map((letter, index) => (
                  <span key={index} className="w-fit m-0 p-0  rotate-[-90deg] ">
                    {letter}
                  </span>
                ))}
            </p>
          </div>
        ))}
      </div>
      <div className=" pt-[4.65rem] pb-[5.4rem] md:pb-[4.46rem] px-5 lg:px-[6.3rem] text-sm md:text-base leading-7 flex-col md:flex-row flex flex-wrap gap-2 md:gap-10 md:items-start justify-between">
        <div className=" mb-[3.15rem] md:absolute top-[231px]">
          <Image
            src={whiteLogo}
            alt="Bft white logo"
            className=" block md:hidden h-[3.8rem]"
          />
          <Image
            src={blackLogo}
            alt="Bft black logo"
            className=" hidden md:block w-[102px]"
          />
        </div>
        {footerLinks.map((links, index) => (
          <div key={index} className="flex flex-col gap-2">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className=" hover:opacity-80  uppercase font-medium leading-6 transition-colors duration"
              >
                {link.text}
              </a>
            ))}
          </div>
        ))}
      </div>
      <p className=" h-[107px] md:h-[67px] px-5 lg:px-[6.3rem] mb-14 md:mb-0 m-0 p-0 ">
        Copyright - Bharat Floorings and Tiles © 2024{" "}
        <br className=" md:hidden" /> All images and text are copyrighted unless
        otherwise specified.
      </p>
    </footer>
  );
};

export default Footer;
