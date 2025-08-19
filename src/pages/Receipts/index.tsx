import { useEffect, useState } from 'react';
import { getReceipts } from '../../services';
import { Receipt } from "../../types/api/Receipt";
import { CustomTable } from '../../components/CustomTable';
import * as Routes from "../../routes/index.tsx";

const Receipts = () => {
  const [loading, setLoading] = useState(true);
  const [receipts, setReceipts] = useState<Receipt[] | null>();

  useEffect(() => {
    getReceipts().then(data => {
      setReceipts(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (!receipts) return <p>Não encontrado</p>;

  const columns: { key: keyof Receipt; label: string }[] = [
    { key: 'timestamp', label: 'Data' },
    { key: 'value', label: 'Valor' }
  ];

  return <CustomTable<Receipt> columns={columns} filterKey='timestamp' data={receipts} route={Routes.RECEIPTSROUTE} />;
};

export default Receipts;
