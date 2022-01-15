const dataFicheLogement = ".././logements.json";

function ServiceFicheLogement(e) {
  const fetchData = async () => {
    const response = await fetch(dataFicheLogement);
    const data = await response.json();
    const property = data.filter(
      (property) => property.id === e.props.match.params.id
    );
    console.log(property);
    if (property.length === 0) {
      e.props.history.push("/Erreur404");
    } else {
      e.setState({ data: property[0] });
    }
  };
  fetchData();
}

export default ServiceFicheLogement;
