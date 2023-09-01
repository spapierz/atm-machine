# ATM Application

This repository contains a basic ATM (Automated Teller Machine) implementation built using TypeScript and React. The application provides features such as PIN authentication, account balance querying, cash withdrawal simulation, cash deposit simulation, and daily withdrawal limits.

## Problem Description

The aim of this project is to create a simple ATM application showcasing the following functionalities:

- Entering a PIN to identify a unique customer.
- Querying and displaying the current account balance.
- Simulating the withdrawal of cash.
- Simulating a cash deposit.
- Enforcing a daily withdrawal limit for customers.

## Project Structure

The project is structured as follows:

- `src/`: Main source code directory.
  - `components/`: Reusable UI components.
  - `context/`: Holds related context providers for global state management.
  - `data/`: Holds mock data for user accounts
  - `interfaces/`: TypeScript interfaces used throughout the app.
  - `styles/`: Holds background style.
  - `utils/`: Holds functions that can be used throughout the app.
  - `views/`: Different application views or pages.
  - `App.tsx`: Entry point handling routing.
  - `index.tsx`: Initializes the React app and renders it in the DOM.

## Getting Started

1. Clone this repository to your local machine.

2. Install project dependencies using Yarn:

   ```sh
   yarn install

## Start the Application

    yarn start


## Open browser and Navigate to:
    http://localhost:3000

## Usage

Upon accessing the application, you'll be prompted to enter a PIN to authenticate as a customer. After successful authentication, you can view your account balance, perform withdrawals, and make deposits. The application enforces a daily withdrawal limit to ensure financial safety.

## Technologies Used

- TypeScript
- React
- React Router
- React Testing Library
- Yarn

## Credits

**Author: Sarah Papierz**

This project was created for educational and interview purposes and is not intended for production use.
