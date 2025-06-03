import { ApiProvider } from '../providers';
import {
  ApiHarvest,
  CreateHarvestDto,
  UpdateHarvestDto
} from '../types/api/Harvest';

export async function getHarvestById(id: string): Promise<ApiHarvest> {
  const response = await ApiProvider.get(`/api/Harvests/${id}`);
  return response.data;
}

export async function getHarvests(): Promise<Array<ApiHarvest>> {
  const response = await ApiProvider.get(`/api/Harvests`);
  return response.data;
}

export async function createHarvest(data: CreateHarvestDto): Promise<ApiHarvest> {
  const response = await ApiProvider.post('/api/Harvests', data);
  return response.data;
}

export async function updateHarvest(id: string, data: UpdateHarvestDto): Promise<void> {
  await ApiProvider.put(`/api/Harvests/${id}`, data);
}

export async function deleteHarvest(id: string): Promise<void> {
  await ApiProvider.delete(`/api/Harvests/${id}`);
}
