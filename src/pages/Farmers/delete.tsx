import { useLocation, useNavigate } from 'react-router-dom';
import { Farmer } from '../../types/api/Farmer';
import { Column } from '../../types/component/customTableColum';
import Button from '../../components/Button';
import { deleteFarmer } from '../../services';

const FarmerDelete = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state as { row: Farmer; columns: Column<Farmer>[] } | undefined;

  if (!state || !state.row || !state.columns) {
    return <p>Dados não disponíveis para exclusão.</p>;
  }

  const { row, columns } = state;

  const handleConfirm = () => {
    const confirmed = window.confirm("Tem certeza que deseja excluir este produtor?");
    if (confirmed) {
      deleteFarmer(row.id)
        .then(() => {
          console.log("Excluir produtor com ID:", row.id);
          navigate(-1);
        }).catch((error) => {
          console.error("Erro ao excluir produtor:", error);
        });
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>Excluir Produtor</h1>
      <p>Você realmente deseja excluir o produtor da base de dados?</p>
      <br />
      {columns.map((col) => (
        <div key={String(col.key)}>
          <strong>{col.label}:</strong> {row[col.key] ?? "-"}
        </div>
      ))}
      <br />
      <strong>Esta ação não poderá ser desfeita.</strong>
      <br />
      <br />
      <Button onClick={handleConfirm}>Confirmar</Button>
      <Button onClick={handleCancel}>Cancelar</Button>
    </div>
  );
};

export default FarmerDelete;
