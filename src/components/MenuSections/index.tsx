import { ReactNode } from 'react'
import * as C from "./styles"

const MenuSection = ({ itens, hasBaseLine = true}: { itens: ReactNode, hasBaseLine?: boolean }) => {
    return (
        <C.Container>
            <C.Content>
                {itens}
            </C.Content>
            {hasBaseLine && <C.Separator />}
        </C.Container>
    )
}

export default MenuSection