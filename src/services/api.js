const baseUrl = "";

export const GetAllRooms = async () => {
  const res = await fetch(
    "https://dev-projects-bft-data-entry-service.hph94m.easypanel.host/product/rooms"
  );
  return res;
};
