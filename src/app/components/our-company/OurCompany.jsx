'use client'
import Link from "next/link"
import Intro from "../Intro"
import PastEventsCard from "../PastEventsCard"
import AwardsCard from "../our-company/AwardsCard"
import ManagementCard from "../our-company/ManagementCard"
import OurJourneyCard from "../our-company/OurJourneyCard"
import { RiArrowRightLine } from "react-icons/ri";
import { useEffect, useRef, useState } from "react"
import PressReleasesCard from "../PressReleasesCard"

const OurCompany = ({ journey, management, awards, press, events }) => {
  const [containerWidth, setContainerWidth] = useState(50); // Starting width in %
  const containerRef = useRef(null);

  const handleScroll = () => {
    if (!containerRef.current) return;

    // Get the total number of cards
    const cards = Array.from(containerRef.current.children);
    const containerRect = containerRef.current.getBoundingClientRect();

    // Count the number of cards that are fully visible in the container
    const visibleCards = cards.filter((card) => {
      const cardRect = card.getBoundingClientRect();
      return (
        cardRect.left >= containerRect.left &&
        cardRect.right <= containerRect.right
      );
    }).length;

    // Calculate new width: base width + 7% for each visible card
    const newWidth = 50 + visibleCards * 7;
    setContainerWidth(newWidth);
  };

  useEffect(() => {
    // Attach scroll listener to the container
    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup listener on unmount
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const sectionRef = useRef()
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 1023) {
        if (sectionRef.current) {
          const rect = sectionRef.current.getBoundingClientRect();
          if (rect.top <= 0) {
            sectionRef.current.style.overflowY = 'scroll'
          }
          else if (rect.top > 0) {
            sectionRef.current.style.overflow = 'hidden'
          };
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="relative overflow-y-scroll scroll">
      <div className="lg:px-[100px] px-[20px] py-10 bg-[#fefef2]">
        <Intro intro1={'Who we are'} intro3={'100 years old'} />
        <h1 className="2xl:text-[100px] 2xl:leading-[100px] md:text-5xl text-4xl xl:text-7xl lg:text-6xl font-Gloock font-normal 2xl:mt-20 xl:mt-16 lg:mt-14 md:mt-10">Our Journey</h1>
        <p className='para-big xl:mt-10 lg:mb-16 lg:mt-8 mb-10 mt-6  xl:leading-[42px] 2xl:w-[60%] xl:w-[70%] lg:font-2xl lg:w-4/5 md:text-xl md:leading-[34px] md:w-full'>
          For over a century, Bharat Floorings & Tiles has been the epitome of quality in handmade tile manufacturers in India.
        </p>
        <div className="flex lg:flex-row flex-col justify-between 2xl:gap-10 xl:gap-8 lg:gap-6 gap-5  xl:mb-40 lg:mb-32 mb-20">
          <p className='para-medium'>
            The Bharat Floorings Group, an ISO 9001:2015 Certified Company, boasts a century-long legacy as the foremost provider of top-tier cement floorings. Our journey commenced in 1922 when Bharat pioneered the cement tiles industry in India during the Swadeshi movement, aligning with India's quest for economic independence. Our mission: to produce world-class tiles that could replace imports and meet the highest international standards.
          </p>
          <p className='para-medium'>
            To fulfill this vision, we harnessed the best European technologies, tailoring them to suit the unique demands of Indian conditions. We realized that the key to exceptional flooring lay not only in superior products but also in their expert installation and diligent maintenance. To ensure this, we established sister companies specializing in high-quality flooring installation, civil work, floor maintenance, and general cleaning.
          </p>
          <p className='para-medium'>
            Throughout the decades, Bharat has left its indelible mark by installing some of the most iconic floors in India's architectural landscape. Our craftsmanship graces the palaces of Maharajas, Raj Bhavans, distinguished residences, prestigious hotels, vital hospitals, vibrant clubs, bustling offices, bustling factories, cooperative housing societies, esteemed educational and religious institutions, as well as busy airports and railway stations. Our legacy is etched in the very fabric of India's architectural marvels.
          </p>
        </div>
      </div>
      <div ref={sectionRef} className="lg:px-[100px] px-[20px] z-[1] sticky top-[0%] mb-20 overflow-x-hidden overflow-y-scroll scroll h-screen bg-white lg:block hidden">
        <div className="bg-black h-[2px] z-20 mt-4 sticky top-[1%]">
          <div ref={containerRef} className="bg-black h-1">
          </div>
          <div className="flex justify-between items-center bg-white py-5">
            <span>1922</span>
            <span>1923</span>
            <span>1923-1935</span>
            <span>1935-1940</span>
            <span>1940</span>
            <span>1950-1970</span>
            <span>1960</span>
            <span>1999</span>
            <span>2000</span>
            <span>2010</span>
            <span>2013</span>
            <span>2014</span>
            <span>2015</span>
            <span>TODAY</span>
          </div>
        </div>
        <div className="3xl:pl-[7%] 3xl:pr-[15%] px-0 our-journey">
          <div className='2xl:mt-44 xl:mt-36 lg:mt-28 sticky'>
            {
              journey.filter((el) => el.year === '1922').map((res) => (
                <OurJourneyCard key={res.id} year={res.year} heading={res.heading} para={res.para} image={res.image} top={res.top} left={res.left} bgYear={res.bgYear} sectionLeft={res.sectionLeft} />
              ))
            }
          </div>
          <div className='2xl:-mt-[350px] xl:-mt-[250px] lg:-mt-56 z-[2]'>
            {
              journey.filter((el) => el.year === '1923').map((res) => (
                <OurJourneyCard key={res.id} year={res.year} heading={res.heading} para={res.para} image={res.image} top={res.top} left={res.left} sectionLeft={res.sectionLeft} bgYear={res.bgYear} />
              ))
            }
          </div>
          <div className='2xl:-mt-[395px] xl:-mt-[250px] lg:-mt-56 z-[3]'>
            {
              journey.filter((el) => el.year === '1923-1935').map((res) => (
                <OurJourneyCard key={res.id} year={res.year} heading={res.heading} para={res.para} image={res.image} top={res.top} left={res.left} bgYear={res.bgYear} />
              ))
            }
          </div>
          <div className='2xl:-mt-[490px] xl:-mt-[300px] lg:-mt-72 z-[4]'>
            {
              journey.filter((el) => el.year === '1935-1940').map((res) => (
                <OurJourneyCard key={res.id} year={res.year} heading={res.heading} para={res.para} image={res.image} top={res.top} left={res.left} sectionLeft={res.sectionLeft} bgYear={res.bgYear} />
              ))
            }
          </div>
          <div className='2xl:-mt-[250px] xl:-mt-[300px] lg:-mt-52 z-[5]'>
            {
              journey.filter((el) => el.year === '1940').map((res) => (
                <OurJourneyCard key={res.id} year={res.year} heading={res.heading} para={res.para} image={res.image} top={res.top} left={res.left} bgYear={res.bgYear} />
              ))
            }
          </div>
          <div className='2xl:-mt-[610px] xl:-mt-[350px] lg:-mt-80 z-[6]'>
            {
              journey.filter((el) => el.year === '1950-1970').map((res) => (
                <OurJourneyCard key={res.id} year={res.year} heading={res.heading} para={res.para} image={res.image} top={res.top} left={res.left} sectionLeft={res.sectionLeft} bgYear={res.bgYear} />
              ))
            }
          </div>
          <div className='2xl:-mt-[250px] xl:-mt-56 lg:-mt-36 z-[7]'>
            {
              journey.filter((el) => el.year === '1960').map((res) => (
                <OurJourneyCard key={res.id} year={res.year} heading={res.heading} para={res.para} image={res.image} top={res.top} left={res.left} bgYear={res.bgYear} />
              ))
            }
          </div>
          <div className='2xl:-mt-[635px] xl:-mt-96 lg:-mt-80 z-[8]'>
            {
              journey.filter((el) => el.year === '1999').map((res) => (
                <OurJourneyCard key={res.id} year={res.year} heading={res.heading} para={res.para} image={res.image} top={res.top} left={res.left} sectionLeft={res.sectionLeft} bgYear={res.bgYear} />
              ))
            }
          </div>
          <div className='2xl:-mt-[225px] xl:-mt-40 lg:-mt-32 z-[9]'>
            {
              journey.filter((el) => el.year === '2000').map((res) => (
                <OurJourneyCard key={res.id} year={res.year} heading={res.heading} para={res.para} image={res.image} top={res.top} left={res.left} bgYear={res.bgYear} />
              ))
            }
          </div>
          <div className='2xl:-mt-[635px] xl:-mt-96 lg:-mt-80 z-[10]'>
            {
              journey.filter((el) => el.year === '2010').map((res) => (
                <OurJourneyCard key={res.id} year={res.year} heading={res.heading} para={res.para} image={res.image} top={res.top} left={res.left} sectionLeft={res.sectionLeft} bgYear={res.bgYear} />
              ))
            }
          </div>
          <div className='2xl:-mt-[225px] xl:-mt-40 lg:-mt-32 z-[11]'>
            {
              journey.filter((el) => el.year === '2013').map((res) => (
                <OurJourneyCard key={res.id} year={res.year} heading={res.heading} para={res.para} image={res.image} top={res.top} left={res.left} bgYear={res.bgYear} />
              ))
            }
          </div>
          <div className='2xl:-mt-[635px] xl:-mt-96 lg:-mt-80 z-[12]'>
            {
              journey.filter((el) => el.year === '2014').map((res) => (
                <OurJourneyCard key={res.id} year={res.year} heading={res.heading} para={res.para} image={res.image} top={res.top} left={res.left} sectionLeft={res.sectionLeft} bgYear={res.bgYear} />
              ))
            }
          </div>
          <div className='2xl:-mt-[225px] xl:-mt-40 lg:-mt-32 z-[13]'>
            {
              journey.filter((el) => el.year === '2015').map((res) => (
                <OurJourneyCard key={res.id} year={res.year} heading={res.heading} para={res.para} image={res.image} top={res.top} left={res.left} sectionLeft={res.sectionLeft} bgYear={res.bgYear} />
              ))
            }
          </div>
          <div className='2xl:-mt-[660px] xl:-mt-96 lg:-mt-80 z-[14]'>
            {
              journey.filter((el) => el.year === 'TODAY').map((res) => (
                <OurJourneyCard key={res.id} year={res.year} heading={res.heading} para={res.para} image={res.image} top={res.top} left={res.left} sectionLeft={res.sectionLeft} bgYear={res.bgYear} />
              ))
            }
          </div>
        </div>
      </div>
      <div className='lg:px-[100px] px-[20px] py-10 bg-[#fefef2]'>
        <Intro intro1={'Chairperson'} intro2={'vice Chairman'} intro3={'CEO'} />
        <h1 className="2xl:text-[100px] font-Gloock font-normal 2xl:mt-20 lg:text-7xl xl:mt-16 lg:mt-14 md:text-6xl md:mt-10 text-5xl">Management</h1>
        <div className='grid md:grid-cols-3 md:gap-x-9 gap-y-10 my-20'>

          {
            management.map((res) => (
              <ManagementCard key={res.id} image={res.image} name={res.name} designation={res.designation} info={res.info} />
            ))
          }
        </div>
      </div>
      <div className='bg-[#F4F4F4] lg:pl-[100px] px-[20px] py-10'>
        <div className="lg:pr-[100px]">
          <Intro intro1={'6 awards'} intro2={'DNA EDIDA UNESCO'} intro3={'2013 2014 2015 2017'} />
        </div>
        <h1 className="small-heading 2xl:mt-20 xl:mt-16 lg:mt-14 md:mt-10 text-center">Awards</h1>
        <div className='flex overflow-x-scroll 2xl:gap-[27px] xl:gap-6 lg:gap-5 gap-4 scroll xl:my-16 lg:y-12 md:my-9 my-7'>
          {
            awards.map((res) => (
              <AwardsCard key={res.id} image={res.image} date={res.date} awardedFor={res.awardedFor} awardName={res.awardName} />
            ))
          }
          {
            awards.map((res) => (
              <AwardsCard key={res.id} image={res.image} date={res.date} awardedFor={res.awardedFor} awardName={res.awardName} />
            ))
          }
        </div>
      </div>
      <div className='lg:px-[100px] px-[20px] py-10'>
        <div className='flex sm:flex-row flex-col items-center justify-between'>
          <h1 className="small-heading 2xl:mt-20 xl:mt-16 lg:mt-14 md:mt-10">Latest press releases</h1>
          <div className=" flex justify-end sm:w-auto w-full">
            <Link href='press' className='link-el border-black border-[1px] w-[175px] xl:w-[200px] 2xl:w-56 2xl:mt-28 xl:mt-24 lg:mt-20 md:mt-16 mt-5 xl:pl-3 pl-2 link'>View all press releases
              <RiArrowRightLine className="arrow" />
            </Link>
          </div>
        </div>
        <div className="xl:mt-20 xl:mb-36 lg:mt-16 lg:mb-28 md:mt-12 md:mb-20 mt-10 mb-16">
          <div className='hidden xl:grid xl:grid-cols-4 gap-4'>
            {
              press.slice(0, 4).map((res) => (
                <PressReleasesCard key={res.id} pressImg={res.pressImg} pressDate={res.pressDate} pressName={res.pressName} />
              ))
            }
          </div>
          <div className='xl:hidden lg:grid hidden grid-cols-3 gap-4'>
            {
              press.slice(0, 3).map((res) => (
                <PressReleasesCard key={res.id} pressImg={res.pressImg} pressDate={res.pressDate} pressName={res.pressName} />
              ))
            }
          </div>
          <div className='lg:hidden grid grid-cols-2 gap-4'>
            {
              press.slice(0, 2).map((res) => (
                <PressReleasesCard key={res.id} pressImg={res.pressImg} pressDate={res.pressDate} pressName={res.pressName} />
              ))
            }
          </div>
        </div>
      </div>
      <div className='2xl:py-44 xl:py-36 lg:py-28 py-24 lg:px-[100px] px-[20px] bg-[#304941] text-white'>
        <div className='flex sm:flex-row flex-col items-center justify-between'>
          <div className="2xl:my-6 flex justify-start sm:w-auto w-full">
            <h1 className="small-heading">Latest events</h1>
          </div>
          <div className=" flex justify-end sm:w-auto w-full">
            <Link href='events' className='link-el border-white border-[1px] w-[132px] xl:h-11 xl:w-[150px] 2xl:w-[179px] xl:pl-3 pl-3 2xl:pl-7 link'>View all events
              <RiArrowRightLine className="arrow" />
            </Link>
          </div>
        </div>
        <div className="2xl:mt-14 xl:mt-12 lg:mt-10 mt-8 xl:mb-16 lg:mb-14 mb-12">
          <div className='hidden xl:grid xl:grid-cols-4 gap-4'>
            {
              events.slice(0, 4).map((res) => (
                <PastEventsCard key={res.id} eventDate={res.eventDate} eventImg={res.eventImg} eventName={res.eventName} />
              ))
            }
          </div>
          <div className='xl:hidden lg:grid hidden grid-cols-3 gap-4'>
            {
              events.slice(0, 3).map((res) => (
                <PastEventsCard key={res.id} eventDate={res.eventDate} eventImg={res.eventImg} eventName={res.eventName} />
              ))
            }
          </div>
          <div className='lg:hidden grid grid-cols-2 gap-4'>
            {
              events.slice(0, 2).map((res) => (
                <PastEventsCard key={res.id} eventDate={res.eventDate} eventImg={res.eventImg} eventName={res.eventName} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurCompany