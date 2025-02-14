import Events from '../../../components/events/Events'
import {
  EVENT_SECTION,
  EVENTS_SUB_SECTION,
  LOCATION_SECTION,
  TAG_SECTION,
  UPCOMING_EVENTS,
  YEAR_SECTION,
} from "../../../utils";
import eventsPageImage from "../../../../public/images/events/events_image.jpg";
import Header from "../../../components/Header";
import CustomHeader from '../../../components/CustomHeader';

const page = () => {
  return (
    <div>
      <CustomHeader
        level2={true}
        title="Events"
        bgImg={eventsPageImage?.src}
      >
        <Header textColor="text-white" />
      </CustomHeader>
      <Events
        upcomingEvents={UPCOMING_EVENTS}
        tags={TAG_SECTION}
        events={EVENT_SECTION}
        years={YEAR_SECTION}
        loctaion={LOCATION_SECTION}
        pastEvents={EVENTS_SUB_SECTION}
      />
    </div>
  );
};

export default page;
