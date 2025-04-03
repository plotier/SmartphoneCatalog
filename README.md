# Smartphone Catalog

This project is a web application aimed at visualizing,
searching, and managing a catalog of mobile phones. It
allows users to view detailed information for each device
and efficiently manage a shopping cart.

## Features and Structure

The application contains three main views:

### 1. Phone List View

- **Phone Grid:** Displays the first 20 phones retrieved
  from the API in a grid format. Each card includes:
  - Image, name, brand, and base price of the phone.
- **Search Bar:** A real-time search bar that filters phones
  by name or brand using API filtering.
  - Includes an indicator showing the number of results
    found.
- **Navigation Bar:**
  - Includes a logo linking to the homepage.
  - Displays the number of items in the shopping cart (which
    persists in `localStorage`).
- **Phone Detail Link:** Clicking on a phone redirects the
  user to the phone detail view.

### 2. Phone Detail View

- Displays detailed information about the selected phone,
  including:
  - Name, brand, and a large image of the device (which
    changes dynamically based on the selected color).
  - Selectors for storage and color.
  - An "Add to Cart" button that only activates once the
    color and storage options are selected.
  - A "Similar Products" section at the bottom.
  
-  Price Handling 
The base price is taken from the `basePrice` parameter in
the API response. While it does not always correspond to the
lowest price available for the smartphones (due to
variations in storage or color options), it was used as the
base price as it seemed to be the expected behavior.

### 3. Cart View

- Displays the phones added to the cart with:
  - Image, name, selected specifications (storage/color),
    and individual price.
  - A button to remove individual items from the cart.
  - Total price of the purchase.
  - A "Continue Shopping" button that redirects to the main
    phone list view.

## Design

- The design is responsive and adapts to the layouts
  provided in the Figma designs.
- Fonts: The application uses
  `font-family: Helvetica, Arial, sans-serif`.

## Development and Production Modes

- **Development Mode:** Use `npm run dev` to run the app in
  development mode.
- **Production Mode:**
  - For production, assets are compiled and minified. You
    can build and serve the production build using:
    ```bash
    npm run build
    npm start
    ```
    
### Cache Hydration Warning

Occasionally, when using cache hydration with `useQuery`,
some Chrome extensions may trigger a warning. It is
recommended to run the app in **Incognito Mode** to avoid
this issue.

## Setup and Installation

1. Clone this repository.
2. Install dependencies:
   ```bash
   npm install
   ```

## Architecture

This project follows a component-based architecture with
custom hooks to manage logic across components. The
structure is organized as follows:

    ├── __tests__              # Unit and integration tests
    ├── api                    # API interaction logic
    ├── app                    # Main application pages and layouts
    ├── components             # Reusable components like Navbar, Cart, ProductCard, etc.
    ├── context                # React context for global state management
    ├── hooks                  # Custom hooks
    ├── public                 # Static assets like images and icons
    ├── utils                  # Utility functions like price calculation
    ├── package.json           # Project dependencies and scripts
    └── tsconfig.json          # TypeScript configuration

### Key Libraries and Technologies Used:

- **Next.js:** 15.2.3
- **React:** 19.0.0
- **TanStack React Query:** 5.69.0 (for caching)
- **CSS Modules:** For styling
- **LocalStorage:** For cart persistence

This project uses Server-Side Rendering (SSR) with Server
Components in Next.js to improve performance and optimize
page load times. Server Components allow for rendering parts
of the application on the server, delivering a faster and
more efficient user experience.

## Testing

- **Testing Framework:** Jest and React Testing Library.
- **Tests Implemented:** Currently, there are six tests
  covering basic component functionality and interactions.
  Additional tests can be added to improve coverage.

## Linting and Formatting

- Linting and formatting are set up for the project using
  [ESLint](https://eslint.org/) and
  [Prettier](https://prettier.io/).
You can check for linting issues running:
  ```bash
  npm run lint
  ```

## Performance

The app is optimized for performance. API requests are cached using React Query for 24 hours. It is also accessible.

## API Key

The app requires an API key to access the phone data. The
key is stored in a `.env` file and included in the API
requests via the header `x-api-key`.

## Contact

For questions or clarification, feel free to reach out via
email at [plotier15@gmail.com](mailto:plotier15@gmail.com).
