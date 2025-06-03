export interface ApiAnnotation {
  id: string;
  observation: string;
  timestamp: string;
  farmerId?: number;
  harvestId?: number;
}

export type Annotation = Partial<ApiAnnotation>;

export type CreateAnnotationDto = Omit<ApiAnnotation, 'id'>;

export type DeleteAnnotationDto = Omit<ApiAnnotation, 'id'>;

export type UpdateAnnotationDto = Partial<ApiAnnotation>;
