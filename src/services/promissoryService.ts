import { ApiProvider } from '../providers';
import {
  ApiPromissory,
  CreatePromissoryDto,
  UpdatePromissoryDto
} from '../types/api/Promissory';

export async function getPromissoryById(id: string): Promise<ApiPromissory> {
  const response = await ApiProvider.get(`/api/Promissories/${id}`);
  return response.data;
}

export async function getPromissories(): Promise<Array<ApiPromissory>> {
  const response = await ApiProvider.get(`/api/Promissories`);
  return response.data;
}

export async function createPromissory(data: CreatePromissoryDto): Promise<ApiPromissory> {
  const response = await ApiProvider.post('/api/Promissories', data);
  return response.data;
}

export async function updatePromissory(id: string, data: UpdatePromissoryDto): Promise<void> {
  await ApiProvider.put(`/api/Promissories/${id}`, data);
}

export async function deletePromissory(id: string): Promise<void> {
  await ApiProvider.delete(`/api/Promissories/${id}`);
}
