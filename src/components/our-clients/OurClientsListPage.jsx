import React from "react";
import OurClientsListComp from "./OurClientsListComp";
import { BHARAT_TERRAZZO, HERITAGE_BUILDERS, HERITAGE_CLUBS, HERITAGE_CORPORATE_GUEST_HOUSE, HERITAGE_CORPORATE_ORGINISATIONS, HERITAGE_EDUCATIONAL_INSTITUTIONS, HERITAGE_GOVERNMENT, HERITAGE_HOSPITALS, HERITAGE_HOTELS, HERITAGE_HOUSING_SOCIETIES, HERITAGE_NGOS, HERITAGE_OLD_AGE_HOME, HERITAGE_PUBLIC_BUILDINGS, HERITAGE_RELIGIOUS_INSTITUTE, HERITAGE_RESIDENCES, HERITAGE_RESTUARANTS, STILAN_AUTOMOBILE_WORKSHOPS, STILAN_CHEMICAL, STILAN_CORPORATE_OFFICES, STILAN_ENGINEERING, STILAN_FACTORIES, STILAN_GOVERNMENT, STILAN_HOUSING_SOCIETIES, STILAN_POWER_TRANSMISSION, STILAN_PUBLIC, STILAN_TEXTILES } from "../../utils";

const OurClientsListPage = () => {
  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-y-8 xl:mt-14 items-start lg:mt-11 md:mt-8 mt-6 xl:mb-80 lg:mb-60 md:mb-48 mb- justify-between">
       <div className="flex flex-col gap-8">
      {HERITAGE_HOTELS.map((res) => (
        <OurClientsListComp
          key={res.id}
          clientName={res.clientName}
          clientWork={res.clientWork}
          domain={res.domain}
          tradeMark={res.tradeMark}
          domainName={res.domainName}
        />
      ))}
{HERITAGE_RESTUARANTS.map((res) => (
        <OurClientsListComp
          key={res.id}
          clientName={res.clientName}
          clientWork={res.clientWork}
          domain={res.domain}
          tradeMark={res.tradeMark}
          domainName={res.domainName}
        />
      ))}
      {HERITAGE_RELIGIOUS_INSTITUTE.map((res) => (
        <OurClientsListComp
          key={res.id}
          clientName={res.clientName}
          clientWork={res.clientWork}
          domain={res.domain}
          tradeMark={res.tradeMark}
          domainName={res.domainName}
        />
      ))}
   {HERITAGE_HOUSING_SOCIETIES.map((res) => (
        <OurClientsListComp
          key={res.id}
          clientName={res.clientName}
          clientWork={res.clientWork}
          domain={res.domain}
          tradeMark={res.tradeMark}
          domainName={res.domainName}
        />
      ))}
      {HERITAGE_HOSPITALS.map((res) => (
        <OurClientsListComp
          key={res.id}
          clientName={res.clientName}
          clientWork={res.clientWork}
          domain={res.domain}
          tradeMark={res.tradeMark}
          domainName={res.domainName}
        />
      ))}
      {HERITAGE_EDUCATIONAL_INSTITUTIONS.map((res) => (
        <OurClientsListComp
          key={res.id}
          clientName={res.clientName}
          clientWork={res.clientWork}
          domain={res.domain}
          tradeMark={res.tradeMark}
          domainName={res.domainName}
        />
      ))}
      {HERITAGE_CORPORATE_GUEST_HOUSE.map((res) => (
        <OurClientsListComp
          key={res.id}
          clientName={res.clientName}
          clientWork={res.clientWork}
          domain={res.domain}
          tradeMark={res.tradeMark}
          domainName={res.domainName}
        />
      ))}
         {HERITAGE_CORPORATE_ORGINISATIONS.map((res) => (
        <OurClientsListComp
          key={res.id}
          clientName={res.clientName}
          clientWork={res.clientWork}
          domain={res.domain}
          tradeMark={res.tradeMark}
          domainName={res.domainName}
        />
      ))}
   </div>
      <div className="flex flex-col gap-8">
          {HERITAGE_OLD_AGE_HOME.map((res) => (
        <OurClientsListComp
          key={res.id}
          clientName={res.clientName}
          clientWork={res.clientWork}
          domain={res.domain}
          tradeMark={res.tradeMark}
          domainName={res.domainName}
        />
      ))}
      {HERITAGE_RESIDENCES.map((res) => (
        <OurClientsListComp
          key={res.id}
          clientName={res.clientName}
          clientWork={res.clientWork}
          domain={res.domain}
          tradeMark={res.tradeMark}
          domainName={res.domainName}
        />
      ))}
      {HERITAGE_CLUBS.map((res) => (
        <OurClientsListComp
          key={res.id}
          clientName={res.clientName}
          clientWork={res.clientWork}
          domain={res.domain}
          tradeMark={res.tradeMark}
          domainName={res.domainName}
        />
      ))}
      {HERITAGE_PUBLIC_BUILDINGS.map((res) => (
        <OurClientsListComp
          key={res.id}
          clientName={res.clientName}
          clientWork={res.clientWork}
          domain={res.domain}
          tradeMark={res.tradeMark}
          domainName={res.domainName}
        />
      ))}
      {HERITAGE_NGOS.map((res) => (
        <OurClientsListComp
          key={res.id}
          clientName={res.clientName}
          clientWork={res.clientWork}
          domain={res.domain}
          tradeMark={res.tradeMark}
          domainName={res.domainName}
        />
      ))}
      {HERITAGE_BUILDERS.map((res) => (
        <OurClientsListComp
          key={res.id}
          clientName={res.clientName}
          clientWork={res.clientWork}
          domain={res.domain}
          tradeMark={res.tradeMark}
          domainName={res.domainName}
        />
      ))}
      {HERITAGE_GOVERNMENT.map((res) => (
        <OurClientsListComp
          key={res.id}
          clientName={res.clientName}
          clientWork={res.clientWork}
          domain={res.domain}
          tradeMark={res.tradeMark}
          domainName={res.domainName}
        />
      ))}
      {BHARAT_TERRAZZO.map((res) => (
        <OurClientsListComp
          key={res.id}
          clientName={res.clientName}
          // clientWork={res.clientWork}
          // domain={res.domain}
          // tradeMark={res.tradeMark}
          domainName={res.domainName}
        />
      ))}
      {STILAN_CHEMICAL.map((res) => (
        <OurClientsListComp
          key={res.id}
          clientName={res.clientName}
          clientWork={res.clientWork}
          domain={res.domain}
          tradeMark={res.tradeMark}
          domainName={res.domainName}
        />
      ))}
      </div>
      <div className="flex flex-col gap-8">
        {STILAN_CORPORATE_OFFICES.map((res) => (
        <OurClientsListComp
          key={res.id}
          clientName={res.clientName}
          clientWork={res.clientWork}
          domain={res.domain}
          tradeMark={res.tradeMark}
          domainName={res.domainName}
        />
      ))}
      {STILAN_TEXTILES.map((res) => (
        <OurClientsListComp
          key={res.id}
          clientName={res.clientName}
          clientWork={res.clientWork}
          domain={res.domain}
          tradeMark={res.tradeMark}
          domainName={res.domainName}
        />
      ))}
      {STILAN_POWER_TRANSMISSION.map((res) => (
        <OurClientsListComp
          key={res.id}
          clientName={res.clientName}
          clientWork={res.clientWork}
          domain={res.domain}
          tradeMark={res.tradeMark}
          domainName={res.domainName}
        />
      ))}
      {STILAN_GOVERNMENT.map((res) => (
        <OurClientsListComp
          key={res.id}
          clientName={res.clientName}
          clientWork={res.clientWork}
          domain={res.domain}
          tradeMark={res.tradeMark}
          domainName={res.domainName}
        />
      ))}
      {STILAN_AUTOMOBILE_WORKSHOPS.map((res) => (
        <OurClientsListComp
          key={res.id}
          clientName={res.clientName}
          clientWork={res.clientWork}
          domain={res.domain}
          tradeMark={res.tradeMark}
          domainName={res.domainName}
        />
      ))}
      {STILAN_FACTORIES.map((res) => (
        <OurClientsListComp
          key={res.id}
          clientName={res.clientName}
          clientWork={res.clientWork}
          domain={res.domain}
          tradeMark={res.tradeMark}
          domainName={res.domainName}
        />
      ))}
      {STILAN_HOUSING_SOCIETIES.map((res) => (
        <OurClientsListComp
          key={res.id}
          clientName={res.clientName}
          clientWork={res.clientWork}
          domain={res.domain}
          tradeMark={res.tradeMark}
          domainName={res.domainName}
        />
      ))}
      {STILAN_PUBLIC.map((res) => (
        <OurClientsListComp
          key={res.id}
          clientName={res.clientName}
          clientWork={res.clientWork}
          domain={res.domain}
          tradeMark={res.tradeMark}
          domainName={res.domainName}
        />
      ))}
      {STILAN_ENGINEERING.map((res) => (
        <OurClientsListComp
          key={res.id}
          clientName={res.clientName}
          clientWork={res.clientWork}
          domain={res.domain}
          tradeMark={res.tradeMark}
          domainName={res.domainName}
        />
      ))}
      </div>
    </div>
  );
};

export default OurClientsListPage;
