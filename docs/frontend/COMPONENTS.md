# Frontend Components Documentation

## Authentication Components

### Login Component
**File**: `src/app/auth/login/login.component.ts`

**Mô tả**: Component xử lý đăng nhập người dùng

**Properties**:
```typescript
loginForm: FormGroup;
isLoading: boolean;
error: string;
```

**Methods**:
```typescript
onSubmit(): void // Xử lý submit form đăng nhập
```

**Usage**:
```html
<app-login></app-login>
```

### Register Component 
**File**: `src/app/auth/register/register.component.ts`

**Mô tả**: Component xử lý đăng ký tài khoản mới

**Properties**:
```typescript
registerForm: FormGroup;
isLoading: boolean;
error: string;
```

**Methods**:
```typescript
onSubmit(): void // Xử lý submit form đăng ký
```

**Usage**:
```html
<app-register></app-register>
```

## Layout Components

### Header Component
**File**: `src/app/layout/header/header.component.ts`

**Mô tả**: Component hiển thị header của ứng dụng

**Properties**:
```typescript
user: User;
isLoggedIn: boolean;
```

**Methods**:
```typescript
logout(): void // Xử lý đăng xuất
```

**Usage**:
```html
<app-header></app-header>
```

### Sidebar Component
**File**: `src/app/layout/sidebar/sidebar.component.ts`

**Mô tả**: Component hiển thị sidebar navigation

**Properties**:
```typescript
menuItems: MenuItem[];
isCollapsed: boolean;
```

**Methods**:
```typescript
toggleCollapse(): void // Thu gọn/mở rộng sidebar
```

**Usage**:
```html
<app-sidebar></app-sidebar>
```

## Shared Components

### Table Component
**File**: `src/app/shared/table/table.component.ts`

**Mô tả**: Component table có phân trang, sắp xếp và lọc

**Properties**:
```typescript
@Input() data: any[];
@Input() columns: Column[];
@Input() pageSize: number;
@Output() sort = new EventEmitter<SortEvent>();
@Output() filter = new EventEmitter<FilterEvent>();
```

**Methods**:
```typescript
onSort(column: string): void // Xử lý sắp xếp
onFilter(filters: any): void // Xử lý lọc
onPageChange(page: number): void // Xử lý đổi trang
```

**Usage**:
```html
<app-table
  [data]="products"
  [columns]="columns"
  [pageSize]="10"
  (sort)="onSort($event)"
  (filter)="onFilter($event)">
</app-table>
```

### Modal Component
**File**: `src/app/shared/modal/modal.component.ts`

**Mô tả**: Component modal dialog có thể tái sử dụng

**Properties**:
```typescript
@Input() title: string;
@Input() showClose: boolean = true;
@Output() close = new EventEmitter<void>();
```

**Methods**:
```typescript
onClose(): void // Đóng modal
```

**Usage**:
```html
<app-modal
  [title]="'Confirm Delete'"
  (close)="onClose()">
  <div class="modal-body">
    Are you sure you want to delete this item?
  </div>
  <div class="modal-footer">
    <button (click)="onConfirm()">Yes</button>
    <button (click)="onClose()">No</button>
  </div>
</app-modal>
```

## Form Controls

### Input Control
**File**: `src/app/shared/controls/input/input.component.ts`

**Mô tả**: Component input field có validation

**Properties**:
```typescript
@Input() label: string;
@Input() type: string = 'text';
@Input() placeholder: string;
@Input() control: FormControl;
```

**Usage**:
```html
<app-input
  label="Username"
  [control]="form.get('username')"
  placeholder="Enter username">
</app-input>
```

### Select Control
**File**: `src/app/shared/controls/select/select.component.ts`

**Mô tả**: Component select dropdown

**Properties**:
```typescript
@Input() label: string;
@Input() options: SelectOption[];
@Input() control: FormControl;
```

**Usage**:
```html
<app-select
  label="Category"
  [options]="categories"
  [control]="form.get('category')">
</app-select>
```

## Directives

### Click Outside Directive
**File**: `src/app/shared/directives/click-outside.directive.ts`

**Mô tả**: Directive phát hiện click bên ngoài element

**Usage**:
```html
<div (clickOutside)="onClickOutside()">
  Content
</div>
```

### Debounce Click Directive
**File**: `src/app/shared/directives/debounce-click.directive.ts`

**Mô tả**: Directive ngăn double click

**Usage**:
```html
<button [debounceClick]="500" (debounceClick)="onClick()">
  Click me
</button>
```

## Services

### Auth Service
**File**: `src/app/core/services/auth.service.ts`

**Mô tả**: Service xử lý authentication

**Methods**:
```typescript
login(credentials: LoginCredentials): Observable<User>
register(user: RegisterUser): Observable<User>
logout(): void
getToken(): string
isLoggedIn(): boolean
```

### API Service
**File**: `src/app/core/services/api.service.ts`

**Mô tả**: Service gọi API

**Methods**:
```typescript
get<T>(url: string, params?: any): Observable<T>
post<T>(url: string, body: any): Observable<T>
put<T>(url: string, body: any): Observable<T>
delete<T>(url: string): Observable<T>
```

## Pipes

### Date Format Pipe
**File**: `src/app/shared/pipes/date-format.pipe.ts`

**Mô tả**: Pipe format date

**Usage**:
```html
{{ date | dateFormat:'DD/MM/YYYY' }}
```

### Currency Format Pipe
**File**: `src/app/shared/pipes/currency-format.pipe.ts`

**Mô tả**: Pipe format currency

**Usage**:
```html
{{ price | currencyFormat:'VND' }}
```

## Interceptors

### Auth Interceptor
**File**: `src/app/core/interceptors/auth.interceptor.ts`

**Mô tả**: Interceptor thêm token vào header

**Usage**:
```typescript
@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
```

### Error Interceptor
**File**: `src/app/core/interceptors/error.interceptor.ts`

**Mô tả**: Interceptor xử lý lỗi từ API

**Usage**:
```typescript
@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ]
})
```

## Best Practices

### Component Structure
```
component/
  ├── component.component.ts
  ├── component.component.html  
  ├── component.component.scss
  ├── component.component.spec.ts
  └── index.ts
```

### Naming Conventions
- Components: `feature.component.ts`
- Services: `feature.service.ts`
- Interfaces: `feature.interface.ts`
- Enums: `feature.enum.ts`
- Constants: `feature.constants.ts`

### Code Style
- Sử dụng TypeScript strict mode
- Sử dụng interface thay vì type
- Sử dụng async/await thay vì promise chains
- Sử dụng RxJS operators
- Sử dụng OnPush change detection strategy
- Sử dụng trackBy cho ngFor
- Sử dụng lazy loading cho modules

### Testing
- Unit test cho services và pipes
- Integration test cho components
- E2E test cho workflows
- Sử dụng TestBed và async/fakeAsync
- Mock dependencies và services
- Test error cases và edge cases

### Performance
- Sử dụng OnPush change detection
- Unsubscribe RxJS subscriptions
- Lazy load modules và components
- Optimize images và assets
- Minimize bundle size
- Enable production mode
- Use web workers for heavy computation
- Implement virtual scrolling for large lists

### Security
- Sanitize user input
- Use HttpOnly cookies
- Implement CSRF protection
- Use Content Security Policy
- Validate file uploads
- Implement rate limiting
- Use HTTPS
- Implement proper authentication and authorization 