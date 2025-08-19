import { useNavigate } from "react-router-dom";
import { CustomTableProps } from "../../types/component/customTableProps";
import * as C from "./styles";
import Button from "../Button";
import Filter from "../Filter";
import { useEffect, useState } from "react";

export function CustomTable<T>({
  columns,
  data,
  route,
  filterKey: k,
  getRowKey,
  onUpdate,
  onDelete,
}: CustomTableProps<T>) {
  const [filteredData, setFilteredData] = useState<T[]>(data);
  const [originalData] = useState<T[]>(data);
  const navigate = useNavigate();

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const updateData = ((row: T) => {
    if (onUpdate) {
      onUpdate(row);
    }
    else if (route) {
      navigate(`${route}/update`, {state: { row, columns }});
    }
  });

  const deleteData = ((row: T) => {
    if (onDelete) {
      onDelete(row);
    }
    else if (route) {
      navigate(`${route}/delete`, {state: { row, columns }});
    }
  });

  const tableAdd = () => {
    return (
      <C.TableAddContainer>
        <Button onClick={() => navigate(`${route}/create`)}> Adicionar </Button>
      </C.TableAddContainer>
    );
  };

  if (!Array.isArray(data) || data.length === 0) {
    return (
      <>
        {tableAdd()}
        < div > Sem dados disponíveis.</div >
      </>
    );
  }

  return (
    <>
      <C.Header>
        <Filter
          onFilter={(value) => {
            const lowerValue = value.toLowerCase();
            const newData = originalData.filter(item =>
              String(item[k]).toLowerCase().includes(lowerValue)
            );
            setFilteredData(newData);
          }}
        />
        {tableAdd()}
      </C.Header>

      <C.TableWrapper>
        <C.Table role="table">

          <C.TableHead>
            <C.TableRow>
              {columns.map((col) => (
                <C.TableMenu key={String(col.key)}>{col.label}</C.TableMenu>
              ))}
              {(onUpdate || onDelete || route) && <C.TableMenuButtons>Ações</C.TableMenuButtons>}
            </C.TableRow>
          </C.TableHead>
          <C.TableBody>
            {filteredData.map((row, rowIndex) => {

              const rowKey = getRowKey ? getRowKey(row) : rowIndex;
              return (
                <C.TableRow key={rowKey}>

                  {columns.map((col) => (
                    <C.TableData key={String(col.key)}>
                      {row[col.key] != null ? String(row[col.key]) : "-"}
                    </C.TableData>
                  ))}

                  {(onUpdate || onDelete || route) && (
                    <C.TableButtons>
                      <C.Button onClick={() => updateData(row)}> Editar </C.Button>
                      <C.Button onClick={() => deleteData(row)}> Excluir </C.Button>
                    </C.TableButtons>
                  )}

                </C.TableRow>
              );

            })}
          </C.TableBody>

        </C.Table >
      </C.TableWrapper>
    </>
  );
};


