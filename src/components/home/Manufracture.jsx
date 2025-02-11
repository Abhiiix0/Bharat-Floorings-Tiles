import Image from "next/image";
import manufracture1 from "../../../public/images/home/manufracture.jpg";
import BigArrowRight from "../../../public/icons/BigArrowRIght.jsx";
export default function Manufacture() {
  return (
    <div className="relative">
      <div className="pt-[75px] px-5 3xl:px-[104px] bg-[#2A2523] xl:sticky top-0">
        <div className=" hidden lg:flex text-[#F6F5EC] justify-between">
          <p>6 steps</p>
          <p>4 hours</p>
          <p>Handmade</p>
        </div>
        <div className="mt-[120px]">
          <h3 className="3xl:text-[100px] text-[2.5rem] lg:text-[70px] font-Gloock text-[#8FDEAA] max-w-[690px] 3xl:max-w-[890px] leading-[100%]">
            Manufacturing process
          </h3>
          <div className=" mt-[30px] 3xl:mt-[66px] text-[#F6F5EC] flex md:flex-row flex-col gap-5 xl:gap-[13%]">
            <p className="md:max-w-[640px] w-full">
              Output is a beautiful tile that lasts forever Over the decades
              Bharat has laid some of the best-known floors in India’s landmark
              buildings: from palaces of Maharajas and Raj Bhavans to prominent
              residences, hotels, hospitals, clubs, offices, factories,
              co-operative housing societies, educational and religious
              institutions, airports, railways etc.
            </p>
            <p className="md:max-w-[640px] w-full">
              Each step has to be done well The best European technologies were
              brought and modified to create a unique product suited to Indian
              conditions. Recognising that a good floor is only achieved with a
              good product that is installed correctly and maintained properly,
              the company has sister companies which do high quality
              installation of all types of floorings, a range of civil work,
              floor maintenance and general cleaning.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-[152px]  hidden xl:block 3xl:pb-[200px] ps-[104px]  bg-[#2A2523]">
        <div className=" hidden xl:flex flex-col gap-y-[50px] h-[4200px]">
          {[1, 2, 3, 4, 5, 6].map((item, idx) => (
            <div
              key={idx}
              className={
                "flex sticky top-[500px] 3xl:top-[600px] overflow-hidden"
              }
              style={{
                marginLeft: idx === 0 ? 0 : ` ${145 * (idx - 1)}px`,
              }}
            >
              {idx !== 0 && (
                <div className="min-w-[146px] h-auto bg-[#2A2523] opacity-[0.8] shrink-0" />
              )}
              <div className="flex xl:border-t-[1px] xl:border-[#8FDEAA] bg-[#2A2523] shrink-0">
                <p
                  className={`text-green text-[#8FDEAA] w-[145px] pt-[110px] relative xl:border-t-[4px]  border-[#8FDEAA]`}
                >
                  <span className="absolute top-[55px] left-0 text-[30px] font-medium text-[#8FDEAA]">
                    {idx + 1}
                  </span>
                  Bending
                </p>
                <p className="text-[#F6F5EC] leading-[160%] max-w-[511px] pt-[110px] shrink-0">
                  The pigment composition is a mixture of high quality white
                  Portland cement, marble powder and natural mineral colour
                  pigments. The ingredients are blended together carefully over
                  a period of 3-4 hours to produce the final colours.
                </p>
              </div>
              <div className="bg-[#2A2523] hidden ps-[68.1px] shrink-0">
                <Image
                  src={manufracture1}
                  alt="manufracture1"
                  width={705}
                  height={495}
                  className="w-[705px] h-[495px] rounded-[20px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full  pt-[105px] hidden xl:pt-0  h-[505px] xl:h-[1086px] bg-[#2A2523] xl:absolute bottom-0">
        <div
          style={{}}
          className=" rounded-t-[20px] xl:rounded-t-[80px] bg-[#2A2523] manufractureImg  w-full h-full pt-[46px]
          px-5 xl:px-[104px] pb-3 xl:pb-[100px] flex flex-col justify-end "
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
    </div>
  );
}
