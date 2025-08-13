# ?? Monorepo Web Development README

## ?? Table of Contents
1. [Overview](#-overview)  
2. [Monorepo Structure](#-monorepo-structure)  
3. [Tech Stack](#-tech-stack)  
4. [Getting Started](#-getting-started)  
5. [Development Workflow](#-development-workflow)  
6. [Project Conventions](#-project-conventions)  
7. [Scripts & Commands](#-scripts--commands)  
8. [Environments & Configuration](#-environments--configuration)  
9. [Testing](#-testing)  
10. [Linting & Formatting](#-linting--formatting)  
11. [Versioning & Releases](#-versioning--releases)  
12. [CI/CD](#-cicd)  
13. [Contributing](#-contributing)  
14. [License](#-license)  

---

## ?? Overview
This repository is a **monorepo** for multiple web applications, shared libraries, and utilities.  
It is designed to provide a **single source of truth** for all related projects while ensuring **consistent tooling, dependencies, and workflows**.

Key goals:
- **Code Reusability**: Shared UI components, hooks, and utility packages.
- **Consistent Development**: Unified linting, testing, and build scripts.
- **Faster Onboarding**: One repo to clone, one set of dependencies.
- **Scalable Architecture**: Easily add/remove projects without breaking the ecosystem.

---

## ?? Monorepo Structure
```plaintext
.
CDD apps/                   # All standalone applications
3   CDD web/                # Main web app (e.g., Next.js)
3   CDD admin/              # Admin dashboard
3   @DD marketing/          # Landing pages / marketing site
3
CDD packages/               # Shared packages (internal libraries)
3   CDD ui/                 # Design system / UI components
3   CDD utils/              # Utility functions
3   CDD hooks/              # Shared React hooks
3   @DD config/             # ESLint, Prettier, TS configs, etc.
3
CDD scripts/                # Automation scripts
3   CDD setup.js
3   CDD deploy.js
3   @DD ci-checks.js
3
CDD docs/                   # Documentation
3
CDD .github/                # GitHub Actions workflows
CDD .env.example            # Example environment variables
CDD package.json            # Root dependencies and scripts
CDD tsconfig.json           # Root TypeScript configuration
@DD README.md               # This file

