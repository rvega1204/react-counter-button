
# React Counter Buttons

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

This simple React application showcasing two types of counter buttons:

1. **Buttons with Shared State**: Multiple buttons share the same state and update the count together.
2. **Buttons with Independent State**: Each button has its own state and updates individually when clicked.

## Features

- **Shared State**: Buttons are connected to the same state, meaning they all reflect the same count when clicked.
- **Independent State**: Each button has its own independent counter, so clicking one does not affect the others.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TailwindCSS**: A utility-first CSS framework for creating responsive and customizable designs.

## Project Structure

- `ButtonSharedState.tsx`: A component that accepts a `count` and `onClick` function via props to display and update a shared count.
- `ButtonIndependentState.tsx`: A component that manages its own state independently and displays a count for that particular button.
- `Home.tsx`: The main component that renders both types of buttons and manages their state.

## Setup

To run this project locally, follow these steps:

1. Clone the repository:
   
   ```bash
   git clone [https://github.com/your-username/react-counter-buttons.git](https://github.com/rvega1204/react-counter-button)

2. Navigate into the project directory:

    ```bash
    cd react-counter-buttons
    Install dependencies:

    ```bash
    npm install
    Run the development server:

    ```bash
    npm run dev
    Open your browser and go to http://localhost:3000 to view the app.

## Styling
This project uses TailwindCSS for styling, which provides utility classes to build responsive and visually appealing components. You can customize the styling of buttons and other elements by editing the relevant classes in the component files.

## Contributing
If you'd like to contribute to this project, feel free to fork the repository, make your changes, and submit a pull request.

## License
This project is open source and available under the MIT License.
