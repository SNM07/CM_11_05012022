//const dataFlatCards = ".././logements.json";
const dataFlatCards = "/CM_11_05012022/logements.json";

export const ServiceFlatCards = async () =>
  fetch(dataFlatCards).then((response) => response.json());
