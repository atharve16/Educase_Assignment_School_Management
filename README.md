# School Management API

A **production-ready Node.js REST API** built with **Express.js and
MySQL** that allows users to add schools and retrieve schools sorted by
proximity to a user's location.

This project demonstrates **clean backend architecture, scalable
structure, and production-ready practices**, making it ideal for
portfolio projects and technical assignments.

------------------------------------------------------------------------

## Features

-   Add a new school with location coordinates
-   Retrieve schools sorted by distance from a user's location
-   MVC architecture
-   Service layer for database logic
-   Input validation using Joi
-   Centralized error handling
-   Environment variable configuration
-   MySQL connection pooling
-   Secure middleware using Helmet and CORS
-   Production-ready project structure

------------------------------------------------------------------------

## Tech Stack

-   **Node.js**
-   **Express.js**
-   **MySQL**
-   **Joi (Validation)**
-   **dotenv (Environment Variables)**
-   **Helmet (Security)**
-   **Cors**

------------------------------------------------------------------------

## Project Structure

    school-management-api
    │
    ├── src
    │   ├── config
    │   │   └── db.js
    │   │
    │   ├── controllers
    │   │   └── school.controller.js
    │   │
    │   ├── routes
    │   │   └── school.routes.js
    │   │
    │   ├── services
    │   │   └── school.service.js
    │   │
    │   ├── middlewares
    │   │   ├── error.middleware.js
    │   │   └── validate.middleware.js
    │   │
    │   ├── utils
    │   │   └── distance.js
    │   │
    │   └── app.js
    │
    ├── server.js
    ├── .env
    ├── package.json
    └── README.md

------------------------------------------------------------------------

## Database Schema

``` sql
CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);
```

------------------------------------------------------------------------

## API Endpoints

### Add School

**POST**

    /api/schools/addSchool

Request Body

``` json
{
  "name": "Delhi Public School",
  "address": "Delhi",
  "latitude": 28.7041,
  "longitude": 77.1025
}
```

Response

``` json
{
  "success": true,
  "message": "School added successfully",
  "schoolId": 1
}
```

------------------------------------------------------------------------

### List Schools by Distance

**GET**

    /api/schools/listSchools?latitude=28.6&longitude=77.2

Response

``` json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "id": 1,
      "name": "Delhi Public School",
      "address": "Delhi",
      "latitude": 28.7041,
      "longitude": 77.1025,
      "distance": 12.4
    }
  ]
}
```

Schools are sorted based on **geographical distance using the Haversine
formula**.

------------------------------------------------------------------------

## Environment Variables

Create a `.env` file in the root directory:

    PORT=5000

    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=yourpassword
    DB_NAME=school_management

------------------------------------------------------------------------

## Installation

Clone the repository

    git clone https://github.com/yourusername/school-management-api.git

Navigate to the project

    cd school-management-api

Install dependencies

    npm install

Run development server

    npm run dev

Run production server

    npm start

------------------------------------------------------------------------

## Testing with Postman

1.  Import the Postman collection
2.  Test the following endpoints:
    -   Add School
    -   List Schools

------------------------------------------------------------------------

## Deployment

The API can be deployed easily on:

-   Render
-   Railway
-   AWS EC2
-   DigitalOcean

Example live endpoints:

    https://your-api-url/api/schools/addSchool
    https://your-api-url/api/schools/listSchools

------------------------------------------------------------------------

## Future Improvements

-   Swagger API documentation
-   Rate limiting
-   Redis caching
-   Authentication & authorization
-   Pagination for large datasets

------------------------------------------------------------------------

## Author

Atharve Agrawal

If you found this project helpful, feel free to ⭐ the repository.
