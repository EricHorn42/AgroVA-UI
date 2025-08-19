import { axiosPrivate } from '../providers';
import {
  ApiFarmer,
  CreateFarmerDto,
  UpdateFarmerDto
} from '../types/api/Farmer';

export async function getFarmerById(id: number): Promise<ApiFarmer> {
  const response = await axiosPrivate.get(`/api/Farmers/${id}`);
  return response.data;
}

export async function getFarmers(): Promise<Array<ApiFarmer>> {
  const response = await axiosPrivate.get(`/api/Farmers`);
  return response.data;
}

export async function createFarmer(data: CreateFarmerDto): Promise<ApiFarmer> {
  const response = await axiosPrivate.post('/api/Farmers', data);
  return response.data;
}

export async function updateFarmer(id: number, data: UpdateFarmerDto): Promise<void> {
  await axiosPrivate.put(`/api/Farmers/${id}`, data);
}

export async function deleteFarmer(id: number): Promise<void> {
  await axiosPrivate.delete(`/api/Farmers/${id}`);
}
