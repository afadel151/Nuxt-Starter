# 🚀 Nuxt 3 Starter

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/afadel151/Nuxt-Starter/blob/main/LICENSE) [![Nuxt Version](https://img.shields.io/badge/Nuxt-3.x-00DC82.svg)](https://nuxt.com/) [![Node.js Version](https://img.shields.io/badge/Node.js-%3E%3D18.0.0-blue.svg)](https://nodejs.org/en/) [![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/afadel151/Nuxt-Starter/ci.yml?branch=main)](https://github.com/afadel151/Nuxt-Starter/actions)

**Nuxt 3 Starter** is a production-ready boilerplate project designed to kickstart development with Nuxt 3. It comes pre-configured with essential tools and libraries to build modern web applications quickly.

## ✨ Features

### Core Technologies
* **⚡️ [Nuxt 3](https://nuxt.com/)**: The latest version of the intuitive Vue framework
* **🎨 [Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework
* **🍍 [Pinia](https://pinia.vuejs.org/)**: Vue.js state management
* **🧩 [Shadcn UI](https://www.shadcn-vue.com/)**: Beautiful, accessible components
* **🔧 [VueUse](https://vueuse.org/)**: Essential Vue Composition Utilities
* **⚙️ TypeScript**: Strong typing for better development experience
* **🗄️ [Prisma](https://www.prisma.io/)**: Type-safe database ORM
* **🔐 [JWT](https://jwt.io/)**: Secure authentication

### Built-in Features
* **🎨 Theme System**: Light/dark mode with system preference detection
* **🔐 Authentication**: Complete auth system with:
  - User registration and login
  - JWT-based session management
  - Protected routes
  - SQLite database integration
* **📡 API Layer**: Type-safe API client with error handling
* **🚨 Error Handling**: Custom error pages and error boundaries
* **📱 Responsive Design**: Mobile-first approach with Tailwind CSS
* **📦 Module Integration**: Pre-configured with essential Nuxt modules

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18.0.0
- Your preferred package manager (bun, npm, yarn, or pnpm)
- SQLite (for local development)

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/afadel151/Nuxt-Starter.git
    cd Nuxt-Starter
    ```
    
2. **Install dependencies:**
    ```bash
    # Using bun (recommended)
    bun i
    
    # Using yarn
    yarn
    
    # Using npm
    npm i
    
    # Using pnpm
    pnpm install
    ```

3. **Set up the database:**
    ```bash
    # Create and apply migrations
    bunx prisma migrate dev

    # Seed the database with test data
    bun run prisma:seed
    ```

4. **Configure environment variables:**
    Create a `.env` file with:
    ```env
    JWT_SECRET=your-secure-secret-key
    ```

### Development

Start the development server:
```bash
# Using bun (recommended)
bun dev

# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
```

### Production

Build for production:
```bash
# Using yarn (recommended)
yarn build

# Using npm
npm run build

# Using pnpm
pnpm build
```

Preview production build:
```bash
# Using bun (recommended)
bun preview

# Using npm
npm run preview

# Using yarn
yarn preview

# Using pnpm
pnpm preview
```

## 📚 Documentation

### Project Structure
```
├── assets/         # Static assets
├── components/     # Vue components
├── composables/    # Vue composables
├── layouts/        # Layout components
├── pages/          # Application pages
├── public/         # Public static files
├── server/         # Server-side code
├── prisma/         # Database schema and migrations
├── types/          # TypeScript types
└── utils/          # Utility functions
```

### Key Files
- `nuxt.config.ts`: Nuxt configuration
- `tailwind.config.ts`: Tailwind CSS configuration
- `app.config.ts`: Application configuration
- `components.json`: Shadcn UI configuration
- `prisma/schema.prisma`: Database schema

### Authentication
The starter includes a complete authentication system:
- Login at `/auth/login`
- Signup at `/auth/signup`
- Protected routes with middleware
- JWT-based session management
- SQLite database for user storage

Test credentials:
- Email: test@example.com
- Password: password123

## 🤝 Contributing

We welcome contributions! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- [Fadel Akram](https://github.com/afadel151) (contact.akramfadel@gmail.com)
- [Kolja Nolte](https://github.com/thaikolja) (kolja.nolte@gmail.com)

## 🙏 Acknowledgments

This project builds upon these amazing open-source projects:
- [Nuxt](https://nuxt.com/)
- [Vue.js](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Pinia](https://pinia.vuejs.org/)
- [Shadcn UI](https://www.shadcn-vue.com/)
- [VueUse](https://vueuse.org/)
- [Prisma](https://www.prisma.io/)
