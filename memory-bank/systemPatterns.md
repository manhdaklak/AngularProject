# System Patterns

## Kiến trúc tổng thể
```mermaid
graph TD
    AdminUI[Admin UI - AngularJS/Kendo] --> API[.NET Core Web API]
    ClientUI[Client UI - Angular] --> API
    API --> DB[(SQL Server)]
    API --> Cache[(Redis Cache)]
    API --> Auth[Identity Server]
```

## Admin Interface Architecture
### Core Patterns
- Module-based organization
- Controllers và Services pattern
- Kendo UI components
- Dependency Injection
- Two-way data binding

### Component Structure
```mermaid
graph TD
    App[App Module] --> Core[Core Module]
    App --> Shared[Shared Module]
    App --> Admin[Admin Module]
    App --> Dashboard[Dashboard Module]
    
    Core --> Auth[Auth Service]
    Core --> HTTP[HTTP Service]
    
    Shared --> UI[Kendo UI Components]
    Shared --> Directives[Common Directives]
```

## Client Interface Architecture
### Core Patterns
- Feature-based module organization
- Smart/Dumb component pattern
- Lazy loading modules
- Interceptors for HTTP requests
- Guards for route protection

### Component Structure
```mermaid
graph TD
    App[App Module] --> Core[Core Module]
    App --> Shared[Shared Module]
    App --> Features[Feature Modules]
    
    Core --> Auth[Auth Service]
    Core --> API[API Service]
    
    Shared --> UI[UI Components]
    Shared --> Pipes[Common Pipes]
```

## Backend Architecture
### API Structure
```mermaid
graph TD
    Controller[Controllers] --> Service[Services]
    Service --> Repository[Repositories]
    Repository --> EF[Entity Framework]
    EF --> DB[(SQL Server)]
```

### Middleware Chain
```mermaid
graph LR
    Request[Request] --> Auth[Authentication]
    Auth --> CORS[CORS]
    CORS --> Validation[Model Validation]
    Validation --> Controller[Controller]
    Controller --> Response[Response]
```

## Design Patterns
### Admin Interface
- MVC Pattern với AngularJS
- Service Pattern
- Factory Pattern
- Dependency Injection
- Observer Pattern với $scope

### Client Interface
- Component Pattern
- Repository Pattern
- Dependency Injection
- Observable Pattern với RxJS
- Strategy Pattern

### Backend
- Repository Pattern
- Unit of Work Pattern
- CQRS (nếu cần)
- Factory Pattern
- Strategy Pattern

## Security Patterns
- ASP.NET Core Identity
- JWT Authentication
- Role-based Access Control
- SQL Parameters
- Cross-Site Scripting Prevention
- CSRF Protection

## Testing Patterns
### Admin Interface
- Unit Testing với Jasmine
- E2E Testing với Protractor
- Service Testing
- Controller Testing

### Client Interface
- Component Testing
- Service Testing
- E2E Testing với Cypress
- Integration Testing

### Backend
- Unit Testing với xUnit
- Integration Testing
- Repository Testing
- Service Testing
- Controller Testing 