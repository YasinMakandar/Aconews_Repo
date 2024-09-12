# Aconews

Aconews is a news aggregation web application that fetches the latest articles using the [gnews.io](https://gnews.io/) API. The app allows users to search for news based on keywords, country, language, and category.

## Features
- Search for news articles by keyword
- Filter articles by country and language
- Paginated news feed displaying up to 10 articles per page
- Backend integration with Express.js and Axios for API calls
- Responsive design using Tailwind CSS
- Loading skeleton while fetching articles
- Deployment on Firebase (Frontend) and Vercel (Backend)

## Tech Stack
- **Frontend**: React (Vite), Tailwind CSS
- **Backend**: Node.js, Express, Axios
- **Deployment**: Firebase Hosting (Frontend), Vercel (Backend)

## Setup Instructions

### Frontend
1. Clone the repository:
    ```bash
    git clone https://github.com/YasinMakandar/Aconews_Repo.git
    cd frontend
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Run the development server:
    ```bash
    npm run dev
    ```

4. Build the production files:
    ```bash
    npm run build
    ```

### Backend
1. Navigate to the `backend` folder:
    ```bash
    cd backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file and add your gnews API key:
    ```env
    GNEWS_API_KEY=your_api_key_here
    ```

4. Start the backend server:
    ```bash
    npm start
    ```

## Challenges
- Integrating the gnews.io API with pagination and filters was a bit tricky, especially handling category filtering which required a different endpoint.
- Setting up Vercel for backend deployment took some time to configure properly.

## Live Project
You can access the live project here:
- Frontend: [https://ackonews-f274b.web.app]
- Backend: [https://backend-ackonews.vercel.app/news]

