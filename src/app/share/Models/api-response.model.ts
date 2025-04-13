// src/app/models/api-response.model.ts
export interface ApiResponse<T> 
{
  IsSuccess: boolean;
  Message: string;
  Data: T;
}
