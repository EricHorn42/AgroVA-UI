import { useEffect, useState } from 'react';
import { getPromissories } from '../../services';
import { Promissory } from "../../types/api/Promissory";
import { CustomTable } from '../../components/CustomTable';
import * as Routes from "../../routes/index.tsx";

const Promissories = () => {
  const [loading, setLoading] = useState(true);
  const [promissories, setPromissories] = useState<Promissory[] | null>();

  useEffect(() => {
    getPromissories().then(data => {
      setPromissories(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (!promissories) return <p>Não encontrado</p>;

  const columns: { key: keyof Promissory; label: string }[] = [
    { key: 'timestamp', label: 'Data' },
    { key: 'value', label: 'Valor' }
  ];

  return <CustomTable<Promissory> columns={columns} data={promissories} route={Routes.PROMISSORIESROUTE} />;
};

export default Promissories;
