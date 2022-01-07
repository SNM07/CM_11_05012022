const dataFlatCards = ".././logements.json";

function ServiceFlatCards(e) {
  fetch(dataFlatCards)
    .then((response) => response.json())
    .then((data) => e.setState({ data }));
}

export default ServiceFlatCards;
