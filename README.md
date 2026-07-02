# Simple Landing Page 2

## Description
A simple landing page application utilizing Clean Architecture principles.

## Setup Instructions
1. Clone the repository.
2. Install dependencies (if any).
3. Run the application using `npm start`.

## Clean Architecture Layers

- **Domain Layer**: Contains the core business logic. Defines entities, value objects, and repository interfaces.
- **Application Layer**: Orchestrates domain entities to fulfill use cases. Contains use cases and data transfer objects (DTOs).
- **Infrastructure Layer**: Implementation of interfaces defined in the domain and application layers. Handles interactions with external systems.
- **Interfaces Layer**: Entry points into the application. Translates external input into use case calls.