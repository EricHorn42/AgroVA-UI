import { axiosPrivate } from '../providers';
import {
  ApiPromissory,
  CreatePromissoryDto,
  UpdatePromissoryDto
} from '../types/api/Promissory';

export async function getPromissoryById(id: string): Promise<ApiPromissory> {
  const response = await axiosPrivate.get(`/api/Promissories/${id}`);
  return response.data;
}

export async function getPromissories(): Promise<Array<ApiPromissory>> {
  const response = await axiosPrivate.get(`/api/Promissories`);
  return response.data;
}

export async function createPromissory(data: CreatePromissoryDto): Promise<ApiPromissory> {
  const response = await axiosPrivate.post('/api/Promissories', data);
  return response.data;
}

export async function updatePromissory(id: string, data: UpdatePromissoryDto): Promise<void> {
  await axiosPrivate.put(`/api/Promissories/${id}`, data);
}

export async function deletePromissory(id: string): Promise<void> {
  await axiosPrivate.delete(`/api/Promissories/${id}`);
}
