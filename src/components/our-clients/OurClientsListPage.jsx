import OurClientsListComp from "./OurClientsListComp";
import { OUR_ALL_CLIENTS } from "../../utils";

const OurClientsListPage = ({selected}) => {
  return (
  <div className="3xl:mt-24 2xl:mt-20 xl:mt-16 lg:mt-12 md:mt-9 sm:mt-5 mt-3 md:mb-[310px] mb-[305px]">
      { selected === 'All Clients' || selected === "Choose an option" ? 
        <div  className="xl:columns-3 md:columns-2">
    {
        OUR_ALL_CLIENTS.map((res)=>(
          <OurClientsListComp
          key={res.id}
          clientName={res.clientName}
          clientWork={res.clientWork}
          domain={res.domain}
          tradeMark={res.tradeMark}
          domainName={res.domainName}
        />
        ))
    } 
      </div>
      :
   <div>
     {
         OUR_ALL_CLIENTS.filter((res)=> res.category === selected).map((res)=>(
          <OurClientsListComp
          key={res.id}
          clientName={res.clientName}
          clientWork={res.clientWork}
          domain={res.domain}
          tradeMark={res.tradeMark}
          domainName={res.domainName}
        />
        ))
     }
      </div>
      }
    </div>
  )
};

export default OurClientsListPage;
