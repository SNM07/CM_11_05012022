//const dataFicheLogement = ".././logements.json";
const dataFicheLogement = "/CM_11_05012022/logements.json";


function ServiceFicheLogement(e) {
  const fetchData = async () => {
    const response = await fetch(dataFicheLogement);
    const data = await response.json();
    const property = data.filter(
      (property) => property.id === e.props.match.params.id
    );
    if (property.length === 0) {
      e.props.history.push("/Erreur404");
    } else {
      e.setState({ data: property[0] });
    }
  };
  fetchData();
}

export default ServiceFicheLogement;
