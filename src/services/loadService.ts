import { ApiProvider } from '../providers';
import {
  ApiLoad,
  CreateLoadDto,
  UpdateLoadDto
} from '../types/api/Load';

export async function getLoadById(id: string): Promise<ApiLoad> {
  const response = await ApiProvider.get(`/api/Loads/${id}`);
  return response.data;
}

export async function getLoads(): Promise<Array<ApiLoad>> {
  const response = await ApiProvider.get(`/api/Loads`);
  return response.data;
}

export async function createLoad(data: CreateLoadDto): Promise<ApiLoad> {
  const response = await ApiProvider.post('/api/Loads', data);
  return response.data;
}

export async function updateLoad(id: string, data: UpdateLoadDto): Promise<void> {
  await ApiProvider.put(`/api/Loads/${id}`, data);
}

export async function deleteLoad(id: string): Promise<void> {
  await ApiProvider.delete(`/api/Loads/${id}`);
}
