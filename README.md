# BEACHER

This repository contains a Single Page Application built with React and Redux, wich allows users to search and share there favorite beaches and there details.

- Search for beaches by location.
- View detailed information about each beach.
- Add new beaches to the database
- Delete beaches from the database

## Tecnologies used

- React single page application
- Routing done using React Router
- State management via Redux
- Axios: A promise-based HTTP client for making API requests
- Vite: A fast and lightweight development build tool
- TypeScript: A typed superset of JavaScript that compiles to plain JavaScript
- Styled Components: A library for styling React components using CSS-in-JS approach

### Architecture diagrams

Beacher/

|- src/

    |- components/
    |- hooks/
    |- mocks/
    |- pages/
    |- routers/
    |- store/
    |- styles/
    |- utils/
    |- main.tsx

## Setup

1. Clone the repository and install the dependencies
2. Start the frontend application locally
3. Open your browser and navigate to 'http://localhost:4000' to access the Beacher application

## Available commands

- "dev": Start the app locally in your development environmen
- "build": Builds the production-ready optimized bundle of the application
- "lint": Checks the codebase for any linting errors or warnings
- "preview": Run the preview
- "test": Runs the test suite to execute unit tests for the application

## Development flow

Here are the steps of the process you need to follow in order to integrate new code or a new feature into the project:

1. Transition the status of the card that describes the feature you will be working on in your issue tracker.
2. Create a local branch to get started using git: `git checkout -b <feature|bug>/<issue-tracker-number>-<short-description>`. For instance, this could be a branch name: feature/96-add-navigation-sidebar.

- The first part indicates whether it is new feature or bug, while the second part it is just the issue tracker card number followed by some short description.

3. Develop the new feature while doing atomic commits to your local branch using git commit.
4. Before creating the Pull Request, you need to make sure the tests pass.
5. Now you are ready to create a new Pull Request with your changes, but before, push your changes to origin using git push -u origin <your-branch-name>.
6. Your code should be reviewed, you can update the branch with new changes after you get some feedback.
7. After the Pull Request is approved, merge it using the UI on Github (you can also remove the branch directly from the same page, which is also convenient).
8. Finally, remember to transition your issue tracker card to Done.

## Linter

In order to lint the code, the project uses ESLint.

If you want to run the linter just type:

`npm run lint`

It's also convenient to integrate the linter warnings into your code editor, there are many plugins available for ESLint depending on your text editor used.

## Testing

The testing strategy for this project is based on the following two libraries:

- react-testing-library: these are some testing utilities that allow you to write tests that work with actual DOM nodes.
- Vitest: test runner. Vitest provides a compatible API that allows you to use it as a drop-in replacement in most projects. It also includes the most common features required when setting up your unit tests (mocking, snapshots, coverage).

The main principle behind the testing philosophy of this approach is:

"The more your tests resemble the way your software is used, the more confidence they can give you."

To run the tests for the Beacher application, use the following command:

`npm run test`

Tests cover the reducers, actions, and components to ensure the application behaves as expected.
