"use client";
import React, { useState, useCallback, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  OverlayView,
  useJsApiLoader,
} from "@react-google-maps/api";
import Phone from "../../../public/icons/phone";
import Mail from "../../../public/icons/Mail";
import { BsPerson } from "react-icons/bs";
import BFTMapPin from "../../../public/icons/BFTMapPin";

// Map options
const mapOptions = {
  disableDefaultUI: true, // Hides all default UI elements
  gestureHandling: "greedy", // Allows free gestures like pinch-zoom
  zoomControl: true, // Enable zoom control
  mapTypeControl: false, // Hides the map type (satellite/roadmap) control
  minZoom: 2, // Allows zooming out to see the whole world
  styles: [
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [{ color: "#9BC1A6" }],
    },
    {
      featureType: "landscape",
      elementType: "geometry.fill",
      stylers: [{ color: "#EFF7F1" }],
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [{ color: "#C5D9CB" }],
    },
  ],
};

const indiaCenter = { lat: 22.5, lng: 80.0 }; // Center of India

const Map = () => {
  const showrooms = [
    {
      id: 1,
      name: "NEW DELHI SHOWROOM",
      address:
        "Bharat Floorings & Tiles, 86/B, 2nd floor, Village Shahpur Jat, New Delhi - 110049",
      storePerson: "Rahul Raj",
      PhoneNumber: ["91 70427 54670"],
      email: " rahul.raj@bharatfloorings.com",
    },
    {
      id: 2,
      name: "MUMBAI : HEAD OFFICE",
      address: `Bharat Floorings & Tiles (Mumbai) Pvt. Ltd
  32, Mumbai Samachar Marg,
  Ground Floor, Next to Stock Exchange,
  Fort, Mumbai - 400 023
      `,
      storePerson: "Ankush Gawai",
      PhoneNumber: ["91 81697 41134"],
      email: "ankush.gawai@bharatfloorings.com",
    },

    {
      id: 3,
      name: "GOA SHOWROOM",
      address: `Bharat Floorings & Tiles (Mumbai) Pvt. Ltd.
  Shop No. GF 1/2, Block 8, Techno Park,
  Chogam Road, Porvorim,
  Bardez, Goa - 403521`,
      storePerson: "Jawahar Naik",
      PhoneNumber: ["91 98224 23211"],
      email: "jawahar.naik@bharatfloorings.com",
    },
    {
      id: 4,
      name: "BENGALURU : BRANCH OFFICE",
      address: `Bharat Floorings & Tiles (Mumbai) Pvt. Ltd.
  D-15, 2nd Floor, Devatha Plaza,
  Residency Road, Bengaluru -560025
  Landmark: Opp. Bishop Cotton School`,
      storePerson: "Mr. Raghavendra Bande",
      PhoneNumber: ["91 98459 96206"],
      email: "raghavendra.bande@bharatfloorings.com",
    },
    {
      id: 5,
      name: "AHMEDABAD SHOWROOM",
      address: `F004 S.G.Business Hub,
  Near. Gota Overbridge, Next to Bhagwat Vidhyapith, S.G.Highway
  Ahmedabad-380060`,
      storePerson: "Vatsal Parekh",
      PhoneNumber: ["91 93219 41024"],
      email: " vatsal.parekh@bharatfloorings.com",
    },
  ];

  const dealer = [
    {
      id: 1,
      name: "ELITE SPACE - DEALER",
      address: `2nd Floor, Millenium Square,
  Adj. to IOCL Petrol Pump,
  Near Cyberabad Police Commissionarate,
  Gachibowli, Hyderabad – 500032`,
      storePerson: "Mr. Sumanta Hota",
      PhoneNumber: ["7993343750"],
      email: " sumanta.hota@bharatfloorings.com",
    },
    {
      id: 2,
      name: "TROPICAL - DEALER",
      address: `34/136 A,C,H Florence, NH Ln, Edappally, Kochi, Kerala 682024`,
      storePerson: " Mr. Raghavendra Bande",
      PhoneNumber: ["91 98459 96206"],
      email: "raghavendra.bande@bharatfloorings.com",
    },
  ];

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_API_KEY, // Replace with your API key
  });

  const [mapDatas, setmapDatas] = useState(showrooms);
  const [map, setMap] = useState(null);
  const [visibleStores, setVisibleStores] = useState([]);
  const [geocodedStores, setGeocodedStores] = useState([]);
  const [mapCenter, setMapCenter] = useState(indiaCenter); // Default to India center

  const geocodeAddress = useCallback((address) => {
    const geocoder = new window.google.maps.Geocoder();
    return new Promise((resolve, reject) => {
      geocoder.geocode({ address }, (results, status) => {
        if (status === "OK" && results[0]) {
          resolve(results[0].geometry.location);
        } else {
          reject(`Geocode failed for address: ${address}`);
        }
      });
    });
  }, []);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const updatedStores = await Promise.all(
          mapDatas.map(async (store) => {
            const location = await geocodeAddress(store.address);
            return {
              ...store,
              lat: location.lat(),
              lng: location.lng(),
            };
          })
        );
        setGeocodedStores(updatedStores);
        setVisibleStores(updatedStores); // Initially show all stores
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      }
    };

    if (isLoaded) {
      fetchCoordinates();
    }
  }, [isLoaded, geocodeAddress, mapDatas]);

  const handleMapLoad = useCallback((mapInstance) => {
    setMap(mapInstance);
  }, []);

  const handleBoundsChange = useCallback(() => {
    if (map) {
      const bounds = map.getBounds();
      const filteredStores = geocodedStores.filter((store) =>
        bounds.contains({ lat: store.lat, lng: store.lng })
      );
      setVisibleStores(filteredStores);
    }
  }, [map, geocodedStores]);

  const handleStoreClick = (store) => {
    if (map) {
      map.panTo({ lat: store.lat, lng: store.lng });
      map.setZoom(12);
    }
  };

  useEffect(() => {
    if (map) {
      map.addListener("bounds_changed", handleBoundsChange);
    }
  }, [map, handleBoundsChange]);

  const [openStore, setOpenStore] = useState(0);
  const [storeType, setStoreType] = useState("showroom");

  const selectBtnType = (type) => {
    if (type === "dealer") {
      setmapDatas(dealer);
    } else {
      setmapDatas(showrooms);
    }
    setStoreType(type);
  };

  const handleOpenStore = (index) => {
    if (openStore === index) {
      setOpenStore(0);
    } else {
      setOpenStore(index);
    }
  };

  return isLoaded ? (
    <div className="relative h-screen 3xl:h-[1469px] w-full">
      <div className="absolute top-5 left-5 w-[400px] 3xl:w-[606px] font-Inter  bg-white p-8 3xl:p-[4.25rem] rounded-xl shadow-lg z-10">
        <div className=" bg-[#EBEBEB] flex h-11 3xl:h-[52px] rounded-lg mb-10 overflow-hidden ">
          <button
            onClick={() => selectBtnType("showroom")}
            className={`${storeType === "showroom" && "bg-gray-700 text-white"
              }  w-full uppercase font-medium h-full`}
          >
            Showroom
          </button>
          <button
            onClick={() => selectBtnType("dealer")}
            className={`${storeType === "dealer" && "bg-gray-700 text-white"
              }  w-full uppercase font-medium h-full`}
          >
            Dealer
          </button>
        </div>
        {visibleStores.length > 0 ? (
          visibleStores.map((store) => (
            <div
              key={store.id}
              className="cursor-pointer flex flex-col font-Inter py-4 3xl:py-5 border-t-2 border-[#2A2523]"
            >
              <div className="flex items-start uppercase font-semibold text-base 3xl:text-xl justify-between">
                <p onClick={() => handleStoreClick(store)}>{store.name}</p>
                <span
                  onClick={() => handleOpenStore(store.id)}
                  className="font-normal text-2xl 3xl:text-3xl h-full items-start flex"
                >
                  {openStore === store.id ? "-" : "+"}
                </span>
              </div>
              <div
                className={`${openStore == store?.id ? "block" : "hidden"
                  } w-80 leading-7 flex flex-col mt-3 3xl:mt-3 justify-between gap-4`}
              >
                <p className="mb-1">{store.address}</p>
                <p className="flex items-center gap-2">
                  <BsPerson />
                  {store?.storePerson}
                </p>
                <p className="flex items-center gap-2">
                  <Phone color="black" size={15} />+{store?.PhoneNumber}
                </p>
                <p className="flex items-center gap-2">
                  <Mail color="black" className="h-3 w-4" />
                  <a
                    href="mailto:store?.email"
                    className="border-b leading-4 border-black"
                  >
                    {store?.email}
                  </a>
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No stores visible in this region.</p>
        )}
      </div>

      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        options={mapOptions}
        onLoad={handleMapLoad}
        zoom={5}
        center={mapCenter} // Dynamic map center
      >
        {geocodedStores.map((store) => (
          <OverlayView
            key={store.id}
            position={{ lat: store.lat, lng: store.lng }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div style={{ transform: "translate(-50%, -100%)" }}>
              <BFTMapPin />
            </div>
          </OverlayView>
        ))}
      </GoogleMap>
    </div>
  ) : (
    <div className=" h-screen flex justify-center items-center ">
      Loading...
    </div>
  );
};

export default Map;
