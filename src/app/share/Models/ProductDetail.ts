export interface IProductDetail {
  Id: number;
  Name: string;
  Alias?: string;
  AvatarImage?: string;
  Quantity: number;
  Price: number;
  Color: string;
  Size?: string;
  Description?: string;
  ProductId: number;
  ProductName: string;
  IsDeleted?: boolean;
  Status?: string;
  CreatedDate?: string;
  ModifyDate?: string;
  DiscountId: number;
  DiscountName: string;
  OperatingSystem?: string;
  LaunchYear?: number;
  TotalRow: number;
}
export interface ApiResponse {
  IsSuccess: boolean;
  Message: string;
  Data: IProductDetail[];
}
