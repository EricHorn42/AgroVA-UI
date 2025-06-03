import { ApiProvider } from '../providers';
import {
  ApiRent,
  CreateRentDto,
  UpdateRentDto
} from '../types/api/Rent';

export async function getRentById(id: string): Promise<ApiRent> {
  const response = await ApiProvider.get(`/api/Rents/${id}`);
  return response.data;
}

export async function getRents(): Promise<Array<ApiRent>> {
  const response = await ApiProvider.get(`/api/Rents`);
  return response.data;
}

export async function createRent(data: CreateRentDto): Promise<ApiRent> {
  const response = await ApiProvider.post('/api/Rents', data);
  return response.data;
}

export async function updateRent(id: string, data: UpdateRentDto): Promise<void> {
  await ApiProvider.put(`/api/Rents/${id}`, data);
}

export async function deleteRent(id: string): Promise<void> {
  await ApiProvider.delete(`/api/Rents/${id}`);
}
