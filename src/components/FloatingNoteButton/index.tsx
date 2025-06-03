import React, { useEffect, useState } from 'react';
import { FabButton, NotesPanel } from './styles';
import { Annotation } from '../../types/api/Annotation';
import { getAnnotations } from '../../services/annotationService';

const FloatingNoteButton: React.FC = ({ farmerId, harvestId }: { farmerId?: number; harvestId?: number }) => {
    const [isOpen, setIsOpen] = useState(false);

    const [loading, setLoading] = useState(true);
    const [annotation, setAnnotation] = useState<Annotation[] | null>();

    useEffect(() => {
        getAnnotations()
            .then(data => {
                setAnnotation(data.filter(d =>
                    (farmerId ? d.farmerId === farmerId : true) &&
                    (harvestId ? d.harvestId === harvestId : true)));
                setLoading(false);
            });
    }, [farmerId, harvestId]);

    if (loading) return <p>Carregando...</p>;
    if (!annotation) return <p>Não encontrado</p>;

    return (
        <>
            <FabButton onClick={() => setIsOpen(!isOpen)}>📝</FabButton>

            <NotesPanel $isOpen={isOpen}>
                <h3>Anotações</h3>
                <ul>
                    {annotation.map((note, i) => (
                        <li key={i}>• {note.observation}</li>
                    ))}
                </ul>
            </NotesPanel>
        </>
    );
};

export default FloatingNoteButton;
