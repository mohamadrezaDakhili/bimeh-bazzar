# BIMEH-BAZZAR

## Project Overview

BIMEH-BAZZAR is a web application built using Next.js, Zustand for state management, and Tailwind CSS for styling. It is structured to follow modern development best practices with a modular architecture.

## Technologies Used

- **Next.js** - React framework for server-side rendering and static site generation
- **TypeScript** - Enhancing JavaScript with static types
- **Zustand** - Lightweight state management
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - Processing CSS with plugins
- **ESLint** - Linting JavaScript and TypeScript code

## Project Structure

```
BIMEH-BAZZAR
│── .next/               # Build directory (generated)
│── app/                 # Main application logic
│── components/          # Reusable UI components
│── node_modules/        # Installed dependencies
│── public/              # Static assets
│── services/            # API and service calls
│── utils/               # Utility functions
│── zustand/             # Zustand state management
│── .env                 # Environment variables
│── .env.development     # Development environment variables
│── .env.production      # Production environment variables
│── .gitignore           # Files to be ignored by Git
│── eslint.config.mjs    # ESLint configuration
│── next-env.d.ts        # Next.js environment types
│── next.config.ts       # Next.js configuration file
│── package.json         # Project metadata and dependencies
│── package-lock.json    # Dependency lock file
│── postcss.config.mjs   # PostCSS configuration
│── README.md            # Project documentation
│── tailwind.config.ts   # Tailwind CSS configuration
│── tsconfig.json        # TypeScript configuration
```

## Installation & Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/mohamadrezaDakhili/bimeh-bazzar.git
   cd bimeh-bazzar
   ```

2. **Install dependencies:**

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   Copy `.env.development` or `.env.production` to `.env` and configure necessary variables.

4. **Run the development server:**

   ```sh
   npm run dev
   # or
   yarn dev
   ```

5. **Build for production:**

   ```sh
   npm run build && npm start
   ```

## Contributing

Feel free to fork this project and submit pull requests with improvements or bug fixes.

