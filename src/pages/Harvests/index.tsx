import { useEffect, useState } from 'react';
import { getHarvests } from '../../services';
import { Harvest } from "../../types/api/Harvest.ts";
import { CustomTable } from '../../components/CustomTable';
import * as Routes from "../../routes/index.tsx";

const Harvests = () => {
  const [loading, setLoading] = useState(true);
  const [harvests, setHarvest] = useState<Harvest[] | null>();

  useEffect(() => {
    getHarvests().then(data => {
      setHarvest(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (!harvests) return <p>Não encontrado</p>;

  const columns: { key: keyof Harvest; label: string }[] = [ 
    { key: 'year', label: 'Ano' }
  ];
  
  return <CustomTable<Harvest> columns={columns} data={harvests} route={Routes.HARVESTSROUTE}/>;
};

export default Harvests;
