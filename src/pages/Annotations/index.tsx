import { useEffect, useState } from 'react';
import { getAnnotations } from '../../services';
import { Annotation } from "../../types/api/Annotation";
import { CustomTable } from '../../components/CustomTable';
import { useHarvest } from '../../hooks/useHarvest';
import { useFarmer } from '../../hooks/useFarmer';
import * as Routes from "../../routes/index.tsx";

const Annotations = () => {
  const [loading, setLoading] = useState(true);
  const [annotation, setAnnotation] = useState<Annotation[] | null>();
  const { farmerId } = useFarmer();
  const { harvestId } = useHarvest();

  useEffect(() => {
    getAnnotations()
      .then(data => {
        setAnnotation(data.filter(d => 
        (farmerId ? d.farmerId === farmerId : true) && 
        (harvestId ? d.harvestId === harvestId : true)));
        setLoading(false);
      });
  }, [farmerId, harvestId]);

  if (loading) return <p>Carregando...</p>;
  if (!annotation) return <p>Não encontrado</p>;

  const columns: { key: keyof Annotation; label: string }[] = [
    { key: "observation", label: "Observação" },
    { key: "timestamp", label: "Data" },
    { key: "farmerId", label: "Produtor" },
    { key: "harvestId", label: "Safra" }
  ];
  
  return <CustomTable<Annotation> columns={columns} data={annotation} route={Routes.ANNOTATIONSROUTE} />

}

export default Annotations;