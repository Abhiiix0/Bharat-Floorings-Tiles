"use client";
import React, { useState, useCallback, useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import Phone from "../../../../public/icons/phone";
import Mail from "../../../../public/icons/mail";
import { BsPerson } from "react-icons/bs";

// Map options
const mapOptions = {
  disableDefaultUI: true, // Hides all default UI elements
  gestureHandling: "greedy", // Allows free gestures like pinch-zoom
  zoomControl: true, // Enable zoom control
  mapTypeControl: false, // Hides the map type (satellite/roadmap) control
  minZoom: 2, // Allows zooming out to see the whole world
};

// Stores with addresses
const stores = [
  {
    id: 1,
    name: "NEW DELHI SHOWROOM",
    address:
      "Bharat Floorings & Tiles, 86/B, 2nd floor, Village Shahpur Jat, New Delhi - 110049",
  },
  {
    id: 2,
    name: "MUMBAI : HEAD OFFICE",
    address: `
    Bharat Floorings & Tiles (Mumbai) Pvt. Ltd
32, Mumbai Samachar Marg,
Ground Floor, Next to Stock Exchange,
Fort, Mumbai - 400 023
    `,
  },

  {
    id: 3,
    name: "GOA SHOWROOM",
    address: `Bharat Floorings & Tiles (Mumbai) Pvt. Ltd.
Shop No. GF 1/2, Block 8, Techno Park,
Chogam Road, Porvorim,
Bardez, Goa - 403521`,
  },
  {
    id: 4,
    name: "BENGALURU : BRANCH OFFICE",
    address: `Bharat Floorings & Tiles (Mumbai) Pvt. Ltd.
D-15, 2nd Floor, Devatha Plaza,
Residency Road, Bengaluru -560025
Landmark: Opp. Bishop Cotton School`,
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

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_API_KEY, // Replace with your API key
  });

  const [map, setMap] = useState(null);
  const [visibleStores, setVisibleStores] = useState([]);
  const [geocodedStores, setGeocodedStores] = useState([]); // Store geocoded stores

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
          stores.map(async (store) => {
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
  }, [isLoaded, geocodeAddress]);

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

  const [openStore, setopenStore] = useState(0);
  const [storeType, setStoreType] = useState("dealer");
  const selectBtnType = (type) => {
    setStoreType(type);
  };

  const handleOpenStore = (index) => {
    if (openStore === index) {
      setopenStore(0);
    } else {
      setopenStore(index);
    }
  };
  return isLoaded ? (
    <div className="relative h-screen w-full">
      {/* Sidebar */}
      <div className="absolute top-5 left-5 w-[606px] font-Inter  bg-white p-[4.25rem] rounded-3xl shadow-lg z-10">
        <div className=" bg-[#EBEBEB] flex h-[52px] rounded-lg mb-10 overflow-hidden ">
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
              className="cursor-pointer flex flex-col  font-Inter  py-4 3xl:py-5 border-t-2 border-[#2A2523] "
            >
              <div className=" flex items-start uppercase font-semibold text-md 3xl:text-xl justify-between">
                <p className=" " onClick={() => handleStoreClick(store)}>
                  {store.name}
                </p>
                <span
                  onClick={() => handleOpenStore(store?.id)}
                  className=" font-normal text-2xl 3xl:text-3xl h-full items-start flex "
                >
                  {openStore === store.id ? "-" : "+"}
                </span>
              </div>
              <div
                className={` ${
                  openStore == store?.id ? "block" : "hidden"
                } w-80 leading-7  flex flex-col mt-3 3xl:mt-3 justify-between gap-4`}
              >
                <p className=" mb-1">{store.address}</p>
                <>
                  <p className=" flex items-center gap-2">
                    <BsPerson />
                    {store?.storePerson}
                  </p>
                  <p className=" flex items-center gap-2">
                    <Phone color="black" size={15}></Phone>+{store?.PhoneNumber}
                  </p>
                  <p className=" flex items-center gap-2">
                    <Mail color="black" className=" h-3 w-4" />
                    <a
                      href="mailto:"
                      className=" border-b leading-4 border-black"
                    >
                      {store?.email}
                    </a>
                  </p>
                </>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No stores visible in this region.</p>
        )}
      </div>

      {/* Map */}
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        // center={{ lat: 22.5, lng: 80.0 }}
        // zoom={5}
        options={mapOptions}
        onLoad={handleMapLoad}
      >
        {/* Markers */}
        {geocodedStores.map((store) => (
          <Marker
            key={store.id}
            position={{ lat: store.lat, lng: store.lng }}
            title={store.name}
          />
        ))}
      </GoogleMap>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Map;
