import { useEffect, useState } from 'react';
import { getLoads } from '../../services';
import { Load } from "../../types/api/Load";
import { CustomTable } from '../../components/CustomTable';
import * as Routes from "../../routes/index.tsx";

const Loads = ({ farmerId, harvestId }: { farmerId?: number; harvestId?: number }) => {
  const [loading, setLoading] = useState(true);
  const [loads, setLoads] = useState<Load[] | null>();

  useEffect(() => {
    if (farmerId && harvestId)
      getLoads()
        .then(data => {
          setLoads(data.filter(d => d.farmerId === farmerId && d.harvestId === harvestId));
          setLoading(false);
        });
    else if (farmerId)
      getLoads()
        .then(data => {
          setLoads(data.filter(d => d.farmerId === farmerId));
          setLoading(false);
        });
    else if (harvestId)
      getLoads()
        .then(data => {
          setLoads(data.filter(d => d.harvestId === harvestId));
          setLoading(false);
        });
    else
      getLoads().then(data => {
        setLoads(data);
        setLoading(false);
      });
  }, [farmerId, harvestId]);

  if (loading) return <p>Carregando...</p>;
  if (!loads) return <p>Não encontrado</p>;

  const columns: { key: keyof Load; label: string }[] = [
    { key: 'timestamp', label: 'Data' },
    { key: 'greenWeight', label: 'Peso Verde' },
    { key: 'dryWeight', label: 'Peso Seco' },
    { key: 'invoice', label: 'Nota Fiscal' }
  ];

  return <CustomTable<Load> columns={columns} filterKey='invoice' data={loads} route={Routes.LOADSROUTE} />;
};

export default Loads;
