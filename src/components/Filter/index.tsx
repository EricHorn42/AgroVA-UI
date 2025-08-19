import * as C from "./styles";

const Filter = ({ onFilter } : { onFilter: (value: string) => void }) => {
  return (
    <C.FilterContainer>
      <C.Input onChange={(e) => onFilter(e.target.value)} type="text" placeholder="Pesquisar..." />
      {/* <C.ButtonSubmit>Filtrar</C.ButtonSubmit> */}
      {/* <C.ButtonClear>Limpar</C.ButtonClear> */}
    </C.FilterContainer>
  )
}

export default Filter