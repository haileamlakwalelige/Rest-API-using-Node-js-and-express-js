# Rest API using Node.js and Express.js

This project is a simple implementation of a RESTful API using Node.js and Express.js. 

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine using the following command:

   ````
   git clone https://github.com/haileamlakwalelige/Rest-API-using-Node-js-and-express-js.git
   ```

2. Install the dependencies by running the following command in the project directory:

   ````
   npm install
   ```

3. Start the server by running the following command:

   ````
   npm start
   ```

   This will start the server on port 3000 by default.

## API Endpoints

This RESTful API provides the following endpoints for working with resources:

| Endpoint           | HTTP Method | Description                                            |
| ------------------| -----------| -------------------------------------------------------|
| `/api/books`   | GET        | Get all resources                                      |
| `/api/books`   | POST       | Create a new resource                                  |
| `/api/books/:id`| GET       | Get a single resource by ID                             |
| `/api/books/:id`| PUT       | Update a single resource by ID                          |
| `/api/books/:id`| DELETE    | Delete a single resource by ID                          |

## Dependencies

This project uses the following dependencies:

- `express`: A fast, minimalist web framework for Node.js
- `joi`: A module for validating the user inputs
- `nodemon`: A tool for automatically restarting the server during development

## Contributing

If you would like to contribute to this project, feel free to submit a pull request or open an issue. Contributions are always welcome!

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute this project as you see fit.
