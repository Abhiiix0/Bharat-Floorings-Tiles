import { EVENT_SECTION, EVENTS_SUB_SECTION, LOCATION_SECTION, TAG_SECTION, UPCOMING_EVENTS, YEAR_SECTION } from "@/utils"
import eventsPageImage from '../../../../public/images/events/events_image.jpg'
import Header from "@/components/Header"
import Events from "@/components/Events"

const page = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${eventsPageImage.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
        className='3xl:h-[727px] 2xl:h-[600px] lg:h-[450px] h-[40vh] relative'
      >
        <Header textColor="text-white" />
        <div className="absolute 3xl:top-[55%] top-[70%] lg:px-[100px] px-[20px]">
          <h1 className="big-heading text-white">Events</h1>
        </div>
      </div>
      <Events upcomingEvents={UPCOMING_EVENTS} tags={TAG_SECTION} events={EVENT_SECTION} years={YEAR_SECTION} loctaion={LOCATION_SECTION} pastEvents={EVENTS_SUB_SECTION} />
    </div>
  )
}

export default page