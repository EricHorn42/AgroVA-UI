import * as C from "./styles";
import React, { useEffect, useState } from 'react'
import * as Routes from "../../routes";
import { useLocation } from 'react-router-dom';
import { useEntity } from "../../hooks/useEntity";
import { EntityBase } from "../../types/api/Entity";

interface SelectProps<T extends EntityBase> {
  getValue: () => Promise<T[]>;
  attributeValue: keyof T;
  children: React.ReactNode;
}

function Select<T extends EntityBase>({ getValue, attributeValue: h, children }: SelectProps<T>) {
    const [entity, setEntity] = useState<Array<T>>([]);
    const { entityId, setEntityId } = useEntity();
    const location = useLocation();

    useEffect(() => {
        getValue()
            .then(data => {
                setEntity(data);
            });
    }, [entityId, setEntityId, location.pathname]);


    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedId = event.target.value;
        if (setEntityId) {
            if (selectedId)
                setEntityId(Number.parseInt(selectedId));
            else
                setEntityId(null);
        }
    };

    // if (!location.pathname.includes(Routes.FARMERSROUTE)
    //     && !location.pathname.includes(Routes.HOMEROUTE)
    //     && !location.pathname.includes(Routes.HARVESTSROUTE))
        return (
            <C.Container>
                <C.Text>
                    {children}
                </C.Text>
                <C.Select value={entityId ?? ''} onChange={handleChange}>
                    <option value="">Selecione...</option>
                    {entity.map((e) => (
                        <option key={e.id} value={e.id}>
                            {String(e[h])}
                        </option>
                    ))}
                </C.Select>
            </C.Container>
        )
}

export default Select;