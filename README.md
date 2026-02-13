# Product Dashboard 🛍️

Hey there! This is a modern e-commerce product dashboard built with Angular 16 and NgRx. Think of it as a showcase of how to build a real-world Angular app with proper state management and a headless CMS.

## What's This About?

I built this as a technical assessment to demonstrate clean Angular architecture. It's a product browsing app where you can:

- Browse products fetched from Contentful CMS
- View detailed product information
- Add products to your favorites (they're saved even if you close the browser!)
- Filter and search through products
- Enjoy a smooth, responsive UI

## Tech Stack

Here's what powers this app:

- **Angular 16** - Using NgModules (not standalone components)
- **NgRx** - For predictable state management
- **Contentful** - Headless CMS for content
- **TypeScript** - Because types are life
- **SCSS** - For styling
- **RxJS** - Reactive programming magic

## Quick Start

Want to run this locally? Here's how:

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Contentful

You'll need a Contentful account (it's free!). Once you have one:

1. Create a space
2. Set up a "Product" content type with these fields:
   - title (Text)
   - description (Long text)
   - price (Number)
   - image (Media)
   - category (Text)
   - featured (Boolean)

3. Add some sample products

4. Get your Space ID and Access Token from Settings → API keys

5. Update `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  contentful: {
    spaceId: 'YOUR_SPACE_ID',
    accessToken: 'YOUR_ACCESS_TOKEN'
  }
};
```

### 3. Run the App

```bash
npm start
```

Then open http://localhost:4200 in your browser. That's it!

## Project Structure

I organized the code to be clean and scalable:

```
src/app/
├── core/              # Singleton services and models
│   ├── guards/        # Route guards
│   ├── models/        # TypeScript interfaces
│   └── services/      # Contentful service, Toast service
├── features/          # Feature modules (lazy-loaded)
│   ├── home/          # Home page with featured products
│   ├── products/      # Product list and detail pages
│   └── favorites/     # Favorites management
└── shared/            # Reusable components
    └── components/    # Button, Card, Loader, etc.
```

## Key Features

### NgRx State Management

Everything goes through NgRx - no API calls in components! Here's the flow:

1. Component dispatches an action
2. Effect catches it and calls the API
3. Effect dispatches success/failure action
4. Reducer updates the store
5. Component gets updated data via selectors

### Smart Caching

Products are fetched once and cached in the store. Navigate around all you want - no unnecessary API calls!

### Favorites with Persistence

Add products to favorites and they'll be there when you come back. I'm using localStorage with NgRx effects to handle the persistence automatically.

### Route Guards

The app has guards to:
- Check if Contentful is configured before loading pages
- Verify products exist before showing detail pages
- Redirect gracefully if something's wrong

### Responsive Design

Works great on desktop, tablet, and mobile. The UI adapts smoothly to different screen sizes.

## What I Learned

Building this taught me a lot about:

- Structuring large Angular apps
- NgRx best practices (actions, reducers, effects, selectors)
- Working with headless CMS
- Creating reusable component libraries
- Implementing proper error handling
- Writing clean, maintainable code

## Development Commands

```bash
# Start dev server
npm start

# Build for production
npm run build

# Run tests
npm test

# Generate a new component
ng generate component component-name
```

## Browser Support

Works on all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- This uses NgModules, not standalone components (as per requirements)
- All state management is done through NgRx
- No API calls happen directly in components
- The app follows Angular style guide best practices
- OnPush change detection is used for better performance

## What's Next?

If I had more time, I'd add:
- Unit tests for components and services
- E2E tests with Cypress
- More advanced filtering options
- Product comparison feature
- Shopping cart functionality

## Questions?

Feel free to explore the code! The architecture is straightforward and well-commented. If you're reviewing this for an assessment, check out `SETUP_GUIDE.md` for detailed Contentful setup instructions.

---

Built with ❤️ using Angular and NgRx
