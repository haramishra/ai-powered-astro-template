# Project Guides: A Comprehensive Overview

This document serves as a comprehensive guide to understanding, setting up, configuring, and customizing this Astro project. It provides detailed explanations and insights into how different parts of the project work together.

## 1. Setup Astro

To begin working with this Astro project, you'll need to set up your development environment. Follow these steps to ensure all dependencies are correctly installed and your workspace is optimized for development.

- **Install Dependencies**: Execute `pnpm install` in your terminal. This command reads the `package.json` file and installs all the necessary project dependencies, including Astro, Tailwind CSS, and other utilities.

```sh
 pnpm install
```

- **Prepare Project**: After installing dependencies, run `pnpm prepare`. This script typically handles post-installation tasks, such as generating necessary files or setting up pre-commit hooks, ensuring your project is ready for development.

```sh
 pnpm run prepare
```

- **VS Code Extensions**:
  - **Auto-Installation**: The recommended extensions are configured in the `.vscode` directory. VS Code should prompt you to install them automatically when you open the project.
  - **Manual Installation**: If auto-installation doesn't occur, you can manually search for and install these extensions from the VS Code Marketplace:
    - **Prettier**: For consistent code formatting across the project.
    - **Roo Code**: An AI-powered coding assistant that integrates with the project's AI agent.
    - **Astro Plugin**: Provides language support for Astro files (`.astro`), including syntax highlighting and IntelliSense.

- **Run Locally**:

```sh
 pnpm run dev
```

## 2. Site Configuration: Managing Your Project's Global Settings

The `src/config` folder is the central hub for all global site configurations. This structured approach ensures that all important settings are easily accessible and manageable in one place.

- **Location**: All configuration files, such as `site.ts`, `nav-menu.ts`, and `footer-menu.ts`, are located within the [`src/config`](src/config) directory.
- **Purpose**: These files define various aspects of your website, including:
  - **Site Metadata**: Title, description, author information, and other SEO-related settings.
  - **Navigation Menus**: Structure and links for your main navigation and footer menus.
  - **Global Constants**: Any other constants or settings that are used across the application.
- **How it Works**: By centralizing these configurations, you can easily update global settings without having to search through multiple files, promoting consistency and maintainability.

## 3. Styles Customization

This project leverages [Shadcn UI](https://ui.shadcn.com/) for its robust component library and [Tailwind CSS](https://tailwindcss.com/) for efficient utility-first styling. Understanding how to customize these will allow you to control the project's visual identity.

- **Color Customization with CSS Variables**:
  - **Mechanism**: Shadcn UI components and the overall theme utilize CSS variables for defining colors. This allows for easy and consistent color changes across the entire application.
  - **Location**: To update the primary colors, background colors, and other theme-related variables, modify the definitions within the [`src/styles/global.css`](src/styles/global.css) file. Look for `:root` or specific theme selectors where these variables are declared.
  - **Benefit**: Changing a CSS variable here will automatically update all instances where that variable is used, providing a powerful way to manage your color palette.
- **Tailwind Class Overrides**:
  - **Approach**: Tailwind CSS encourages a utility-first approach, where styles are applied directly in your markup using utility classes.
  - **Customization**: If you need to override default Tailwind classes or add custom utility classes, you can extend Tailwind's configuration. This typically involves modifying your `tailwind.config.mjs` file to add custom themes, plugins, or extend existing utilities.
  - **Best Practice**: For component-specific styling, prefer using existing Tailwind classes or creating new components that encapsulate specific styles, rather than directly modifying core Tailwind files.

## 4. AI Agent (Roo Code)

This project integrates with Roo Code, an AI-powered coding assistant designed to streamline your development workflow.

- **Current Agent**: The primary AI agent used in this project is Roo Code. It provides intelligent suggestions, code generation, and refactoring capabilities.
- **Roo Modes for Agent Fine-tuning**:
  - **Location**: Roo Code's operational modes and their underlying prompts are stored in the `.roomodes` directory.
  - **Customization**: You can fine-tune the agent's behavior, responses, and specific functionalities by editing the files within this directory. This allows you to tailor the AI agent to your project's specific needs and coding conventions, making it an even more powerful tool for development.
  - **How it Works**: Each file in `.roomodes` typically defines a "mode" or a specific set of instructions and prompts that guide the AI agent's responses in different contexts. By modifying these, you can refine the agent's understanding and output.
