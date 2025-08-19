import { useEffect, useState } from 'react';
import { getRents } from '../../services';
import { Rent } from "../../types/api/Rent";
import { CustomTable } from '../../components/CustomTable';
import * as Routes from "../../routes/index.tsx";

const Rents = () => {
  const [loading, setLoading] = useState(true);
  const [rents, setRents] = useState<Rent[] | null>();

  useEffect(() => {
    getRents().then(data => {
      setRents(data);
      setLoading(false);
    });
  }, []);
 
  if (loading) return <p>Carregando...</p>;
  if (!rents) return <p>Não encontrado</p>;

  const columns: { key: keyof Rent; label: string }[] = [
    { key: 'person', label: 'Pessoa' },
    { key: 'percent', label: 'Percentual' },
    { key: 'value', label: 'Valor' }
  ];

  return <CustomTable<Rent> columns={columns} filterKey='person' data={rents} route={Routes.RENTSROUTE} />;
};

export default Rents;
