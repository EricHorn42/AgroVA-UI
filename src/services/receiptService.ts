import { ApiProvider } from '../providers';
import {
  ApiReceipt,
  CreateReceiptDto,
  UpdateReceiptDto
} from '../types/api/Receipt';

export async function getReceiptById(id: string): Promise<ApiReceipt> {
  const response = await ApiProvider.get(`/api/Receipts/${id}`);
  return response.data;
}

export async function getReceipts(): Promise<Array<ApiReceipt>> {
  const response = await ApiProvider.get(`/api/Receipts`);
  return response.data;
}

export async function createReceipt(data: CreateReceiptDto): Promise<ApiReceipt> {
  const response = await ApiProvider.post('/api/Receipts', data);
  return response.data;
}

export async function updateReceipt(id: string, data: UpdateReceiptDto): Promise<void> {
  await ApiProvider.put(`/api/Receipts/${id}`, data);
}

export async function deleteReceipt(id: string): Promise<void> {
  await ApiProvider.delete(`/api/Receipts/${id}`);
}
