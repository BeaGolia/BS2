# Book Search Application
This is a simple web application that allows users to search for books by category using the Open Library API. The application is built with modern web development tools such as Webpack, Axios, and Lodash.

![first_img](https://github.com/user-attachments/assets/b88170b9-092f-4e1b-b2c5-e442e924ee2f)
![second_img](https://github.com/user-attachments/assets/0a3d79ca-e8e9-46bb-ab4a-a7f47dbf9f52)


## Table of Contents
- Features
- Usage
- Technologies Used
- Contributions


## Features
- Search by Category: Users can search for books by entering a category.
- Display Results: The application displays book titles, authors, and cover images.
- Book Descriptions: Users can view detailed descriptions of the books by clicking a button.
- Responsive Design: The application is optimized for both desktop and mobile devices.

## Technologies Used
- **JavaScript (ES6+):** Modern JavaScript features.
- **Webpack:** Bundling the application.
- **Axios:** For making API requests to the Open Library.
- **Lodash:** Utility functions to enhance JavaScript capabilities.
- **HTML5 & CSS3:** Markup and styling, with a focus on responsive design.

## Installation

- **Clone the repository:**
   ```git clone https://github.com/<your-username>/<your-repo>.git```
- **Navigate to the project directory:**
```cd <your-repo>```
- **Install dependencies:**
```npm install```
- **Build the project:**
```npx webpack```
- **Run the application locally:**
 Open the ```dist/index.html``` file in your browser to see the application in action.

## Deployment
This application is deployed on GitHub Pages. The dist directory is pushed to the ```gh-pages``` branch.

## Deploying Updates
To deploy updates:

- Build the project:
```npx webpack```
- Push the dist folder to the gh-pages branch:
```git subtree push --prefix dist origin gh-pages```
- Your updates will be live at: https://<your-username>.github.io/<your-repo>.

## Usage
Enter a category in the search input field (e.g., "fantasy") and click "Search."
The application will display a list of books matching the category.
Click on "Show Description" to view more details about a book.

## Contributions
Feel free to modify any sections as needed. 
