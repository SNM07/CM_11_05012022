//const dataFicheLogement = ".././logements.json";
const dataFicheLogement = "/CM_11_05012022/logements.json";

export const ServiceFicheLogement = async () =>
  fetch(dataFicheLogement).then((response) => response.json());
