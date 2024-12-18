## Book Management Application


# Book Management System - MERN Stack Project

A comprehensive CRUD application for managing books, built with the MERN stack (MongoDB, Express, React, Node.js) and Material UI.

### Here are some the important links
- The app - https://bkmgmt-deploy.onrender.com/api/books
- The API of the app - https://bkmgmt-deploy.onrender.com/api/books
- The documentation for the app - https://docs.google.com/document/d/1sK7eQYVud7zc9XjCN0HwRn2SzcduuLZqFnDJKwuBko0/edit?usp=sharing
- URL to MongoDB cluster - mongodb+srv://<username>:<password>@cluster0.<clusterName>.mongodb.net/<DBname>?retryWrites=true&w=majority&appName=Cluster0

## Features

### Core Features
1. **Basic CRUD Operations**
   - Create new books
   - View book details
   - Update book information
   - Delete books
   - List all books in grid view

### Additional Features
1. **Export Options** (Multiple formats available)
   - PDF Export
   - Excel Export
   - CSV Export
   - Text Export

2. **QR Code Generation**
   - Generate QR codes for each book
   - QR codes link to book details page
   - Download individual QR codes
   - Scan to view book details

3. **Advanced Search & Filter**
   - Search by title, author, ISBN, publisher
   - Sort by multiple fields
   - Filter by publisher
   - Reset filter options
   - Real-time search results

4. **Dashboard Statistics**
   - Total books count
   - Unique authors count
   - Latest book added
   - Quick access to all features

5. **Notes System**
   - View and manage notes
   - Markdown support
   - Organized documentation

## Tech Stack

- **Frontend:**
  - React.js
  - Material UI
  - React Router
  - Axios

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose

## Setup Instructions

### Prerequisites
1. Node.js installed
2. MongoDB Atlas account
3. Git installed
4. Code editor (VS Code recommended)

### Step 1: Database Setup
1. Create MongoDB Atlas account
2. Create new cluster
3. Create database user
4. Get connection string
5. Whitelist IP address

### Step 2: Backend Setup
```bash
# Clone repository
git clone https://github.com/bscCohort/bkmgmt-deploy.git
cd bkmgmt-deploy

# Install server dependencies
npm install

# Create config.env file in the root directory and add:
ATLAS_URL=your_mongodb_connection_string
PORT=5000

# Start server
npm run server
```

### Step 3: Frontend Setup
```bash
# Navigate to client directory
cd client

# Install client dependencies
npm install

# Start React development server
npm run dev
```

### Step 4: Running the Application
1. Backend will run on: http://localhost:5000
2. Frontend will run on: http://localhost:3000
3. Access the application through frontend URL

## Project Structure
```
bkmgmt-deploy/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── theme/         # Theme configuration
│   │   └── App.js         # Main React app
├── config/                 # Backend configuration
├── models/                # MongoDB models
├── routes/                # API routes
└── server.js              # Express server
```

## API Endpoints

### Books API
- GET `/api/books` - Get all books
- GET `/api/books/:id` - Get single book
- POST `/api/books` - Add new book
- PUT `/api/books/:id` - Update book
- DELETE `/api/books/:id` - Delete book

## Deployment
The application is deployed on Render:
- Frontend & Backend: https://bkmgmt-deploy.onrender.com
- API Endpoint: https://bkmgmt-deploy.onrender.com/api/books

## Common Issues & Troubleshooting
1. **MongoDB Connection Issues**
   - Check MongoDB URL in config.env
   - Verify IP whitelist in MongoDB Atlas
   - Ensure proper credentials

2. **Port Already in Use**
   - Change PORT in config.env
   - Kill process using the port

3. **Dependencies Issues**
   - Delete node_modules folder
   - Run npm install again
   - Clear npm cache if needed

## Educational Notes
This project helps learn:
1. Full-stack development with MERN
2. REST API development
3. Database operations
4. Frontend state management
5. Routing in React
6. Material UI implementation
7. Data export handling
8. QR code generation
9. Search and filter implementation
10. Responsive design principles

## Future Enhancements Possible
1. User authentication
2. Book categories system
3. Image upload for books
4. Advanced analytics
5. Multi-language support

## Contributing
Feel free to fork the repository and submit pull requests.

## License
This project is open source and available under the MIT License.
