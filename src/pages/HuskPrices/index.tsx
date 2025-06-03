import { useEffect, useState } from 'react';
import { HuskPrice } from "../../types/api/HuskPrice";
import { CustomTable } from '../../components/CustomTable';
import * as Routes from "../../routes/index.tsx";
import { getHuskPrices } from '../../services';

const HuskPrices = () => {
  const [loading, setLoading] = useState(true);
  const [huskPrices, setHuskPrices] = useState<HuskPrice[] | null>();

  useEffect(() => {
    getHuskPrices().then(data => {
      setHuskPrices(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (!huskPrices) return <p>Não encontrado</p>;

  const columns: { key: keyof HuskPrice; label: string }[] = [
    { key: 'timestamp', label: 'Data' },
    { key: 'percent', label: 'Percentual' },
    { key: 'price', label: 'Preço' }
  ];

  return <CustomTable<HuskPrice> columns={columns} data={huskPrices} route={Routes.HUSKPRICESROUTE} />;
};

export default HuskPrices;
