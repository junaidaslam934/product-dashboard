# Product Dashboard - Angular 16 with NgRx & Contentful

A content-driven product dashboard built with Angular 16, NgRx for state management, and Contentful as the headless CMS.

## 🚀 Features

- **Home Page** with hero section and featured products from Contentful
- **NgRx State Management** with proper architecture (Actions, Reducers, Selectors, Effects)
- **Contentful CMS Integration** for dynamic content management
- **Reusable Shared Components** (Button, Card, Loader, Error Message)
- **OnPush Change Detection** for optimal performance
- **Lazy Loading** for feature modules
- **Loading & Error States** with retry functionality
- **Responsive Design** with mobile-first approach

## 📋 Tech Stack

- Angular 16 (NgModules)
- NgRx (Store + Effects + DevTools)
- Contentful SDK
- TypeScript
- SCSS
- RxJS

## 🛠️ Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Contentful
1. Create a free account at [Contentful](https://www.contentful.com/sign-up/)
2. Create content models (see SETUP_GUIDE.md for details)
3. Add sample content
4. Get your API credentials from Settings → API keys
5. Update `src/environments/environment.ts` with your credentials:

```typescript
export const environment = {
  production: false,
  contentful: {
    spaceId: 'YOUR_SPACE_ID',
    accessToken: 'YOUR_ACCESS_TOKEN'
  }
};
```

### 3. Run the Application
```bash
npm start
```

Navigate to `http://localhost:4200`

## 📁 Project Structure

```
src/app/
├── core/
│   ├── models/          # TypeScript interfaces
│   └── services/        # Contentful service
├── shared/
│   ├── components/      # Reusable UI components
│   └── shared.module.ts
├── features/
│   └── home/
│       ├── components/  # Home page component
│       ├── store/       # NgRx (actions, reducers, selectors, effects)
│       └── home.module.ts
├── app-routing.module.ts
└── app.module.ts
```

## 🎯 Implementation Status

### ✅ Completed
- [x] Project setup with Angular 16
- [x] NgRx store configuration
- [x] Contentful service integration
- [x] Shared components library
- [x] Home page with hero section
- [x] Featured products display
- [x] Loading and error states
- [x] Lazy loading for home module

### 🚧 To Be Implemented
- [ ] Product Listing Page
- [ ] Product Detail Page
- [ ] Favorites/Cart functionality
- [ ] Filtering and pagination
- [ ] Unit tests

## 📖 Documentation

- [SETUP_GUIDE.md](./SETUP_GUIDE.md) - Detailed setup instructions
- [IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md) - Development roadmap
- [ASSESSMENT_REQUIREMENTS.md](../ASSESSMENT_REQUIREMENTS.md) - Original requirements

## 🏗️ Architecture Highlights

### NgRx Pattern
- **No API calls in components** - All handled by Effects
- **Immutable state** - Using reducers
- **Selectors** for efficient data access
- **Actions** for clear intent

### Component Design
- **OnPush change detection** for performance
- **Smart/Container components** dispatch actions
- **Presentational components** use @Input/@Output
- **Shared components** for reusability

### Contentful Integration
- Dedicated service layer
- Response mapping to application models
- Error handling with user-friendly messages

## 🔧 Development Commands

```bash
# Development server
ng serve

# Build for production
ng build --configuration production

# Run tests
ng test

# Generate component
ng generate component component-name

# Generate service
ng generate service service-name
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Notes

- This project uses NgModules (not standalone components) as per requirements
- Content is fetched from Contentful on page load
- NgRx DevTools extension recommended for debugging

## 👤 Author

Built as part of Angular Developer Technical Assessment

## 📄 License

This project is for assessment purposes.
