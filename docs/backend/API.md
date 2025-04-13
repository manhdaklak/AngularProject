# Backend API Documentation

## Authentication API

### Login API
```csharp
[HttpPost("login")]
public async Task<IActionResult> Login([FromBody] LoginRequest request)
```

**Mô tả**: API đăng nhập người dùng

**Request**:
```json
{
  "username": "string",
  "password": "string"
}
```

**Response**:
```json
{
  "accessToken": "string",
  "refreshToken": "string",
  "expiresIn": 900
}
```

**Status Codes**:
- 200: Thành công
- 400: Thông tin đăng nhập không hợp lệ
- 401: Sai username/password

### Refresh Token API
```csharp
[HttpPost("refresh-token")]
public async Task<IActionResult> RefreshToken([FromBody] RefreshTokenRequest request)
```

**Mô tả**: API làm mới token

**Request**:
```json
{
  "refreshToken": "string"
}
```

**Response**:
```json
{
  "accessToken": "string",
  "refreshToken": "string",
  "expiresIn": 900
}
```

## Product API

### Get Products
```csharp
[HttpGet("products")]
public async Task<ActionResult<PagedResult<ProductDto>>> GetProducts([FromQuery] ProductFilter filter)
```

**Mô tả**: API lấy danh sách sản phẩm có phân trang

**Parameters**:
- `page`: int - Trang hiện tại
- `pageSize`: int - Số items mỗi trang
- `search`: string - Từ khóa tìm kiếm
- `categoryId`: int? - Lọc theo danh mục
- `sortBy`: string - Sắp xếp theo trường
- `sortDirection`: string - Chiều sắp xếp (asc/desc)

**Response**:
```json
{
  "items": [
    {
      "id": 1,
      "name": "string",
      "price": 0,
      "categoryId": 1,
      "description": "string"
    }
  ],
  "total": 0,
  "page": 1,
  "pageSize": 10
}
```

### Create Product
```csharp
[HttpPost("products")]
public async Task<ActionResult<ProductDto>> CreateProduct([FromBody] CreateProductRequest request)
```

**Mô tả**: API tạo mới sản phẩm

**Request**:
```json
{
  "name": "string",
  "price": 0,
  "categoryId": 1,
  "description": "string"
}
```

**Response**: ProductDto object

**Status Codes**:
- 201: Tạo thành công
- 400: Dữ liệu không hợp lệ
- 401: Chưa đăng nhập
- 403: Không có quyền

## Category API

### Get Categories
```csharp
[HttpGet("categories")]
public async Task<ActionResult<List<CategoryDto>>> GetCategories()
```

**Mô tả**: API lấy danh sách danh mục

**Response**:
```json
[
  {
    "id": 1,
    "name": "string",
    "description": "string"
  }
]
```

### Create Category
```csharp
[HttpPost("categories")]
public async Task<ActionResult<CategoryDto>> CreateCategory([FromBody] CreateCategoryRequest request)
```

**Mô tả**: API tạo mới danh mục

**Request**:
```json
{
  "name": "string",
  "description": "string"
}
```

**Response**: CategoryDto object

## Order API

### Create Order
```csharp
[HttpPost("orders")]
public async Task<ActionResult<OrderDto>> CreateOrder([FromBody] CreateOrderRequest request)
```

**Mô tả**: API tạo đơn hàng

**Request**:
```json
{
  "items": [
    {
      "productId": 1,
      "quantity": 1
    }
  ],
  "address": "string",
  "phone": "string"
}
```

**Response**:
```json
{
  "id": 1,
  "items": [
    {
      "productId": 1,
      "quantity": 1,
      "price": 0
    }
  ],
  "total": 0,
  "status": "string",
  "createdAt": "2024-03-20T00:00:00Z"
}
```

### Get Orders
```csharp
[HttpGet("orders")]
public async Task<ActionResult<PagedResult<OrderDto>>> GetOrders([FromQuery] OrderFilter filter)
```

**Mô tả**: API lấy danh sách đơn hàng

**Parameters**:
- `page`: int - Trang hiện tại
- `pageSize`: int - Số items mỗi trang
- `status`: string - Lọc theo trạng thái
- `fromDate`: DateTime? - Từ ngày
- `toDate`: DateTime? - Đến ngày

**Response**:
```json
{
  "items": [
    {
      "id": 1,
      "items": [],
      "total": 0,
      "status": "string",
      "createdAt": "2024-03-20T00:00:00Z"
    }
  ],
  "total": 0,
  "page": 1,
  "pageSize": 10
}
```

## User API

### Get User Profile
```csharp
[HttpGet("users/profile")]
public async Task<ActionResult<UserProfileDto>> GetProfile()
```

**Mô tả**: API lấy thông tin người dùng

**Response**:
```json
{
  "id": 1,
  "username": "string",
  "email": "string",
  "fullName": "string",
  "roles": [
    "string"
  ]
}
```

### Update Profile
```csharp
[HttpPut("users/profile")]
public async Task<ActionResult<UserProfileDto>> UpdateProfile([FromBody] UpdateProfileRequest request)
```

**Mô tả**: API cập nhật thông tin người dùng

**Request**:
```json
{
  "fullName": "string",
  "email": "string",
  "phone": "string"
}
```

**Response**: UserProfileDto object

## Common Response Format

### Success Response
```json
{
  "success": true,
  "data": {}, // Response data
  "message": "string"
}
```

### Error Response
```json
{
  "success": false,
  "error": {
    "code": "string",
    "message": "string",
    "details": {} // Additional error details
  }
}
```

## Error Codes

### Authentication Errors
- `AUTH001`: Token không hợp lệ
- `AUTH002`: Token hết hạn
- `AUTH003`: Refresh token không hợp lệ
- `AUTH004`: Tài khoản bị khóa

### Validation Errors
- `VAL001`: Dữ liệu không hợp lệ
- `VAL002`: Trường bắt buộc
- `VAL003`: Định dạng không hợp lệ

### Business Errors
- `BUS001`: Sản phẩm không tồn tại
- `BUS002`: Số lượng không đủ
- `BUS003`: Đơn hàng đã được xử lý

## Security

### Authentication
- Sử dụng JWT token
- Access token có thời hạn 15 phút
- Refresh token có thời hạn 24 giờ
- Token được gửi qua header `Authorization: Bearer {token}`

### Authorization
- Sử dụng attribute `[Authorize]` để yêu cầu đăng nhập
- Sử dụng attribute `[RequirePermission("permission")]` để kiểm tra quyền
- Quyền được định nghĩa trong enum `Permissions`

### Rate Limiting
- Giới hạn 1000 requests/phút cho mỗi IP
- Giới hạn 100 requests/phút cho các API authentication

## Caching

### Cache Keys
- `products:{id}`: Cache thông tin sản phẩm
- `categories`: Cache danh sách danh mục
- `user:{id}:profile`: Cache thông tin người dùng

### Cache Duration
- Product: 5 phút
- Category: 30 phút
- User Profile: 15 phút

## Logging

### Log Categories
- `Authentication`: Log các hoạt động đăng nhập/đăng xuất
- `UserActivity`: Log các hoạt động của người dùng
- `SystemError`: Log lỗi hệ thống
- `Performance`: Log thời gian xử lý request

### Log Format
```json
{
  "timestamp": "2024-03-20T00:00:00Z",
  "level": "string",
  "category": "string",
  "message": "string",
  "data": {},
  "exception": "string"
}
``` 