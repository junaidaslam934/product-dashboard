# Product Dashboard - Setup Guide

## Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)
- Contentful account (free tier)

---

## Step 1: Configure Contentful Credentials

1. Log in to your Contentful account at https://app.contentful.com/
2. Go to **Settings → API keys**
3. Copy your **Space ID** and **Content Delivery API - access token**
4. Open `src/environments/environment.ts`
5. Replace the placeholders:

```typescript
export const environment = {
  production: false,
  contentful: {
    spaceId: 'YOUR_ACTUAL_SPACE_ID',
    accessToken: 'YOUR_ACTUAL_ACCESS_TOKEN'
  }
};
```

6. Do the same for `src/environments/environment.prod.ts`

---

## Step 2: Install Dependencies

```bash
npm install
```

---

## Step 3: Run the Application

```bash
npm start
```

or

```bash
ng serve
```

The application will be available at: **http://localhost:4200**

---

## What You Should See

### Home Page
- Hero section with title, description, and background image from Contentful
- Featured products grid (products marked as featured in Contentful)
- Loading spinner while fetching data
- Error message with retry button if something goes wrong

---

## Troubleshooting

### Issue: "No hero section found" error
**Solution**: Make sure you have created at least one "Hero Section" entry in Contentful and published it.

### Issue: No products showing
**Solution**: 
1. Check that you have created "Product" entries in Contentful
2. Make sure at least some products have `featured: true`
3. Verify all products are published (not just saved as drafts)

### Issue: Images not loading
**Solution**: Make sure you uploaded images to the image fields in Contentful and they are published.

### Issue: API errors
**Solution**: 
1. Verify your Space ID and Access Token are correct
2. Make sure you're using the **Content Delivery API** token (not Content Management API)
3. Check that your content models are named exactly:
   - `product` (lowercase)
   - `heroSection` (camelCase)

---

## Content Model Field Names

Make sure your Contentful content models use these exact field IDs:

### Product Model
- `title` (Text)
- `description` (Text - Long)
- `price` (Number - Decimal)
- `category` (Text)
- `image` (Media)
- `featured` (Boolean)

### Hero Section Model
- `title` (Text)
- `description` (Text - Long)
- `image` (Media)
- `ctaText` (Text - optional)
- `ctaLink` (Text - optional)

---

## Next Steps

Once the home page is working:
1. Implement Product Listing Page
2. Implement Product Detail Page
3. Implement Favorites/Cart functionality
4. Add filtering and pagination

---

## Development Tools

### NgRx DevTools
Install the Redux DevTools browser extension to inspect the NgRx store:
- Chrome: https://chrome.google.com/webstore (search "Redux DevTools")
- Firefox: https://addons.mozilla.org/firefox (search "Redux DevTools")

### Useful Commands
```bash
# Run development server
ng serve

# Build for production
ng build --configuration production

# Run tests
ng test

# Generate new component
ng generate component component-name
```
