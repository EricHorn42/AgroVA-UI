import { useNavigate } from "react-router-dom";
import { CustomTableProps } from "../../types/component/customTableProps";
import * as C from "./styles";
import Button from "../Button";

export function CustomTable<T>({
  columns,
  data,
  route,
  getRowKey,
  onUpdate,
  onDelete,
}: CustomTableProps<T>) {
  const navigate = useNavigate();

  const updateData = ((row: T) => {
    if (onUpdate) {
      onUpdate(row);
    }
    else if (route) {
      navigate(`${route}/update`);
    }
  });

  const deleteData = ((row: T) => {
    if (onDelete) {
      onDelete(row);
    }
    else if (route) {
      navigate(`${route}/delete`);
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
      {tableAdd()}
      <C.Table role="table">
        <C.TableHead>
          <C.TableRow>
            {columns.map((col) => (
              <C.TableMenu key={String(col.key)}>{col.label}</C.TableMenu>
            ))}
            {(onUpdate || onDelete || route) && <C.TableMenuButtons>Ações</C.TableMenuButtons>}
          </C.TableRow>
        </C.TableHead>

        <tbody>
          {data.map((row, rowIndex) => {

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
        </tbody>
      </C.Table>
    </>
  );
};


