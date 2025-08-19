import { useEffect, useState } from 'react';
import { getFarmerById, getFarmers } from '../../services';
import { Farmer } from "../../types/api/Farmer";
import * as C from "./styles";
import { CustomTable } from '../../components/CustomTable';
import { useParams } from 'react-router-dom';
import Loads from '../Loads';
import Annotations from '../Annotations';
import SplitPane from '../../components/SplitPane';
import FloatingNoteButton from '../../components/FloatingNoteButton';
import * as Routes from "../../routes/index.tsx";
import { useFarmer } from '../../contexts/farmerContex.tsx';
import { useHarvest } from '../../contexts/harvestContext.tsx';
import { Column } from '../../types/component/customTableColum.ts';

const Farmers = () => {
  const [loading, setLoading] = useState(true);
  const [farmer, setFarmer] = useState<Farmer[] | null>();
  const { id } = useParams<{ id: string }>();
  const { setId } = useFarmer();
  const {id: harvestId} = useHarvest();

  useEffect(() => {
    if (!id)
      getFarmers()
        .then(data => {
          setFarmer(data);
          setLoading(false);
        });
    else {
      if (setId)
        setId(Number.parseInt(id));

      getFarmerById(id ? Number.parseInt(id) : 0)
        .then(data => {
          setFarmer([data]);
          setLoading(false);
        });
    }
  }, [id, setId, harvestId]);

  if (loading) return <p>Carregando...</p>;
  if (!farmer) return <p>Não encontrado</p>;

  const columns: Column<Farmer>[] = [
    { key: "name", label: "Nome" },
    { key: "phone", label: "Telefone" }
  ];

  if (id)

    return (
      <div>
        {farmer?.map(d => {
          return (
            <C.Container2 key={d.id}>
              <div>
                <h1>{d.name}</h1>
                <h2>{d.phone}</h2>
              </div>
              <FloatingNoteButton />
              {window.innerWidth > 768 ?
                <C.Container>
                  <C.TopSection>
                    <C.BoxLeft>
                      <p >Cargas</p>
                      <hr />
                      <Loads/>
                    </C.BoxLeft>
                    <C.RightSection>
                      <C.BoxRight>
                        <p >Recibos</p>
                        <hr />
                        <Annotations/>
                      </C.BoxRight>
                      <C.BoxRight>
                        <p >Promissorias</p>
                        <hr />
                        <Annotations/>
                      </C.BoxRight>
                    </C.RightSection>
                  </C.TopSection>
                  <C.BottomSection>
                    <C.BoxBottomLeft>
                      <p >vendas/recibos/promissorias</p>
                      <hr />
                      <Annotations/>
                    </C.BoxBottomLeft>
                    <C.BoxBottomRight>
                      <p >Aluguel/contas safra</p>
                      <hr />
                      <Annotations/>
                    </C.BoxBottomRight>
                  </C.BottomSection>
                </C.Container>
                :
                <C.Container>
                  <SplitPane title="Carregamentos">
                    <Loads/>
                  </SplitPane>
                  <SplitPane title="Anotações" >
                    <Annotations/>
                  </SplitPane>
                  <SplitPane title="Anotações" >
                    <Annotations/>
                  </SplitPane>
                  <SplitPane title="Anotações" >
                    <Annotations/>
                  </SplitPane>
                  <SplitPane title="Anotações" >
                    <Annotations/>
                  </SplitPane>

                </C.Container>
              }

            </C.Container2>
          )
        })}
      </div>
    )
  else
    return <CustomTable<Farmer> columns={columns} data={farmer} filterKey='name' route={Routes.FARMERSROUTE} />

}

export default Farmers;