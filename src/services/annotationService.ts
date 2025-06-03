import { ApiProvider } from '../providers';
import {
  ApiAnnotation,
  CreateAnnotationDto,
  UpdateAnnotationDto,
  DeleteAnnotationDto
} from '../types/api/Annotation';

export async function getAnnotationById(id: string): Promise<ApiAnnotation> {
  const response = await ApiProvider.get(`/api/Annotations/${id}`);
  return response.data;
}

export async function getAnnotations(): Promise<Array<ApiAnnotation>> {
  const response = await ApiProvider.get(`/api/Annotations`);
  return response.data;
}

export async function createAnnotation(data: CreateAnnotationDto): Promise<ApiAnnotation> {
  const response = await ApiProvider.post('/api/Annotations', data);
  return response.data;
}

export async function updateAnnotation(id: string, data: UpdateAnnotationDto): Promise<void> {
  await ApiProvider.put(`/api/Annotations/${id}`, data);
}

export async function deleteAnnotation(id: string, data: DeleteAnnotationDto): Promise<void> {
  await ApiProvider.put(`/api/Annotations/${id}`, data);
}
