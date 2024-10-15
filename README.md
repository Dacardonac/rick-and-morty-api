# Rick and Morty Character Viewer 🛸

This project is a web application that displays characters from the series "Rick and Morty" using the public Rick and Morty API. It allows users to navigate through different character pages and see detailed information about each one, the page is based on the same page
**[Rick and Morty API](https://rickandmortyapi.com/)**.

## Table of Contents 📄

- [Demo](#demo)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [Author](#author)

## Demo 🚀

You can view a live demo of this project **[here](https://rick-and-morty-api-two-snowy.vercel.app/)**.

## Features ✅

- Fetches and displays character data from the Rick and Morty API.
- Responsive card design using **Sass (SCSS)** and **CSS Grid/Flexbox**.
- Pagination functionality to browse through multiple pages of characters.
- Displays character name, species, and status (alive, dead, or unknown).
- Hover effects and smooth transitions on card interactions.
- Responsive design for mobile, tablet, and desktop views.

## Technologies 💻

- **HTML5**
- **CSS3 (SCSS)**: For modular and maintainable styles.
- **JavaScript (ES6+)**: Handles API calls and pagination logic.
- **Rick and Morty API**: The source of the character data.
- **Fetch API**: Used to retrieve data from the Rick and Morty API.
- **Vite**


## Setup 🔧

1. Clone the repository:
   
   ```bash
   git clone https://github.com/Dacardonac/rick-and-morty-api.git

2. Navigate to the project directory:

   ```bash
   cd rick-and-morty-api

3. Install dependencies (if applicable):

   ```bash
   npm install

4. Run the project locally:

   ```bash
   npm run dev

## Usage 👨‍💻

The project fetches data from the Rick and Morty API and displays it in a card format. Each card contains:

- Character Image
- Character Name
- Species
- Status (Alive, Dead, Unknown)
- Character Gender
- Location
  
The cards are responsive, so they adjust based on the screen size:

- Desktop: 3 cards per row.
- Tablet: 2 cards per row.
- Mobile: 1 card per row.

Pagination:

- The application supports pagination. At the bottom of the page, you can click on "Next" or "Previous" buttons to navigate through different pages of character data.

## Contributing 👥

Feel free to contribute to this project by opening issues or submitting pull requests. To contribute:

- Fork the repository.
- Create a new branch `(git checkout -b feature-branch)`.
- Make your changes and commit `(git commit -m 'Add a new feature')`.
- Push to the branch `(git push origin feature-branch)`.
- Open a pull request.

> [!IMPORTANT] 
> Make sure your commits follow the Conventional Commits specification to maintain consistency.

## Author 👨‍💻

**Daniel Alejandro Cano Cardona**

- [Linkedin](https://www.linkedin.com/in/daniel-alejandro-cano-cardona/)
- [Frontend Mentor](https://www.frontendmentor.io/profile/Dacardonac)
