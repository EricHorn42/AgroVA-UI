import { ApiProvider } from '../providers';
import {
  ApiFarmer,
  CreateFarmerDto,
  UpdateFarmerDto
} from '../types/api/Farmer';

export async function getFarmerById(id: string): Promise<ApiFarmer> {
  const response = await ApiProvider.get(`/api/Farmers/${id}`);
  return response.data;
}

export async function getFarmers(): Promise<Array<ApiFarmer>> {
  const response = await ApiProvider.get(`/api/Farmers`);
  return response.data;
}

export async function createFarmer(data: CreateFarmerDto): Promise<ApiFarmer> {
  const response = await ApiProvider.post('/api/Farmers', data);
  return response.data;
}

export async function updateFarmer(id: string, data: UpdateFarmerDto): Promise<void> {
  await ApiProvider.put(`/api/Farmers/${id}`, data);
}

export async function deleteFarmer(id: string): Promise<void> {
  await ApiProvider.delete(`/api/Farmers/${id}`);
}
