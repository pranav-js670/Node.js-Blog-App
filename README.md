# Node.js-Blog-App
A dynamic blog application built using Node.js, Express, MongoDB, and EJS. This project demonstrates the ability to create, view, and delete blog posts with server-side rendering.

## Features

- **Create Blogs:** Users can create new blog posts with a title, snippet, and body.
- **View Blogs:** The homepage lists all blog posts, displaying the title and snippet. Users can click on any blog to view the full content.
- **Delete Blogs:** Users can delete a blog post directly from the blog details page.

## Technologies Used

- **Node.js:** Server-side JavaScript runtime.
- **Express.js:** Web application framework for Node.js.
- **MongoDB:** NoSQL database to store blog data.
- **Mongoose:** Object Data Modeling (ODM) library for MongoDB and Node.js.
- **EJS:** Templating engine for generating HTML markup with plain JavaScript.
- **Nodemon:** Package used for creating a live reload server.
- **Morgan:** HTTP request logger middleware for Node.js.
- **CSS:** Styling for the application.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB instance running.

### Installation

1. Clone the repository:
   
   ```bash
   https://github.com/pranav-js670/Node.js-Blog-App.git
   ```
   
3. Navigate to the project directory
4. Install dependencies
5. Set up your MongoDB connection
6. Start the server
7. Visit the application in your browser at http://localhost:3000

## Project Structure

- `app.js`: Main application file, sets up the server, middleware, and routes.
- `views/`: Contains all EJS templates for rendering HTML.
  - `partials/`: Contains reusable partials like the header, footer, and navigation.
  - `index.ejs`: Template for the homepage.
  - `about.ejs`: Template for the About page.
  - `create.ejs`: Template for creating a new blog post.
  - `details.ejs`: Template for displaying blog details.
- `public/`: Contains static files like stylesheets and images.

## Future Enhancements

1. Edit Blogs: Add functionality to update existing blog posts.
2. User Authentication: Implement user authentication for blog management.

## License

This project is licensed under the MIT License.

