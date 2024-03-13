 # Application Documentation with Frontegg Integration

This document provides a comprehensive overview of the development and integration process of a React application with Frontegg's login box and admin portal, including the implementation of post-authentication redirection.

## How to Run Locally

To get the application up and running on your local machine, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to the project's root directory where the `package.json` file is located.
3. Run the following command to install all the necessary dependencies: `npm install`
4. Once the installation is complete, start the application by running: `npm start`

This will initiate the React application and typically open your default web browser to display the app. If it doesn't automatically open, you can manually visit `http://localhost:3000` (or the port number indicated in your terminal) in your web browser to view the application.

## Overview

The application is a React project that integrates robust authentication and administration functionalities provided by Frontegg, enabling authentication with Sign-in, Signup, SSO (Single Sign-On), and an administrative portal for management. The development process adheres to modern web development practices, including the use of React Hooks and React Router for routing and application state management.

## Utilized Technologies

- **React**: A JavaScript library for building user interfaces.
- **Frontegg React SDK**: Frontegg's SDK to facilitate the integration of authentication and administration.
- **React Router**: A library for routing in React applications.

## Project Structure

The project follows a standard modular structure of React applications, divided mainly among components, pages, and routing configurations.

my-frontegg-app/<br>├── node_modules/<br>├── public/<br>├── src/<br>│ ├── App.js<br>│ ├── index.js<br>│ └── App.css<br>├── package.json<br>└── README.md

## Implementation Step by Step

### Frontegg Login Box Integration

**Initial Setup**: Installation of the Frontegg SDK and configuration of the `FronteggProvider` at the application's entry point (`index.js`), specifying the base URL and client ID provided by Frontegg.

**Login Box Addition**: Implementation of a login button that, when clicked, invokes the `loginWithRedirect()` method from Frontegg's `useAuth` hook, displaying the login box.

### Frontegg Admin Portal Integration

**Admin Portal Import**: Use of Frontegg's `AdminPortal` component to add the admin portal to the application.

**Portal Link Creation**: Implementation of a "Settings" button that, when clicked, displays the admin portal through the `AdminPortal.show()` method.

### Post-Authentication Redirection Implementation

Using React Router, the application automatically redirects the user from the `/oauth/callback` route to the base route `/` after authentication is completed, using the `useHistory` (React Router v5) or `useNavigate` (React Router v6) hook within the `OAuthCallbackPage` component.

## Final Considerations

The integration with Frontegg provided the application with a robust and easy-to-implement authentication and administration solution, allowing focus on the development of the application's specific functionalities. The above documentation details the development and integration process, serving as a guide for future maintenance and improvements.
