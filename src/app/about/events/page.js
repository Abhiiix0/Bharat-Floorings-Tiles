import Events from "@/app/components/Events"
import { EVENT_SECTION, EVENTS_SUB_SECTION, LOCATION_SECTION, TAG_SECTION, UPCOMING_EVENTS, YEAR_SECTION } from "@/utils"
import eventsPageImage from '../../../../public/images/events_image.jpg'
import BackgoundImageLayout from "@/app/components/BackgoundImageLayout"

const page = () =>{
  return(
<>
<BackgoundImageLayout image={eventsPageImage} heading={'Events'} />
<Events upcomingEvents={UPCOMING_EVENTS} tags={TAG_SECTION} events={EVENT_SECTION} years={YEAR_SECTION} loctaion={LOCATION_SECTION} pastEvents={EVENTS_SUB_SECTION} />
</>
  )
}

export default page