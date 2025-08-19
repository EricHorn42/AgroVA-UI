import { axiosPrivate } from '../providers';
import {
  ApiAnnotation,
  CreateAnnotationDto,
  UpdateAnnotationDto,
  DeleteAnnotationDto
} from '../types/api/Annotation';

export async function getAnnotationById(id: string): Promise<ApiAnnotation> {
  const response = await axiosPrivate.get(`/api/Annotations/${id}`);
  return response.data;
}

export async function getAnnotations(): Promise<Array<ApiAnnotation>> {
  const response = await axiosPrivate.get(`/api/Annotations`);
  return response.data;
}

export async function createAnnotation(data: CreateAnnotationDto): Promise<ApiAnnotation> {
  const response = await axiosPrivate.post('/api/Annotations', data);
  return response.data;
}

export async function updateAnnotation(id: string, data: UpdateAnnotationDto): Promise<void> {
  await axiosPrivate.put(`/api/Annotations/${id}`, data);
}

export async function deleteAnnotation(id: string, data: DeleteAnnotationDto): Promise<void> {
  await axiosPrivate.put(`/api/Annotations/${id}`, data);
}
