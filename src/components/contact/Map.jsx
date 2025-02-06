"use client";
import React, { useState, useCallback, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  MarkerClusterer,
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
  zoomControl: false, // Enable zoom control
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
  const [mapDataDrawer, setmapDataDrawer] = useState(false);
  // const [maps, setMaps] = useState(null);

  const zoomIn = () => {
    if (map) map.setZoom(map.getZoom() + 1);
  };

  const zoomOut = () => {
    if (map) map.setZoom(map.getZoom() - 1);
  };
  return isLoaded ? (
    <div className="relative h-screen max-h-[600px] 3xl:h-[1469px] w-full">
      <div
        className={` fixed h-full xl:h-fit xl:absolute z-50 top-0 ${
          mapDataDrawer ? " right-0" : " right-[-100%]"
        } xl:top-5 xl:left-5 w-[375px] xl:w-[400px] transition-all duration-300 ease-in-out 3xl:w-[606px] font-Inter  bg-white p-5 xl:p-8 3xl:p-[4.25rem] xl:rounded-xl shadow-lg z-10`}
      >
        <div className=" flex xl:hidden justify-start items-center pb-[24px]">
          <svg
            onClick={() => setmapDataDrawer(false)}
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="15"
            viewBox="0 0 33 15"
            fill="none"
          >
            <path
              d="M0.292893 6.79289C-0.0976295 7.18342 -0.0976296 7.81658 0.292892 8.20711L6.65685 14.5711C7.04738 14.9616 7.68054 14.9616 8.07107 14.5711C8.46159 14.1805 8.46159 13.5474 8.07107 13.1569L2.41421 7.5L8.07107 1.84314C8.46159 1.45262 8.46159 0.819456 8.07107 0.428931C7.68055 0.0384067 7.04738 0.0384067 6.65686 0.428931L0.292893 6.79289ZM33 6.5L1 6.5L1 8.5L33 8.5L33 6.5Z"
              fill="#2A2523"
            />
          </svg>
        </div>
        <div className=" bg-[#EBEBEB] flex h-11 3xl:h-[52px] rounded-lg mb-10 overflow-hidden ">
          <button
            onClick={() => selectBtnType("showroom")}
            className={`${
              storeType === "showroom" && "bg-gray-700 text-white"
            }  w-full uppercase font-medium h-full`}
          >
            Showroom
          </button>
          <button
            onClick={() => selectBtnType("dealer")}
            className={`${
              storeType === "dealer" && "bg-gray-700 text-white"
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
                className={`${
                  openStore == store?.id ? "block" : "hidden"
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

      <div className=" absolute z-20 top-0 right-0  h-[150px] xl:h-[200px] w-[100vw] bg-transparent"></div>
      <div className=" absolute z-20 bottom-0 right-0 h-[150px] xl:h-[200px] w-[100vw] bg-transparent"></div>
      <div className=" absolute z-20 top-0 right-0 h-[100%] w-[100px] lg:w-[180px] xl:w-[300px] bg-transparent"></div>
      <div className=" absolute z-20 top-0 left-0 h-[100%] w-[100px] lg:w-[180px] xl:w-[300px] bg-transparent"></div>
      <div
        onClick={() => setmapDataDrawer(true)}
        className=" z-30 h-[46px] w-[46px] overflow-hidden xl:hidden bg-white border-white rounded-full absolute bottom-[72px] right-16"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
        >
          <circle cx="23" cy="23" r="23" fill="#EFF7F1" />
          <path
            d="M34.4998 15.3335H19.1664C18.4608 15.3335 17.8887 15.9056 17.8887 16.6113C17.8887 17.317 18.4608 17.8891 19.1664 17.8891H34.4998C35.2055 17.8891 35.7776 17.317 35.7776 16.6113C35.7776 15.9056 35.2055 15.3335 34.4998 15.3335Z"
            fill="black"
          />
          <path
            d="M14.0555 15.3335H11.4999C10.7942 15.3335 10.2222 15.9056 10.2222 16.6113C10.2222 17.317 10.7942 17.8891 11.4999 17.8891H14.0555C14.7612 17.8891 15.3333 17.317 15.3333 16.6113C15.3333 15.9056 14.7612 15.3335 14.0555 15.3335Z"
            fill="black"
          />
          <path
            d="M34.4998 21.7222H19.1664C18.4608 21.7222 17.8887 22.2942 17.8887 22.9999C17.8887 23.7056 18.4608 24.2777 19.1664 24.2777H34.4998C35.2055 24.2777 35.7776 23.7056 35.7776 22.9999C35.7776 22.2942 35.2055 21.7222 34.4998 21.7222Z"
            fill="black"
          />
          <path
            d="M14.0555 21.7222H11.4999C10.7942 21.7222 10.2222 22.2942 10.2222 22.9999C10.2222 23.7056 10.7942 24.2777 11.4999 24.2777H14.0555C14.7612 24.2777 15.3333 23.7056 15.3333 22.9999C15.3333 22.2942 14.7612 21.7222 14.0555 21.7222Z"
            fill="black"
          />
          <path
            d="M34.4998 28.1113H19.1664C18.4608 28.1113 17.8887 28.6834 17.8887 29.3891C17.8887 30.0948 18.4608 30.6669 19.1664 30.6669H34.4998C35.2055 30.6669 35.7776 30.0948 35.7776 29.3891C35.7776 28.6834 35.2055 28.1113 34.4998 28.1113Z"
            fill="black"
          />
          <path
            d="M14.0555 28.1113H11.4999C10.7942 28.1113 10.2222 28.6834 10.2222 29.3891C10.2222 30.0948 10.7942 30.6669 11.4999 30.6669H14.0555C14.7612 30.6669 15.3333 30.0948 15.3333 29.3891C15.3333 28.6834 14.7612 28.1113 14.0555 28.1113Z"
            fill="black"
          />
        </svg>
      </div>
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "100%",
        }}
        options={mapOptions}
        onLoad={handleMapLoad}
        zoom={5}
        center={mapCenter} // Dynamic map center
      >
        {/* {geocodedStores.map((store) => (
          <OverlayView
            key={store.id}
            position={{ lat: store.lat, lng: store.lng }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
          <div style={{ transform: "translate(-50%, -100%)" }}>
          <BFTMapPin />
          </div>
          </OverlayView>
          ))} */}

        <MarkerClusterer>
          {(clusterer) =>
            geocodedStores.map((store) => (
              <Marker
                key={store.id}
                position={{ lat: store.lat, lng: store.lng }}
                clusterer={clusterer}
                onClick={() => handleStoreClick(store)}
              />
            ))
          }
        </MarkerClusterer>
      </GoogleMap>

      <div className="absolute z-30   bottom-5 left-5 flex gap-1 flex-col h-[100px] w-fit bg-white p-2 rounded shadow-lg">
        <button
          onClick={zoomIn}
          className="px-2 py-1 text-2xl bg-gray-300 rounded"
        >
          +
        </button>
        <button
          onClick={zoomOut}
          className="px-2 py-1 text-2xl bg-gray-300 rounded"
        >
          -
        </button>
      </div>
    </div>
  ) : (
    <div className=" h-screen flex justify-center items-center ">
      Loading...
    </div>
  );
};

export default Map;
