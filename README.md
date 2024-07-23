# Todo App Frontend

## Introduction

Welcome to the **Todo App**! This application is designed to help you manage your daily tasks efficiently. Built with React and Ant Design, it provides a simple and intuitive interface for adding, viewing, and deleting tasks.

### Purpose

The primary purpose of this Todo App is to offer a minimal yet functional setup for managing tasks. It leverages modern web development tools and practices, including React for building the user interface, Vite for fast development and build processes, and TypeScript for type safety.

## General Requirements

- It must be able to perform read, create, and update operations.
- The code is published in a public git repository where anybody can clone the solution.
- A `README.md` file is written with clear instructions on how to run the solution. In the case of the frontend project, provide screenshots.
- Build and serve commands must run on all operating systems (Windows, macOS, and Linux).
- Production-ready software, meaning readability and observability.
- Design the structure, architecture, and layers to grow the codebase and become a large system with more functionality.
- Correct error communication and error handling.
- Testing using Jest (frontend & backend).
- Omit any user authentication; the TODO list will be visible to any user.

## Frontend Requirements

- A frontend developed in React written in TypeScript in strict mode, using hooks that render the list of duties retrieved from the backend and allow the user to create new ones and/or modify existing ones.
- Must include form validations.
- The frontend project must be independent of the backend project.
- Do not use server-side implementation in the frontend, only client-side implementation; consequently, avoid solutions like Next.js or similar.
- Avoid any state management solution like Redux, the React’s hook `useReducer` or similar.


### Features

- **Add Tasks**: Easily add new tasks using the input field and the "Add Todo" button. Each task is assigned a unique ID based on the current timestamp.
- **View Tasks**: All added tasks are displayed in a list format, making it easy to see what needs to be done at a glance.
- **Delete Tasks**: Remove tasks that are no longer needed by clicking the "Delete" button next to each task.
- **Form Handling**: Validation on Input
- **Responsive Design**: The app is styled using Ant Design components, ensuring a responsive and visually appealing interface.

This Todo App serves as a great starting point for anyone looking to build a task management application or learn more about integrating React with modern development tools.

## Table of Contents

- [Installation](#installation)
- [Scripts](#scripts)
- [Linting and Formatting](#linting-and-formatting)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [License](#license)

## Installation

To install the dependencies, run:

```bash
npm install
```

## Scripts

The following scripts are available in this project:

- **`dev`**: Starts the development server using Vite.
  ```sh
  npm run dev
  ```

- **`build`**: Compiles TypeScript files and builds the project using Vite.
  ```sh
  npm run build
  ```

- **`test`**: Runs the test suite using Jest.
  ```sh
  npm run test
  ```

- **`lint`**: Lints the project files using ESLint.
  ```sh
  npm run lint
  ```

- **`preview`**: Previews the production build using Vite.
  ```sh
  npm run preview
  ```

- **`prepare`**: Sets up Husky hooks.
  ```sh
  npm run prepare
  ```


## Linting and Formatting

This project uses ESLint and Prettier for linting and formatting. The configuration is set up to automatically fix and format code on commit using `lint-staged` and Husky.

## Dependencies

- **antd**: ^5.19.2
- **react**: ^18.2.0
- **react-dom**: ^18.2.0

## Dev Dependencies

- **@types/react**: ^18.2.43
- **@types/react-dom**: ^18.2.17
- **@typescript-eslint/eslint-plugin**: ^6.14.0
- **@typescript-eslint/parser**: ^6.14.0
- **@vitejs/plugin-react**: ^4.2.1
- **eslint**: ^8.55.0
- **eslint-config-prettier**: ^9.1.0
- **eslint-plugin-react-hooks**: ^4.6.0
- **eslint-plugin-react-refresh**: ^0.4.5
- **husky**: ^9.0.10
- **lint-staged**: ^15.2.1
- **prettier**: 3.1.1
- **typescript**: ^5.5.3
- **vite**: ^5.0.8

## License

This project is licensed under the ISC License.
```
