# FrontEnd Assessment v3

This project is a test assignment for **FrontEnd Assessment v3**. It is built using modern frontend technologies, following the provided **wireframes** and ensuring full **mobile responsiveness**.

## Tech Stack
- **React 18+**
- **Next.js**
- **Zustand** (for state management)
- **Webpack**
- **react-hook-form**
- **react-toastify** 
- **Material-UI**
- **Tailwind CSS**
- **mswjs** (mock server for API data)
- **Material-UI DatePicker** (for date selection)

## Features
- UI fully matches the **provided wireframes**.
- **Responsive design** for mobile and desktop versions.
- Uses **mock API** for fetching data.
- **Material-UI DatePicker** is used for selecting dates.

## Running the Project

### 1️ Configure Environment Variables
Set up the mock API URL in the `.env` file:

```env
NEXT_PUBLIC_API_MOCK_URL=<your_mock_server_url>
```

If this variable is defined, the application will automatically fetch data from the mock server.

### 2️ Start the Mock API Server

Run the following command to start the mock API:

```sh
npm run mock-dev-server
```

### 3️ Start the Application

After starting the mock server, run:

```sh
npm run dev
```
This will start the Next.js application in development mode.

## Demo

A video demonstrating the application will be provided.

Everything is set up! Now you can explore the app and test its functionality.
If you have any questions, feel free to ask! 

## Project Structure

The application follows **Next.js file-based routing**, ensuring that pages match the required URLs.  
Each page-specific logic is placed in corresponding **modules** inside the `/src/modules` folder.

### Folder Structure:

 📂 src  
  ┣ 📂 components            # Reusable UI components  
  ┣ 📂 hooks                 # Custom React hooks  
  ┣ 📂 modules               # Page-specific logic modules  
  ┃ ┣ 📂 Projects            # Module for Projects (main) page /projects route  
  ┃ ┗ 📂 Project      
  ┃ ...  ┣ 📂 New               # Modle for creating a New Project /projects/new  
  ┃ ...  ┣ 📂 Details           # View project details, route /projects/:id

  ┃ ...  ┗ 📂 Edit              # Edit Project page, route /projects/:id/edit
  
  ┣ 📂 pages                 # Next.js pages (routes)
  
  ┃ ┣ 📂 projects
  
  ┃ ┃ ┣ 📂 [projectId]
  
  ┃ ┃ ┣ ┗ 📜 edit.tsx        # Edit Project
  
  ┃ ┃ ┣ 📜 [projectId].tsx   # Project Details
  
  ┃ ┃ ┗ 📜 new.tsx           # Create New Project
  
  ┃ ┗ projects.tsx           # Projects List
  
  ┣ 📂 utils                 # Utility functions  
  ┗ 📂 store                 # Application state (Zustand) 
 
 📂 mock                     # Configuration files (e.g., API URLs)  
  ┣ 📜 data.json             # A mocked date in a json file 
  
  ┗ 📜 handlers.js           # Handlers to process REST API requests
  