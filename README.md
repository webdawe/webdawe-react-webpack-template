# React Webpack Babel ESLint Prettier Husky Starter

This repository provides a basic setup for a React project with Webpack, Babel, ESLint, Prettier, and Husky. It's designed to be a quick starting point for new React applications.

## Features

* **React:** Latest version of React.
* **Webpack:** Bundles your application for production and development.
* **Babel:** Transpiles modern JavaScript (ES6+) and JSX.
* **ESLint:** Enforces code quality and consistency.
* **Prettier:** Formats your code for a consistent style.
* **lint-staged:** Runs linters and formatters only on staged files, improving performance and ensuring that only clean code is committed.
* **Husky:** Enables Git hooks to run scripts before commits and pushes.

## Prerequisites

* Node.js (>= 18)
* npm or yarn

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd <your-repository-name>
    ```

2.  **Install dependencies:**

    ```bash
    npm install # or yarn install
    ```

3.  **Start the development server:**

    ```bash
    npm run start # or yarn start
    ```

    This will start a development server at `http://localhost:8080`.

4.  **Build for production:**

    ```bash
    npm run build # or yarn build
    ```

    This will create a production-ready build in the `dist` folder.

5.  **Lint your code:**

    ```bash
    npm run lint # or yarn lint
    ```

6.  **Format your code:**

    ```bash
    npm run format # or yarn format
    ```

## Project Structure

```
├── build/             # Production build output
├── public/           # Static assets (index.html)
├── src/
│   ├── components/    # React components
│   ├── App.js         # Main application component
│   └── index.js       # Entry point
├── .eslintrc.json    # ESLint configuration
├── .prettierrc.json  # Prettier configuration
├── babel.config.js   # Babel configuration
├── package.json      # Project dependencies and scripts
├── README.md         # This file
└── webpack.config.js # Webpack configuration

```


## Configuration

* **Webpack:** The `webpack.config.js` file contains the Webpack configuration. You can modify it to customize the build process.
* **Babel:** The `babel.config.js` file configures Babel. You can add or modify presets and plugins as needed.
* **ESLint:** The `.eslintrc.json` file configures ESLint rules.
* **Prettier:** The `.prettierrc.json` file configures Prettier formatting rules.
* **Husky:** Husky is configured in the `package.json` file. The `pre-commit` hook, managed by Husky, ensures that `lint-staged` runs before every commit.