//const dataFlatCards = ".././logements.json";
const dataFlatCards = "/CM_11_05012022/logements.json";

function ServiceFlatCards(e) {
  fetch(dataFlatCards)
    .then((response) => response.json())
    .then((data) => e.setState({ data }));
}

export default ServiceFlatCards;
