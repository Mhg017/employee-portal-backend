# Employee Payment Portal

This is a secure application for employees to log in and view international payment transactions. It includes a backend API built with Node.js and Express, and a frontend built with React.

## Features

1. Secure login system for employees.
2. Displays international payments processed from the customer portal.
3. Prevents session jacking, clickjacking, SQL injection, cross-site scripting (XSS), man-in-the-middle attacks, and DDoS attacks.
4. Enforced password security using hashing and salting.
5. DevSecOps pipeline integrated with SonarQube for static code analysis.

---

## Prerequisites

- **Node.js** (v18 or above)
- **npm** (Node Package Manager)
- **SonarQube** (Developer Edition or above)
- **Git**
- A code editor such as **Visual Studio Code**

---

## Project Setup

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository-url/employee-portal-backend.git
   cd employee-portal-backend
   ```

2. Navigate to the backend directory:
   ```bash
   cd backend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Configure environment variables:
   - Create a `.env` file in the backend root folder.
   - Add the following variables:
     ```env
     PORT=5001
     DB_URI=mongodb://localhost:27017/employeePayments
     JWT_SECRET=your_jwt_secret_key
     SSL_KEY_PATH=/path/to/ssl/key
     SSL_CERT_PATH=/path/to/ssl/cert
     ```

5. Start the backend server:
   ```bash
   node server.js
   ```
   The backend server will run at `https://localhost:5001`.

---

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the frontend root folder.
   - Add the following variables:
     ```env
     REACT_APP_API_URL=https://localhost:5001/api
     ```

4. Start the frontend server:
   ```bash
   npm start
   ```
   The frontend server will run at `http://localhost:3000`.

---

## Running Tests

1. **Backend Tests**:
   ```bash
   cd backend
   npm test
   ```

2. **Frontend Tests**:
   ```bash
   cd ../frontend
   npm test
   ```

---

## SonarQube Analysis

1. Make sure SonarQube is up and running on your local or hosted instance.

2. Set up the following secrets in your GitHub repository:
   - `SONAR_TOKEN`: Token generated from SonarQube.
   - `SONAR_HOST_URL`: URL of your SonarQube instance (e.g., `http://localhost:9000`).

3. Run the SonarQube analysis workflow by committing and pushing changes to the `main` branch. This will trigger the GitHub Actions pipeline.

---

## Security Considerations

1. **Input Validation**: All inputs are validated using regex patterns.
2. **Password Security**: Passwords are hashed and salted before storage.
3. **SSL**: The application enforces SSL to ensure secure communication.
4. **Rate Limiting and DDoS Protection**: Implemented using `express-rate-limit` and `helmet`.
5. **Session Security**: JWT-based authentication to prevent session hijacking.

---

## Folder Structure

```
root
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── utils
│   ├── app.js
│   └── server.js
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.js
│   │   └── index.js
└── sonarqube.yml
```

---

## Deployment

1. Use **Docker** to containerize the application.
   - Create `Dockerfile` for backend and frontend.
   - Use `docker-compose` to manage multi-container setup.

2. Deploy to a cloud provider like AWS, Azure, or Google Cloud Platform.
   - Use **Kubernetes** for container orchestration.
   - Set up HTTPS using a load balancer.

---

## Contributions

Contributions are welcome! Please fork the repository and create a pull request with your changes.

---

## License

This project is licensed under the MIT License.

