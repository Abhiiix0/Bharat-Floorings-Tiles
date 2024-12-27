import Image from "next/image";
import Logo from "../../../public/svgs/headerLogo.svg";
import Menu from "../../../public/icons/menu";
import BftLogo from "../../../public/icons/bftLogo";
const Header = ({ bgImg, title }) => {
  return (
    <header
      style={{
        backgroundImage: `url(${bgImg?.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="max-w-[1920px] pb-[4rem] 2xl:pb-[95px] border-black border px-[20px] lg:px-[100px] h-[500px] 2xl:h-[727px] mx-auto bg-cover flex flex-col justify-between bg-center"
    >
      <nav className=" flex justify-between">
        <div className=" lg:bg-black w-fit lg:pt-[36px] lg:pb-[19px] lg:px-[16px]">
          <Image src={Logo} alt=" Bft logo" className="hidden lg:block"></Image>
          <BftLogo
            size={46}
            className=" h-[46px] w-[46px] lg:hidden md:h-20 md:w-20 mt-5 md:mt-8"
          />
        </div>
        <div>
          <ul className=" text-white  h-[89px] font-Inter  font-semibold mt-[2rem] items-center hidden lg:flex gap-[12vw] 2xl:gap-[290px]">
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Insperation</a>
            </li>
          </ul>
          <div className=" mt-[2.36rem] md:mt-10 lg:hidden">
            <Menu
              size={40}
              className=" w-[40px] h-[40px] md:w-[45px] md:h-[45px]"
            ></Menu>
          </div>
        </div>
      </nav>
      <h1 className=" font-Gloock text-[10vw] 2xl:text-[9rem] text-white">
        {title}
      </h1>
    </header>
  );
};

export default Header;
