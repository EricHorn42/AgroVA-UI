import { axiosPrivate } from '../providers';
import {
  ApiHuskPrice,
  CreateHuskPriceDto,
  UpdateHuskPriceDto
} from '../types/api/HuskPrice';

export async function getHuskPriceById(id: string): Promise<ApiHuskPrice> {
  const response = await axiosPrivate.get(`/api/HuskPrices/${id}`);
  return response.data;
}

export async function getHuskPrices(): Promise<Array<ApiHuskPrice>> {
  const response = await axiosPrivate.get(`/api/HuskPrices`);
  return response.data;
}

export async function createHuskPrice(data: CreateHuskPriceDto): Promise<ApiHuskPrice> {
  const response = await axiosPrivate.post('/api/HuskPrices', data);
  return response.data;
}

export async function updateHuskPrice(id: string, data: UpdateHuskPriceDto): Promise<void> {
  await axiosPrivate.put(`/api/HuskPrices/${id}`, data);
}

export async function deleteHuskPrice(id: string): Promise<void> {
  await axiosPrivate.delete(`/api/HuskPrices/${id}`);
}
