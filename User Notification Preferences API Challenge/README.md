# User Notification Preferences API

A serverless API built using Nest.js for managing user notification preferences and simulating notification delivery.

## Features
- Manage user notification preferences
- Simulate sending notifications
- RESTful API design
- MongoDB integration
- Validation and error handling

## Endpoints
### User Preferences
- **POST** `/api/preferences`
- **GET** `/api/preferences/:userId`
- **PATCH** `/api/preferences/:userId`
- **DELETE** `/api/preferences/:userId`

### Notifications
- **POST** `/api/notifications/send`
- **GET** `/api/notifications/:userId/logs`
- **GET** `/api/notifications/stats`

## Technologies
- **Nest.js**: Framework
- **MongoDB**: Database
- **TypeScript**: Language
- **Jest**: Testing

## Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/user-notification-api.git
