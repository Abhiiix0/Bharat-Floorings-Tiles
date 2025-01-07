import Events from "@/app/components/Events"
import { EVENT_SECTION, EVENTS_SUB_SECTION, LOCATION_SECTION, TAG_SECTION, UPCOMING_EVENTS, YEAR_SECTION } from "@/utils"
import eventsPageImage from '../../../../public/images/events_image.jpg'
import Header from "@/app/components/Header"

const page = () =>{
  return(
<div>
<div
       style={{backgroundImage : `url(${eventsPageImage.src})`,
               backgroundPosition: 'center',
               backgroundSize: 'cover'
      }}
       className='2xl:h-[727px] lg:h-[450px] h-screen  relative'
       >
        <Header textColor="text-white" />
        <h1 className="big-heading text-white absolute xl:top-[55%] lg:top-2/4 top-[80%] left-[7%]">Events</h1>
        </div>
<Events upcomingEvents={UPCOMING_EVENTS} tags={TAG_SECTION} events={EVENT_SECTION} years={YEAR_SECTION} loctaion={LOCATION_SECTION} pastEvents={EVENTS_SUB_SECTION} />
</div>
  )
}

export default page