import React, { useState } from 'react'
import * as C from "./styles";

const SplitPane: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <C.SplitPaneContainer isOpen={isOpen}>
            <C.Menu>{title}
                <C.ToggleButton onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? 'Fechar' : 'Abrir'}
                </C.ToggleButton>
            </C.Menu>
            {children}
            <hr />
        </C.SplitPaneContainer>
    )
}

export default SplitPane