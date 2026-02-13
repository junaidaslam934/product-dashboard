# How This App Works - Simple Explanation

## What Is This?

This is an online product catalog where you can:
- Browse products
- View product details
- Save your favorite products
- Filter and search products

All the product data comes from Contentful (a cloud-based content management system).

## How to Run It

### Step 1: Install Node.js
Make sure you have Node.js installed on your computer.

### Step 2: Install Dependencies
Open terminal in the project folder and run:
```bash
npm install
```

### Step 3: Set Up Contentful
1. Go to https://www.contentful.com and create a free account
2. Create a new space
3. Create a content type called "assesment" with these fields:
   - title (Text)
   - description (Long text)
   - price (Number)
   - image (Media - single file)
   - catogary (Text) - yes, it's spelled this way!
   - featured (Boolean)

4. Add some products with images and information

5. Get your credentials:
   - Go to Settings → API keys
   - Copy your Space ID
   - Copy your Content Delivery API access token

6. Open `src/environments/environment.ts` and paste your credentials:
```typescript
export const environment = {
  production: false,
  contentful: {
    spaceId: 'paste-your-space-id-here',
    accessToken: 'paste-your-access-token-here'
  }
};
```

### Step 4: Start the App
```bash
npm start
```

Open your browser and go to: http://localhost:4200

## How the App is Organized

```
src/app/
├── core/                    # Core functionality
│   ├── guards/             # Route protection
│   ├── models/             # Data structures
│   └── services/           # API communication
│
├── features/               # Main features
│   ├── home/              # Home page
│   ├── products/          # Product pages
│   └── favorites/         # Favorites page
│
└── shared/                # Reusable components
    └── components/        # Buttons, cards, etc.
```

## Understanding NgRx (State Management)

Think of NgRx like a central database for your app that lives in the browser's memory.

### The Flow:

1. **User clicks a button** → Component dispatches an Action
2. **Action** → Tells the app "something happened"
3. **Effect** → Hears the action and calls the API
4. **API returns data** → Effect dispatches a success action
5. **Reducer** → Updates the store with new data
6. **Selector** → Reads data from store
7. **Component** → Gets updated data and shows it

### Example: Loading Products

```
User opens products page
    ↓
Component: "Hey, I need products!"
    ↓
Action: loadProducts()
    ↓
Effect: "I'll get them from Contentful"
    ↓
Contentful API: "Here are the products"
    ↓
Effect: loadProductsSuccess({ products })
    ↓
Reducer: "Saving products to store"
    ↓
Store: { products: [...] }
    ↓
Component: "Got the products, showing them now"
```

## Key Concepts Explained Simply

### 1. Actions
Actions are like messages that describe what happened.
```typescript
// "User wants to load products"
loadProducts()

// "Products loaded successfully"
loadProductsSuccess({ products: [...] })
```

### 2. Reducers
Reducers update the store based on actions.
```typescript
// When loadProductsSuccess happens:
// Old store: { products: [] }
// New store: { products: [product1, product2, product3] }
```

### 3. Selectors
Selectors read data from the store.
```typescript
// "Give me all products"
selectAllProducts

// "Give me product with ID 123"
selectProductById('123')
```

### 4. Effects
Effects handle side effects like API calls.
```typescript
// When loadProducts action happens:
// 1. Call Contentful API
// 2. Get products
// 3. Dispatch loadProductsSuccess
```

## Features Explained

### Home Page
- Shows featured products from Contentful
- Has a nice hero section
- Links to product catalog

### Products Page
- Lists all products
- Search by name
- Filter by category
- Pagination (10 products per page)

### Product Detail Page
- Shows full product information
- Add/remove from favorites
- Back button to products list

### Favorites Page
- Shows all your favorite products
- Remove individual favorites
- Clear all favorites button
- Saves to browser storage (persists on refresh)

## Common Tasks

### Adding a New Product in Contentful
1. Go to your Contentful space
2. Click "Content"
3. Click "Add entry"
4. Select "assesment"
5. Fill in the fields
6. Upload an image
7. Click "Publish"
8. Refresh your app

### Changing Styles
All styles are in `.scss` files next to components.
Example: `home.component.scss` for home page styles.

### Adding a New Page
1. Create a new feature module
2. Add routing
3. Create components
4. Add NgRx store (actions, reducer, effects, selectors)

## Troubleshooting

### Products not showing?
- Check Contentful credentials in `environment.ts`
- Make sure content type is named "assesment"
- Check browser console for errors

### App won't start?
- Run `npm install` again
- Delete `node_modules` folder and run `npm install`
- Check if port 4200 is already in use

### Favorites not saving?
- Check browser console for errors
- Make sure localStorage is enabled in your browser

## Technologies Used

- **Angular 16** - Framework for building the app
- **NgRx** - State management (like Redux)
- **Contentful** - Content management system
- **TypeScript** - Programming language
- **SCSS** - Styling
- **RxJS** - Reactive programming

## Project Structure Details

### Core Folder
Contains services and models used throughout the app.

### Features Folder
Each feature (home, products, favorites) has its own folder with:
- Components (UI)
- Store (NgRx state management)
- Routing

### Shared Folder
Reusable components like buttons, cards, loaders that are used everywhere.

## Need Help?

Check these files:
- `README.md` - Quick overview
- `SETUP_GUIDE.md` - Detailed setup instructions
- This file - Understanding how it works

---

Made with Angular 16 and NgRx
