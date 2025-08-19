import { axiosPrivate } from '../providers';
import {
  ApiRent,
  CreateRentDto,
  UpdateRentDto
} from '../types/api/Rent';

export async function getRentById(id: string): Promise<ApiRent> {
  const response = await axiosPrivate.get(`/api/Rents/${id}`);
  return response.data;
}

export async function getRents(): Promise<Array<ApiRent>> {
  const response = await axiosPrivate.get(`/api/Rents`);
  return response.data;
}

export async function createRent(data: CreateRentDto): Promise<ApiRent> {
  const response = await axiosPrivate.post('/api/Rents', data);
  return response.data;
}

export async function updateRent(id: string, data: UpdateRentDto): Promise<void> {
  await axiosPrivate.put(`/api/Rents/${id}`, data);
}

export async function deleteRent(id: string): Promise<void> {
  await axiosPrivate.delete(`/api/Rents/${id}`);
}
