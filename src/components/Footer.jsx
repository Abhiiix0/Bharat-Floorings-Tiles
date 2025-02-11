import Image from "next/image";
import whiteLogo from "../../public/svgs/bftLogoWhite.svg";
import blackLogo from "../../public/svgs/bftLogoBlack.svg";
import manufracture1 from "../../public/images/home/manufracture.jpg";
import BigArrowRight from "../../public/icons/BigArrowRIght.jsx";
const Footer = () => {
  const colorPalettes = [
    { colorCode: "#f0e7dc", colorName: "White", textColor: "#aaa196" },
    { colorCode: "#fffcf3", colorName: "Light Cream", textColor: "#b9b6ad" },
    { colorCode: "#eed6ca", colorName: "Sicilia", textColor: "#a89084" },
    { colorCode: "#f4c090", colorName: "Buttercup", textColor: "#ae7a4b" },
    {
      colorCode: "#d79677",
      colorName: "Jaisalmer Yellow",
      textColor: "#915031",
    },
    {
      colorCode: "#f7b960",
      colorName: "Sunshine Yellow",
      textColor: "#b1731a",
    },
    { colorCode: "#b88276", colorName: "Mushroom", textColor: "#723c30" },
    { colorCode: "#96796e", colorName: "Fawn", textColor: "#503328" },
    { colorCode: "#e29792", colorName: "Nursery  Pink", textColor: "#9c514c" },
    { colorCode: "#e18e8c", colorName: "Dusky Rose", textColor: "#9b4846" },
    { colorCode: "#e59c8d", colorName: "Peach", textColor: "#9f5647" },
    { colorCode: "#ac6158", colorName: "Terracotta", textColor: "#7a2f29" },
    { colorCode: "#9a6362", colorName: "Deep Red", textColor: "#5e2726" },
    { colorCode: "#544546", colorName: "Chocolate", textColor: "#867878" },
    { colorCode: "#baa489", colorName: "Macao", textColor: "#745e43" },
    { colorCode: "#92a997", colorName: "Crazy Green", textColor: "#4c6351" },
    { colorCode: "#76786d", colorName: "Kotah Green", textColor: "#303227" },
    { colorCode: "#62846b", colorName: "Mint", textColor: "#26482f" },
    { colorCode: "#63796d", colorName: "Dark Green", textColor: "#273d31" },
    { colorCode: "#9bc1a6", colorName: "Jade Green", textColor: "#557b60" },
    { colorCode: "#77bae5", colorName: "Sea Blue", textColor: "#31749f" },
    { colorCode: "#7da3b0", colorName: "Blue Lagoon", textColor: "#375d6a" },
    { colorCode: "#3e5984", colorName: "Chinese Blue", textColor: "#142752" },
    { colorCode: "#424d59", colorName: "Dark Blue", textColor: "#747f8b" },
    { colorCode: "#afa9aa", colorName: "Silver Grey", textColor: "#696364" },
    { colorCode: "#96918e", colorName: "Grey", textColor: "#504b48" },
    { colorCode: "#535353", colorName: "Solomen Grey", textColor: "#858585" },
    { colorCode: "#f1ebed", colorName: "Light Silver", textColor: "#aba5a7" },
    { colorCode: "#414047", colorName: "Black", textColor: "#737279" },
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
    <>
      <div className="bg-[#2A2523] pt-[115px]">
        <div
          style={{
            backgroundImage: `url(${manufracture1.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className=" bg-red-500 px-6 flex items-end pb-7 h-[505px] max-w-[1920px] mx-auto  w-full rounded-t-[20px]"
        >
          <p className="font-Gloock  m-0 p-0 text-[2.5rem] xl:text-[80px] text-[#F6F5EC] flex items-center  gap-5 xl:gap-11">
            BFT Home{" "}
            <BigArrowRight
              size={108}
              className=" h-10 w-10 xl:h-[105px] xl:w-[105px]"
            />
          </p>
        </div>
      </div>
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
              <p className="  pt-5 w-fit hidden md:group-hover:flex vertical-text">
                {cPalettes.colorName
                  .split("")
                  .reverse()
                  .map((letter, index) => (
                    <span
                      key={index}
                      className="w-fit m-0 p-0  rotate-[180deg] font-medium"
                    >
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
          Copyright - Bharat Floorings and Tiles © 2024
          <br className=" md:hidden" /> All images and text are copyrighted
          unless otherwise specified.
        </p>
      </footer>
    </>
  );
};

export default Footer;
