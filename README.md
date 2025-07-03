# Tkstore

tester for app for mobile game top-up

## Key Features & Benefits

*   Authentication (Likely via AuthForm component)
*   Game Card display (using GameCard component)
*   Navigation (Navbar component)
*   UI components using Radix UI
*   Mobile responsiveness (using `use-mobile` hook)
*   Toast notifications (using `use-toast` hook)
*   User profile functionality (Profile page)

## Prerequisites & Dependencies

Before you begin, ensure you have the following installed:

*   **Node.js:**  Version 18 or higher recommended.
*   **npm** or **bun**: Package managers for installing dependencies.
*   **Vite**: Development build tool.
*   **Supabase CLI** (if using local Supabase): For managing local Supabase instance.

Dependencies (based on `package.json`):

*   "@hookform/resolvers": "^3.9.0"
*   "@radix-ui/react-accordion": "^1.2.0"
*   "@radix-ui/react-alert-dialog": "^1.1.1"
*   "@radix-ui/react-aspect-ratio": "^1.1.0"
*   "@radix-ui/react-avatar": "^1.1.0"
*   ... (rest of the dependencies from `package.json` would be listed here)
*   "zod": "^3.22.4"

## Installation & Setup Instructions

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd Tkstore
    ```

2.  **Install dependencies:**

    Using npm:

    ```bash
    npm install
    ```

    Using bun:

    ```bash
    bun install
    ```

3.  **Set up environment variables:**

    *   Create a `.env` file (if one doesn't exist already) in the root directory.
    *   Add necessary environment variables.  Specifically you'll need supabase url and anon key to access database. These are likely necessary for authentication and data fetching.

        ```
        VITE_SUPABASE_URL=<your_supabase_url>
        VITE_SUPABASE_ANON_KEY=<your_supabase_anon_key>

        ```

4.  **Run the development server:**

    Using npm:

    ```bash
    npm run dev
    ```

    Using bun:

    ```bash
    bun run dev
    ```

    This will start the development server, usually at `http://localhost:5173`.

5. **Supabase Setup (If applicable):**

* The project uses Supabase for its backend. If you're running a local Supabase instance, make sure it's configured correctly.
* Review the `supabase/config.toml` file for configuration settings.
* Refer to the Supabase documentation for setting up and running a local instance.

## Usage Examples & API Documentation

Detailed API documentation is not available. Here are some snippets of common functionalities:

*   **Authentication:**

    The `AuthForm.tsx` component likely handles user authentication (login, signup).  The `useAuth.tsx` hook probably provides the authentication logic.
    ```typescript
    // Example usage (hypothetical)
    import { useAuth } from './src/hooks/useAuth';

    function MyComponent() {
      const { user, login, logout } = useAuth();

      if (user) {
        return (
          <div>
            <p>Welcome, {user.email}!</p>
            <button onClick={logout}>Logout</button>
          </div>
        );
      } else {
        return <button onClick={() => login('email', 'password')}>Login</button>;
      }
    }
    ```

*   **Fetching Game Data:**

    The `GameCard.tsx` component likely displays game information.  Data fetching details are not shown but likely occur in component or in `Index.tsx`
    ```typescript
    // Example usage
    import GameCard from './src/components/GameCard';

    function MyComponent() {
      const gameData = {
        name: "Mobile Legends",
        imageUrl: "/images/mobile-legends.jpg",
        description: "Top Up Mobile Legends Diamonds",
        price: "Various prices"
      }
      return <GameCard {...gameData} />;
    }

    ```

## Configuration Options

*   **Tailwind CSS:**  Styling is managed using Tailwind CSS.  Configuration is in `tailwind.config.ts`.  Customize the theme, colors, and other styling options as needed.
*   **Vite:** The build process is configured in `vite.config.ts`.  Modify plugins, build options, or server settings.
*   **Supabase:**  Configure Supabase connection details (URL, API key) via environment variables. Also, use the Supabase CLI to manage your database schema and data.
*   **eslint:** Rules and configurations defined in `eslint.config.js`.
*   **tsconfig.json**: TypeScript compiler settings.

## Contributing Guidelines

We welcome contributions to Tkstore! To contribute:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and test thoroughly.
4.  Ensure that your code adheres to the project's coding standards (linting with ESLint `npm run lint` recommended).
5.  Submit a pull request.

## License Information

License not specified. All rights reserved by the owner.

## Acknowledgments

*   This project utilizes several open-source libraries and frameworks, including:
    *   Next.js
    *   React
    *   Tailwind CSS
    *   Radix UI
    *   Supabase
    *   Vite
*   Thanks to the developers and maintainers of these tools for their contributions.
