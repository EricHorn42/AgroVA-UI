import * as C from "./styles";
import React, { useEffect, useState } from 'react'
// import * as Routes from "../../routes";
import { useLocation } from 'react-router-dom';
import { EntityBase } from "../../types/api/Entity";
import { EntityContextType } from "../../contexts/entityContext";

interface SelectProps<T extends EntityBase> {
    getValue: () => Promise<Array<T>>;
    attributeValue: keyof T;
    useContext: () => EntityContextType<T>;
    children: React.ReactNode;
    ignoreRoutes?: string[];
}

function Select<T extends EntityBase>({ getValue, useContext, attributeValue, children, ignoreRoutes }: SelectProps<T>) {
    const [entity, setEntity] = useState<Array<T>>([]);
    const { id, setId } = useContext();
    const location = useLocation();

    useEffect(() => {
        getValue()
            .then(data => {
                setEntity(data);
            });
    }, [id, location.pathname, getValue]);


    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedId = event.target.value;
        if (setId) {
            if (selectedId)
                setId(Number.parseInt(selectedId));
            else
                setId(undefined);
        }
    };

    if (!ignoreRoutes?.some(route => location.pathname.includes(route)))
    return (
        <C.Container>
            <C.Text>
                {children}
            </C.Text>
            <C.Select value={id ?? ''} onChange={handleChange}>
                <option value="">Selecione...</option>
                {entity.map((e) => (
                    <option key={e.id} value={e.id}>
                        {String(e[attributeValue])}
                    </option>
                ))}
            </C.Select>
        </C.Container>
    )
}

export default Select;