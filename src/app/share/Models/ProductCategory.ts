export interface IProductCategory {
    Id: number;
    Code: string;
    Name: string;
    Description?: string | null;
    CreatedDate: string;
    ModifyDate: string;
    IsDeleted?: boolean | null;
    Status: string;
    TotalRow: number;
  }
  
  export interface ApiResponse {
    IsSuccess: boolean;
    Message: string;
    Data: IProductCategory[];
  }
  