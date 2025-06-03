import * as C from "./styles";

const Filter = () => {
  return (
    <C.FilterContainer>
      <C.Input type="text" placeholder="Pesquisar..." />
      <C.ButtonSubmit>Filtrar</C.ButtonSubmit>
      <C.ButtonClear>Limpar</C.ButtonClear>
    </C.FilterContainer>
  )
}

export default Filter