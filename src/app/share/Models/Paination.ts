import { IProductCategory } from "./ProductCategory";

export interface IPagination {
    IsSuccess: boolean;
    Message: string;
    Data: IProductCategory[];
  }
  