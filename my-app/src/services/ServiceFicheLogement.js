const dataFicheLogement = ".././logements.json";

function ServiceFicheLogement(e) {
  fetch(dataFicheLogement)
    .then((response) => response.json())
    .then((data) => {
      const property = data.filter(
        (property) => property.id === e.props.match.params.id
      );
      e.setState({
        data: property[0],
      });
    });
}

export default ServiceFicheLogement;
