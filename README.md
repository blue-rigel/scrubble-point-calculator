# Scrubble Point Calculator - Tech Challenge

## Overview

The **Scrubble Point Calculator** a simple application to calculate and store points of your scrubble game.

## Technologies Used

- **Spring Boot**: The application is built on the Spring Boot framework, making it easy to develop and deploy.
- **MySQL**: The database is powered by MySQL, providing efficient data storage and retrieval.
- **Thymeleaf**: The user interface is built using the Thymeleaf templating engine for server-side rendering.
- **React JS**: Library used to create the System's user interface
- **Parcel**: Module Bundler used to pack react code
- **JPA and Hibernate**: These technologies are used for data persistence and ORM.
- **Maven**: Project management and build automation are handled by Maven.
- **Bootstrap 5**: The application's frontend is styled using the Bootstrap framework for a clean and responsive design.

## Getting Started

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/blue-rigel/scrubble-point-calculator.git
   cd scrubble-point-calculator
   ```

2. **Create a MySQL Database**:

   Create a MySQL database and configure the connection in `src/main/resources/application.properties`.

3. **Build and Run**:

   Install front-end dependencies
   ```bash
   npm install 
   ```

   (FrontEnd) Run development server with hot reload
   ```bash
   npm run watch
   ```

   (FrontEnd) To generate a production bundle
   ```bash
   npm run build
   ```

   (Backend) Build and run the project using Maven:

   ```bash
   mvn spring-boot:run
   ```
   
   For production you can choose to build .war and deploy to a JVM environment.

4. **Access the Application**:

   Open a web browser and navigate to `http://localhost:8080` to use the application.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to contact us at [greatbattlewar@gmail.com](mailto:greatbattlewar@gmail.com).