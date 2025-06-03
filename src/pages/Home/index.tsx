// import * as C from "./styles";
import { useEffect, useState } from "react";
import { getFarmers } from "../../services/farmerService.ts";
import { Farmer } from "../../types/api/Farmer.ts";
import * as C from "./styles.ts";
import { useNavigate } from "react-router-dom";
import * as Routes from "../../routes/index.tsx";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [farmer, setFarmer] = useState<Farmer[] | null>();
  const navigate = useNavigate();

  useEffect(() => {
    getFarmers()
      .then(data => {
        setFarmer(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (!farmer) return <p>Não encontrado</p>;

  return (
    <C.Container>
      <C.Title>Resumo</C.Title>
      <C.Names>
        {farmer.sort((a, b) => a.name && b.name ? a.name?.localeCompare(b.name) : 0).map(d =>
          <C.ButtonNames key={d.id} onClick={() => navigate(`${Routes.FARMERSROUTE}/${d.id}`)}>
            {d.name}
          </C.ButtonNames>)}
      </C.Names>      
    </C.Container>
  );
};


export default Home;